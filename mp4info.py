import struct
import requests


class Mp4info:
    def __init__(self, file, cookies=None):
        self.file = file
        self.seek = 0
        self.duration = 0
        self.s = requests.session()
        self.timeout = 6
        self.s.headers = {
            'Connection': 'keep-alive',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, l'
                          'ike Gecko) Chrome/66.0.3359.139 Safari/537.36',
            'cookie': 'CASLOGC=%7B%22realName%22%3A%22%E8%92%8B%E4%BF%8A%E6%9D%B0%22%2C%22myuniRole%22%3A0%2C%22myinstRole'
                      '%22%3A0%2C%22userId%22%3A814330163%2C%22headPic%22%3A%22https%3A%2F%2Fimage.zhihuishu.com%2Fzhs%2'
                      'Fablecommons%2Fdemo%2F201804%2F4aee171746a7437bad86d0699197df9f_s3.jpg%22%2C%22uuid%22%3A%22Xk5lBk'
                      'Po%22%2C%22mycuRole%22%3A0%2C%22username%22%3A%220c7fa4b6e5174d95943f1922e0f17440%22%7D; exitReco'
                      'd_Xk5lBkPo=2; CASTGC=TGT-2130153-kapStLvDF13KmIzPEOegms51xAnZeNr0HGAobxwWqYnymv3O5B-passport.zhih'
                      'uishu.com; acw_tc=2f624a6316198474101114335e1fea6da5f09f58a23b56d4e170e426414c33; SESSION=YTY5ZmZ'
                      'hZGMtZTgxNi00NjcyLWI3ZjYtZjhjMzQ4ZWQ4MzE3; SERVERID=472b148b148a839eba1c5c1a8657e3a7|1619847410|1'
                      '619836247',
            'Referer': 'https://studyh5.zhihuishu.com/'
        }
        if cookies:
            self.s.cookies = cookies

    def _set_headers(self, seek, t):
        if t in ['moov', 'duration']:
            self.s.headers['Range'] = 'bytes={}-{}'.format(seek, seek + 7)

    def _send_request(self):
        try:
            data = self.s.get(url=self.file, stream=True, timeout=self.timeout).raw.read()
        except requests.Timeout:
            raise RuntimeError('连接超时:超过6秒(默认)服务器没有响应任何数据！')
        return data

    def _find_moov_request(self):
        self._set_headers(self.seek, t='moov')
        data = self._send_request()
        size = int(struct.unpack('>I', data[:4])[0])
        flag = data[-4:].decode('ascii')
        return size, flag

    def _find_duration_request(self):
        # 4+4是moov的大小和标识,跳过20个字符，直接读到time_scale，duration
        self._set_headers(seek=self.seek + 4 + 4 + 20, t='duration')
        data = self._send_request()
        time_scale = int(struct.unpack('>I', data[:4])[0])
        duration = int(struct.unpack('>I', data[-4:])[0])
        return time_scale, duration

    def get_duration(self):
        while True:
            size, flag = self._find_moov_request()
            if flag == 'moov':
                time_scale, duration = self._find_duration_request()
                self.duration = duration / time_scale
                return self.duration
            else:
                self.seek += size


if __name__ == '__main__':
    url = "https://wsvideo.zhihuishu.com/zhs/createcourse/course_second/202008/32ebee3c01ae40bd96273ab32267df1a_512.mp4"
    file = Mp4info(url, )
    a = file.get_duration()
    print(a)
