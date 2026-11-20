import fs from 'node:fs';
import path from 'node:path';

const assetsDir = 'C:\\Users\\user\\NiSaikou48\\assets';
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. Header Banner SVG (Aesthetic Lo-fi / Cyberpunk Creative Studio)
function generateHeaderBanner() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="300" viewBox="0 0 960 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F141C"/>
      <stop offset="60%" stop-color="#1B2433"/>
      <stop offset="100%" stop-color="#2D3748"/>
    </linearGradient>
    <linearGradient id="windowGlow" x1="0" y1="0" x2="960" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#818CF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#C084FC" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1F2937"/>
    </linearGradient>
    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="20" y2="0" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
      <line x1="0" y1="0" x2="0" y2="20" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background Canvas -->
  <rect width="960" height="300" rx="12" fill="url(#skyGrad)"/>
  <rect width="960" height="300" rx="12" fill="url(#windowGlow)"/>
  <rect width="960" height="300" rx="12" fill="url(#gridPattern)"/>

  <!-- City Skyline Silhouette in Window -->
  <path d="M 40 220 L 40 160 L 65 160 L 65 140 L 95 140 L 95 170 L 130 170 L 130 130 L 160 130 L 160 180 L 200 180 L 200 150 L 240 150 L 240 220 Z" fill="#0B0F17" opacity="0.7"/>
  <path d="M 680 220 L 680 150 L 720 150 L 720 120 L 755 120 L 755 170 L 800 170 L 800 135 L 840 135 L 840 165 L 880 165 L 880 145 L 920 145 L 920 220 Z" fill="#0B0F17" opacity="0.7"/>

  <!-- Window Frame Lines -->
  <line x1="0" y1="220" x2="960" y2="220" stroke="#334155" stroke-width="3"/>
  <line x1="480" y1="0" x2="480" y2="220" stroke="#334155" stroke-width="2" stroke-opacity="0.6"/>

  <!-- Creative Desk Setup Silhouette -->
  <!-- Left Screen (Video Editor & Timeline) -->
  <rect x="80" y="70" width="220" height="130" rx="6" fill="url(#screenGrad)" stroke="#475569" stroke-width="2"/>
  <rect x="90" y="80" width="200" height="75" fill="#030712" rx="3"/>
  <line x1="90" y1="165" x2="290" y2="165" stroke="#38BDF8" stroke-width="2"/>
  <rect x="95" y="172" width="60" height="14" rx="2" fill="#EC4899" opacity="0.8"/>
  <rect x="160" y="172" width="45" height="14" rx="2" fill="#8B5CF6" opacity="0.8"/>
  <rect x="210" y="172" width="70" height="14" rx="2" fill="#3B82F6" opacity="0.8"/>
  <polygon points="175,105 175,130 195,117.5" fill="#F8FAFC" opacity="0.8"/>
  <rect x="175" y="200" width="30" height="20" fill="#475569"/>
  <rect x="160" y="218" width="60" height="4" rx="2" fill="#64748B"/>

  <!-- Center Screen (Main Creative Canvas / Architecture) -->
  <rect x="340" y="45" width="280" height="160" rx="8" fill="url(#screenGrad)" stroke="#6366F1" stroke-width="2"/>
  <rect x="350" y="55" width="260" height="140" fill="#090D16" rx="4"/>
  <text x="365" y="85" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="600" fill="#38BDF8">
    // NiSaikou Media &amp; Creative Studio
  </text>
  <text x="365" y="105" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" fill="#94A3B8">
    const Creator = {
  </text>
  <text x="380" y="125" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" fill="#A78BFA">
    role: "Visual Designer &amp; Systems",
  </text>
  <text x="380" y="145" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" fill="#34D399">
    passions: ["Video", "Design", "Marketing"],
  </text>
  <text x="380" y="165" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" fill="#F472B6">
    portal: "nisaikou.me"
  </text>
  <text x="365" y="185" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" fill="#94A3B8">
    };
  </text>
  <rect x="465" y="205" width="30" height="15" fill="#475569"/>
  <rect x="445" y="218" width="70" height="4" rx="2" fill="#64748B"/>

  <!-- Right Screen (Marketing Analytics & Telemetry) -->
  <rect x="660" y="70" width="220" height="130" rx="6" fill="url(#screenGrad)" stroke="#475569" stroke-width="2"/>
  <rect x="670" y="80" width="200" height="110" fill="#030712" rx="3"/>
  <!-- Analytics bar graph -->
  <rect x="685" y="150" width="16" height="30" rx="2" fill="#38BDF8"/>
  <rect x="710" y="130" width="16" height="50" rx="2" fill="#818CF8"/>
  <rect x="735" y="115" width="16" height="65" rx="2" fill="#C084FC"/>
  <rect x="760" y="100" width="16" height="80" rx="2" fill="#34D399"/>
  <rect x="785" y="120" width="16" height="60" rx="2" fill="#FBBF24"/>
  <rect x="810" y="90" width="16" height="90" rx="2" fill="#F43F5E"/>
  <text x="685" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="700" fill="#F8FAFC">
    STRATEGY &amp; REACH
  </text>
  <rect x="755" y="200" width="30" height="20" fill="#475569"/>
  <rect x="740" y="218" width="60" height="4" rx="2" fill="#64748B"/>

  <!-- Foreground Desk Surface -->
  <rect x="0" y="222" width="960" height="78" fill="#111827"/>
  <line x1="0" y1="222" x2="960" y2="222" stroke="#475569" stroke-width="2"/>

  <!-- Studio Ambient Badge -->
  <g transform="translate(40, 245)">
    <rect x="0" y="0" width="880" height="38" rx="8" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="20" cy="19" r="5" fill="#10B981"/>
    <text x="35" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" font-size="12" font-weight="600" fill="#F8FAFC">
      ARIEF M PRASETYO (NiSaikou48)
    </text>
    <text x="925" y="23" text-anchor="end" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="500" fill="#94A3B8">
      CREATIVE MULTIMEDIA &bull; INFORMATION SYSTEMS &bull; MARKETING STRATEGY
    </text>
  </g>
