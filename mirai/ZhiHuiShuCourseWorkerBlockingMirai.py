from json import loads
from functools import partial

from loguru import logger
from apscheduler.schedulers.blocking import BlockingScheduler

from ZhiHuiShuCourseWorkerBlocking import ZhiHuiShuCourseWorkerBlocking
from mirai import Mirai, MessageChain
from mirai.messages import Image
from zhihuishu import ZhiHuiShu

mirai_config = loads(open('./mirai/mirai.config.json', 'r').read())
qq = mirai_config['qq']
client = Mirai(mirai_config['host'], mirai_config['auth_key'], qq)
target_group = mirai_config['target_group']


def force_auth(_qq: int):
    # noinspection PyBroadException
    try:
        client.auth(_qq)
    except:
        logger.exception('重新连接mirai')
        force_auth(_qq)


class ZhiHuiShuCourseWorkerBlockingMirai(ZhiHuiShuCourseWorkerBlocking):
    def course_start(self):
        super().course_start()

    def course_end(self):
        super().course_end()

    def job_start(self):
        force_auth(qq)
        client.send_group_message(target_group, '开始学习')

    def lesson_finish(self):
        force_auth(qq)
        client.send_group_message(target_group, '一节课完成啦')

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
        client.send_group_message(target_group, '今天的课程全部学完了哦')
