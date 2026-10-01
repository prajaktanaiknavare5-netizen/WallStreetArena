with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if 'prize' in line.lower() or '10k' in line.lower() or '10,000' in line.lower():
        print(f"Line {idx+1}: {line.strip()}".encode('ascii', errors='replace').decode('ascii'))
