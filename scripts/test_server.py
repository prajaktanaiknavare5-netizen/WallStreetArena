import urllib.request

paths = [
    'assets/css/styles.css',
    'assets/js/main.js',
    'assets/images/hero-bg.jpg',
    'assets/images/golden-bull.jpg',
    'assets/images/trophy.jpg',
    'assets/images/pccoe-logo.png',
    'assets/images/acmw-logo.png',
    'assets/images/cesa-logo.png',
    'assets/images/qr-framed.png',
    'assets/images/prize-badge.png',
    'assets/images/poster.jpg'
]

all_ok = True
for path in paths:
    try:
        resp = urllib.request.urlopen(f'http://127.0.0.1:8080/{path}')
        print(f"{path:30}: {resp.status} (bytes: {len(resp.read())})")
    except Exception as e:
        print(f"{path:30}: FAILED - {e}")
        all_ok = False

if all_ok:
    print("\nALL ASSETS SERVED WITH 200 OK STATUS!")
