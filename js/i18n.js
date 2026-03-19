/* ═══════════════════════════════════════════════════
   i18n.js — Global Language Switcher
   Covers: EN · FR · ES · JA
   All 8 s4 neural-map categories translated in every language.
═══════════════════════════════════════════════════ */

const I18N = {

  /* ══════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════ */
  en: {
    'hero-title':  'DevOps &amp; AIOps Engineer &nbsp;·&nbsp; AI-Powered Automation Expert',
    'hero-bio':    'Detail-oriented Digital Nomad with 6+ years of success driving change through<br>managing complex programs and AI-powered automation',
    'hero-btn':    '▶ &nbsp;ENTER THE NETWORK',
    'stat-years':  'Years Active',
    'stat-cities': 'Cities Deployed',
    'stat-certs':  'Certifications',
    'stat-langs':  'Languages',
    'scroll-hint': 'Scroll',

    's2-title':   'GLOBAL OPERATIONS',
    's2-sub':     'Interactive 3D Globe · Click any city node to explore',
    'globe-hint': 'DRAG TO ROTATE &nbsp;·&nbsp; CLICK NODES TO EXPLORE',

    /* ── S3 Projects ── */
    's3-title': 'PERSONAL PROJECTS',
    's3-sub':   'System Design · AI-Powered Automation · Production Deployments',

    'c1-num':  '01 / E-COMMERCE · ERP',
    'c1-name': 'ERP SYNC<br>ENGINE',
    'c1-desc': 'Designed RESTful APIs linking major e-commerce marketplaces with Odoo Community for real-time inventory and order sync. Deployed at Óxido Verde, Hosono DE, and MisterComp.',
    'c1-link': '→ VIEW ON GITLAB',

    'c2-num':  '02 / AI · HARDWARE',
    'c2-name': 'ATHENA<br>VOICE AI',
    'c2-desc': 'Self-directed R&amp;D device fusing LLM reasoning with custom low-power hardware — sub-200ms audio response, 94% intent accuracy, multi-turn context via LangChain. No GPU required.',
    'c2-link': '→ VIEW ON GITHUB',

    'c3-num':  '03 / DATA · INTEGRATION',
    'c3-name': 'MULTI-PLATFORM<br>DATA PIPELINES',
    'c3-desc': 'Developed and optimised Python automation scripts for large-scale multi-platform data integration and transformation at A-B InBev (Prague) and Makana-Partners (Tokyo).',
    'c3-link': '→ VIEW ON GITHUB',

    'c4-num':  '04 / AUTOMATION · AIOPS',
    'c4-name': 'AUTOMATION<br>FOUNDRY',
    'c4-desc': 'Built automated workflows for seamless data flow and orchestrated CI/CD pipelines. From low-code RPA to infrastructure-as-code — end-to-end AIOps coverage.',
    'c4-link': '→ VIEW ON GITHUB',

    'c5-num':  '05 / STARTUP · CTO',
    'c5-name': 'MISTERCOMP<br>PLATFORM',
    'c5-desc': 'Founder &amp; CTO in Douala, Cameroon. Built the entire stack — Django REST backend, Angular SPA, AWS infra, and Odoo ERP integrations. 500+ users in under 12 months.',
    'c5-link': '→ VIEW ON GITLAB',

    'c6-num':  '06 / DEVOPS · CLOUD',
    'c6-name': 'MULTI-CLOUD<br>DEVOPS INFRA',
    'c6-desc': 'Containerised microservices deployed across AWS &amp; GCP — Kubernetes, Terraform IaC, zero-downtime blue-green GitOps pipelines. Infrastructure costs cut by 65%.',
    'c6-link': '→ VIEW ON GITHUB',

    /* ── S4 Neural Map — all 8 categories ── */
    's4-title':     'CORE COMPETENCIES',
    's4-sub':       'Skills learned across the years — inclusive but not limited to the stack below',
    'neural-title': 'CORE COMPETENCIES',
    'neural-sub':   'Skills learned across the years — inclusive but not limited to the stack below',
    's4-tools':     'tools',

    's4-cat-devops':       'DevOps & Cloud',
    's4-desc-devops':      'CI/CD · IaC · Container orchestration · Multi-cloud',
    's4-foot-devops':      'INFRASTRUCTURE AS CODE',

    's4-cat-automation':   'AI & Automation',
    's4-desc-automation':  'Agentic AI · workflow automation · AIOps · LLM pipelines',
    's4-foot-automation':  'AIOPS & INTELLIGENT WORKFLOWS',

    's4-cat-programming':  'Programming',
    's4-desc-programming': 'System scripting · data manipulation · full-stack logic',
    's4-foot-programming': 'LANGUAGES & SCRIPTING',

    's4-cat-datascience':  'Data & ML',
    's4-desc-datascience': 'ML pipelines · statistical analysis · predictive modelling · edge AI',
    's4-foot-datascience': 'MACHINE LEARNING & DATA SCIENCE',

    's4-cat-frameworks':   'Frameworks & APIs',
    's4-desc-frameworks':  'Backend services · SPA frontends · ERP integration · REST & GraphQL',
    's4-foot-frameworks':  'WEB & APPLICATION FRAMEWORKS',

    's4-cat-security':     'Security & QA',
    's4-desc-security':    'Zero-trust · penetration testing · automated QA · SIEM · compliance',
    's4-foot-security':    'CYBERSECURITY & TEST AUTOMATION',

    's4-cat-monitoring':   'Monitoring & Observability',
    's4-desc-monitoring':  'Real-time telemetry · alerting · log aggregation · incident response',
    's4-foot-monitoring':  'OBSERVABILITY STACK',

    's4-cat-databases':    'Databases & Storage',
    's4-desc-databases':   'Relational · NoSQL · in-memory caching · search · object storage',
    's4-foot-databases':   'DATA PERSISTENCE LAYER',

    /* ── S5 Archive ── */
    's5-title': 'THE ARCHIVE',
    's5-sub':   'Credentials · Certifications · Academic Vault',

    's5-c1-cat':        'Academic Degrees',
    's5-c1-deg1-label': 'M.Sc.',
    's5-c1-deg1':       'M.Sc. Computer Science',
    's5-c1-uni1':       'MIT World Peace University, Pune',
    's5-c1-gpa1':       '8.52 / 10 CGPA',
    's5-c1-badge':      '2× MERIT SCHOLARSHIP',
    's5-c1-deg2':       'B.Tech Software Engineering',
    's5-c1-uni2':       'University of Buea, Cameroon',
    's5-c1-gpa2':       '3.46 / 4.0 CGPA',

    's5-c2-cat':    'Professional Certification',
    's5-c2-title':  'CyberOps Associate',
    's5-c2-iss':    'Cisco Systems, Inc.',
    's5-c2-status': 'Verified · Active',
    's5-c2-btn':    'Verify Official Badge ↗',

    's5-c3-cat':   'Linguistics',
    's5-c3-title': 'Multilingual Professional',
    's5-c3-sub':   '4 Languages · C1–C2 CEFR Level',
    'lang-en':     'ENGLISH',
    'lang-fr':     'FRENCH',
    'lang-es':     'SPANISH',
    'lang-ja':     'JAPANESE',

    /* ── S6 Terminal ── */
    's6-title': 'ENGAGEMENT & CONTACT',
    's6-sub':   'Professional Network · Direct Communications · Resume Download',
    'cv-btn':   'DOWNLOAD CV',

    'sbar-online': 'SYSTEM ONLINE',
    'sbar-exp':    '6+ YRS EXPERIENCE',
    'sbar-nexus':  'GLOBAL NEXUS ACTIVE',

    'nav-0': 'Gateway', 'nav-1': 'Global',  'nav-2': 'Projects',
    'nav-3': 'Skills',  'nav-4': 'History', 'nav-5': 'Contact',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: connection established ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">whoami --full-profile</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NAME  </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  ROLE  </span><span class="t-val">  DevOps · AIOps · Automation Expert</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TEL   </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE  </span><span class="t-val">  Silver Spring, MD, USA</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP   </span><span class="t-val">  6+ years · 9 cities · 4 languages</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">ls ./links/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">cat contact.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-out">ready to connect. <span class="cursor-blink"></span></span></span>'],
    ],
  },

  /* ══════════════════════════════════════════
     FRENCH
  ══════════════════════════════════════════ */
  fr: {
    'hero-title':  'Ingénieur DevOps &amp; AIOps &nbsp;·&nbsp; Expert en Automatisation IA',
    'hero-bio':    'Nomade numérique orienté détail avec 6+ ans de succès en transformation digitale<br>via la gestion de programmes complexes et l\'automatisation IA',
    'hero-btn':    '▶ &nbsp;ENTRER DANS LE RÉSEAU',
    'stat-years':  'Années d\'activité',
    'stat-cities': 'Villes déployées',
    'stat-certs':  'Certifications',
    'stat-langs':  'Langues',
    'scroll-hint': 'Défiler',

    's2-title':   'OPÉRATIONS MONDIALES',
    's2-sub':     'Globe 3D interactif · Cliquez sur un nœud pour explorer',
    'globe-hint': 'GLISSER POUR PIVOTER &nbsp;·&nbsp; CLIQUER LES NŒUDS',

    's3-title': 'PROJETS PERSONNELS',
    's3-sub':   'Conception de Systèmes · Automatisation IA · Déploiements en Production',

    'c1-num':  '01 / E-COMMERCE · ERP',
    'c1-name': 'MOTEUR DE<br>SYNC ERP',
    'c1-desc': 'Conception d\'APIs RESTful reliant les principales marketplaces e-commerce à Odoo Community pour une synchronisation inventaire/commandes en temps réel. Déployé chez Óxido Verde, Hosono DE et MisterComp.',
    'c1-link': '→ VOIR SUR GITLAB',

    'c2-num':  '02 / IA · MATÉRIEL',
    'c2-name': 'ATHENA<br>IA VOCALE',
    'c2-desc': 'Dispositif R&amp;D autonome fusionnant raisonnement LLM et matériel basse consommation — réponse audio &lt;200ms, 94% précision d\'intention, contexte multi-tours via LangChain. Sans GPU.',
    'c2-link': '→ VOIR SUR GITHUB',

    'c3-num':  '03 / DONNÉES · INTÉGRATION',
    'c3-name': 'PIPELINES DE DONNÉES<br>MULTI-PLATEFORMES',
    'c3-desc': 'Développement et optimisation de scripts Python pour l\'intégration et transformation massives de données multi-plateformes chez A-B InBev (Prague) et Makana-Partners (Tokyo).',
    'c3-link': '→ VOIR SUR GITHUB',

    'c4-num':  '04 / AUTOMATISATION · AIOPS',
    'c4-name': 'FONDERIE<br>D\'AUTOMATISATION',
    'c4-desc': 'Création de workflows automatisés pour un flux de données fluide et orchestration de pipelines CI/CD. Du RPA low-code à l\'infrastructure-as-code — couverture AIOps de bout en bout.',
    'c4-link': '→ VOIR SUR GITHUB',

    'c5-num':  '05 / STARTUP · CTO',
    'c5-name': 'MISTERCOMP<br>PLATEFORME',
    'c5-desc': 'Fondateur &amp; CTO à Douala, Cameroun. Stack complète — backend Django REST, SPA Angular, infra AWS, intégrations Odoo ERP. Plus de 500 utilisateurs en moins de 12 mois.',
    'c5-link': '→ VOIR SUR GITLAB',

    'c6-num':  '06 / DEVOPS · CLOUD',
    'c6-name': 'INFRASTRUCTURE<br>MULTI-CLOUD',
    'c6-desc': 'Microservices conteneurisés déployés sur AWS &amp; GCP — Kubernetes, Terraform IaC, pipelines GitOps blue-green sans interruption. Coûts d\'infra réduits de 65%.',
    'c6-link': '→ VOIR SUR GITHUB',

    's4-title':     'COMPÉTENCES CLÉS',
    's4-sub':       'Les compétences acquises au fil des ans incluent, sans s\'y limiter, celles ci-dessous',
    'neural-title': 'COMPÉTENCES CLÉS',
    'neural-sub':   'Les compétences acquises au fil des ans incluent, sans s\'y limiter, celles ci-dessous',
    's4-tools':     'outils',

    's4-cat-devops':       'DevOps & Cloud',
    's4-desc-devops':      'CI/CD · IaC · Orchestration de conteneurs · Multi-cloud',
    's4-foot-devops':      'INFRASTRUCTURE AS CODE',

    's4-cat-automation':   'IA & Automatisation',
    's4-desc-automation':  'IA agentique · workflows automatisés · AIOps · pipelines LLM',
    's4-foot-automation':  'AIOPS & WORKFLOWS INTELLIGENTS',

    's4-cat-programming':  'Programmation',
    's4-desc-programming': 'Scripting système · manipulation de données · logique full-stack',
    's4-foot-programming': 'LANGAGES & SCRIPTS',

    's4-cat-datascience':  'Données & ML',
    's4-desc-datascience': 'Pipelines ML · analyse statistique · modélisation prédictive · edge AI',
    's4-foot-datascience': 'MACHINE LEARNING & DATA SCIENCE',

    's4-cat-frameworks':   'Frameworks & APIs',
    's4-desc-frameworks':  'Services backend · SPA · intégration ERP · REST & GraphQL',
    's4-foot-frameworks':  'FRAMEWORKS WEB & APPLICATIFS',

    's4-cat-security':     'Sécurité & QA',
    's4-desc-security':    'Zero-trust · tests d\'intrusion · QA automatisé · SIEM · conformité',
    's4-foot-security':    'CYBERSÉCURITÉ & AUTOMATISATION DES TESTS',

    's4-cat-monitoring':   'Monitoring & Observabilité',
    's4-desc-monitoring':  'Télémétrie temps réel · alertes · agrégation de logs · gestion des incidents',
    's4-foot-monitoring':  'STACK D\'OBSERVABILITÉ',

    's4-cat-databases':    'Bases de Données & Stockage',
    's4-desc-databases':   'Relationnel · NoSQL · cache en mémoire · recherche · stockage objet',
    's4-foot-databases':   'COUCHE DE PERSISTANCE DES DONNÉES',

    's5-title': 'LES ARCHIVES',
    's5-sub':   'Diplômes · Certifications · Voûte académique',

    's5-c1-cat':        'Diplômes Académiques',
    's5-c1-deg1-label': 'M.Sc.',
    's5-c1-deg1':       'M.Sc. Informatique',
    's5-c1-uni1':       'MIT World Peace University, Pune',
    's5-c1-gpa1':       '8,52 / 10 CGPA',
    's5-c1-badge':      '2× BOURSE AU MÉRITE',
    's5-c1-deg2':       'B.Tech Génie Logiciel',
    's5-c1-uni2':       'Université de Buea, Cameroun',
    's5-c1-gpa2':       '3,46 / 4,0 CGPA',

    's5-c2-cat':    'Certification Professionnelle',
    's5-c2-title':  'CyberOps Associate',
    's5-c2-iss':    'Cisco Systems, Inc.',
    's5-c2-status': 'Vérifié · Actif',
    's5-c2-btn':    'Vérifier le Badge Officiel ↗',

    's5-c3-cat':   'Linguistique',
    's5-c3-title': 'Professionnel Multilingue',
    's5-c3-sub':   '4 Langues · Niveau C1–C2 CECRL',
    'lang-en':     'ANGLAIS',
    'lang-fr':     'FRANÇAIS',
    'lang-es':     'ESPAGNOL',
    'lang-ja':     'JAPONAIS',

    's6-title': 'ENGAGEMENT ET CONTACT',
    's6-sub':   'Réseau Professionnel · Communications Directes · Téléchargement de CV',
    'cv-btn':   'TÉLÉCHARGER CV',

    'sbar-online': 'SYSTÈME EN LIGNE',
    'sbar-exp':    '6+ ANS D\'EXPÉRIENCE',
    'sbar-nexus':  'NEXUS MONDIAL ACTIF',

    'nav-0': 'Entrée', 'nav-1': 'Mondial',      'nav-2': 'Projets',
    'nav-3': 'Compétences', 'nav-4': 'Parcours', 'nav-5': 'Contact',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG : connexion établie ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">whoami --profil-complet</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NOM    </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  RÔLE   </span><span class="t-val">  DevOps · AIOps · Expert en Automatisation</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TÉL    </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE   </span><span class="t-val">  Silver Spring, MD, USA</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP    </span><span class="t-val">  6+ ans · 9 villes · 4 langues</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">ls ./liens/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">cat contact.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-out">prêt à connecter. <span class="cursor-blink"></span></span></span>'],
    ],
  },

  /* ══════════════════════════════════════════
     SPANISH
  ══════════════════════════════════════════ */
  es: {
    'hero-title':  'Ingeniero DevOps &amp; AIOps &nbsp;·&nbsp; Experto en Automatización con IA',
    'hero-bio':    'Nómada digital orientado al detalle con 6+ años impulsando el cambio<br>mediante programas complejos y automatización potenciada por IA',
    'hero-btn':    '▶ &nbsp;ENTRAR A LA RED',
    'stat-years':  'Años Activos',
    'stat-cities': 'Ciudades Desplegadas',
    'stat-certs':  'Certificaciones',
    'stat-langs':  'Idiomas',
    'scroll-hint': 'Desplazar',

    's2-title':   'OPERACIONES GLOBALES',
    's2-sub':     'Globo 3D interactivo · Haz clic en un nodo para explorar',
    'globe-hint': 'ARRASTRAR PARA ROTAR &nbsp;·&nbsp; CLIC EN NODOS',

    's3-title': 'PROYECTOS PERSONALES',
    's3-sub':   'Diseño de Sistemas · Automatización con IA · Despliegues en Producción',

    'c1-num':  '01 / E-COMMERCE · ERP',
    'c1-name': 'MOTOR DE<br>SYNC ERP',
    'c1-desc': 'Diseño de APIs RESTful que conectan los principales marketplaces de e-commerce con Odoo Community para sincronización de inventario y pedidos en tiempo real. Desplegado en Óxido Verde, Hosono DE y MisterComp.',
    'c1-link': '→ VER EN GITLAB',

    'c2-num':  '02 / IA · HARDWARE',
    'c2-name': 'ATHENA<br>IA DE VOZ',
    'c2-desc': 'Dispositivo R&amp;D autónomo que fusiona razonamiento LLM con hardware de bajo consumo — respuesta de audio &lt;200ms, 94% precisión de intención, contexto multi-turno vía LangChain. Sin GPU.',
    'c2-link': '→ VER EN GITHUB',

    'c3-num':  '03 / DATOS · INTEGRACIÓN',
    'c3-name': 'PIPELINES DE DATOS<br>MULTIPLATAFORMA',
    'c3-desc': 'Desarrollo y optimización de scripts Python para integración y transformación masiva de datos multiplataforma en A-B InBev (Praga) y Makana-Partners (Tokio).',
    'c3-link': '→ VER EN GITHUB',

    'c4-num':  '04 / AUTOMATIZACIÓN · AIOPS',
    'c4-name': 'FUNDICIÓN DE<br>AUTOMATIZACIÓN',
    'c4-desc': 'Creación de flujos de trabajo automatizados para flujo de datos y orquestación de pipelines CI/CD. Desde RPA low-code hasta infrastructure-as-code — cobertura AIOps de extremo a extremo.',
    'c4-link': '→ VER EN GITHUB',

    'c5-num':  '05 / STARTUP · CTO',
    'c5-name': 'MISTERCOMP<br>PLATAFORMA',
    'c5-desc': 'Fundador &amp; CTO en Duala, Camerún. Stack completa — backend Django REST, SPA Angular, infra AWS, integraciones Odoo ERP. Más de 500 usuarios en menos de 12 meses.',
    'c5-link': '→ VER EN GITLAB',

    'c6-num':  '06 / DEVOPS · CLOUD',
    'c6-name': 'INFRAESTRUCTURA<br>MULTI-CLOUD',
    'c6-desc': 'Microservicios contenedorizados desplegados en AWS &amp; GCP — Kubernetes, Terraform IaC y pipelines GitOps blue-green sin tiempo de inactividad. Costos de infra reducidos un 65%.',
    'c6-link': '→ VER EN GITHUB',

    's4-title':     'COMPETENCIAS CLAVE',
    's4-sub':       'Las habilidades adquiridas a lo largo de los años incluyen, sin limitarse, las siguientes',
    'neural-title': 'COMPETENCIAS CLAVE',
    'neural-sub':   'Las habilidades adquiridas a lo largo de los años incluyen, sin limitarse, las siguientes',
    's4-tools':     'herramientas',

    's4-cat-devops':       'DevOps & Cloud',
    's4-desc-devops':      'CI/CD · IaC · Orquestación de contenedores · Multi-cloud',
    's4-foot-devops':      'INFRAESTRUCTURA COMO CÓDIGO',

    's4-cat-automation':   'IA & Automatización',
    's4-desc-automation':  'IA agéntica · automatización de workflows · AIOps · pipelines LLM',
    's4-foot-automation':  'AIOPS & FLUJOS INTELIGENTES',

    's4-cat-programming':  'Programación',
    's4-desc-programming': 'Scripts de sistema · manipulación de datos · lógica full-stack',
    's4-foot-programming': 'LENGUAJES & SCRIPTING',

    's4-cat-datascience':  'Datos & ML',
    's4-desc-datascience': 'Pipelines ML · análisis estadístico · modelado predictivo · edge AI',
    's4-foot-datascience': 'MACHINE LEARNING & CIENCIA DE DATOS',

    's4-cat-frameworks':   'Frameworks & APIs',
    's4-desc-frameworks':  'Servicios backend · SPA · integración ERP · REST & GraphQL',
    's4-foot-frameworks':  'FRAMEWORKS WEB & APLICATIVOS',

    's4-cat-security':     'Seguridad & QA',
    's4-desc-security':    'Zero-trust · pruebas de penetración · QA automatizado · SIEM · cumplimiento',
    's4-foot-security':    'CIBERSEGURIDAD & AUTOMATIZACIÓN DE PRUEBAS',

    's4-cat-monitoring':   'Monitoreo & Observabilidad',
    's4-desc-monitoring':  'Telemetría en tiempo real · alertas · agregación de logs · respuesta a incidentes',
    's4-foot-monitoring':  'STACK DE OBSERVABILIDAD',

    's4-cat-databases':    'Bases de Datos & Almacenamiento',
    's4-desc-databases':   'Relacional · NoSQL · caché en memoria · búsqueda · almacenamiento de objetos',
    's4-foot-databases':   'CAPA DE PERSISTENCIA DE DATOS',

    's5-title': 'EL ARCHIVO',
    's5-sub':   'Credenciales · Certificaciones · Bóveda Académica',

    's5-c1-cat':        'Títulos Académicos',
    's5-c1-deg1-label': 'M.Sc.',
    's5-c1-deg1':       'M.Sc. Ciencias de la Computación',
    's5-c1-uni1':       'MIT World Peace University, Pune',
    's5-c1-gpa1':       '8,52 / 10 CGPA',
    's5-c1-badge':      '2× BECA AL MÉRITO',
    's5-c1-deg2':       'B.Tech Ingeniería de Software',
    's5-c1-uni2':       'Universidad de Buea, Camerún',
    's5-c1-gpa2':       '3,46 / 4,0 CGPA',

    's5-c2-cat':    'Certificación Profesional',
    's5-c2-title':  'CyberOps Associate',
    's5-c2-iss':    'Cisco Systems, Inc.',
    's5-c2-status': 'Verificado · Activo',
    's5-c2-btn':    'Verificar Insignia Oficial ↗',

    's5-c3-cat':   'Lingüística',
    's5-c3-title': 'Profesional Multilingüe',
    's5-c3-sub':   '4 Idiomas · Nivel C1–C2 MCER',
    'lang-en':     'INGLÉS',
    'lang-fr':     'FRANCÉS',
    'lang-es':     'ESPAÑOL',
    'lang-ja':     'JAPONÉS',

    's6-title': 'COMPROMISO Y CONTACTO',
    's6-sub':   'Red Profesional · Comunicaciones Directas · Descarga de CV',
    'cv-btn':   'DESCARGAR CV',

    'sbar-online': 'SISTEMA EN LÍNEA',
    'sbar-exp':    '6+ AÑOS DE EXPERIENCIA',
    'sbar-nexus':  'NEXO GLOBAL ACTIVO',

    'nav-0': 'Entrada', 'nav-1': 'Global',        'nav-2': 'Proyectos',
    'nav-3': 'Habilidades', 'nav-4': 'Historial', 'nav-5': 'Contacto',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: conexión establecida ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">whoami --perfil-completo</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NOMBRE </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  ROL    </span><span class="t-val">  DevOps · AIOps · Experto en Automatización</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TEL    </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE   </span><span class="t-val">  Silver Spring, MD, USA</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP    </span><span class="t-val">  6+ años · 9 ciudades · 4 idiomas</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">ls ./enlaces/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">cat contacto.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-out">listo para conectar. <span class="cursor-blink"></span></span></span>'],
    ],
  },

  /* ══════════════════════════════════════════
     JAPANESE
  ══════════════════════════════════════════ */
  ja: {
    'hero-title':  'DevOps &amp; AIOps エンジニア &nbsp;·&nbsp; AI自動化エキスパート',
    'hero-bio':    '6年以上の実績を持つデジタルノマド。複雑なプログラム管理と<br>AI駆動の自動化で変革を推進',
    'hero-btn':    '▶ &nbsp;ネットワークへ入る',
    'stat-years':  '活動年数',
    'stat-cities': '展開都市',
    'stat-certs':  '認定資格',
    'stat-langs':  '言語',
    'scroll-hint': 'スクロール',

    's2-title':   'グローバル・オペレーション',
    's2-sub':     'インタラクティブ3Dグローブ · 都市ノードをクリックして探索',
    'globe-hint': 'ドラッグで回転 &nbsp;·&nbsp; ノードをクリックして探索',

    's3-title': '個人プロジェクト',
    's3-sub':   'システム設計 · AI駆動の自動化 · 本番環境展開',

    'c1-num':  '01 / Eコマース · ERP',
    'c1-name': 'ERPシンク<br>エンジン',
    'c1-desc': '主要なECマーケットプレイスとOdoo Communityをつなぐリアルタイム在庫・受注同期のRESTful APIを設計。Óxido Verde、Hosono DE、MisterCompで実装。',
    'c1-link': '→ GitLabで見る',

    'c2-num':  '02 / AI · ハードウェア',
    'c2-name': 'ATHENA<br>音声AI',
    'c2-desc': 'LLM推論とカスタム低電力ハードウェアを融合した自律型R&Dデバイス — 200ms未満の音声応答、94%意図認識精度、LangChainによる多ターンコンテキスト管理。GPU不要。',
    'c2-link': '→ GitHubで見る',

    'c3-num':  '03 / データ · 統合',
    'c3-name': 'マルチプラットフォーム<br>データパイプライン',
    'c3-desc': 'A-B InBev（プラハ）とMakana-Partners（東京）でPython自動化スクリプトを開発・最適化し、大規模マルチプラットフォームデータの統合と変換を実現。',
    'c3-link': '→ GitHubで見る',

    'c4-num':  '04 / 自動化 · AIOPS',
    'c4-name': 'オートメーション<br>ファウンドリー',
    'c4-desc': 'シームレスなデータフローの自動化ワークフローを構築し、CI/CDパイプラインを統合。ローコードRPAからIaCまで — エンドツーエンドのAIOpsカバレッジ。',
    'c4-link': '→ GitHubで見る',

    'c5-num':  '05 / スタートアップ · CTO',
    'c5-name': 'MISTERCOMP<br>プラットフォーム',
    'c5-desc': 'カメルーン・ドゥアラで創業者兼CTO。Django RESTバックエンド、Angular SPA、AWSインフラ、Odoo ERP統合を含む全スタックを構築。12ヶ月以内に500人以上のユーザーを達成。',
    'c5-link': '→ GitLabで見る',

    'c6-num':  '06 / DevOps · クラウド',
    'c6-name': 'マルチクラウド<br>DevOpsインフラ',
    'c6-desc': 'AWSとGCPにまたがるコンテナ化マイクロサービスをデプロイ — Kubernetes、Terraform IaC、ゼロダウンタイムのBlue-Green GitOpsパイプライン。インフラコストを65%削減。',
    'c6-link': '→ GitHubで見る',

    's4-title':     'コア・コンピタンス',
    's4-sub':       '長年培ってきたスキルは以下の通りですが、これらに限定されません',
    'neural-title': 'コア・コンピタンス',
    'neural-sub':   '長年培ってきたスキルは以下の通りですが、これらに限定されません',
    's4-tools':     'ツール',

    's4-cat-devops':       'DevOps & クラウド',
    's4-desc-devops':      'CI/CD · IaC · コンテナオーケストレーション · マルチクラウド',
    's4-foot-devops':      'インフラストラクチャ・アズ・コード',

    's4-cat-automation':   'AI & 自動化',
    's4-desc-automation':  'エージェントAI · ワークフロー自動化 · AIOps · LLMパイプライン',
    's4-foot-automation':  'AIOps & インテリジェントワークフロー',

    's4-cat-programming':  'プログラミング',
    's4-desc-programming': 'システムスクリプト · データ操作 · フルスタックロジック',
    's4-foot-programming': '言語 & スクリプト',

    's4-cat-datascience':  'データ & ML',
    's4-desc-datascience': 'MLパイプライン · 統計分析 · 予測モデリング · エッジAI',
    's4-foot-datascience': 'マシーンラーニング & データサイエンス',

    's4-cat-frameworks':   'フレームワーク & API',
    's4-desc-frameworks':  'バックエンドサービス · SPA · ERP統合 · REST & GraphQL',
    's4-foot-frameworks':  'ウェブ & アプリケーションフレームワーク',

    's4-cat-security':     'セキュリティ & QA',
    's4-desc-security':    'ゼロトラスト · ペネトレーションテスト · 自動QA · SIEM · コンプライアンス',
    's4-foot-security':    'サイバーセキュリティ & テスト自動化',

    's4-cat-monitoring':   'モニタリング & オブザーバビリティ',
    's4-desc-monitoring':  'リアルタイムテレメトリ · アラート · ログ集約 · インシデント対応',
    's4-foot-monitoring':  'オブザーバビリティスタック',

    's4-cat-databases':    'データベース & ストレージ',
    's4-desc-databases':   'リレーショナル · NoSQL · インメモリキャッシュ · 検索 · オブジェクトストレージ',
    's4-foot-databases':   'データ永続化レイヤー',

    's5-title': 'アーカイブ',
    's5-sub':   '資格 · 認定 · 学術記録',

    's5-c1-cat':        '学術学位',
    's5-c1-deg1-label': '修士',
    's5-c1-deg1':       '理学修士 コンピュータサイエンス',
    's5-c1-uni1':       'MITワールドピース大学、プネー',
    's5-c1-gpa1':       '8.52 / 10 CGPA',
    's5-c1-badge':      '2× 成績優秀奨学金',
    's5-c1-deg2':       '工学士 ソフトウェアエンジニアリング',
    's5-c1-uni2':       'ブエア大学、カメルーン',
    's5-c1-gpa2':       '3.46 / 4.0 CGPA',

    's5-c2-cat':    'プロフェッショナル認定',
    's5-c2-title':  'CyberOps アソシエイト',
    's5-c2-iss':    'シスコシステムズ株式会社',
    's5-c2-status': '認証済み · 有効',
    's5-c2-btn':    '公式バッジを確認 ↗',

    's5-c3-cat':   '言語学',
    's5-c3-title': 'マルチリンガルプロフェッショナル',
    's5-c3-sub':   '4言語 · CEFR C1–C2レベル',
    'lang-en':     '英語',
    'lang-fr':     'フランス語',
    'lang-es':     'スペイン語',
    'lang-ja':     '日本語',

    's6-title': 'エンゲージメントと連絡先',
    's6-sub':   'プロフェッショナルネットワーク · 直接のやり取り · 履歴書ダウンロード',
    'cv-btn':   '履歴書をダウンロード',

    'sbar-online': 'システムオンライン',
    'sbar-exp':    '6年以上の経験',
    'sbar-nexus':  'グローバルネクサス稼働中',

    'nav-0': 'ゲートウェイ', 'nav-1': 'グローバル', 'nav-2': 'プロジェクト',
    'nav-3': 'スキル',       'nav-4': '実績',        'nav-5': '連絡先',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: 接続確立 ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">whoami --フルプロファイル</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  名前    </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  役職    </span><span class="t-val">  DevOps · AIOps · 自動化エキスパート</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  メール  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  電話    </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  拠点    </span><span class="t-val">  シルバースプリング, MD, アメリカ</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  経験    </span><span class="t-val">  6年以上 · 9都市 · 4言語</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">ls ./リンク/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">cat 連絡先.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-out">接続準備完了。 <span class="cursor-blink"></span></span></span>'],
    ],
  },
};

