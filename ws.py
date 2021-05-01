import time
from time import sleep
from functools import wraps
from json import dumps, loads
from typing import List, Tuple, Union, Optional, Dict
from base64 import b64decode, b64encode
from datetime import datetime, timedelta
from urllib.parse import urljoin, quote, unquote

import requests
from requests import RequestException
from requests.cookies import RequestsCookieJar, merge_cookies, cookiejar_from_dict
from websocket import create_connection
from loguru import logger
from icecream import ic

try:
    from PIL import Image


    def show_qr(img_path='qrcode.jpg'):
        img = Image.open(img_path)
        img.show()

except ImportError:
    def show_qr(img_path='qrcode.jpg'):
        logger.info('没有安装pillow不能自动打开图片, 手动扫描qrcode.jpg')


    logger.info('没有安装pillow不能自动打开图片, 手动扫描qrcode.jpg')


class DateTimeTimer:
    start_time: datetime
    delta: timedelta
    sep_time: float

    def __init__(self, delta: Union[datetime, int, timedelta], sep_time=0):
        now = datetime.now()
        if isinstance(delta, datetime):
            delta = delta - now
        elif isinstance(delta, int):
            delta = timedelta(seconds=delta)
        self.delta = delta
        self.sep_time = sep_time

        self.start_time = now

    def __bool__(self):
        sleep(self.sep_time)
        return bool(self.start_time + self.delta > datetime.now())


def get_time(length=13):
    return str(time.time()).replace('.', '')[:length]


class ZhiHuiShu:
    headers: Dict
    client: requests.Session

    # user info
    real_name: str
    username: str
    uuid: str

    def __init__(self):
        self.client = requests.Session()

    @wraps(requests.get)
    def get(self, *args, **kwargs):
        # kwargs.setdefault('cookies', cookies)
        kwargs['headers'] = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.3'
                          '6 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',

            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            'sec-ch-ua-mobile': '?0',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1'
        }.update(kwargs['headers'] if 'headers' in kwargs else {})
        return self.client.get(*args, **kwargs)

    @wraps(requests.post)
    def post(self, *args, **kwargs):
        # kwargs.setdefault('cookies', cookies)
        kwargs['headers'] = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.3'
                          '6 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',

            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            'sec-ch-ua-mobile': '?0',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1'
        }.update(kwargs['headers'] if 'headers' in kwargs else {})
        return self.client.post(*args, **kwargs)

    def get_qr(self) -> str:
        # get qrcode
        qrcode_url = 'https://passport.zhihuishu.com/qrCodeLogin/getLoginQrImg'
        response = self.get(qrcode_url)
        response.raise_for_status()
        json_data = loads(response.text)

        with open('qrcode.jpg', 'wb') as f:
            f.write(b64decode(json_data['img']))
        return json_data['qrToken']

    @staticmethod
    def wait_scan(qr_token: str) -> Tuple[str, str]:
        ws_url = f'wss://appcomm-user.zhihuishu.com/app-commserv-user/websocket?qrToken={qr_token}'
        ws = create_connection(ws_url)

        timer = DateTimeTimer(90, sep_time=2)  # 30 seconds
        response = None
        while timer:
            ws.send(qr_token)
            response = ws.recv()
            json_data = loads(response)
            if 'code' not in json_data or json_data['code'] != 1:
                logger.info('检测是否扫码, msg: {}', json_data['msg'])
                continue
            password = json_data['oncePassword']
            uuid = json_data['uuid']
            break
        else:
            # noinspection PyUnboundLocalVariable
            raise RuntimeError('扫码超时', response)
        return password, uuid

    def login_pwd(self, pwd: str, uuid: str):
        url = f'https://passport.zhihuishu.com/login?pwd={pwd}&' \
              'service=https://onlineservice.zhihuishu.com/login/gologin'
        response = self.get(url)
        response.raise_for_status()
        if len(response.history) < 2:
            raise RuntimeError('登录失败, 未知错误')

    def login(self):
        """login and get user info"""
        # get qr_code
        qr_token = self.get_qr()
        logger.info(f'qr_token 为 [{qr_token}]')

        show_qr()

        password, uuid = self.wait_scan(qr_token)
        logger.info('临时密码 [{}], uuid: [{}]', password, uuid)
        self.get_user_info()
        self.login_pwd(password, uuid)

    def get_user_info(self):
        """get user info"""
        url = f'https://studyservice.zhihuishu.com/login/getLoginUserInfo?dateFormate={get_time()}'
        response = self.get(url)

        response.raise_for_status()
        json_data = response.json()

        self.real_name = json_data['data']['realName']
        self.username = json_data['data']['username']
        self.uuid = json_data['data']['uuid']

    def video_list(self, recruit_and_course_id):
        date_format = get_time()
        uuid = self.uuid

        response = self.post(url='https://studyservice.zhihuishu.com/learning/videolist', data={
            'recruitAndCourseId': recruit_and_course_id,
            'uuid': uuid,
            'dateFormate': date_format
        })
        response.raise_for_status()
        json_data = response.json()

        if 'code' not in json_data or json_data['code'] != 0:
            raise RuntimeError('不能获得video list', json_data)

        return json_data['data']

    def set_cookies(self, cookies: str):
        a = cookies.split(';')
        cookies = RequestsCookieJar()
        for each in a:
            k, v = each.split('=')
            cookies[k] = v

        self.client.cookies = cookies

    def query_study_info(self, video_list: Dict):
        # section
        lesson_form = []
        # small_lesson
        lv_form = []
        for chapter in video_list['videoChapterDtos']:
            for section in chapter['videoLessons']:
                lesson_form.append(section['id'])
                for small_lesson in section['videoSmallLessons']:
                    lv_form.append(small_lesson['id'])

        form = {}

        for index, lid in enumerate(lesson_form):
            form[f'lessonIds[{index}]'] = lid

        for index, lid in enumerate(lv_form):
            form[f'lessonVideoIds[{index}]'] = lid

        form['recruitId'] = video_list['recruitId']
        form['uuid'] = self.uuid
        form['dateFormate'] = get_time()

        response = self.post(url='https://studyservice.zhihuishu.com/learning/queryStuyInfo', data=form)
        response.raise_for_status()

        json_data = response.json()
        if 'code' not in json_data or json_data['code'] != 0:
            raise RuntimeError('不能获得学习状态, {}', json_data)
        return json_data


