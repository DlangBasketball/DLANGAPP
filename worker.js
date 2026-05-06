  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #F8F8F6;
    --surface: #FFFFFF;
    --surface-soft: #F1F1ED;
    --ink: #0A0A0A;
    --ink-soft: #2A2A2A;
    --muted: #6B6B6E;
    --line: rgba(10,10,10,0.08);
    --line-strong: rgba(10,10,10,0.14);
    --maroon: #7A1E2D;
    --maroon-dark: #5C1622;
    --maroon-light: #9B2A3C;
    --maroon-soft: #F5E5E8;
    --maroon-glow: #B33B4F;
    --flame-red: #C92F1F;
    --flame-orange: #F5A623;
    --brand-black: #0A0A0A;
    --warn-bg: #FBEAE0;
    --warn-ink: #5A2D0E;
    --success-bg: #E5F1E8;
    --success-ink: #1F4A2A;
  }
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    background: var(--bg);
    color: var(--ink);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
  .demo-shell {
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: 100vh;
  }
  .sidebar {
    background: var(--brand-black);
    color: #E8E8E8;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    overflow: hidden;
  }
  .sidebar::before {
    content: "";
    position: absolute;
    top: -40px;
    right: -60px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(122,30,45,0.35) 0%, transparent 70%);
    pointer-events: none;
  }
  .club-brand {
    padding: 8px 6px 18px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin-bottom: 12px;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .club-logo {
    display: block;
    margin: 0 auto 10px;
    max-width: 150px;
    height: auto;
    filter: drop-shadow(0 4px 12px rgba(122,30,45,0.4));
  }
  .club-meta {
    font-size: 11px;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .nav-section {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.4);
    padding: 16px 12px 8px;
    position: relative;
    z-index: 1;
  }
  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.12s, color 0.12s;
    position: relative;
    z-index: 1;
  }
  .nav-item:hover { background: rgba(255,255,255,0.06); color: white; }
  .nav-item.active { background: var(--maroon); color: white; }
  .nav-item.active svg { stroke: white; }
  .nav-item svg {
    width: 16px; height: 16px;
    stroke: rgba(255,255,255,0.5);
    stroke-width: 1.8;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex-shrink: 0;
  }
  .nav-item:hover svg { stroke: white; }
  .nav-item .nav-badge {
    margin-left: auto;
    background: var(--flame-red);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 999px;
  }
  .nav-item.active .nav-badge { background: white; color: var(--maroon); }
  .sidebar-footer {
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.08);
    position: relative;
    z-index: 1;
  }
  .user-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 8px;
  }
  .user-avatar {
    width: 32px; height: 32px;
    background: var(--maroon);
    color: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 12px;
    border: 1.5px solid var(--maroon-light);
  }
  .user-name { font-size: 13px; font-weight: 500; color: white; }
  .user-role { font-size: 11px; color: rgba(255,255,255,0.5); }
  .main {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--bg);
  }
  .topbar {
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    padding: 14px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--muted);
  }
  .breadcrumb strong { color: var(--ink); font-weight: 600; }
  .topbar-right { display: flex; align-items: center; gap: 12px; }
  .demo-tag {
    background: var(--maroon);
    color: white;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
  }
  .topbar-btn {
    background: transparent;
    border: 1px solid var(--line-strong);
    color: var(--ink);
    padding: 7px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.12s;
    font-family: inherit;
  }
  .topbar-btn:hover { background: var(--surface-soft); }
  .content {
    flex: 1;
    padding: 32px;
    overflow-y: auto;
    background: var(--bg);
  }
  .screen { display: none; max-width: 1200px; margin: 0 auto; }
  .screen.active { display: block; animation: fadeIn 0.2s ease; }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .screen-header { margin-bottom: 28px; }
  .screen-title {
    font-family: 'Inter Tight', sans-serif;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .screen-sub { font-size: 15px; color: var(--muted); }
  .ai-briefing {
    background: var(--brand-black);
    color: white;
    border-radius: 16px;
    padding: 24px 28px;
    margin-bottom: 24px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(122,30,45,0.4);
  }
  .ai-briefing::before {
    content: "";
    position: absolute;
    top: 0; right: 0;
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(122,30,45,0.25) 0%, transparent 70%);
    pointer-events: none;
  }
  .ai-briefing::after {
    content: "";
    position: absolute;
    bottom: -20px; left: 30%;
    width: 200px; height: 100px;
    background: radial-gradient(ellipse, rgba(245,166,35,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .ai-icon {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, var(--maroon) 0%, var(--flame-red) 100%);
    border-radius: 12px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }
  .ai-icon svg { width: 22px; height: 22px; stroke: white; fill: none; stroke-width: 2; }
  .ai-briefing-content { flex: 1; position: relative; z-index: 1; }
  .ai-briefing-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--flame-orange);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 6px;
    font-family: 'Oswald', sans-serif;
  }
  .ai-briefing-text {
    font-size: 15px;
    line-height: 1.55;
    color: white;
    margin-bottom: 16px;
  }
  .ai-briefing-text strong { font-weight: 600; color: white; }
  .ai-briefing-actions { display: flex; gap: 8px; flex-wrap: wrap; }
  .ai-action {
    background: rgba(255,255,255,0.08);
    color: white;
    border: 1px solid rgba(255,255,255,0.15);
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.12s;
    font-family: inherit;
  }
  .ai-action:hover { background: rgba(255,255,255,0.16); }
  .ai-action.primary {
    background: var(--maroon);
    color: white;
    border-color: var(--maroon-light);
  }
  .ai-action.primary:hover { background: var(--maroon-light); }
  .kpi-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }
  .kpi {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 18px 20px;
  }
  .kpi-label {
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 6px;
    font-weight: 500;
  }
  .kpi-value {
    font-family: 'Inter Tight', sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 2px;
  }
  .kpi-trend { font-size: 12px; font-weight: 500; }
  .kpi-trend.up { color: var(--success-ink); }
  .kpi-trend.down { color: var(--maroon); }
  .card-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }
  @media (max-width: 1100px) {
    .card-grid { grid-template-columns: 1fr; }
    .kpi-strip { grid-template-columns: repeat(2, 1fr); }
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 12px;
    overflow: hidden;
  }
  .card-header {
    padding: 18px 22px;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-title { font-size: 15px; font-weight: 600; color: var(--ink); }
  .card-link {
    font-size: 13px;
    color: var(--maroon);
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
  }
  .card-link:hover { color: var(--maroon-dark); }
  .card-body { padding: 6px 0; }
  .invoice-row {
    display: grid;
    grid-template-columns: 36px 1fr auto auto;
    align-items: center;
    gap: 12px;
    padding: 12px 22px;
    border-bottom: 1px solid var(--line);
    transition: background 0.12s;
  }
  .invoice-row:last-child { border-bottom: none; }
  .invoice-row:hover { background: var(--surface-soft); }
  .invoice-avatar {
    width: 32px; height: 32px;
    border-radius: 50%;
    color: white;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 11px;
  }
  .invoice-avatar.brand { background: var(--maroon); }
  .invoice-avatar.purple { background: #534AB7; }
  .invoice-avatar.teal { background: #0F6E56; }
  .invoice-avatar.coral { background: #993C1D; }
  .invoice-avatar.pink { background: #993556; }
  .invoice-avatar.amber { background: #854F0B; }
  .invoice-avatar.green { background: #3B6D11; }
  .invoice-avatar.blue { background: #185FA5; }
  .invoice-name { font-size: 14px; font-weight: 500; color: var(--ink); }
  .invoice-meta { font-size: 12px; color: var(--muted); }
  .invoice-amount {
    font-family: 'Inter Tight', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
  }
  .invoice-status {
    background: var(--maroon-soft);
    color: var(--maroon-dark);
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .invoice-status.paid { background: var(--success-bg); color: var(--success-ink); }
  .action-card {
    padding: 16px 22px;
    border-bottom: 1px solid var(--line);
    cursor: pointer;
    transition: background 0.12s;
  }
  .action-card:last-child { border-bottom: none; }
  .action-card:hover { background: var(--surface-soft); }
  .action-card-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
  }
  .action-card-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--maroon);
  }
  .action-card-dot.info { background: #185FA5; }
  .action-card-dot.success { background: #1F4A2A; }
  .action-card-title { font-size: 13px; font-weight: 600; color: var(--ink); }
  .action-card-text { font-size: 13px; color: var(--ink-soft); line-height: 1.5; }
  .modal-overlay {
    display: none;
    background: rgba(10,10,10,0.7);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 100;
    inset: 0;
    position: fixed;
  }
  .demo-shell.modal-open .modal-overlay { display: flex; }
  .modal {
    background: var(--surface);
    border-radius: 16px;
    width: 100%;
    max-width: 920px;
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 24px 70px rgba(0,0,0,0.4);
    animation: slideUp 0.2s ease;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .modal-header {
    padding: 20px 28px;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-title {
    font-family: 'Inter Tight', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .modal-close {
    background: transparent;
    border: none;
    font-size: 22px;
    color: var(--muted);
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    line-height: 1;
    font-family: inherit;
  }
  .modal-close:hover { background: var(--surface-soft); color: var(--ink); }
  .modal-body { flex: 1; overflow-y: auto; padding: 24px 28px; }
  .modal-footer {
    padding: 16px 28px;
    border-top: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--surface-soft);
  }
  .footer-meta { font-size: 13px; color: var(--muted); }
  .footer-meta strong { color: var(--ink); font-weight: 700; }
  .composer-status {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    background: var(--brand-black);
    color: white;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .composer-status.ready { background: var(--success-ink); }
  .composer-status-icon {
    width: 24px; height: 24px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: grid;
    place-items: center;
  }
  .composer-status-icon svg { width: 14px; height: 14px; stroke: white; fill: none; stroke-width: 2.5; }
  .composer-status-text { flex: 1; font-size: 14px; font-weight: 500; }
  .tone-tabs {
    display: flex;
    gap: 4px;
    padding: 4px;
    background: var(--surface-soft);
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .tone-tab {
    flex: 1;
    background: transparent;
    border: none;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.12s;
    font-family: inherit;
  }
  .tone-tab:hover { color: var(--ink); }
  .tone-tab.active { background: var(--maroon); color: white; }
  .draft-list { display: flex; flex-direction: column; gap: 10px; }
  .draft {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 16px 18px;
    transition: border-color 0.12s;
  }
  .draft:hover { border-color: var(--maroon); }
  .draft-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }
  .draft-recipient {
    font-size: 13px;
    font-weight: 700;
    color: var(--ink);
  }
  .draft-amount {
    margin-left: auto;
    font-family: 'Inter Tight', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--maroon);
  }
  .draft-subject {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink-soft);
    margin-bottom: 6px;
  }
  .draft-body {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.55;
    white-space: pre-wrap;
  }
  .composer-loading { display: none; text-align: center; padding: 60px 20px; }
  .composer-loading.visible { display: block; }
  .composer-loading-text {
    font-size: 15px;
    font-weight: 500;
    color: var(--ink);
    margin-top: 16px;
  }
  .composer-loading-sub {
    font-size: 13px;
    color: var(--muted);
    margin-top: 6px;
  }
  .big-spinner {
    width: 36px; height: 36px;
    margin: 0 auto;
    border: 3px solid var(--line);
    border-top-color: var(--maroon);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .send-button {
    background: var(--maroon);
    color: white;
    border: none;
    padding: 11px 22px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s;
  }
  .send-button:hover { background: var(--maroon-dark); }
  .send-button.success { background: var(--success-ink); }
  .ghost-button {
    background: transparent;
    border: 1px solid var(--line-strong);
    color: var(--ink);
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
  }
  .ghost-button:hover { background: var(--surface-soft); }
  .toast {
    display: none;
    background: var(--brand-black);
    color: white;
    padding: 14px 22px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
    gap: 10px;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    position: fixed;
    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    border: 1px solid var(--maroon);
  }
  .toast.visible { display: flex; }
  .toast-icon {
    width: 22px; height: 22px;
    background: var(--maroon);
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .toast-icon svg { width: 12px; height: 12px; stroke: white; fill: none; stroke-width: 3; }
  .placeholder {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 60px 40px;
    text-align: center;
  }
  .placeholder h3 {
    font-family: 'Inter Tight', sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .placeholder p { color: var(--muted); font-size: 14px; }
  .program-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }
  .program-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.15s;
  }
  .program-card:hover {
    border-color: var(--maroon);
    transform: translateY(-2px);
  }
  .program-cover {
    height: 130px;
    background: linear-gradient(135deg, var(--maroon) 0%, var(--flame-red) 100%);
    display: grid;
    place-items: center;
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    padding: 16px;
    position: relative;
    line-height: 1.1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .program-cover.black { background: linear-gradient(135deg, #1A1A1A 0%, var(--maroon) 100%); }
  .program-cover.cheetah { background: linear-gradient(135deg, var(--maroon) 0%, var(--flame-orange) 100%); }
  .program-cover.unity { background: linear-gradient(135deg, #1A1A1A 0%, #4A4A4A 100%); }
  .program-cover.mini { background: linear-gradient(135deg, var(--flame-orange) 0%, var(--maroon) 100%); }
  .program-cover.easter { background: linear-gradient(135deg, #5A5A20 0%, #8B8B3D 100%); }
  .program-cover-tag {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,0.22);
    color: white;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    backdrop-filter: blur(4px);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
  }
  .program-cover-tag.closed { background: rgba(0,0,0,0.4); }
  .program-info { padding: 16px 18px; }
  .program-name {
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .program-meta {
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 12px;
  }
  .program-progress {
    height: 6px;
    background: var(--surface-soft);
    border-radius: 999px;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .program-progress-fill {
    height: 100%;
    background: var(--maroon);
    border-radius: 999px;
  }
  .program-stats {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--muted);
  }
  .program-stats strong { color: var(--ink); font-weight: 700; }
  .mobile-frame {
    background: #1A1A1A;
    border-radius: 36px;
    padding: 14px;
    width: 320px;
    margin: 20px auto;
    box-shadow: 0 16px 50px rgba(0,0,0,0.22);
  }
  .mobile-screen {
    background: var(--bg);
    border-radius: 24px;
    overflow: hidden;
    height: 600px;
    display: flex;
    flex-direction: column;
  }
  .mobile-header {
    padding: 28px 20px 16px;
    background: var(--brand-black);
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .mobile-header::before {
    content: "";
    position: absolute;
    top: -30px; right: -30px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(122,30,45,0.4) 0%, transparent 70%);
  }
  .mobile-header-logo {
    height: 64px;
    margin: 0 auto 12px;
    display: block;
    position: relative;
    z-index: 1;
  }
  .mobile-greeting {
    font-size: 11px;
    color: rgba(255,255,255,0.6);
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .mobile-name {
    font-family: 'Inter Tight', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 1;
  }
  .mobile-content { flex: 1; padding: 16px; overflow-y: auto; }
  .child-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 14px 16px;
    margin-bottom: 10px;
  }
  .child-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .child-avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--maroon);
    color: white;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 12px;
  }
  .child-name { font-size: 14px; font-weight: 700; }
  .child-team { font-size: 11px; color: var(--muted); }
  .child-event {
    font-size: 12px;
    color: var(--ink-soft);
    background: var(--surface-soft);
    padding: 8px 10px;
    border-radius: 8px;
    line-height: 1.4;
  }
  .child-event strong { color: var(--ink); font-weight: 600; }
  .mobile-ai-button {
    margin-top: 12px;
    background: var(--maroon);
    color: white;
    padding: 12px;
    border-radius: 999px;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    border: none;
    width: 100%;
    cursor: pointer;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .mobile-ai-button svg { width: 14px; height: 14px; stroke: white; fill: none; stroke-width: 2; }
  .mobile-explainer {
    max-width: 320px;
    margin: 0 auto;
    text-align: center;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.5;
    margin-top: 12px;
  }
  .demo-panel {
    background: var(--surface);
    border-left: 4px solid var(--maroon);
    border-radius: 0 12px 12px 0;
    padding: 16px 20px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .demo-panel-icon {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--maroon-soft);
    color: var(--maroon-dark);
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 16px;
    flex-shrink: 0;
  }
  .demo-panel-text {
    font-size: 13px;
    color: var(--ink-soft);
    line-height: 1.5;
  }
  .demo-panel-text strong { color: var(--ink); }
