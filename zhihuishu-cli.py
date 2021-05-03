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


@root.command('course-list')
@click.option('--count', '-c', type=int, default=10)
def course(count: int):
    click.echo('course-list')


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
@click.argument('course_id')
def run_course(course_id: str):
    click.echo(info('该命令处于测试阶段'))
    zhscw = ZhiHuiShuCourseWorkerBlocking('4e50585944524258454a585858415f45')
    zhscw.start()


if __name__ == '__main__':
    root()
