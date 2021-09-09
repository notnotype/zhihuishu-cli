"""
@author: notnotype
@date: 2021/5/3
@license: MIT

智慧树命令行接口, 是`zhihuishu.py`的命令行接口
"""
import json
import pickle
import os
from datetime import datetime
from json import dumps, loads
from base64 import b64encode, b64decode

import click
from icecream import ic
from huepy import *

from utils import Config
from zhihuishu import ZhiHuiShu


def load_session(file='.zhihuishurc') -> ZhiHuiShu:
    """加载登录状态, 防止多次登录"""
    config = Config(file)

    cookies = config['cookies']
    cookies = pickle.loads(
        b64decode(cookies.encode())
    )

    zhs = ZhiHuiShu()
    zhs.set_cookies_only(cookies)
    return zhs


def save_session(zhs: ZhiHuiShu, file='.zhihuishurc'):
    config = Config(file)
    cookies = b64encode(
        pickle.dumps(zhs.client.cookies)
    ).decode()

    config['datetime'] = datetime.now().strftime('%Y/%m/%d %T')
    config['cookies'] = cookies

    config.save()


def awesome_login() -> ZhiHuiShu:
    config = Config('.zhihuishurc')
    if 'cookies' in config:
        zhs = load_session()
    else:
        zhs = ZhiHuiShu()
        zhs.login()
    if not zhs.ok:
        ic('重新登陆')
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

    if not share_courses:
        click.echo('没有共享课程')
        return
    for share_course in share_courses:
        text = \
            '课程名字: {} \n' \
            '课程id: {} \n' \
            '授课老师: {} \n' \
            '学校: {} \n' \
            '在学    : {} \n' \
            '进度    : {} \n'.format(
                str(share_course['courseName']), str(share_course['secret']), str(share_course['teacherName']),
                str(share_course['schoolName']),
                str(share_course['lessonName']), str(share_course['progress'])
            )
        click.echo(text)
        click.echo()


@root.command('chapters')
@click.argument('course_id', type=str, required=True)
def _(course_id: int):
    ic(course_id)

    zhs = awesome_login()

    video_list = zhs.video_list(course_id)

    click.echo(green(f'课程id: [{course_id}]'))

    for index, chapter in enumerate(video_list['videoChapterDtos']):
        click.echo()
        click.echo(green(f'第{index + 1}章'))
        click.echo(f'章节id: [{chapter["id"]}]')
        click.echo(f'章节名字: [{chapter["name"]}]')
        click.echo(f'章节描述: [{chapter["description"]}]')
        click.echo()


@root.command('sections')
@click.argument('course_id', type=str, required=True)
@click.argument('chapter_id', type=int, required=True)
def _(course_id: str, chapter_id: int):
    ic(course_id, chapter_id)

    zhs = awesome_login()

    video_list = zhs.video_list(course_id)

    click.echo(green(f'课程id: [{course_id}]'))

    chapter = None

    for chapter in video_list['videoChapterDtos']:
        if chapter['id'] == chapter_id:
            break

    click.echo(f'章节id: [{chapter["id"]}]')
    click.echo(f'章节名字: [{chapter["name"]}]')
    click.echo(f'章节描述: [{chapter["description"]}]')
    click.echo('第[{}]章下各个小节如下'.format(chapter['orderNumber']))
    click.echo()
    for section in chapter['videoLessons']:
        click.echo()
        click.echo('=' * 20)
        click.echo(f'小节id: [{green(section["id"])}]')
        click.echo(f'小节名字: [{green(section["name"])}]')
        click.echo(f'小节描述: [{green(section["introduction"])}]')
        click.echo()


