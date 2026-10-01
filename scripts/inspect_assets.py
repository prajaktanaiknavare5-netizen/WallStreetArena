from PIL import Image
import os

for fname in os.listdir('assets/images'):
    if fname.endswith(('.png', '.jpg')):
        p = os.path.join('assets/images', fname)
        im = Image.open(p)
        print(f"{fname:25}: {im.size} mode={im.mode}")
