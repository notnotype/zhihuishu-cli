from typing import List, Dict


class Message:
    @property
    def data(self) -> Dict:
        raise NotImplementedError()


class At(Message):
    target: int
    display: str

    def __init__(self, target: int, display: str):
        """ At message

        :param target: 群员QQ号
        :param display: At时显示的文字，发送消息时无效，自动使用群名片
        """
        self.target = target
        self.display = display

    @property
    def data(self):
        """return json form data"""
        data = {
            "type": "At",
            "target": self.target,
            "display": self.display
        }
        return data


class Plain(Message):
    text: str

    def __init__(self, text: str):
        self.text = text

    @property
    def data(self) -> Dict:
        return {"type": "Plain", "text": self.text}


class Image(Message):
    image_id: str
    url: str
    path: str

    def __init__(self, image_id: str, url: str = None, path: str = None):
        self.image_id = image_id
        self.url = url
        self.path = path

    @property
    def data(self) -> Dict:
        return {
            "type": "Image",
            "imageId": self.image_id,
            "url": self.url,
            "path": self.path
        }


class MessageChain:
    messages: List[Message]

    def __init__(self, messages: List = None):
        if not messages:
            messages = []
        self.messages = messages

    @property
    def data(self) -> List[Dict]:
        data = []
        for m in self.messages:
            data.append(m.data)
        return data

# class MessageTemplate:
#     messages: List[Message]
#
#     def __init__(self, messages: List[Message]):
#         self.messages = messages
#
#     def format(self, **kwargs):
#         for message_type, args in self.messages:
#             for arg in args:
#
#
#
# a = {
#     At, (11, '{who}')
# }
