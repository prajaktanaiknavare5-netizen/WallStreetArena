import os
from PIL import Image

os.makedirs('assets/images', exist_ok=True)
im = Image.open('assets/images/poster.jpg')
w, h = im.size

# PCCOE Logo (top left)
pccoe = im.crop((5, 5, 155, 135))
pccoe.save('assets/images/pccoe-logo.png')

# ACM-W Logo (top center below college text)
acmw = im.crop((295, 95, 415, 185))
acmw.save('assets/images/acmw-logo.png')

# CESA Logo (top right)
cesa = im.crop((570, 40, 715, 105))
cesa.save('assets/images/cesa-logo.png')

# QR Code
qr = im.crop((265, 672, 442, 848))
qr.save('assets/images/qr-code.png')

# QR Code with Gold Frame
qr_framed = im.crop((240, 655, 468, 860))
qr_framed.save('assets/images/qr-framed.png')


# Prize Medallion
prize = im.crop((505, 440, 700, 585))
prize.save('assets/images/prize-badge.png')

# Wall Street Arena Typography Logo
title_logo = im.crop((40, 180, 680, 350))
title_logo.save('assets/images/title-logo.png')

# Leonardo DiCaprio Hero
leo = im.crop((35, 435, 680, 700))
leo.save('assets/images/leo-wolf.png')

print("All assets extracted successfully from poster!")
