from datetime import datetime
import os
from apscheduler.schedulers.blocking import BlockingScheduler

scheduler = BlockingScheduler()

i = 0


def tick():
    global i
    global job
    print(f'Tick! The i is: {i}')
    i = i + 1
    if i >= 2:
        scheduler.remove_job('1')
        scheduler.shutdown(wait=False)


if __name__ == '__main__':
    job = scheduler.add_job(tick, 'interval', seconds=1.99, id='1')
    scheduler.start()
    print('hello')
    print('hello')
    print('hello')
