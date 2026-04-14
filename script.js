/* ===============================================
   The Anti-Trend Report · v0.1
   Timeline rendering + scroll reveal + nav state
   =============================================== */

// ---------- DATA ----------

const SUBSTRATES = [
  { id: 'connection', name: 'Connection', color: '#C65F3E' },
  { id: 'coping',     name: 'Coping',     color: '#2E4373' },
  { id: 'agency',     name: 'Agency',     color: '#A14A26' },
  { id: 'vitality',   name: 'Vitality',   color: '#4A6B3E' },
  { id: 'status',     name: 'Status',     color: '#8F6E24' },
];

// Each trend: year, substrate, name, optional weight (scales dot size)
const TRENDS = [
  // Connection
  { year: 2016, sub: 'connection', name: 'Meetup revival' },
  { year: 2016, sub: 'connection', name: 'Pokémon Go' },
  { year: 2017, sub: 'connection', name: 'Facebook Groups mainstream' },
  { year: 2020, sub: 'connection', name: 'Zoom birthdays', w: 1.2 },
  { year: 2020, sub: 'connection', name: 'Mutual aid networks' },
  { year: 2021, sub: 'connection', name: 'Clubhouse' },
  { year: 2021, sub: 'connection', name: 'Discord servers' },
  { year: 2023, sub: 'connection', name: 'Run clubs explode', w: 1.3 },
  { year: 2023, sub: 'connection', name: 'Pickleball peaks' },
  { year: 2024, sub: 'connection', name: 'Third-space discourse' },
  { year: 2025, sub: 'connection', name: 'Sweatworking', w: 1.4 },
  { year: 2025, sub: 'connection', name: 'Sober bars' },
  { year: 2026, sub: 'connection', name: 'Return of the dinner party', w: 1.2 },

  // Coping
  { year: 2016, sub: 'coping', name: 'Headspace & Calm go mainstream' },
  { year: 2018, sub: 'coping', name: 'Weighted blankets' },
  { year: 2018, sub: 'coping', name: 'Self-care Sunday' },
  { year: 2019, sub: 'coping', name: 'CBD explosion' },
  { year: 2020, sub: 'coping', name: 'Sourdough starters', w: 1.4 },
  { year: 2021, sub: 'coping', name: 'Cottagecore' },
  { year: 2021, sub: 'coping', name: 'Cabin aesthetics' },
  { year: 2022, sub: 'coping', name: 'Stanley cup hydration ritual' },
  { year: 2023, sub: 'coping', name: 'Cozy gaming boom' },
  { year: 2024, sub: 'coping', name: 'Ketamine therapy' },
  { year: 2024, sub: 'coping', name: 'Bed rotting' },
  { year: 2026, sub: 'coping', name: 'Romanticizing your life', w: 1.2 },

  // Agency
  { year: 2016, sub: 'agency', name: 'Etsy peak' },
  { year: 2017, sub: 'agency', name: 'Substack launches' },
  { year: 2020, sub: 'agency', name: 'Victory gardens' },
  { year: 2021, sub: 'agency', name: 'Creator economy goes mainstream', w: 1.2 },
  { year: 2022, sub: 'agency', name: 'Great Resignation', w: 1.4 },
  { year: 2023, sub: 'agency', name: 'Raw milk' },
  { year: 2023, sub: 'agency', name: 'Seed oil discourse' },
  { year: 2024, sub: 'agency', name: 'Homesteading content' },
  { year: 2025, sub: 'agency', name: 'RFK health populism', w: 1.3 },
  { year: 2026, sub: 'agency', name: 'Build in public as brand' },

  // Vitality
  { year: 2016, sub: 'vitality', name: 'CrossFit peak' },
  { year: 2016, sub: 'vitality', name: 'Whole30' },
  { year: 2018, sub: 'vitality', name: 'Keto mainstream' },
  { year: 2019, sub: 'vitality', name: 'Peloton as household infrastructure', w: 1.2 },
  { year: 2021, sub: 'vitality', name: 'Oura / Whoop / HRV tracking' },
  { year: 2022, sub: 'vitality', name: 'Cold plunge / Wim Hof' },
  { year: 2023, sub: 'vitality', name: 'Zone 2 / Huberman protocols' },
  { year: 2024, sub: 'vitality', name: 'Ozempic reshapes everything', w: 1.5 },
  { year: 2025, sub: 'vitality', name: 'Beef tallow skincare' },
  { year: 2025, sub: 'vitality', name: 'Raw milk / seed oil wars' },
  { year: 2026, sub: 'vitality', name: 'Longevity clinics' },

  // Status
  { year: 2016, sub: 'status', name: 'Athleisure as luxury (Lululemon)' },
  { year: 2017, sub: 'status', name: 'Supreme / hype drops' },
  { year: 2018, sub: 'status', name: 'Logo maximalism (Gucci / Balenciaga)' },
  { year: 2020, sub: 'status', name: 'TikTok house wealth performance' },
  { year: 2021, sub: 'status', name: 'NFT PFPs / BAYC' },
  { year: 2022, sub: 'status', name: 'Quiet luxury emerges', w: 1.3 },
  { year: 2023, sub: 'status', name: 'Stealth wealth / old money' },
  { year: 2024, sub: 'status', name: 'Labubu collecting', w: 1.2 },
  { year: 2024, sub: 'status', name: 'Sprinter vans' },
  { year: 2025, sub: 'status', name: 'Mob wife / loud luxury returns' },
  { year: 2026, sub: 'status', name: 'Wabi-sabi luxury' },
];