</svg>
`;
}

// 2. Creator Illustration SVG (Boy at Desk with Headphones and Dual Monitors)
function generateCreatorIllustration() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glowBack" x1="0" y1="0" x2="340" y2="260" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#F3E8FF"/>
    </linearGradient>
  </defs>

  <rect width="340" height="260" rx="16" fill="url(#glowBack)" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Left Monitor (Design & Layout) -->
  <rect x="25" y="65" width="105" height="75" rx="5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
  <rect x="32" y="72" width="91" height="61" fill="#F8FAFC" rx="3"/>
  <rect x="36" y="76" width="35" height="22" rx="2" fill="#38BDF8" opacity="0.7"/>
  <rect x="75" y="76" width="44" height="10" rx="2" fill="#CBD5E1"/>
  <rect x="75" y="90" width="30" height="6" rx="1" fill="#E2E8F0"/>
  <rect x="36" y="104" width="83" height="24" rx="2" fill="#F1F5F9"/>
  <line x1="72" y1="140" x2="72" y2="155" stroke="#94A3B8" stroke-width="4"/>
  <rect x="58" y="153" width="28" height="4" rx="2" fill="#64748B"/>

  <!-- Right Monitor (Code / Video Timeline) -->
  <rect x="210" y="65" width="105" height="75" rx="5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
  <rect x="217" y="72" width="91" height="61" fill="#1E293B" rx="3"/>
  <text x="223" y="85" font-family="monospace" font-size="8" fill="#38BDF8">&lt;/&gt; nisaikou.me</text>
  <rect x="223" y="92" width="45" height="4" rx="1" fill="#EC4899"/>
  <rect x="223" y="100" width="65" height="4" rx="1" fill="#A855F7"/>
  <rect x="223" y="108" width="55" height="4" rx="1" fill="#22C55E"/>
  <rect x="223" y="120" width="79" height="8" rx="2" fill="#334155"/>
  <line x1="257" y1="140" x2="257" y2="155" stroke="#94A3B8" stroke-width="4"/>
  <rect x="243" y="153" width="28" height="4" rx="2" fill="#64748B"/>

  <!-- Desk Surface -->
  <line x1="15" y1="165" x2="325" y2="165" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>

  <!-- Creator Character (Back View, Wearing Headphones) -->
  <!-- Body / Torso -->
  <path d="M 125 245 C 125 190 145 175 170 175 C 195 175 215 190 215 245 Z" fill="#38BDF8"/>
  <path d="M 148 175 L 170 195 L 192 175 Z" fill="#F8FAFC"/>

  <!-- Neck -->
  <rect x="160" y="155" width="20" height="22" fill="#FCD34D"/>

  <!-- Head / Hair -->
  <ellipse cx="170" cy="140" rx="24" ry="26" fill="#1E293B"/>
  <path d="M 148 140 C 148 115 160 114 170 114 C 180 114 192 115 192 140 Z" fill="#0F172A"/>

  <!-- Headphones -->
  <!-- Headband -->
  <path d="M 144 140 C 144 110 196 110 196 140" stroke="#22C55E" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- Ear Cups -->
  <rect x="140" y="130" width="8" height="20" rx="4" fill="#22C55E"/>
  <rect x="192" y="130" width="8" height="20" rx="4" fill="#22C55E"/>

  <!-- Keyboard & Mouse -->
  <rect x="145" y="168" width="50" height="12" rx="2" fill="#CBD5E1"/>
  <rect x="205" y="170" width="10" height="14" rx="4" fill="#94A3B8"/>
  <line x1="150" y1="172" x2="190" y2="172" stroke="#64748B" stroke-width="1.5" stroke-dasharray="2 2"/>

  <!-- Floating Creative Icons -->
  <g transform="translate(60, 25)">
    <circle cx="15" cy="15" r="15" fill="#3B82F6" opacity="0.9"/>
    <text x="15" y="19" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#FFFFFF">Ae</text>
  </g>
  <g transform="translate(155, 15)">
    <circle cx="15" cy="15" r="15" fill="#9333EA" opacity="0.9"/>
    <text x="15" y="19" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#FFFFFF">Pr</text>
  </g>
  <g transform="translate(250, 25)">
    <circle cx="15" cy="15" r="15" fill="#EA580C" opacity="0.9"/>
    <text x="15" y="19" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#FFFFFF">Ai</text>
  </g>
</svg>
`;
}

