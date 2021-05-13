import re
from json import loads
from functools import partial
from time import sleep
from threading import Thread

from loguru import logger
from apscheduler.schedulers.blocking import BlockingScheduler

from mirai import Mirai, MessageChain, ic
from mirai.messages import Image
from zhihuishu import ZhiHuiShu

mirai_config = loads(open('./mirai/mirai.config.json', 'r').read())
qq = mirai_config['qq']
target_group = mirai_config['target_group']
client = Mirai(mirai_config['host'], mirai_config['auth_key'], qq)


def force_auth(_qq: int):
    # noinspection PyBroadException
    try:
        client.auth(_qq)
    except:
        logger.exception('重新连接mirai')
        force_auth(_qq)


class ZhiHuiShuBot:
    def __init__(self, bot: Mirai):
        self.bot = bot
        ...

    def before_qr(self):
        self.bot.send_group_message(target_group, '请扫码登录')
        self.bot.send_group_message(target_group, MessageChain([
            Image(self.bot.upload_image('group', './qrcode.jpg'))
        ]))

    def after_qrcode(self):
        self.bot.send_group_message(target_group, '扫码成功')

    def lesson_finish(self):
        self.bot.send_group_message(target_group, '学完这一课了')

    def finish(self):
        self.bot.send_group_message(target_group, 'ok')

    def get_zhs(self) -> ZhiHuiShu:
        zhs = ZhiHuiShu()
        zhs.login(True, self.before_qr, self.after_qrcode)
        return zhs

    def job(self, course_recruit_id: str, sc=None):

        sc = 1 or sc

        zhs = self.get_zhs()
        vl = zhs.video_list(course_recruit_id)
        si = zhs.query_study_info(vl)

        for k, v in si['lv'].items():
            if v['watchState'] == 0 and 'learnTime' not in v:
                pln = zhs.pre_learning_note(int(k), vl)
                logger.info(f'开始学习: {int(k)}')
                zhs.start_watch_blocking(int(k), vl, si, pln)
                self.lesson_finish()
                sc -= 1
                if sc <= 0:
                    break
        self.finish()

    def run(self):
        interval = .5
        while True:
            data = self.bot.fetch_message()
            for each in data:
                if each['type'] != 'GroupMessage':
                    continue

                logger.debug('processing message: {}', each)
                if each['sender']['group']['id'] == target_group:
                    for message in each['messageChain']:
                        if message['type'] == 'Plain':
                            if m := re.match('智慧树 ([a-zA-Z0-9]+)\s?([0-9])*', message['text']):
                                # 智慧树 course_recruit_id [count]
                                logger.info('matched{}', message['text'])
                                t = Thread(target=partial(self.job, *m.groups()))
                                t.start()
                                break
                            if m := re.match('智慧树 (?:(?:课程)|(?:share-course))', message['text']):
                                # 智慧树 [课程|share-course]
                                logger.info('matched{}', message['text'])

                                zhs = self.get_zhs()
                                share_courses = zhs.share_course()

                                for share_course in share_courses:
                                    text = \
                                        '课程名字: {} \n' \
                                        '课程id: {} \n' \
                                        '授课老师: {} \n' \
                                        '学校: {} \n' \
                                        '在学    : {} \n' \
                                        '进度    : {} \n'.format(
                                            str(share_course['courseName']), str(share_course['secret']),
                                            str(share_course['teacherName']),
                                            str(share_course['schoolName']),
                                            str(share_course['lessonName']), str(share_course['progress'])
                                        )
                                    self.bot.send_group_message(target_group, text)
                                break
            sleep(interval)


if __name__ == '__main__':
    zbot = ZhiHuiShuBot(client)
    error = 10
    try:
        zbot.run()
    except KeyboardInterrupt:
        exit(0)
    except Exception as e:
        zbot.bot.send_group_message(target_group, f'智慧树bot报错{str(e)}')
        sleep(1)
        error -= 1
        if error < 0:
            exit(0)
