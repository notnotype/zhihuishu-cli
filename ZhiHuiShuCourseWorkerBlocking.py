from json import loads
from functools import partial

from loguru import logger
from apscheduler.schedulers.blocking import BlockingScheduler

from mirai import Mirai, MessageChain
from mirai.messages import Image
from zhihuishu import ZhiHuiShu


class ZhiHuiShuCourseWorkerBlocking:
    def __init__(self, course_id: str, hour=21, minute=0, second=0, study_count: int = 3):
        self.course_recruit_id = course_id
        self.hour = hour
        self.minute = minute
        self.second = second

        self.study_count = study_count

        self.scheduler = BlockingScheduler()

    def job_start(self):
        logger.info('开始学习')

    def before_qr(self):
        logger.info('请扫码')

    def after_qrcode(self):
        logger.info('扫码成功')

    def job_finish(self):
        logger.info('全部学完了')

    def lesson_finish(self):
        logger.info('学完这一课了')

    def course_start(self):
        logger.info('开始学习这一门课程啦')

    def course_end(self):
        logger.info('这一门课程学完啦')

    def get_zhs(self, cookies: str = None) -> ZhiHuiShu:

        zhs = ZhiHuiShu()
        if not cookies:
            zhs.login(True, self.before_qr, self.after_qrcode)
        else:
            zhs.set_cookies(cookies)
        return zhs

    def job(self, cookies: str = None):
        # sleep(random.randrange(0, 1000))

        self.job_start()

        flag = False

        while not flag:
            try:
                zhs = self.get_zhs(cookies)
            except RuntimeError as e:
                logger.exception(e)
                logger.info('job尝试重新登录')
            else:
                flag = True

        # noinspection PyUnboundLocalVariable
        vl = zhs.video_list(self.course_recruit_id)
        si = zhs.query_study_info(vl)

        sc = self.study_count

        flag = False
        for k, v in si['lv'].items():
            if v['watchState'] == 0 and 'learnTime' not in v:
                flag = True
                pln = zhs.pre_learning_note(int(k), vl)
                logger.info(f'开始学习: {int(k)}')
                zhs.start_watch_blocking(int(k), vl, si, pln)
                self.lesson_finish()
                sc -= 1
                if sc <= 0:
                    break
        if not flag:
            # 没有一节课了
            self.scheduler.remove_all_jobs()
            self.scheduler.shutdown(wait=False)

        self.job_finish()
        zhs.close()

    def start(self):
        self.scheduler.add_job(self.job, 'cron', **{
            'hour': self.hour if self.hour else None,
            'minute': self.minute if self.minute else None,
            'second': self.second if self.second else None
        })
        self.scheduler.start()

    def start_with_cookies(self, cookies: str):
        self.scheduler.add_job(partial(self.job, cookies), 'cron', **{
            'hour': self.hour if self.hour else None,
            'minute': self.minute if self.minute else None,
            'second': self.second if self.second else None
        })
        self.scheduler.start()
