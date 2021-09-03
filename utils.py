import os

from json import loads, dumps
from os.path import exists


class Config:
    def __init__(self, filename):
        self.filename = filename
        if not exists(filename):
            with open(filename, 'w', encoding='utf8') as f:
                f.write('{}')
        with open(filename, 'r', encoding='utf8') as f:
            self.data = loads(f.read())

    def __setitem__(self, key, value):
        self.data[key] = value

    def __getitem__(self, item):
        return self.data[item]

    def __contains__(self, item):
        return item in self.data

    def save(self):
        with open(self.filename, 'w', encoding='utf8') as f:
            f.write(dumps(self.data, indent=4))
