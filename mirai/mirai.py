import json
import requests
from time import sleep
from os.path import basename
from urllib.parse import urljoin
from json import dumps
from typing import Union, Optional

from requests import Session
from requests import get, post
from icecream import ic

from .messages import MessageChain


class AuthKeyError(Exception):
    pass


class MiraiStatusError(Exception):
    pass


class Mirai:
    def __init__(self, base_url: str, auth_key: str, qq: int):
        self.qq = qq
        self.auth_key = auth_key
        self.base_url = base_url
        self.token = ''
        self.session = Session()

        self.auth(qq)

    @staticmethod
    def raise_for_api_code(code: str):
        ic(code)

        if code == 1:
            msg = f'错误代码[{code}]: 错误的auth key'
        elif code == 2:
            msg = f'错误代码[{code}]: 指定的Bot不存在'
        elif code == 3:
            msg = f'错误代码[{code}]: Session失效或不存在'
        elif code == 4:
            msg = f'错误代码[{code}]: Session未认证(未激活)'
        elif code == 5:
            msg = f'错误代码[{code}]: 发送消息目标不存在(指定对象不存在)'
        elif code == 6:
            msg = f'错误代码[{code}]: 指定文件不存在，出现于发送本地图片'
        elif code == 10:
            msg = f'错误代码[{code}]: 无操作权限，指Bot没有对应操作的限权权'
        elif code == 20:
            msg = f'错误代码[{code}]: Bot被禁言，指Bot当前无法向指定群发送消息'
        elif code == 30:
            msg = f'错误代码[{code}]: 消息过长'
        elif code == 400:
            msg = f'错误代码[{code}]: 错误的访问，如参数错误等'
        else:
            raise RuntimeError('code 错误')

        if code == 1:
            raise AuthKeyError()
        raise MiraiStatusError(msg)

    def auth(self, qq: int) -> None:
        url = urljoin(self.base_url, '/verify')
        data = {
            "verifyKey": self.auth_key
        }
        response = self.session.post(url=url, data=dumps(data))
        response.raise_for_status()
        json_data = response.json()
        if json_data['code'] == 0:
            self.token = json_data['session']
        else:
            self.raise_for_api_code(json_data['code'])

        self._verify(qq)

    def _verify(self, qq: int) -> None:
        url = urljoin(self.base_url, '/bind')
        data = {
            "sessionKey": self.token,
            "qq": qq
        }
        response = self.session.post(url=url, data=dumps(data))
        response.raise_for_status()
        json_data = response.json()
        if json_data['code'] == 0:
            pass
        else:
            self.raise_for_api_code(json_data['code'])

    def is_authed(self) -> bool:
        return bool(self.token)

    @property
    def ok(self):
        return self.is_authed()

    def upload_image(self, image_type: str, file: str) -> str:
        """

        :param image_type: `friend` 或 `group` 或 `temp`
        :param file:
        :return: image_id
        """
        url = urljoin(self.base_url, '/uploadImage')

        files = {
            "sessionKey": (None, self.token),
            "type": (None, image_type),
            "img": (
                basename(file),
                open(file, 'rb'),
                'image/jpg' if file.endswith('.jpg') else 'image/png'
            )
        }

        response = self.session.post(url=url, files=files)
        response.raise_for_status()

        if response.text:
            json_data = response.json()
            return json_data['imageId']
        else:
            raise RuntimeError('图片上传失败', response, response.text)

    def send_friend_message(self, target: int, msg: Union[MessageChain, str]):
        url = urljoin(self.base_url, '/sendFriendMessage')

        if isinstance(msg, str):
            message_chain = [{"type": "Plain", "text": msg}]
        else:
            message_chain = msg.data

        data = {
            "sessionKey": self.token,
            "target": target,
            "messageChain": message_chain
        }

        response = self.session.post(url=url, data=dumps(data))
        response.raise_for_status()
        json_data = response.json()
        if json_data['code'] == 0:
            pass
        else:
            self.raise_for_api_code(json_data['code'])

    def send_group_message(self, target: int, msg: Union[MessageChain, str]):
        url = urljoin(self.base_url, '/sendGroupMessage')

        if isinstance(msg, str):
            message_chain = [{"type": "Plain", "text": msg}]
        else:
            message_chain = msg.data

        data = {
            "sessionKey": self.token,
            "target": target,
            "messageChain": message_chain
        }

        response = self.session.post(url=url, data=dumps(data))
        response.raise_for_status()
        json_data = response.json()
        if json_data['code'] == 0:
            pass
        else:
            self.raise_for_api_code(json_data['code'])

    def fetch_message(self, count: int = 10):
        url = urljoin(
            self.base_url, f'/fetchMessage?sessionKey={self.token}&count={count}'
            # self.base_url, f'/countMessage?sessionKey={self.token}'
        )

        response = self.session.get(url=url)
        response.raise_for_status()
        json_data = response.json()
        if json_data['code'] != 0:
            self.raise_for_api_code(json_data['code'])

        return json_data['data']
