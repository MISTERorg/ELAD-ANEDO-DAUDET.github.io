// [file name]: s4-neural.js
/* ═══════════════════════════════════════════════════
   SEC 4 — THE NEURAL MAP (Tron Bento Grid)
   - 8 comprehensive skill categories from resume + industry must-haves
   - Each card wrapped in .bn-frame for rotating beam border
   - All labels driven by i18n keys with inline fallbacks
   - refreshNeural() re-renders text on lang switch
═══════════════════════════════════════════════════ */

/* ── Skill categories
   · i18nCat / i18nDesc / i18nFoot → keys looked up in I18N
   · label / desc / foot            → inline English fallbacks
     (shown when i18n key is missing — no broken key strings)
   · tags: brand names, never translated                      ── */
const BENTO_CATEGORIES = [
  {
    id:       'devops',
    i18nCat:  's4-cat-devops',   label: 'DevOps & Cloud',
    i18nDesc: 's4-desc-devops',  desc:  'CI/CD · IaC · Container orchestration · Multi-cloud deployments',
    i18nFoot: 's4-foot-devops',  foot:  'Infrastructure as Code',
    icon:     '☁️',
    iconHover:'⚡',
    color:    '0,242,255',
    speed:    '5.2s',
    className:'devops',
    tags: [
      'Git', 'GitLab CI/CD', 'GitHub Actions',
      'Linux', 'Bash', 'SSH',
      'AWS', 'GCP', 'Azure',
      'Docker', 'Kubernetes', 'Helm', 'ArgoCD',
      'Terraform', 'Ansible', 'Vagrant',
      'REST APIs', 'YAML'
    ]
  },
  {
    id:       'automation',
    i18nCat:  's4-cat-automation',   label: 'AI & Automation',
    i18nDesc: 's4-desc-automation',  desc:  'Agentic AI · workflow automation · AIOps · LLM-powered pipelines',
    i18nFoot: 's4-foot-automation',  foot:  'AIOps & Intelligent Workflows',
    icon:     '🤖',
    iconHover:'⚡',
    color:    '180,77,255',
    speed:    '4.6s',
    className:'automation',
    hasPulse: true,
    tags: [
      'n8n', 'Make.com', 'UiPath', 'Robocorp',
      'Cline', 'LangChain', 'OpenAI API',
      'Prompt Engineering', 'Ansible',
      'AIOps', 'AutoGPT', 'Hugging Face'
    ]
  },
  {
    id:       'programming',
    i18nCat:  's4-cat-programming',   label: 'Programming',
    i18nDesc: 's4-desc-programming',  desc:  'System scripting · data manipulation · full-stack logic',
    i18nFoot: 's4-foot-programming',  foot:  'Languages & Scripting',
    icon:     '💻',
    iconHover:'🔧',
    color:    '0,255,157',
    speed:    '5.8s',
    className:'programming',
    tags: [
      'Python', 'TypeScript', 'JavaScript',
      'Shell Script', 'PowerShell', 'Bash',
      'SQL', 'C', 'PHP',
      'HTML', 'SCSS / CSS', 'YAML',
      'JSON', 'XML', 'Regex'
    ]
  },
  {
    id:       'datascience',
    i18nCat:  's4-cat-datascience',   label: 'Data & ML',
    i18nDesc: 's4-desc-datascience',  desc:  'ML pipelines · statistical analysis · predictive modelling · edge AI',
    i18nFoot: 's4-foot-datascience',  foot:  'Machine Learning & Data Science',
    icon:     '🧠',
    iconHover:'📈',
    color:    '255,100,160',
    speed:    '5.0s',
    className:'datascience',
    tags: [
      'NumPy', 'Pandas', 'Scikit-learn',
      'Matplotlib', 'Seaborn',
      'TensorFlow', 'Keras',
      'LangChain', 'EdgeAI', 'RTOS',
      'Jupyter', 'Google Colab', 'LaTeX'
    ]
  },
  {
    id:       'frameworks',
    i18nCat:  's4-cat-frameworks',   label: 'Frameworks & APIs',
    i18nDesc: 's4-desc-frameworks',  desc:  'Backend services · SPA frontends · ERP integration · REST & GraphQL',
    i18nFoot: 's4-foot-frameworks',  foot:  'Web & Application Frameworks',
    icon:     '⚙️',
    iconHover:'🏗️',
    color:    '240,192,64',
    speed:    '6.2s',
    className:'frameworks',
    tags: [
      'Django', 'FastAPI', 'Symfony',
      'Angular', 'Odoo',
      'REST API', 'GraphQL',
      'WebSockets', 'gRPC'
    ]
  },
  {
    id:       'security',
    i18nCat:  's4-cat-security',   label: 'Security & QA',
    i18nDesc: 's4-desc-security',  desc:  'Zero-trust · penetration testing · automated QA · SIEM · compliance',
    i18nFoot: 's4-foot-security',  foot:  'Cybersecurity & Test Automation',
    icon:     '🛡️',
    iconHover:'🔒',
    color:    '255,51,102',
    speed:    '4.9s',
    className:'security',
    tags: [
      'OWASP ZAP', 'SonarQube', 'SQLMap',
      'Wireshark', 'Nmap', 'Metasploit',
      'Cisco ASA', 'Cisco IOS', 'FortiGate',
      'IPSec', 'Zero-Trust', 'Splunk',
      'Selenium', 'Cypress', 'Playwright',
      'Robocorp', 'GDPR / ISO 27001'
    ]
  },
  {
    id:       'monitoring',
    i18nCat:  's4-cat-monitoring',   label: 'Monitoring & Observability',
    i18nDesc: 's4-desc-monitoring',  desc:  'Real-time telemetry · alerting · log aggregation · incident response',
    i18nFoot: 's4-foot-monitoring',  foot:  'Observability Stack',
    icon:     '📡',
    iconHover:'📊',
    color:    '255,165,0',
    speed:    '5.4s',
    className:'monitoring',
    tags: [
      'Prometheus', 'Grafana', 'Alertmanager',
      'Datadog', 'New Relic',
      'ELK Stack', 'Kibana', 'Logstash',
      'Splunk', 'PagerDuty',
      'Zabbix', 'Nagios', 'Jaeger'
    ]
  },
  {
    id:       'databases',
    i18nCat:  's4-cat-databases',   label: 'Databases & Storage',
    i18nDesc: 's4-desc-databases',  desc:  'Relational · NoSQL · in-memory caching · search · object storage',
    i18nFoot: 's4-foot-databases',  foot:  'Data Persistence Layer',
    icon:     '🗄️',
    iconHover:'📊',
    color:    '0,180,255',
    speed:    '5.5s',
    className:'databases',
    tags: [
      'PostgreSQL', 'MySQL', 'SQLite',
      'MongoDB', 'Redis',
      'Elasticsearch', 'Apache Kafka',
      'AWS S3', 'MinIO'
    ]
  }
];