// 3. Scenic Japanese Garden & Torii Gate Pixel Art Banner SVG
function generateScenicFooter() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="240" viewBox="0 0 960 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyZen" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="45%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#FEF2F2"/>
    </linearGradient>
    <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#94A3B8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#CBD5E1" stop-opacity="0.8"/>
    </linearGradient>
  </defs>

  <rect width="960" height="240" rx="12" fill="url(#skyZen)" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Distant Mountain (Fuji silhouette) -->
  <path d="M 380 180 L 480 90 L 580 180 Z" fill="url(#mountainGrad)"/>
  <path d="M 455 112 L 480 90 L 505 112 Q 480 120 455 112 Z" fill="#FFFFFF" opacity="0.9"/>

  <!-- Distant Birds -->
  <path d="M 410 70 Q 416 64 422 70 Q 428 64 434 70" stroke="#64748B" stroke-width="1.5" fill="none"/>
  <path d="M 445 60 Q 449 55 453 60 Q 457 55 461 60" stroke="#64748B" stroke-width="1.2" fill="none"/>

  <!-- Ground Layer / Japanese Garden Mound -->
  <path d="M 0 200 Q 240 180 480 195 Q 720 180 960 200 L 960 240 L 0 240 Z" fill="#334155"/>
  <path d="M 0 215 Q 480 205 960 215 L 960 240 L 0 240 Z" fill="#1E293B"/>

  <!-- Japanese Torii Gate (Left side) -->
  <g transform="translate(110, 100)">
    <!-- Main Top Beam (Kasagi) -->
    <path d="M -15 15 C 30 5 110 5 155 15 L 150 25 C 110 17 30 17 -10 25 Z" fill="#E11D48"/>
    <!-- Second Beam (Shimaki) -->
    <rect x="0" y="30" width="140" height="8" fill="#BE123C"/>
    <!-- Pillars (Hashira) -->
    <rect x="20" y="25" width="12" height="95" fill="#E11D48" rx="2"/>
    <rect x="108" y="25" width="12" height="95" fill="#E11D48" rx="2"/>
    <!-- Pillar Bases (Daiishi) -->
    <rect x="16" y="115" width="20" height="8" fill="#0F172A" rx="2"/>
    <rect x="104" y="115" width="20" height="8" fill="#0F172A" rx="2"/>
    <!-- Central Tablet (Gakuzuka) -->
    <rect x="64" y="20" width="12" height="18" fill="#0F172A"/>
  </g>

  <!-- Traditional Pagoda Pavilion (Right side) -->
  <g transform="translate(680, 85)">
    <!-- Roof Tier 1 (Top) -->
    <path d="M 70 30 C 95 18 145 18 170 30 L 160 38 C 140 28 100 28 80 38 Z" fill="#1E293B"/>
    <rect x="116" y="15" width="8" height="18" fill="#94A3B8"/>
    <!-- Roof Tier 2 (Middle) -->
    <path d="M 45 60 C 85 45 155 45 195 60 L 185 70 C 150 56 90 56 55 70 Z" fill="#334155"/>
    <rect x="112" y="38" width="16" height="22" fill="#475569"/>
    <!-- Lantern Hanging -->
    <circle cx="120" cy="80" r="5" fill="#F43F5E"/>
    <!-- Platform & Pillars -->
    <rect x="65" y="70" width="8" height="65" fill="#94A3B8"/>
    <rect x="167" y="70" width="8" height="65" fill="#94A3B8"/>
    <rect x="116" y="70" width="8" height="65" fill="#64748B"/>
    <!-- Railing -->
    <rect x="55" y="115" width="130" height="6" fill="#E11D48"/>
    <rect x="50" y="130" width="140" height="10" rx="3" fill="#1E293B"/>
  </g>

  <!-- Pine / Bonsai Trees with Lush Needles -->
  <!-- Left Tree -->
  <path d="M 280 205 Q 260 160 270 135" stroke="#475569" stroke-width="7" stroke-linecap="round" fill="none"/>
  <ellipse cx="250" cy="130" rx="30" ry="15" fill="#065F46"/>
  <ellipse cx="280" cy="120" rx="35" ry="18" fill="#047857"/>
  <ellipse cx="270" cy="105" rx="25" ry="14" fill="#10B981"/>

  <!-- Right Tree Behind Pavilion -->
  <path d="M 640 205 Q 630 150 610 120" stroke="#475569" stroke-width="8" stroke-linecap="round" fill="none"/>
  <ellipse cx="590" cy="115" rx="40" ry="20" fill="#065F46"/>
  <ellipse cx="625" cy="100" rx="45" ry="22" fill="#047857"/>
  <ellipse cx="600" cy="85" rx="32" ry="16" fill="#10B981"/>

  <!-- Cherry Blossom Petals Floating in Breeze -->
  <circle cx="350" cy="100" r="3" fill="#F472B6" opacity="0.8"/>
  <circle cx="370" cy="125" r="2.5" fill="#F472B6" opacity="0.7"/>
  <circle cx="490" cy="140" r="3" fill="#F472B6" opacity="0.8"/>
  <circle cx="530" cy="115" r="2.2" fill="#F472B6" opacity="0.6"/>
  <circle cx="330" cy="150" r="2.8" fill="#F472B6" opacity="0.75"/>

  <!-- Stone Lantern (Toro) -->
  <g transform="translate(360, 160)">
    <rect x="8" y="0" width="14" height="6" rx="2" fill="#94A3B8"/>
    <rect x="10" y="6" width="10" height="10" fill="#FEF08A"/>
    <rect x="12" y="16" width="6" height="20" fill="#64748B"/>
    <rect x="6" y="36" width="18" height="6" rx="2" fill="#475569"/>
  </g>

  <!-- Zen Footer Note -->
  <text x="480" y="230" text-anchor="middle" font-family="'SF Mono', 'JetBrains Mono', Consolas, monospace" font-size="10.5" font-weight="600" fill="#94A3B8" letter-spacing="1">
    NiSaikou Media &bull; Crafting Stories, Media &amp; Strategy
  </text>
</svg>
`;
}

fs.writeFileSync(path.join(assetsDir, 'header-banner.svg'), generateHeaderBanner(), 'utf8');
fs.writeFileSync(path.join(assetsDir, 'creator-illustration.svg'), generateCreatorIllustration(), 'utf8');
fs.writeFileSync(path.join(assetsDir, 'scenic-footer.svg'), generateScenicFooter(), 'utf8');

console.log('[PASS] Creative assets generated successfully.');
