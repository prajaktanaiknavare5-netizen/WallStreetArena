import os
import re

patterns = [r'1st', r'2nd', r'3rd', r'5000', r'3000', r'2000', r'5,000', r'3,000', r'2,000', r'runner-up', r'podium', r'first runner', r'second runner']

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root or '__pycache__' in root:
        continue
    for file in files:
        if file.endswith(('.html', '.js', '.css', '.md')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            for idx, line in enumerate(lines):
                for p in patterns:
                    if re.search(p, line, re.IGNORECASE):
                        print(f"{filepath}:{idx+1}: {line.strip()}".encode('ascii', errors='replace').decode('ascii'))