/* ── Resolve a translation key — falls back to inline label ── */
function _t(key, fallback) {
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const dict = (typeof I18N !== 'undefined') ? I18N[lang] : null;
  if (dict && dict[key]) return dict[key];
  /* Use provided fallback text rather than exposing raw key strings */
  return (fallback !== undefined) ? fallback : key;
}

/* ── Build the hex count string ── */
function _hex(n) {
  return '0x' + n.toString(16).toUpperCase().padStart(2, '0');
}

/* ══════════════════════════════════════════════════
   initNeural() — called once by core.js on page load
══════════════════════════════════════════════════ */
function initNeural() {
  const section = document.getElementById('s4');
  if (!section) return;

  /* Idempotency guard */
  if (document.querySelector('.bento-grid')) return;

  /* Clean up legacy canvas & tooltip if present */
  const oldCanvas = document.getElementById('neuralCanvas');
  if (oldCanvas) oldCanvas.remove();
  const oldTip = document.getElementById('ntip');
  if (oldTip) oldTip.remove();

  /* Build grid */
  const grid = document.createElement('div');
  grid.className = 'bento-grid';
  grid.id = 'bentoGrid';

  BENTO_CATEGORIES.forEach(cat => {
    grid.appendChild(_buildCard(cat));
  });

  /* Insert after section header */
  const hdr = section.querySelector('.sec-hdr');
  if (hdr) hdr.insertAdjacentElement('afterend', grid);
  else section.appendChild(grid);

  /* Sync section-level i18n titles */
  _syncSectionTitles();

  /* Icon hover swap */
  _attachIconHover();
}

