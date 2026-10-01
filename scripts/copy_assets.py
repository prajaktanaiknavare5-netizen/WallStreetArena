import shutil
import glob

# Find latest generated hero
hero_files = glob.glob(r'C:\Users\ACER\.gemini\antigravity\brain\d9b56463-05b8-47c0-8e58-586d3276a694\wall_street_hero*.jpg')
if hero_files:
    latest_hero = sorted(hero_files)[-1]
    shutil.copy(latest_hero, 'assets/images/hero-bg.jpg')
    print("Copied hero to assets/images/hero-bg.jpg")

# Find latest generated bull
bull_files = glob.glob(r'C:\Users\ACER\.gemini\antigravity\brain\d9b56463-05b8-47c0-8e58-586d3276a694\golden_bull*.jpg')
if bull_files:
    latest_bull = sorted(bull_files)[-1]
    shutil.copy(latest_bull, 'assets/images/golden-bull.jpg')
    print("Copied bull to assets/images/golden-bull.jpg")

# Find latest generated trophy
trophy_files = glob.glob(r'C:\Users\ACER\.gemini\antigravity\brain\d9b56463-05b8-47c0-8e58-586d3276a694\championship_trophy*.jpg')
if trophy_files:
    latest_trophy = sorted(trophy_files)[-1]
    shutil.copy(latest_trophy, 'assets/images/trophy.jpg')
    print("Copied trophy to assets/images/trophy.jpg")

