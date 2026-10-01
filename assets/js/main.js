/**
 * WALL STREET ARENA — INTERACTIVE JAVASCRIPT ENGINE
 * Luxury Wall Street Experience, Dynamic Candlestick Chart, Web Audio Synth,
 * Floating Currency FX, Countdown, Registration & Trader Pass Generator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCountdown();
  initMarketTicker();
  initParticleFX();
  initInteractiveTerminal();
  initWebAudio();
  initRegistration();
  initPosterModal();
  initFAQ();
  initStatCounters();
});

/* ==========================================================================
   1. NAVBAR CONTROLLER
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* ==========================================================================
   2. COUNTDOWN TIMER (OCTOBER 10, 2026, 09:00:00 IST)
   ========================================================================== */
function initCountdown() {
  const eventDate = new Date('2026-10-10T09:00:00+05:30').getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl) return;

  function update() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minsEl.innerText = '00';
      secsEl.innerText = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minsEl.innerText = String(minutes).padStart(2, '0');
    secsEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. LIVE MARKET TICKER SIMULATION
   ========================================================================== */
function initMarketTicker() {
  const tickerItems = [
    { symbol: 'NIFTY 50', price: 25482.40, change: 1.45, isUp: true, currency: '₹' },
    { symbol: 'SENSEX', price: 83145.20, change: 1.32, isUp: true, currency: '₹' },
    { symbol: 'NASDAQ', price: 18340.10, change: 2.15, isUp: true, currency: '$' },
    { symbol: 'DOW JONES', price: 42105.80, change: 0.85, isUp: true, currency: '$' },
    { symbol: 'GOLD (XAU/USD)', price: 2658.20, change: 0.94, isUp: true, currency: '$' },
    { symbol: 'PCCOE/WSA', price: 10000.00, change: 100.00, isUp: true, currency: '₹', isAth: true },
    { symbol: 'BRENT CRUDE', price: 74.20, change: -0.65, isUp: false, currency: '$' },
    { symbol: 'NVIDIA (NVDA)', price: 124.80, change: 4.25, isUp: true, currency: '$' },
    { symbol: 'APPLE (AAPL)', price: 228.40, change: 1.80, isUp: true, currency: '$' },
    { symbol: 'USD / INR', price: 83.92, change: 0.08, isUp: true, currency: '₹' }
  ];

  const track1 = document.getElementById('ticker-track-1');
  const track2 = document.getElementById('ticker-track-2');

  function renderTickerHTML(items) {
    return items.map(item => {
      const sign = item.change >= 0 ? '+' : '';
      const colorClass = item.isUp ? 'text-market-green' : 'text-market-red';
      const arrow = item.isUp ? '▲' : '▼';
      const athBadge = item.isAth ? '<span class="ml-1 text-[10px] px-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded">PRIZE POOL</span>' : '';
      return `
        <div class="inline-flex items-center gap-2 px-6 border-r border-amber-500/20 py-1">
          <span class="font-bold text-gray-200">${item.symbol}</span>
          ${athBadge}
          <span class="font-mono text-gray-300">${item.currency}${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          <span class="font-mono text-xs font-semibold ${colorClass} flex items-center gap-0.5">
            ${arrow} ${sign}${item.change.toFixed(2)}%
          </span>
        </div>
      `;
    }).join('');
  }

  if (track1 && track2) {
    const html = renderTickerHTML(tickerItems);
    track1.innerHTML = html + html; // duplicate for continuous loop
    track2.innerHTML = html + html;
  }
}

/* ==========================================================================
   4. FLOATING CURRENCY & GOLD PARTICLES CANVAS (Cinematic Atmosphere)
   ========================================================================== */