if __name__ == '__main__':
    course_id = '4e50585944524258454a585858415f45'
    zhs = ZhiHuiShu()
    zhs.set_cookies(
        'CASLOGC=%7B%22realName%22%3A%22%E8%92%8B%E4%BF%8A%E6%9D%B0%22%2C%22myuniRole%22%3A0%2C%22myinstRole'
        '%22%3A0%2C%22userId%22%3A814330163%2C%22headPic%22%3A%22https%3A%2F%2Fimage.zhihuishu.com%2Fzhs%2'
        'Fablecommons%2Fdemo%2F201804%2F4aee171746a7437bad86d0699197df9f_s3.jpg%22%2C%22uuid%22%3A%22Xk5lBk'
        'Po%22%2C%22mycuRole%22%3A0%2C%22username%22%3A%220c7fa4b6e5174d95943f1922e0f17440%22%7D; exitReco'
        'd_Xk5lBkPo=2; CASTGC=TGT-2130153-kapStLvDF13KmIzPEOegms51xAnZeNr0HGAobxwWqYnymv3O5B-passport.zhih'
        'uishu.com; acw_tc=2f624a6316198474101114335e1fea6da5f09f58a23b56d4e170e426414c33; SESSION=YTY5ZmZ'
        'hZGMtZTgxNi00NjcyLWI3ZjYtZjhjMzQ4ZWQ4MzE3; SERVERID=472b148b148a839eba1c5c1a8657e3a7|1619847410|1'
        '619836247')
    zhs.get_user_info()

    video_list = zhs.video_list(course_id)