@root.command('lessons')
@click.argument('course_id', type=str, required=True)
@click.argument('chapter_id', type=int, required=True)
@click.argument('section_id', type=int, required=True)
def _(course_id: str, chapter_id: int, section_id: int):
    ic(course_id, chapter_id, section_id)

    zhs = awesome_login()

    video_list = zhs.video_list(course_id)

    click.echo(green(f'课程id: [{course_id}]'))

    chapter = None
    section = None

    for chapter in video_list['videoChapterDtos']:
        for section in chapter['videoLessons']:
            if section['id'] == section_id:
                break

    click.echo(f'章节id: [{chapter["id"]}]')
    click.echo(f'章节名字: [{chapter["name"]}]')
    click.echo(f'章节描述: [{chapter["description"]}]')
    click.echo('第[{}]章下各个小节如下'.format(chapter['orderNumber']))
    click.echo()
    click.echo('=' * 20)
    click.echo(f'小节id: [{green(section["id"])}]')
    click.echo(f'小节名字: [{green(section["name"])}]')
    click.echo(f'小节描述: [{green(section["introduction"])}]')
    click.echo()

    for lesson in section['videoSmallLessons']:
        click.echo()
        click.echo('小课id: [{}]'.format(lesson['id']))
        click.echo('小课名字: [{}]'.format(lesson['name']))
        click.echo('小课视频id: [{}]'.format(lesson['videoId']))
        click.echo('小课视频长度: [{}]'.format(lesson['videoSec']))
        click.echo()


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

    pln = zhs.pre_learning_note(lesson_id, vl)
    zhs.start_watch_blocking(lesson_id, vl, si, pln)


@root.command()
@click.option('--hour', '-h', type=int, required=False, default=21)
@click.option('--minute', '-m', type=int, required=False, default=0)
@click.option('--second', '-s', type=int, required=False, default=0)
@click.option('--count', '-c', type=int, required=False, default=2)
@click.argument('course_id', type=str, required=True)
def run_course(course_id: str, hour: int, minute: int, second: int, count: int):
    from ZhiHuiShuCourseWorkerBlocking import ZhiHuiShuCourseWorkerBlocking
    ic(course_id, hour, minute, second, count)
    zhscw = ZhiHuiShuCourseWorkerBlocking(
        course_id, hour=hour, minute=minute, second=second, study_count=count
    )
    zhscw.start()


@root.command()
@click.option('--hour', '-h', type=int, required=False, default=21)
@click.option('--minute', '-m', type=int, required=False, default=0)
@click.option('--second', '-s', type=int, required=False, default=0)
@click.option('--count', '-c', type=int, required=False, default=2)
@click.argument('course_id', type=str, required=True)
def deploy_mirai(course_id: str, hour: int, minute: int, second: int, count: int):
    from mirai.ZhiHuiShuCourseWorkerBlockingMirai import ZhiHuiShuCourseWorkerBlockingMirai
    click.echo(bad('个人使用, 因为此命令接口不完善, 并且文档不全'))
    ic(course_id, hour, minute, second, count)
    zhscw = ZhiHuiShuCourseWorkerBlockingMirai(
        course_id, hour=hour, minute=minute, second=second, study_count=count
    )
    zhscw.start()


@root.command()
@click.option('--hour', '-h', type=int, required=False, default=21)
@click.option('--minute', '-m', type=int, required=False, default=0)
@click.option('--second', '-s', type=int, required=False, default=0)
@click.option('--count', '-c', type=int, required=False, default=2)
@click.argument('entry', type=str, required=True)
@click.argument('course_id', type=str, required=False)
def deploy(**kwargs):
    from ZhiHuiShuCourseWorkerBlocking import ZhiHuiShuCourseWorkerBlocking
    from importlib import import_module

    entry = kwargs.pop('entry')
    kwargs['study_count'] = kwargs.pop('count')

    module_name, attr_name = entry.split(':')
    module = import_module(module_name)
    attr = getattr(module, attr_name)
    if not issubclass(attr, ZhiHuiShuCourseWorkerBlocking):
        ic(f'错误, {str(attr)}不是ZhiHuiShuCourseWorkerBlocking的子类')
    else:
        attr(**kwargs).start()


@root.command()
@click.argument('cookies', type=str, required=True)
def set_cookies(cookies: str):
    zhs = ZhiHuiShu()
    zhs.set_cookies(cookies)
    save_session(zhs, ".zhihuishurc")


@root.command()
def auth():
    from auth.auth import auth
    token = auth()
    click.echo(f'认证成功， token为："{token}"')

    config = Config('.zhihuishurc')
    config['token'] = token
    config.save()


if __name__ == '__main__':
    root()