function initParticleFX() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  });

  // Floating currency bills + gold particles
  const items = [];
  const PARTICLE_COUNT = 45;
  const BILL_COUNT = 14;

  // Currency notes
  for (let i = 0; i < BILL_COUNT; i++) {
    items.push({
      type: 'bill',
      x: Math.random() * width,
      y: Math.random() * height,
      w: 45 + Math.random() * 25,
      h: 24 + Math.random() * 12,
      vx: (Math.random() - 0.5) * 0.4,
      vy: 0.3 + Math.random() * 0.5,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.015,
      opacity: 0.15 + Math.random() * 0.35,
      symbol: Math.random() > 0.5 ? '$' : '₹'
    });
  }

  // Glowing gold dust embers
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    items.push({
      type: 'ember',
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.2 - Math.random() * 0.4,
      opacity: 0.2 + Math.random() * 0.7,
      pulse: Math.random() * Math.PI
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    items.forEach(item => {
      if (item.type === 'ember') {
        item.y += item.vy;
        item.x += item.vx;
        item.pulse += 0.03;
        const currentOpacity = item.opacity * (0.6 + 0.4 * Math.sin(item.pulse));

        if (item.y < -10) item.y = height + 10;
        if (item.x < -10) item.x = width + 10;
        if (item.x > width + 10) item.x = -10;

        ctx.beginPath();
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${Math.max(0, currentOpacity)})`;
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (item.type === 'bill') {
        item.y += item.vy;
        item.x += item.vx + Math.sin(item.angle) * 0.2;
        item.angle += item.vAngle;

        if (item.y > height + 40) {
          item.y = -40;
          item.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.angle);
        ctx.globalAlpha = item.opacity;

        // Bill body
        ctx.fillStyle = 'rgba(25, 45, 30, 0.75)';
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
        ctx.lineWidth = 1;
        ctx.fillRect(-item.w / 2, -item.h / 2, item.w, item.h);
        ctx.strokeRect(-item.w / 2, -item.h / 2, item.w, item.h);

        // Center medallion & symbol
        ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
        ctx.font = 'bold 10px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.symbol, 0, 0);

        ctx.restore();
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   5. INTERACTIVE LIVE CANDLESTICK TERMINAL & SIMULATOR
   ========================================================================== */
function initInteractiveTerminal() {
  const canvas = document.getElementById('marketChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = canvas.parentElement.clientWidth;
  let height = canvas.height = 360;

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
      drawChart();
    }
  });

  // Simulated candle series
  let candles = [];
  let basePrice = 2450.00;
  const CANDLE_COUNT = 36;

  for (let i = 0; i < CANDLE_COUNT; i++) {
    const open = basePrice + (Math.random() - 0.48) * 20;
    const close = open + (Math.random() - 0.47) * 25;
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 10;
    const volume = 2000 + Math.random() * 8000;
    candles.push({ open, close, high, low, volume });
    basePrice = close;
  }

  // Virtual Trading Game state
  let portfolioCash = 100000;
  let positionSize = 0; // contracts held
  let entryPrice = 0;
  let currentPrice = candles[candles.length - 1].close;

  const priceEl = document.getElementById('terminal-current-price');
  const pnlEl = document.getElementById('terminal-pnl');
  const cashEl = document.getElementById('terminal-cash');
  const positionEl = document.getElementById('terminal-positions');
  const buyBtn = document.getElementById('btn-terminal-buy');
  const sellBtn = document.getElementById('btn-terminal-sell');
  const closeBtn = document.getElementById('btn-terminal-close');

  function updateDOMMetrics() {
    if (priceEl) priceEl.innerText = `₹${currentPrice.toFixed(2)}`;
    if (cashEl) cashEl.innerText = `₹${portfolioCash.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    if (positionEl) positionEl.innerText = `${positionSize > 0 ? '+' : ''}${positionSize} Contracts`;

    let pnl = 0;
    if (positionSize !== 0) {
      pnl = (currentPrice - entryPrice) * positionSize;
    }

    if (pnlEl) {
      const sign = pnl >= 0 ? '+' : '';
      pnlEl.innerText = `${sign}₹${pnl.toFixed(2)}`;
      if (pnl > 0) {
        pnlEl.className = 'font-mono text-market-green font-bold';
      } else if (pnl < 0) {
        pnlEl.className = 'font-mono text-market-red font-bold';
      } else {
        pnlEl.className = 'font-mono text-gray-400 font-bold';
      }
    }
  }

  function drawChart() {
    ctx.clearRect(0, 0, width, height);

    // Background grid
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
    ctx.lineWidth = 1;
    const gridRows = 6;
    for (let r = 1; r < gridRows; r++) {
      const y = (height / gridRows) * r;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Min and Max prices in view
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    candles.forEach(c => {
      if (c.low < minPrice) minPrice = c.low;
      if (c.high > maxPrice) maxPrice = c.high;
    });

    const priceRange = maxPrice - minPrice || 1;
    const candleWidth = Math.max(6, (width - 60) / candles.length - 4);
    const chartHeight = height - 70; // reserve bottom for volume

    // Draw Candlesticks
    candles.forEach((c, index) => {
      const x = 20 + index * (candleWidth + 4);
      const isGreen = c.close >= c.open;

      const yOpen = chartHeight - ((c.open - minPrice) / priceRange) * (chartHeight - 40) - 20;
      const yClose = chartHeight - ((c.close - minPrice) / priceRange) * (chartHeight - 40) - 20;
      const yHigh = chartHeight - ((c.high - minPrice) / priceRange) * (chartHeight - 40) - 20;
      const yLow = chartHeight - ((c.low - minPrice) / priceRange) * (chartHeight - 40) - 20;

      // Wick
      ctx.strokeStyle = isGreen ? '#00e676' : '#ff3366';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x + candleWidth / 2, yHigh);
      ctx.lineTo(x + candleWidth / 2, yLow);
      ctx.stroke();

      // Body
      ctx.fillStyle = isGreen ? '#00e676' : '#ff3366';
      const bodyTop = Math.min(yOpen, yClose);
      const bodyHeight = Math.max(2, Math.abs(yClose - yOpen));
      ctx.fillRect(x, bodyTop, candleWidth, bodyHeight);

      // Volume bar
      const volHeight = (c.volume / 12000) * 45;
      ctx.fillStyle = isGreen ? 'rgba(0, 230, 118, 0.25)' : 'rgba(255, 51, 102, 0.25)';
      ctx.fillRect(x, height - volHeight, candleWidth, volHeight);
    });

    // Draw Moving Average line
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    candles.forEach((c, index) => {
      const x = 20 + index * (candleWidth + 4) + candleWidth / 2;
      // Simple 5-period moving average
      let sum = 0;
      let count = 0;
      for (let j = Math.max(0, index - 4); j <= index; j++) {
        sum += candles[j].close;
        count++;
      }
      const ma = sum / count;
      const y = chartHeight - ((ma - minPrice) / priceRange) * (chartHeight - 40) - 20;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Latest price dotted line
    const latestY = chartHeight - ((currentPrice - minPrice) / priceRange) * (chartHeight - 40) - 20;
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.7)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, latestY);
    ctx.lineTo(width, latestY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Price badge on the right
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(width - 70, latestY - 11, 70, 22);
    ctx.fillStyle = '#080a0e';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`₹${currentPrice.toFixed(1)}`, width - 35, latestY);
  }

  drawChart();
  updateDOMMetrics();

  // Tick generator
  setInterval(() => {
    const last = candles[candles.length - 1];
    const delta = (Math.random() - 0.49) * 12;
    const newPrice = Math.max(2000, last.close + delta);
    currentPrice = newPrice;

    // Mutate last candle or add new
    if (Math.random() > 0.4) {
      last.close = newPrice;
      last.high = Math.max(last.high, newPrice);
      last.low = Math.min(last.low, newPrice);
      last.volume += 300;
    } else {
      candles.shift();
      const open = last.close;
      const close = newPrice;
      const high = Math.max(open, close) + Math.random() * 6;
      const low = Math.min(open, close) - Math.random() * 6;
      candles.push({ open, close, high, low, volume: 2500 + Math.random() * 4000 });
    }

    drawChart();
    updateDOMMetrics();
  }, 1600);

  // Trading Buttons Handlers
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      const cost = currentPrice * 10;
      if (portfolioCash >= cost) {
        portfolioCash -= cost;
        entryPrice = ((entryPrice * positionSize) + (currentPrice * 10)) / (positionSize + 10);
        positionSize += 10;
        updateDOMMetrics();
        triggerAudioChime(640, 'triangle');
        flashButton(buyBtn, '#00e676');
      }
    });
  }

  if (sellBtn) {
    sellBtn.addEventListener('click', () => {
      if (positionSize > 0) {
        const proceeds = currentPrice * 10;
        portfolioCash += proceeds;
        positionSize -= 10;
        if (positionSize <= 0) {
          positionSize = 0;
          entryPrice = 0;
        }
        updateDOMMetrics();
        triggerAudioChime(420, 'sine');
        flashButton(sellBtn, '#ff3366');
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (positionSize !== 0) {
        portfolioCash += positionSize * currentPrice;
        positionSize = 0;
        entryPrice = 0;
        updateDOMMetrics();
        triggerAudioChime(520, 'square');
      }
    });
  }

  function flashButton(btn, color) {
    const original = btn.style.boxShadow;
    btn.style.boxShadow = `0 0 25px ${color}`;
    setTimeout(() => {
      btn.style.boxShadow = original;
    }, 300);
  }
}

/* ==========================================================================
   6. PROCEDURAL WEB AUDIO (Cinematic Ambient Floor & Sound FX)
   ========================================================================== */
let audioCtx = null;
let ambientGain = null;
let isAudioActive = false;

function initWebAudio() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const soundLabel = document.getElementById('sound-status-label');
  const soundBars = document.getElementById('sound-bars');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioActive = !isAudioActive;

    if (isAudioActive) {
      startAmbientHum();
      if (soundLabel) soundLabel.innerText = 'AUDIO: ON';
      if (soundBars) soundBars.classList.remove('opacity-40');
      toggleBtn.classList.add('border-amber-400', 'text-amber-300');
    } else {
      stopAmbientHum();
      if (soundLabel) soundLabel.innerText = 'AUDIO: OFF';
      if (soundBars) soundBars.classList.add('opacity-40');
      toggleBtn.classList.remove('border-amber-400', 'text-amber-300');
    }
  });
}