/* ══════════════════════════════════════════════════
   setGlobalLang(code)
══════════════════════════════════════════════════ */
let currentLang = 'en';

function setGlobalLang(code) {
  if (!I18N[code]) return;
  currentLang = code;
  const t = I18N[code];

  /* 1. All [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* 2. Side-nav dot labels */
  document.querySelectorAll('.nd').forEach(dot => {
    const i = parseInt(dot.getAttribute('data-i'));
    if (t['nav-' + i]) dot.setAttribute('data-l', t['nav-' + i]);
  });

  /* 3. Mark active topbar button */
  document.querySelectorAll('.ln-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === code.toUpperCase());
  });

  /* 4. Reset terminal */
  const termBody = document.getElementById('termBody');
  if (termBody) {
    termBody.innerHTML = '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">ping ELAD_ANEDO_DAUDET --connect</span></span>';
    if (typeof termDone !== 'undefined') termDone = false;
    const s6 = document.getElementById('s6');
    if (s6) {
      const r = s6.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0 && typeof initTerminal === 'function') initTerminal();
    }
  }

  /* 5. Sync s4 section header (belt + suspenders — also covered by [data-i18n]) */
  const s4t = document.getElementById('s4t');
  const s4s = document.getElementById('s4s');
  if (s4t && t['neural-title']) s4t.textContent = t['neural-title'];
  if (s4s && t['neural-sub'])   s4s.textContent = t['neural-sub'];

  /* 6. Refresh all 8 bento-grid card labels */
  if (typeof refreshNeural === 'function') refreshNeural();
}

function getLang() { return currentLang; }
