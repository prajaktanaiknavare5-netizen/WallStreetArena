# WALL STREET ARENA — Official Event Website

> **"Where Strategy Meets the Market. Master the Bull, Outsmart the Bear."**

A premium, highly immersive event website designed directly around the visual identity of the **WALL STREET ARENA** event poster. 

Organized by **PCET's Pimpri Chinchwad College of Engineering (PCCOE)**, **Department of Computer Engineering**, in association with **ACM-W PCCOE Student Chapter** and **CESA**.

---

## 🏛️ Visual Identity & Design Philosophy

- **Atmosphere**: Designed to evoke the feeling of *"walking into a Wall Street trading floor at night."*
- **Aesthetic**: Luxury Wall Street + Midnight Trading Floor + High-Stakes Financial Competition + Algorithmic Strategy.
- **Palette**:
  - **Backgrounds**: Deep Obsidian (`#040507`), Midnight Charcoal (`#080a0e`), Dark Translucent Panels.
  - **Accents**: 24K Metallic Gold (`#d4af37`), Champagne Gold (`#e6ca65`), Glowing Gold Edges.
  - **Market Signals**: Bullish Neon Green (`#00e676`) and Bearish Crimson Red (`#ff3366`).
- **Typography**:
  - **Hero & Primary Display**: `Cinzel` (Weights: 700, 800, 900) with embossed 3D metallic gold gradient and the iconic Wall Street dollar sign styling.
  - **Editorial & Subheadings**: `Cormorant Garamond` for quotes and luxury editorial tone.
  - **Interface & Body**: `Montserrat` and `Inter` for crisp readability.
  - **Market Tickers & Statistics**: `JetBrains Mono` for high-frequency pricing, timestamps, and order books.

---

## ⚡ Key Features & Sections

1. **Top Emergency Market Ticker Tape**:
   - Continuous real-time animated ticker displaying global indices (NIFTY 50, SENSEX, NASDAQ, DOW, GOLD, PCCOE/WSA, BTC/USD, NVIDIA, AAPL).
   - Live floor status beacon and Web Audio ambient floor toggle.

2. **Executive Sticky Navigation**:
   - Houses the authentic institutional emblems: **PCCOE**, **ACM-W PCCOE**, and **CESA**.
   - Transparent-to-dark glassmorphism scroll transition with gold border trim.
   - Mobile responsive menu with full-screen gold-accented drawer.

3. **Cinematic Hero Section**:
   - Ultra-high resolution dark trading floor background with glowing financial multi-screens and trader silhouettes.
   - Interactive HTML5 Canvas with floating currency banknotes ($ and ₹) and luminous golden ember particles drifting in 3D.
   - Monumental 3D embossed metallic gold title: **`WALL $TREET ARENA`**.
   - Real-time countdown HUD to **October 10, 2026, 09:00 AM IST**.
   - Quick logistics badges: Date, Venue, Team Size, Prize Pool.

4. **The Wolf's Creed (Poster Quote Feature)**:
   - Spotlight tribute to the centerpiece quote from the poster:
     > *"The only thing that matters in this world is how much money you make."*
     > — Leonardo DiCaprio
   - Features the Leonardo DiCaprio visual homage with gold spotlight aura.

5. **The Arena (About Section)**:
   - Editorial presentation of the quantitative finance competition.
   - The iconic Wall Street Charging Bull 3D visual.
   - Core pillar metric cards with gold border hover glow:
     - **Round 01: Aptitude Test (Online)**
     - **Round 02: The Finale (Offline Lab 6221L - 6222L)**
     - **Team Size: 2 - 3 Members**
     - **Prize Pool: ₹10K+ Worth**

6. **Event Format & Trading Progression**:
   - Investment-banking style timeline detailing Round 1 (Online Screening) → Qualification Cutoff Margin Call → Round 2 (Live Physical Trading Floor).

7. **Interactive Live Candlestick Trading Desk**:
   - Real-time Canvas-rendered financial candlestick chart (Open, High, Low, Close, Moving Averages, Volume Bars).
   - Interactive simulated order execution: Place simulated **BUY (LONG)** and **SELL (SHORT)** trades with a ₹1,00,000 virtual balance and watch live P&L fluctuate!

8. **"The Stakes Are High" — ₹10,000+ Prize Section**:
   - Massive metallic gold ₹10K+ callout.
   - 3D Gold Championship Trophy visual + official laurel medallion seal from the poster.
   - Highlights total prize pool worth ₹10,000+ along with championship trophy, official certificates, and Wall Street Arena accolades.


9. **Event Details & Logistics Dossier**:
   - Verified coordinates: 10 October 2026, Lab 6221L - 6222L, Hybrid Mode, 2-3 members, eligibility criteria.

10. **Syndicate Registration & Accredited Trader Pass Generator**:
    - Direct scanning of the official QR code from the poster.
    - Integrated Syndicate Accreditation Form.
    - Generates a personalized digital **"ACCREDITED TRADER PASS"** ticket with unique Syndicate ID (`WSA-2026-XXXX`), Team Name, Roster, and print/download feature.

11. **Official Poster Gallery & Lightbox**:
    - High-resolution modal viewer allowing participants to inspect and download the original official event poster.

12. **FAQ & Student Coordination Desk**:
    - Interactive gold accordion covering questions on rules, virtual capital, eligibility, and preparation.
    - Direct phone & contact buttons for student coordinators:
      - **Sanchita Sakhare**: `9822799225`
      - **Shivani Vibhute**: `9226853657`

13. **Procedural Web Audio Ambient Floor Hum**:
    - Built-in audio synthesizer creating a subtle low-frequency trading floor atmosphere without external audio files.

---

## 🚀 How to Run the Website

### Option 1: Direct File Opening
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Already Running)
A local development server is active on:
```
http://127.0.0.1:8080/index.html
```

Or start a server at any time:
```powershell
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your browser.

---

## 📁 Project Structure

```
Trading-WallStreetArena/
├── index.html                   # Master single-page application
├── assets/
│   ├── css/
│   │   └── styles.css           # Luxury Wall Street styling, metallic gradients, animations
│   ├── js/
│   │   └── main.js              # Candlestick simulator, Web Audio, particles, countdown, pass generator
│   └── images/
│       ├── poster.jpg           # Official event poster (high-res)
│       ├── hero-bg.jpg          # Cinematic dark trading floor hero background
│       ├── golden-bull.jpg      # Polished metallic gold charging bull sculpture
│       ├── trophy.jpg           # 3D Gold Championship Cup with candlestick engravings
│       ├── pccoe-logo.png       # PCCOE institutional logo
│       ├── acmw-logo.png        # ACM-W PCCOE chapter emblem
│       ├── cesa-logo.png        # CESA student association logo
│       ├── prize-badge.png      # Gold laurel wreath prize pool badge
│       ├── qr-framed.png        # Official framed registration QR code
│       └── leo-wolf.png         # Leonardo DiCaprio visual tribute
├── scripts/                     # Helper verification and asset processing scripts
└── README.md                    # Project documentation
```
