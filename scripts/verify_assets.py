import os
import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all src="..." and href="..."
srcs = re.findall(r'src=["\']([^"\']+)["\']', content)
hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)

print("--- Checking SRC attributes ---")
for s in srcs:
    if s.startswith('http') or s.startswith('//'):
        print(f"[EXTERNAL] {s}")
    else:
        exists = os.path.exists(s)
        print(f"[{'OK' if exists else 'MISSING'}] {s}")

print("\n--- Checking local HREF attributes ---")
for h in hrefs:
    if not h.startswith('#') and not h.startswith('http') and not h.startswith('tel:') and not h.startswith('mailto:'):
        exists = os.path.exists(h)
        print(f"[{'OK' if exists else 'MISSING'}] {h}")
