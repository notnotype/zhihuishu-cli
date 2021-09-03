import json
import os
import time
import random
from time import sleep
from functools import wraps
from json import loads
from typing import Tuple, Union, Optional, Dict, Any
from base64 import b64decode, b64encode
from datetime import datetime, timedelta

import requests
from requests import RequestException
from requests.cookies import RequestsCookieJar
from websocket import create_connection
from loguru import logger
from icecream import ic
from apscheduler.schedulers.blocking import BlockingScheduler
from execjs import compile

from utils import Config


def show_qr(img_path='qrcode.jpg'):
    try:
        from PIL import Image
        img = Image.open(img_path)
        img.show()
    except ImportError:
        logger.info('没有安装pillow不能自动打开图片, 手动扫描qrcode.jpg')


class DateTimeTimer:
    start_time: datetime
    delta: timedelta
    interval: float

    def __init__(self, delta: Union[datetime, int, timedelta], interval: float = 0):
        now = datetime.now()
        if isinstance(delta, datetime):
            delta = delta - now
        elif isinstance(delta, int):
            delta = timedelta(seconds=delta)
        self.delta = delta
        self.interval = interval

        self.start_time = now

    def __bool__(self):
        sleep(self.interval)
        return bool(self.start_time + self.delta > datetime.now())


def get_time(length=13):
    return str(time.time()).replace('.', '')[:length]


def rand_arg():
    return random.randrange(int(10e11), int(10e12))


