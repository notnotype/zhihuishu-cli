"""
@author: notnotype
@date: 2021/5/3
@license: MIT

智慧树命令行接口, 是`main.py`的命令行接口
"""
from datetime import datetime
from json import dumps, loads

import click
from icecream import ic
from huepy import *

from deploy import ZhiHuiShuCourseWorkerBlockingMirai
from main import ZhiHuiShu, ZhiHuiShuCourseWorkerBlocking


def load_session(file='.zhihuishurc') -> ZhiHuiShu:
    """加载登录状态, 防止多次登录"""
    with open(file, 'r') as f:
        data = loads(f.read())
    cookies = data['cookies']
    zhs = ZhiHuiShu()
    zhs.set_cookies_only(cookies)
    return zhs


def save_session(zhs: ZhiHuiShu, file='.zhihuishurc'):
    cookies = ''
    for k, v in zhs.client.cookies.items():
        cookies += '{k}={v};'.format(k=k, v=v)

    data = {
        'datetime': datetime.now().strftime('%Y/%m/%d %T'),
        'cookies': cookies
    }
    with open(file, 'w') as f:
        f.write(dumps(data, indent=4, ensure_ascii=False))


def awesome_login() -> ZhiHuiShu:
    zhs = load_session()
    if not zhs.ok:
        ic('重新登陆')
        zhs.close()
        zhs = ZhiHuiShu()
        zhs.login()
        save_session(zhs)

    return zhs


@click.group()
def root():
    pass


@root.command('share-course')
def course():
    zhs = awesome_login()
    share_courses = zhs.share_course()

    for share_course in share_courses:
        text = \
            '课程名字: {} \n' \
            '课程id: {} \n' \
            '授课老师: {} \n' \
            '学校: {} \n' \
            '在学    : {} \n' \
            '进度    : {} \n\n'.format(
                str(share_course['courseName']), str(share_course['courseId']), str(share_course['teacherName']),
                str(share_course['schoolName']),
                str(share_course['lessonName']), str(share_course['progress'])
            )
        click.echo(text)
        click.echo()


@root.command('chapter')
@click.option('--course-id', '-c', '-ci', type=str, required=True)
@click.option('--chapter-index', '-i', '-ci', type=int, default=1)
def _(course_id: int, chapter_index: int):
    ic(course_id, chapter_index)

    zhs = awesome_login()

    video_list = zhs.video_list(course_id)
    study_info = zhs.query_study_info(video_list)

    course_id = video_list['courseId']
    click.echo(green(f'课程id: [{course_id}]'))

    chapter = video_list['videoChapterDtos'][chapter_index]
    click.echo(f'章节id: [{chapter["id"]}]')
    click.echo(f'章节名字: [{chapter["name"]}]')
    click.echo(f'章节描述: [{chapter["description"]}]')
    click.echo()
    for section in chapter['videoLessons']:
        click.echo('=' * 20)
        click.echo(f'小节id: [{green(section["id"])}]')
        click.echo(f'小节名字: [{green(section["name"])}]')
        click.echo(f'小节描述: [{green(section["introduction"])}]')


@root.command()
def login():
    click.echo('login')


@root.command()
@click.argument('course_id', type=str, required=True)
@click.argument('lesson_id', type=int, required=True)
def study(course_id: str, lesson_id: int):
    click.echo(f'study {course_id} {lesson_id}')
    zhs = awesome_login()

    vl = zhs.video_list(course_id)
    si = zhs.query_study_info(vl)

    pln = zhs.pre_learning_note(lesson_id, vl, si)
    zhs.start_watch_blocking(lesson_id, vl, si, pln)


@root.command()
@click.option('--hour', '-h', type=int, required=False, default=21)
@click.option('--minute', '-m', type=int, required=False, default=0)
@click.option('--second', '-s', type=int, required=False, default=0)
@click.option('--count', '-c', type=int, required=False, default=0)
@click.argument('course_id', type=str, required=False, default=2)
def run_course(course_id: str, hour: int, minute: int, second: int, count: int):
    click.echo(info('该命令处于测试阶段'))
    ic(course_id, hour, minute, second, count)
    zhscw = ZhiHuiShuCourseWorkerBlocking(
        course_id, hour=hour, minute=minute, second=second, study_count=count
    )
    zhscw.start()


@root.command()
@click.option('--hour', '-h', type=int, required=False, default=21)
@click.option('--minute', '-m', type=int, required=False, default=0)
@click.option('--second', '-s', type=int, required=False, default=0)
@click.option('--count', '-c', type=int, required=False, default=0)
@click.argument('course_id', type=str, required=False, default=2)
def deploy_mirai(course_id: str, hour: int, minute: int, second: int, count: int):
    click.echo(bad('个人使用, 因为此命令接口不完善'))
    ic(course_id, hour, minute, second, count)
    zhscw = ZhiHuiShuCourseWorkerBlockingMirai(
        course_id, hour=hour, minute=minute, second=second, study_count=count
    )
    zhscw.start()


if __name__ == '__main__':
    root()
