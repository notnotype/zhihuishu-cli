from icecream import ic
from loguru import logger

from mirai import Mirai, MessageChain
from mirai.messages import Image
from main import ZhiHuiShuCourseWorkerBlocking

qq = 776441179
client = Mirai('http://47.119.123.104:8080', 'Misd552f', qq)
target_group = 1072992996


def force_auth(qq: int):
    try:
        client.auth(qq)
    except:
        logger.exception('重新连接mirai')
        force_auth(qq)


class ZhiHuiShuCourseWorkerBlockingMirai(ZhiHuiShuCourseWorkerBlocking):
    def __init__(self, course_id: str, hour=21, minute=0, second=0, study_count=3):
        super(ZhiHuiShuCourseWorkerBlockingMirai, self).__init__(
            course_id, hour=hour, minute=minute, second=second, study_count=study_count
        )

    def before_qr(self):
        force_auth(qq)
        client.send_group_message(target_group, '每天25分钟智慧树, 健康生活50年, 幸福生活一辈子')
        client.send_group_message(target_group, MessageChain([
            Image(client.upload_image('group', './qrcode.jpg'))
        ]))

    def after_qrcode(self):
        force_auth(qq)
        client.send_group_message(target_group, '扫码成功')

    def job_finish(self):
        force_auth(qq)
        client.send_group_message(target_group, '学完了哦')