class ZhiHuiShu:
    headers: Dict
    client: requests.Session

    # user info
    real_name: str
    username: str
    uuid: str
    js: Any  # execjs compile namespace

    def __init__(self):
        self.client = requests.Session()
        # set up execjs decrypt compile namespace
        source = '''a = {
    _a: "AgrcepndtslzyohCia0uS@",
    _b: "A0ilndhga@usreztoSCpyc",
    _c: "d0@yorAtlhzSCeunpcagis",
    _d: "zzpttjd",
    X: function(t) {
        for (var e = "", i = 0; i < t[this._c[8] + this._a[4] + this._c[15] + this._a[1] + this._a[8] + this._b[6]]; i++) {
            var n = t[this._a[3] + this._a[14] + this._c[18] + this._a[2] + this._b[18] + this._b[16] + this._c[0] + this._a[4] + this._b[0] + this._b[15]](i) ^ this._d[this._b[21] + this._b[6] + this._a[17] + this._c[5] + this._b[18] + this._c[4] + this._a[7] + this._a[4] + this._a[0] + this._c[7]](i % this._d[this._a[10] + this._b[13] + this._b[4] + this._a[1] + this._c[7] + this._a[14]]);
            e += this.Y(n)
        }
        return e
    },
    Y: function(t) {
        var e = t[this._c[7] + this._a[13] + this._a[20] + this._b[15] + this._a[2] + this._b[2] + this._c[15] + this._c[19]](16);
        return e = e[this._b[3] + this._a[4] + this._b[4] + this._a[1] + this._c[7] + this._c[9]] < 2 ? this._b[1] + e : e,
        e[this._a[9] + this._b[3] + this._c[20] + this._c[17] + this._c[13]](-4)
    },
    Z: function(t) {
        for (var e = "", i  = 0; i < t.length; i++)
            e += t[i] + ";";
        return e = e.substring(0, e.length - 1), this.X(e)
    }
}'''
        self.js = compile(source)

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
        # kwargs['verify'] = False
        for each in self.client.cookies:
            each.path = '/'
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
        # kwargs['verify'] = False
        for each in self.client.cookies:
            each.path = '/'
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
        """等待扫码"""
        ws_url = f'wss://appcomm-user.zhihuishu.com/app-commserv-user/websocket?qrToken={qr_token}'
        ws = create_connection(ws_url)

        timer = DateTimeTimer(70, interval=.8)  # 30 seconds
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

    def login_pwd(self, pwd: str):
        token = ''
        # 考虑使用utils.Config
        config = Config('.zhihuishurc')
        token = config['token']
        url = f'https://passport.zhihuishu.com/login?pwd={pwd}&' \
              'service=https://onlineservice.zhihuishu.com/login/gologin' \
              + token
        ic(url)
        response = self.get(url)
        response.raise_for_status()
        if len(response.history) < 2:
            raise RuntimeError('登录失败, 未知错误')
        url = 'https://passport.zhihuishu.com/login?service=' \
              'http%3A%2F%2Fstudyservice.zhihuishu.com%2Flogin%2Fgologin'
        response = self.get(url)
        response.raise_for_status()
        ic(response)

    def login(self, show=True, before: callable = None, after: callable = None):
        """login and get user info"""
        # get qr_code
        qr_token = self.get_qr()
        logger.info(f'qr_token 为 [{qr_token}]')

        if show:
            show_qr()
        if before:
            before()
        password, uuid = self.wait_scan(qr_token)
        if after:
            after()
        logger.info('临时密码 [{}], uuid: [{}]', password, uuid)
        self.login_pwd(password)
        self.get_user_info()

    def get_user_info(self):
        """get user info"""

        try:
            url = f'https://onlineservice.zhihuishu.com/login/getLoginUserInfo'
            response = self.get(url)

            response.raise_for_status()
            json_data = response.json()

            if json_data['code'] != 200:
                raise RuntimeError('不能获取用户信息', json_data)

            self.real_name = json_data['result']['realName']  # data
            self.username = json_data['result']['username']
            self.uuid = json_data['result']['uuid']
        except (RuntimeError, RequestException):
            url = f'https://studyservice.zhihuishu.com/login/getLoginUserInfo'
            response = self.get(url)

            response.raise_for_status()
            ic(response.cookies.items())
            json_data = response.json()

            if json_data['code'] != 200:
                raise RuntimeError('不能获取用户信息', json_data)

            self.real_name = json_data['data']['realName']  # data
            self.username = json_data['data']['username']
            self.uuid = json_data['data']['uuid']

    @property
    def ok(self):
        try:
            self.get_user_info()
        except RuntimeError as e:
            if e.args[0] == '不能获取用户信息':
                return False
        else:
            return True

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

    def share_course(self):
        response = self.post(
            'https://onlineservice.zhihuishu.com/student/course/share/queryShareCourseInfo',
            data={
                'status': 0,
                'pageNo': 1,
                'pageSize': 5,
                'uuid': self.uuid,
                'date': '2021 - 05 - 04T06 % 3A52 % 3A06.392Z',
            }
        )
        response.raise_for_status()
        json_data = response.json()
        return json_data['result']['courseOpenDtos']

    def set_cookies_only(self, cookies: Union[str, RequestsCookieJar]):
        if isinstance(cookies, str):
            cookies = cookies.strip(';')
            temp = cookies.split(';')
            cookies = RequestsCookieJar()
            for each in temp:
                k, v = each.split('=')
                cookies[k] = v
        self.client.cookies = cookies

    def set_cookies(self, cookies: [str, RequestsCookieJar]):
        self.set_cookies_only(cookies)
        self.get_user_info()

    def query_study_info(self, video_list: Dict):
        # section
        lesson_form = []
        # small_lesson
        lv_form = []
        for chapter in video_list['videoChapterDtos']:
            for section in chapter['videoLessons']:
                lesson_form.append(section['id'])
                # fix #5 不能学习没有small lesson的课程
                if 'videoSmallLessons' in section:
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
        return json_data['data']

    @staticmethod
    def get_mp4_len(url) -> float:
        from mp4info import Mp4info
        file = Mp4info(url)
        length = file.get_duration()
        return length

    def decrypt_fun_ev(
            self, recruit_id: int, section_id: int, lesson_id: int, video_id: int,
            chapter_id: int, study_status: str, play_time: int, total_study_time: int,
            video_progress: Optional[str] = None
    ):
        result = self.js.eval(f'''a.Z({[
            recruit_id, section_id, lesson_id, video_id, chapter_id,
            study_status, play_time, total_study_time, video_progress
        ]})''')
        return result

    @staticmethod
    def decrypt_fun_video_progress(total_study_time: float):
        total_study_real_time = total_study_time * (4.99 / 5)
        h = total_study_real_time // 60
        m = total_study_real_time - 60 * h
        progress = f'{int(h)}:{str(int(m))}'
        return progress

    def submit_progress(
            self, lesson_id, video_list: Dict, pre_note_info: Dict,
            play_time: int, total_study_time: int, watch_point: str, video_progress: int
    ):
        ...
        '''
        recruitId in videoList
        courseId in https://studyservice.zhihuishu.com/learning/queryUserRecruitIdLastVideoId
        chapterId in videoList
        studyStatus in video List
        playTimes change with time see at `totalStudyTimeFun`
        totalStudyTime change with time see at `totalStudyTimeFun`
        i.i(p.g)(ablePlayerX("container").getPosition()) change with time video played time
        '''
        '''
        watchPoint calc with time
        ev calc with jd decry function
        learningTokenId b64encode of https://studyservice.zhihuishu.com/learning/prelearningNote^data.studiedLessonDto.id
        courseId small_lesson_id
        '''

        # get chapter id
        chapter_id = None
        lesson_id = lesson_id
        section_id = None
        video_id = None

        flag = False
        for chapter in video_list['videoChapterDtos']:
            for section in chapter['videoLessons']:

                # fix #5 不能学习没有small lesson的课程
                if 'videoSmallLessons' in section:
                    for lesson in section['videoSmallLessons']:
                        if lesson['id'] == lesson_id:
                            chapter_id = chapter['id']
                            section_id = section['id']
                            video_id = lesson['videoId']
                            flag = True
                            break
                else:
                    if section['id'] == lesson_id:
                        # 如果该条件成立，则说明该课程没有small lesson，然后构造表单
                        chapter_id = chapter['id']
                        section_id = lesson_id
                        video_id = section['videoId']
                        flag = True
                        break
        if not flag:
            raise RuntimeError('course not found')

        recruit_id = video_list['recruitId']
        course_id = video_list['courseId']
        learning_token_id = b64encode(
            str(pre_note_info['id']).encode()
        ).decode()
        chapter_id = chapter_id
        study_status = '0'  # i dont know how it works? but '0' is right
        play_time = play_time
        total_study_time = total_study_time
        video_progress = self.decrypt_fun_video_progress(video_progress)

        ev = self.decrypt_fun_ev(
            recruit_id, section_id, lesson_id, video_id, chapter_id,
            study_status, int(play_time), int(total_study_time), video_progress
        )

        form = {
            'watchPoint': watch_point,
            'ev': ev,
            'learningTokenId': learning_token_id,
            'courseId': course_id,
            'uuid': self.uuid,
            'dateFormate': get_time()
        }

        logger.debug([recruit_id, section_id, lesson_id, video_id, chapter_id,
                      study_status, int(play_time), int(total_study_time), video_progress])
        logger.debug(form)

        response = self.post(
            'https://studyservice.zhihuishu.com/learning/saveDatabaseIntervalTime',
            data=form
        )
        response.raise_for_status()
        json_data = response.json()
        logger.info(json_data['message'] if 'message' in json_data else json_data)

    def pre_learning_note(self, lesson_id: int, video_list: Dict):
        """pre_learning_note"""
        '''
        ccCourseId: 1000010466  # just course id ok
        chapterId: 1000107260 
        isApply: 1  # ok
        lessonId: 1000299390  # ok
        lessonVideoId: 1000219376
        recruitId: 48111  # ok
        videoId: 11939815  #
        uuid: Xk5lBkPo  # ok
        dateFormate: 1619856897000
        '''

        # get chapter id
        course_id = video_list['courseId']
        chapter_id = None
        section_id = None
        lesson_id = lesson_id
        video_id = None

        flag = False
        for chapter in video_list['videoChapterDtos']:
            for section in chapter['videoLessons']:

                # fix #5 不能学习没有small lesson的课程
                if 'videoSmallLessons' in section:
                    for lesson in section['videoSmallLessons']:
                        if lesson['id'] == lesson_id:
                            chapter_id = chapter['id']
                            section_id = section['id']
                            video_id = lesson['videoId']
                            flag = True
                            break
                else:
                    if section['id'] == lesson_id:
                        # 如果该条件成立，则说明该课程没有small lesson，然后构造表单
                        chapter_id = chapter['id']
                        section_id = lesson_id
                        video_id = section['videoId']
                        flag = True
                        break
        if not flag:
            raise RuntimeError('course not found')

        form = {
            'ccCourseId': course_id,
            'chapterId': chapter_id,
            'isApply': '1',
            'lessonId': section_id,
            # 虽然当学习section级别的课程时候，表单不需要这个参数（lessonVideoId），这个参数只当学习small lesson级别的时候用到，但是
            # 发现多这个参数也没事
            'lessonVideoId': lesson_id,
            'recruitId': video_list['recruitId'],
            'videoId': video_id,
            'uuid': self.uuid,
            'dateFormate': get_time()
        }

        url = 'https://studyservice.zhihuishu.com/learning/prelearningNote'
        response = self.post(url, data=form)
        response.raise_for_status()

        json_data = response.json()
        if 'code' not in json_data or json_data['code'] != 0:
            raise RuntimeError('不能准备开始学习, {}', json_data)

        return json_data['data']['studiedLessonDto']

    def get_video_url(self, video_id):
        url = f'https://newbase.zhihuishu.com/video/initVideo?jsonpCallBack=result&videoID={video_id}&_={rand_arg()}'
        response = self.get(url)
        response.raise_for_status()

        json_data = loads(response.text[7:-1])

        for line in json_data['result']['lines']:
            if 'lineUrl' in line and line['lineUrl']:
                return line['lineUrl']
        else:
            raise RuntimeError('没有可用的视频线路', json_data)

    def start_watch_blocking(
            self, lesson_id, video_list: Dict, study_info: Dict, pre_note_info: Dict,
            play_rate: int = 1, total_study_time: int = 0, play_time: int = 0, submit_interval: int = 120
    ):
        """

        :param submit_interval:
        :param play_time:
        :param play_rate:
        :param total_study_time:
        :param pre_note_info:
        :param lesson_id:
        :param video_list:
        :param study_info:
        :return:
        """
        '''
        this.learningTimeRecordInterval = setInterval(this.learningTimeRecord, 1990),
        this.totalStudyTimeInterval = setInterval(this.totalStudyTimeFun, 4990),
        this.cacheInterval = setInterval(this.saveCacheIntervalTime, 18e4),
        this.databaseInterval = setInterval(this.saveDatabaseIntervalTime, 3e5)
        
        # calc watchPointPost
        learningTimeRecord: function() {
            var t = parseInt(this.totalStudyTime / 5) + 2
              , e = null == this.watchPointPost || "" == this.watchPointPost ? "0,1," : this.watchPointPost + ",";
            this.watchPointPost = e + t
        },
        
        # calc totalStudyTime, totalTimeFinish, playTimes
        totalStudyTimeFun: function() {
            this.totalStudyTime += 5 * this.playRate,
            this.totalTimeFinish += 5 * this.playRate,
            this.playTimes += 5 * this.playRate,
            this.computeProgree()
        },
        '''
        this = {
            'play_rate': play_rate,  # useful
            'total_study_time': total_study_time,  # 总共播放了多久
            'play_time': play_time,  # 自上次提交播放了多久
            'watch_point_post': '0,1',
            'video_progress': pre_note_info['learnTimeSec']
            if 'learnTimeSec' in pre_note_info else 0  # 本次视频放了多长
        }

        logger.debug(pre_note_info)

        # fix #5 不能学习没有small lesson的课程
        try:
            this['total_study_time'] = study_info['lv'][str(lesson_id)]['studyTotalTime']
            study_status = study_info['lv'][str(lesson_id)]['watchState']
        except KeyError:
            this['total_study_time'] = study_info['lesson'][str(lesson_id)]['studyTotalTime']
            study_status = study_info['lesson'][str(lesson_id)]['watchState']

        logger.info('从{}s处开始继续', this['video_progress'])
        # get video id
        lesson_name = None
        logger.info('学习状态 {}', study_status)

        chapter_id = None
        lesson_id = lesson_id
        section_id = None
        video_id = None

        lesson = None

        flag = False
        for chapter in video_list['videoChapterDtos']:
            for section in chapter['videoLessons']:

                if 'videoSmallLessons' in section:
                    for lesson in section['videoSmallLessons']:
                        if lesson['id'] == lesson_id:
                            lesson_name = lesson['name']
                            chapter_id = chapter['id']
                            section_id = section['id']
                            video_id = lesson['videoId']
                            flag = True
                            break
                else:
                    if section['id'] == lesson_id:
                        # 如果该条件成立，则说明该课程没有small lesson，然后构造表单
                        lesson_name = section['name']
                        chapter_id = chapter['id']
                        section_id = lesson_id
                        video_id = section['videoId']
                        flag = True
                        break

                # for lesson in section['videoSmallLessons']:
                #     if lesson['id'] == lesson_id:
                #         lesson_name = lesson['name']
                #         section_id = section['id']
                #         chapter_id = chapter['id']
                #         video_id = lesson['videoId']
                #         flag = True
                #         break
        if not flag:
            raise RuntimeError('course not found')

        scheduler = BlockingScheduler()

        video_url = self.get_video_url(video_id=video_id)
        video_length = self.get_mp4_len(video_url)

        logger.info(f'开始播放课程: 名字{lesson_name}')
        logger.info(
            'course_id: {}, chapter_id: {}, section_id: {}, '
            'lesson_id: {}, video_id: {} lessonName: {}',
            chapter_id, chapter_id, section_id, lesson_id,
            video_id, lesson_name
        )

        def detect_finish():
            logger.info(f'当前视频名字[{lesson_name}], 当前进度[{this["video_progress"]}], 总进度[{video_length}]')
            if this['video_progress'] >= video_length:
                scheduler.remove_all_jobs()
                scheduler.shutdown(wait=False)
                self.submit_progress(lesson_id, video_list, pre_note_info, int(this['play_time']),
                                     int(this['total_study_time']), this['watch_point_post'],
                                     int(this['video_progress']))
                logger.info('finished!')

        def learning_time_record():
            this['watch_point_post'] += ',' + str(int(this['total_study_time']) // 5 + 2)

        def total_study_time_fun():
            this['total_study_time'] += 5 * this['play_rate']
            this['video_progress'] += 4.99 * this['play_rate']
            this['play_time'] += 5 * this['play_rate']

        def save_database():
            self.submit_progress(lesson_id, video_list, pre_note_info, int(this['play_time']),
                                 int(this['total_study_time']), this['watch_point_post'],
                                 int(this['video_progress']))
            this['play_time'] = 0
            this['watch_point_post'] = '0,1'

        scheduler.add_job(
            learning_time_record, 'interval', seconds=1.99
        )
        scheduler.add_job(
            total_study_time_fun, 'interval', seconds=4.99
        )
        scheduler.add_job(
            detect_finish, 'interval', seconds=4.99
        )
        scheduler.add_job(
            save_database, 'interval', seconds=submit_interval
        )

        scheduler.start()
        logger.info('完成视频!')

    def close(self):
        self.client.close()
