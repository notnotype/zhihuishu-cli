from base64 import b64decode, b64encode

with open('qrcode.jpg.txt', 'rb') as f:
    base_data = f.read()

with open('qrcode.jpg', 'wb') as f:
    f.write(b64decode(base_data))