// ---------- TIMELINE RENDER ----------

function renderTimeline() {
  const svg = document.getElementById('timeline-svg');
  if (!svg) return;

  const W = 1440;
  const H = 560;
  const M = { top: 60, right: 60, bottom: 50, left: 160 };
  const innerW = W - M.left - M.right;
  const innerH = H - M.top - M.bottom;

  const years = Array.from({ length: 11 }, (_, i) => 2016 + i);
  const xOf = (y) => M.left + ((y - 2016) / 10) * innerW;
  const laneH = innerH / SUBSTRATES.length;
  const yOf = (subId) => {
    const i = SUBSTRATES.findIndex((s) => s.id === subId);
    return M.top + i * laneH + laneH / 2;
  };

  let html = '';

  // Lane backgrounds
  SUBSTRATES.forEach((s, i) => {
    const y = M.top + i * laneH;
    html += `<rect x="${M.left}" y="${y}" width="${innerW}" height="${laneH}" fill="${s.color}" fill-opacity="0.03"/>`;
    html += `<line class="lane" x1="${M.left}" y1="${y + laneH / 2}" x2="${M.left + innerW}" y2="${y + laneH / 2}"/>`;
    html += `<text class="lane-label" x="${M.left - 20}" y="${y + laneH / 2 + 5}" text-anchor="end" fill="${s.color}">${s.name}</text>`;
  });

  // Year gridlines + labels
  years.forEach((y) => {
    const x = xOf(y);
    html += `<line x1="${x}" y1="${M.top}" x2="${x}" y2="${M.top + innerH}" stroke="#CFC3A7" stroke-width="0.6" stroke-dasharray="1 3"/>`;
    html += `<text class="year-label" x="${x}" y="${M.top + innerH + 24}" text-anchor="middle">'${String(y).slice(-2)}</text>`;
  });

  // Trend dots
  TRENDS.forEach((t, idx) => {
    const sub = SUBSTRATES.find((s) => s.id === t.sub);
    if (!sub) return;
    const x = xOf(t.year);
    const y = yOf(t.sub);
    const r = 8 * (t.w || 1);

    // Slight jitter within lane to prevent overlap
    const sameYearSameLane = TRENDS.filter((tt) => tt.year === t.year && tt.sub === t.sub);
    const j = sameYearSameLane.indexOf(t);
    const count = sameYearSameLane.length;
    const jitterY = count > 1 ? (j - (count - 1) / 2) * 22 : 0;

    html += `<circle class="dot"
      cx="${x}" cy="${y + jitterY}" r="${r}"
      fill="${sub.color}" fill-opacity="0.8"
      stroke="${sub.color}" stroke-width="1.5"
      data-name="${escapeHtml(t.name)}"
      data-year="${t.year}"
      data-sub="${sub.name}" />`;
  });

  svg.innerHTML = html;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

  attachTooltip(svg);
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function attachTooltip(svg) {
  const tooltip = document.getElementById('tooltip');
  const wrap = svg.parentElement;
  if (!tooltip || !wrap) return;

  svg.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('mouseenter', (e) => {
      const name = dot.getAttribute('data-name');
      const year = dot.getAttribute('data-year');
      const sub = dot.getAttribute('data-sub');
      tooltip.innerHTML = `<span class="yr">${year} · ${sub}</span><strong>${name}</strong>`;
      tooltip.classList.add('visible');
    });
    dot.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left + 14;
      const y = e.clientY - rect.top + 14;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });
    dot.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
  });
}

// ---------- SCROLL REVEAL ----------

function initReveal() {
  const targets = document.querySelectorAll('section > .container > *, .substrate-deep .deep-grid, .substrate-grid .substrate-card');
  targets.forEach((el) => el.classList.add('reveal'));

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
  );
  targets.forEach((t) => obs.observe(t));
}

// ---------- NAV SCROLL STATE ----------

function initNav() {
  const nav = document.querySelector('.topnav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------- IMAGE FALLBACK ----------
// If any deep-photo background image fails to load, the gradient layer below
// still provides a rich colored surface, so nothing looks broken.

// ---------- INIT ----------

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  initReveal();
  initNav();
});
