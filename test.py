from icecream import ic

from ZhiHuiShuCourseWorkerBlocking import ZhiHuiShuCourseWorkerBlocking


class Test(ZhiHuiShuCourseWorkerBlocking):
    def __init__(self, course_id: str, hour=21, minute=0, second=0, study_count: int = 3):
        super().__init__(course_id, hour, minute, second, study_count)
        ic(course_id, hour, minute, second, study_count)

    def job_start(self):
        ic()

    def before_qr(self):
        ic()

    def after_qrcode(self):
        ic()

    def job_finish(self):
        ic()

    def lesson_finish(self):
        ic()

    def job(self, cookies: str = None):
        super().job(cookies)

    def start(self):
        super().start()

    def start_with_cookies(self, cookies: str):
        super().start_with_cookies(cookies)
