import setuptools
from setuptools import setup

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name='zhihuishu-cli',
    version='0.1',
    description='Python search engine',
    long_description=long_description,
    py_modules=['zhihuishu-cli'],
    long_description_content_type="text/markdown",

    packages=setuptools.find_packages(),
    author='Notnotype',
    author_email='tyrone-zhao@qq.com',
    url='https://github.com/notnotpe/zhiuishu-cli',
    install_requires=[
        'Click',
        'requests~=2.25.1',
        'click~=7.1.2',
        'huepy',
        'pyexecjs',
        'websocket~=0.2.1',
        'websocket-client~=0.58.0',
        'APScheduler~=3.7.0',
        'loguru~=0.5.3',
        'icecream~=2.1.0',
        'Pillow~=7.2.0',
    ],
    entry_points={
        'console_scripts': [
            'zhihuishu-cli=zhihuishu_cli:root',
        ]
    }
)
