import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Load Profile Data (AKAR)
const dataPath = path.join(rootDir, 'data', 'profile.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const assetsDir = path.join(rootDir, 'assets');

// Helper: Escape XML entities to prevent broken SVGs or injection
function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 2. Theme Tokens (CABANG)
const themes = {
  dark: {
    bg: '#0A0D14',
    bgCard: '#101522',
    bgCardSubtle: '#141B2D',
    border: '#1E293B',
    borderHighlight: '#334155',
    textMain: '#F8FAFC',
    textSub: '#94A3B8',
    textMuted: '#64748B',
    accent: '#38BDF8',
    accentGlow: 'rgba(56, 189, 248, 0.15)',
    emerald: '#10B981',
    emeraldGlow: 'rgba(16, 185, 129, 0.2)',
    badgeBg: '#182236',
    badgeBorder: '#27354E',
    badgeText: '#7DD3FC',
    specularGlow: 'rgba(255, 255, 255, 0.08)'
  },
  light: {
    bg: '#F8FAFC',
    bgCard: '#FFFFFF',
    bgCardSubtle: '#F1F5F9',
    border: '#E2E8F0',
    borderHighlight: '#CBD5E1',
    textMain: '#0F172A',
    textSub: '#475569',
    textMuted: '#64748B',
    accent: '#0284C7',
    accentGlow: 'rgba(2, 132, 199, 0.12)',
    emerald: '#059669',
    emeraldGlow: 'rgba(5, 150, 105, 0.18)',
    badgeBg: '#E0F2FE',
    badgeBorder: '#BAE6FD',
    badgeText: '#0369A1',
    specularGlow: 'rgba(255, 255, 255, 0.6)'
  }
};

// 3. Renderers (DAUN)

/**
 * Hero Banner SVG (960 x 240)
 */
function renderHeroBanner(mode) {
  const t = themes[mode];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="240" viewBox="0 0 960 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="heroBg" x1="0" y1="0" x2="960" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.bg}"/>
      <stop offset="100%" stop-color="${t.bgCard}"/>
    </linearGradient>
    <linearGradient id="specularGlow" x1="0" y1="0" x2="960" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.specularGlow}" stop-opacity="0"/>
      <stop offset="40%" stop-color="${t.specularGlow}" stop-opacity="1"/>
      <stop offset="60%" stop-color="${t.accent}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${t.specularGlow}" stop-opacity="0"/>
    </linearGradient>
    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
    </filter>
  </defs>

  <rect x="1" y="1" width="958" height="238" rx="14" fill="url(#heroBg)" stroke="${t.border}" stroke-width="1.5"/>
  <line x1="20" y1="1" x2="940" y2="1" stroke="url(#specularGlow)" stroke-width="1.5"/>
  <circle cx="820" cy="40" r="110" fill="${t.accentGlow}" filter="url(#glowFilter)"/>

  <g transform="translate(42, 36)">
    <rect x="0" y="0" width="280" height="28" rx="14" fill="${t.badgeBg}" stroke="${t.badgeBorder}" stroke-width="1"/>
    <circle cx="16" cy="14" r="4.5" fill="${t.emerald}"/>
    <circle cx="16" cy="14" r="8" fill="none" stroke="${t.emerald}" stroke-width="1.5" opacity="0.4"/>
    <text x="32" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="11.5" font-weight="600" fill="${t.emerald}" letter-spacing="0.5">
      ${escapeXml(data.profile.status.toUpperCase())}
    </text>
  </g>

  <text x="42" y="112" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="34" font-weight="800" fill="${t.textMain}" letter-spacing="-0.8">
    ${escapeXml(data.profile.name)}
  </text>
  <text x="42" y="142" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="16" font-weight="600" fill="${t.accent}" letter-spacing="-0.2">
    ${escapeXml(data.profile.role)}
  </text>
  <text x="42" y="174" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="13.5" font-weight="400" fill="${t.textSub}">
    ${escapeXml(data.profile.tagline)}
  </text>

  <g transform="translate(42, 204)">
    <text x="0" y="12" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="500" fill="${t.textMuted}">
      LOC: ${escapeXml(data.profile.location)} &nbsp;&bull;&nbsp; LATENCY: ${escapeXml(data.metrics.latencyTarget)} &nbsp;&bull;&nbsp; PRECISION CORE ARCHITECTURE
    </text>
  </g>
</svg>
`;
}

/**
 * Bento Tech Stack Matrix SVG (960 x 308)
 */
function renderBentoStack(mode) {
  const t = themes[mode];
  const categories = data.stack;

  let cardsXml = '';
  const cardW = 442;
  const cardH = 108;
  const positions = [
    { x: 32, y: 64 },
    { x: 486, y: 64 },
    { x: 32, y: 180 },
    { x: 486, y: 180 }
  ];

  categories.forEach((cat, idx) => {
    const pos = positions[idx];
    const skillChips = cat.skills.map((skill, sIdx) => {
      return `<tspan fill="${t.textMain}" font-weight="500">${escapeXml(skill)}</tspan>${sIdx < cat.skills.length - 1 ? ' <tspan fill="' + t.textMuted + '">/</tspan> ' : ''}`;
    }).join('');

    cardsXml += `
    <g transform="translate(${pos.x}, ${pos.y})">
      <rect x="0" y="0" width="${cardW}" height="${cardH}" rx="10" fill="${t.bgCardSubtle}" stroke="${t.border}" stroke-width="1"/>
      <text x="18" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="12" font-weight="700" fill="${t.accent}" letter-spacing="0.5">
        ${escapeXml(cat.category.toUpperCase())}
      </text>
      <text x="18" y="56" width="${cardW - 36}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="12" fill="${t.textSub}">
        ${skillChips}
      </text>
    </g>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="308" viewBox="0 0 960 308" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="958" height="306" rx="14" fill="${t.bgCard}" stroke="${t.border}" stroke-width="1.5"/>

  <text x="32" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="16" font-weight="700" fill="${t.textMain}" letter-spacing="-0.3">
    ENGINEERING STACK &amp; CAPABILITY MATRIX
  </text>
  <text x="928" y="38" text-anchor="end" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="600" fill="${t.textMuted}">
    STANDARDS-ALIGNED
  </text>
  <line x1="32" y1="48" x2="928" y2="48" stroke="${t.border}" stroke-width="1"/>

  ${cardsXml}
</svg>
`;
}

/**
 * Bento Featured Projects Showcase SVG (960 x 364)
 */
function renderBentoProjects(mode) {
  const t = themes[mode];
  const projects = data.featuredProjects;

  let projectsXml = '';
  const itemH = 88;
  const startY = 64;

  projects.forEach((proj, idx) => {
    const y = startY + idx * 96;
    const techFormatted = proj.tech.map(tk => escapeXml(tk)).join(' &bull; ');

    projectsXml += `
    <g transform="translate(32, ${y})">
      <rect x="0" y="0" width="896" height="${itemH}" rx="10" fill="${t.bgCardSubtle}" stroke="${t.border}" stroke-width="1"/>

      <rect x="18" y="14" width="76" height="18" rx="9" fill="${t.badgeBg}" stroke="${t.badgeBorder}" stroke-width="1"/>
      <text x="56" y="26.5" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="8.5" font-weight="700" fill="${t.badgeText}" letter-spacing="0.5">
        ${escapeXml(proj.badge)}
      </text>

      <text x="104" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="14.5" font-weight="700" fill="${t.textMain}">
        ${escapeXml(proj.title)}
      </text>

      <text x="878" y="28" text-anchor="end" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" font-weight="600" fill="${t.emerald}">
        ${escapeXml(proj.metrics)}
      </text>

      <text x="18" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="12" font-weight="400" fill="${t.textSub}">
        ${escapeXml(proj.description)}
      </text>

      <text x="18" y="73" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" font-weight="500" fill="${t.textMuted}">
        STACK: ${techFormatted}
      </text>
    </g>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="364" viewBox="0 0 960 364" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="958" height="362" rx="14" fill="${t.bgCard}" stroke="${t.border}" stroke-width="1.5"/>

  <text x="32" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="16" font-weight="700" fill="${t.textMain}" letter-spacing="-0.3">
    FEATURED ARCHITECTURAL WORK &amp; SYSTEMS
  </text>
  <text x="928" y="38" text-anchor="end" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="600" fill="${t.accent}">
    VERIFIED BENCHMARKS
  </text>
  <line x1="32" y1="48" x2="928" y2="48" stroke="${t.border}" stroke-width="1"/>

  ${projectsXml}
</svg>
`;
}

/**
 * Bento Telemetry & Engineering Principles SVG (960 x 178)
 */
function renderBentoTelemetry(mode) {
  const t = themes[mode];
  const metrics = [
    { label: 'LATENCY BENCHMARK', val: data.metrics.latencyTarget, desc: 'Interactive Next Paint Target' },
    { label: 'MODULAR SEAM BOUNDARY', val: data.metrics.maxFileThreshold, desc: 'Zero Monolith Enforcement' },
    { label: 'CODE INTEGRITY', val: 'STRICT TYPE & TDD', desc: '100% Automated CI Verification' },
    { label: 'SYSTEM AVAILABILITY', val: data.metrics.uptimeStandard, desc: 'Resilient Enterprise Core' }
  ];

  let itemsXml = '';
  const itemW = 212;
  const startX = 32;

  metrics.forEach((m, idx) => {
    const x = startX + idx * (itemW + 16);
    itemsXml += `
    <g transform="translate(${x}, 58)">
      <rect x="0" y="0" width="${itemW}" height="98" rx="10" fill="${t.bgCardSubtle}" stroke="${t.border}" stroke-width="1"/>
      <text x="14" y="24" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="9" font-weight="600" fill="${t.textMuted}" letter-spacing="0.5">
        ${escapeXml(m.label)}
      </text>
      <text x="14" y="56" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="15" font-weight="800" fill="${t.textMain}">
        ${escapeXml(m.val)}
      </text>
      <text x="14" y="78" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="10.5" font-weight="400" fill="${t.textSub}">
        ${escapeXml(m.desc)}
      </text>
    </g>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="178" viewBox="0 0 960 178" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="958" height="176" rx="14" fill="${t.bgCard}" stroke="${t.border}" stroke-width="1.5"/>

  <text x="32" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="14.5" font-weight="700" fill="${t.textMain}" letter-spacing="-0.3">
    ENGINEERING DISCIPLINE &amp; OPERATIONAL TELEMETRY
  </text>
  <text x="928" y="34" text-anchor="end" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10" font-weight="600" fill="${t.emerald}">
    LIVE PROFILE FABRIC
  </text>
  <line x1="32" y1="44" x2="928" y2="44" stroke="${t.border}" stroke-width="1"/>

  ${itemsXml}
</svg>
`;
}

// 4. Execution Pipeline
const outputs = [
  { name: 'hero-banner-dark.svg', content: renderHeroBanner('dark') },
  { name: 'hero-banner-light.svg', content: renderHeroBanner('light') },
  { name: 'bento-stack-dark.svg', content: renderBentoStack('dark') },
  { name: 'bento-stack-light.svg', content: renderBentoStack('light') },
  { name: 'bento-projects-dark.svg', content: renderBentoProjects('dark') },
  { name: 'bento-projects-light.svg', content: renderBentoProjects('light') },
  { name: 'bento-telemetry-dark.svg', content: renderBentoTelemetry('dark') },
  { name: 'bento-telemetry-light.svg', content: renderBentoTelemetry('light') }
];

if (process.argv.includes('--json')) {
  process.stdout.write(JSON.stringify(outputs));
} else {
  let canWrite = true;
  try {
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }
  } catch {
    canWrite = false;
  }

  if (canWrite) {
    try {
      outputs.forEach(file => {
        const filePath = path.join(assetsDir, file.name);
        fs.writeFileSync(filePath, file.content, 'utf8');
        console.log(`[PASS] Generated: assets/${file.name}`);
      });
      console.log('All 8 adaptive SVG assets successfully generated.');
    } catch {
      process.stdout.write(JSON.stringify(outputs));
    }
  } else {
    process.stdout.write(JSON.stringify(outputs));
  }
}
