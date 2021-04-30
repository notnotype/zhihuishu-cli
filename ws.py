from time import sleep
from functools import wraps
from json import dumps, loads
from typing import List, Tuple, Union, Optional, Dict
from base64 import b64decode, b64encode
from datetime import datetime, timedelta

import requests
from requests import post, RequestException
from requests.cookies import RequestsCookieJar, merge_cookies
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
        ...


    logger.info('没有安装pillow')


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


class ZhiHuiShu:
    headers: Dict
    client: requests.Session

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
        # get qr_code
        qr_token = self.get_qr()
        logger.info(f'qr_token 为 [{qr_token}]')

        show_qr()

        password, uuid = self.wait_scan(qr_token)
        logger.info('临时密码 [{}], uuid: [{}]', password, uuid)
        self.login_pwd(password, uuid)

    def get_user_info(self):
        url = 'https://onlineservice.zhihuishu.com/login/getLoginUserInfo'
        response = self.get(url)

        ic(response.cookies, response.headers)

        response.raise_for_status()
        json_data = dumps(response.json(), ensure_ascii=False)
        ic(json_data)


zhs = ZhiHuiShu()
zhs.login()
zhs.get_user_info()