/* ── Build one .bn-frame + .bento-card ── */
function _buildCard(cat) {
  /* Outer Tron beam frame */
  const frame = document.createElement('div');
  frame.className = 'bn-frame';
  frame.style.cssText = `--bn-color:${cat.color};--bn-speed:${cat.speed}`;
  frame.dataset.catId = cat.id;

  /* Inner glass card */
  const card = document.createElement('div');
  card.className = `bento-card ${cat.className || ''}`;
  card.style.setProperty('--bn-color', cat.color);

  /* Top accent line */
  const bcTop = document.createElement('div');
  bcTop.className = 'bc-top';
  card.appendChild(bcTop);

  /* Automation radial pulse bg */
  if (cat.hasPulse) {
    const pulseBg = document.createElement('div');
    pulseBg.className = 'bc-pulse-bg';
    card.appendChild(pulseBg);
  }

  /* Content wrapper */
  const content = document.createElement('div');
  content.className = 'bento-content';

  /* ── Header ── */
  const header = document.createElement('div');
  header.className = 'bento-header';

  const icon = document.createElement('span');
  icon.className = 'bento-icon';
  icon.textContent = cat.icon;

  const headText = document.createElement('div');
  headText.className = 'bento-head-text';

  const title = document.createElement('div');
  title.className = 'bento-title';

  const prefix = document.createElement('span');
  prefix.className = 'bento-prefix';
  prefix.textContent = '//';

  const titleLabel = document.createElement('span');
  titleLabel.className = 'bento-title-label';
  titleLabel.dataset.i18n = cat.i18nCat;
  titleLabel.textContent = _t(cat.i18nCat, cat.label);

  title.appendChild(prefix);
  title.appendChild(titleLabel);

  const desc = document.createElement('div');
  desc.className = 'bento-desc';
  desc.dataset.i18n = cat.i18nDesc;
  desc.textContent = _t(cat.i18nDesc, cat.desc);

  const badge = document.createElement('div');
  badge.className = 'bento-badge';
  badge.textContent = cat.tags.length + ' ' + _t('s4-tools', 'tools');

  headText.appendChild(title);
  headText.appendChild(desc);
  headText.appendChild(badge);
  header.appendChild(icon);
  header.appendChild(headText);
  content.appendChild(header);

  /* ── Tech tags ── */
  const techGrid = document.createElement('div');
  techGrid.className = 'tech-grid';
  cat.tags.forEach(tagName => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.style.setProperty('--bn-color', cat.color);
    tag.textContent = tagName;
    techGrid.appendChild(tag);
  });
  content.appendChild(techGrid);

  /* ── Footer ── */
  const footer = document.createElement('div');
  footer.className = 'bento-footer';

  const dot = document.createElement('div');
  dot.className = 'pulse-dot';

  const footTxt = document.createElement('span');
  footTxt.className = 'footer-text';
  footTxt.dataset.i18n = cat.i18nFoot;
  footTxt.textContent = _t(cat.i18nFoot, cat.foot);

  const count = document.createElement('span');
  count.className = 'footer-count';
  count.style.setProperty('--bn-color', cat.color);
  count.textContent = _hex(cat.tags.length);

  footer.appendChild(dot);
  footer.appendChild(footTxt);
  footer.appendChild(count);
  content.appendChild(footer);

  card.appendChild(content);
  frame.appendChild(card);
  return frame;
}

/* ── Icon hover swap ── */
function _attachIconHover() {
  document.querySelectorAll('.bn-frame').forEach(frame => {
    const catId = frame.dataset.catId;
    const cat = BENTO_CATEGORIES.find(c => c.id === catId);
    if (!cat) return;
    const icon = frame.querySelector('.bento-icon');
    frame.addEventListener('mouseenter', () => { if (cat.iconHover) icon.textContent = cat.iconHover; });
    frame.addEventListener('mouseleave', () => { icon.textContent = cat.icon; });
  });
}

/* ── Sync section header titles ── */
function _syncSectionTitles() {
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const t = (typeof I18N !== 'undefined') ? I18N[lang] : null;
  if (!t) return;
  const s4t = document.getElementById('s4t');
  const s4s = document.getElementById('s4s');
  if (s4t && t['s4-title'])   s4t.textContent = t['s4-title'];
  if (s4s && t['s4-sub'])     s4s.textContent = t['s4-sub'];
}

/* ══════════════════════════════════════════════════
   refreshNeural() — called on every language switch
══════════════════════════════════════════════════ */
function refreshNeural() {
  _syncSectionTitles();

  /* Re-translate every labelled node */
  document.querySelectorAll('.bn-frame [data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const catId = el.closest('.bn-frame')?.dataset.catId;
    const cat = catId ? BENTO_CATEGORIES.find(c => c.id === catId) : null;

    /* Pick the right fallback field */
    let fallback;
    if (cat) {
      if (key === cat.i18nCat)  fallback = cat.label;
      if (key === cat.i18nDesc) fallback = cat.desc;
      if (key === cat.i18nFoot) fallback = cat.foot;
    }

    const val = _t(key, fallback);
    if (val) el.textContent = val;
  });

  /* Re-translate badges */
  document.querySelectorAll('.bento-badge').forEach(badge => {
    const frame = badge.closest('.bn-frame');
    if (!frame) return;
    const cat = BENTO_CATEGORIES.find(c => c.id === frame.dataset.catId);
    if (!cat) return;
    badge.textContent = cat.tags.length + ' ' + _t('s4-tools', 'tools');
  });
}

window.initNeural    = initNeural;
window.refreshNeural = refreshNeural;