function startAmbientHum() {
  if (!audioCtx) return;
  // Create multi-oscillator low frequency floor drone
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  ambientGain = audioCtx.createGain();

  osc1.type = 'sawtooth';
  osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 note

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(260, audioCtx.currentTime);

  ambientGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  ambientGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 3);

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(ambientGain);
  ambientGain.connect(audioCtx.destination);

  osc1.start();
  osc2.start();
}

function stopAmbientHum() {
  if (ambientGain && audioCtx) {
    ambientGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    setTimeout(() => {
      ambientGain.disconnect();
      ambientGain = null;
    }, 600);
  }
}

function triggerAudioChime(freq, type = 'sine') {
  if (!isAudioActive || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.25);
  } catch (e) {
    console.warn(e);
  }
}

/* ==========================================================================
   7. REGISTRATION SYSTEM & ACCREDITED TRADER PASS GENERATOR
   ========================================================================== */
function initRegistration() {
  const form = document.getElementById('registration-form');
  const modal = document.getElementById('ticket-modal');
  const closeModalBtn = document.getElementById('btn-close-ticket-modal');
  const printPassBtn = document.getElementById('btn-print-pass');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const teamName = document.getElementById('reg-team-name').value.trim();
    const leadName = document.getElementById('reg-lead-name').value.trim();
    const leadEmail = document.getElementById('reg-lead-email').value.trim();
    const leadPhone = document.getElementById('reg-lead-phone').value.trim();
    const college = document.getElementById('reg-college').value.trim();
    const member2 = document.getElementById('reg-member-2').value.trim();
    const member3 = document.getElementById('reg-member-3').value.trim() || 'Solo Operative';
    const experience = document.getElementById('reg-experience').value;

    if (!teamName || !leadName || !leadEmail || !leadPhone) {
      alert('Please fill out all required fields to register.');
      return;
    }

    // Generate unique Syndicate ID
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const syndicateCode = `WSA-2026-${randomId}`;

    // Populate Pass elements
    document.getElementById('pass-syndicate-name').innerText = teamName.toUpperCase();
    document.getElementById('pass-syndicate-id').innerText = syndicateCode;
    document.getElementById('pass-leader-name').innerText = leadName;
    document.getElementById('pass-college').innerText = college || 'PCCOE Pune';
    document.getElementById('pass-members').innerText = `${leadName}, ${member2}${member3 !== 'Solo Operative' ? ', ' + member3 : ''}`;
    document.getElementById('pass-timestamp').innerText = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    // Open Modal
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // Play confirmation chime
    triggerAudioChime(880, 'triangle');
  });

  // Focus form on register CTA clicks
  document.querySelectorAll('a[href="#register"]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        const input = document.getElementById('reg-team-name');
        if (input) {
          input.focus();
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
    });
  });

  if (closeModalBtn && modal) {

    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  if (printPassBtn) {
    printPassBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   8. OFFICIAL POSTER MODAL LIGHTBOX
   ========================================================================== */
function initPosterModal() {
  const openBtns = document.querySelectorAll('.open-poster-modal');
  const modal = document.getElementById('poster-modal');
  const closeBtn = document.getElementById('close-poster-modal');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}

/* ==========================================================================
   9. FAQ ACCORDION
   ========================================================================== */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (trigger && answer) {
      trigger.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');

        // Close all others
        faqItems.forEach(other => {
          const otherAns = other.querySelector('.faq-answer');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherAns) otherAns.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });
}

/* ==========================================================================
   10. STAT COUNTERS UPON INTERSECTION
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.counter-value');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.innerText = target.toLocaleString('en-US');
              clearInterval(timer);
            } else {
              counter.innerText = Math.floor(current).toLocaleString('en-US');
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.getElementById('stats-section');
  if (statSection) observer.observe(statSection);
}
