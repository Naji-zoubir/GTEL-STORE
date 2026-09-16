/* ══════════════════════════════════════════════════════════════════
   GTEL Solutions — shared-nav.js (v8 "Clean Pro")
   Injecte un header + footer UNIQUES et IDENTIQUES sur TOUTES les pages,
   y compris index.html. Gère aussi la transition douce entre les pages.
   Remplace l'ancien shared-nav.js + les 4 CSS concurrents.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  document.documentElement.classList.add('gtel-shell-pending');

  // ── 1 seul CSS, chargé une seule fois ──
  (function loadCSS() {
    ['gtel-unified-v4', 'gtel-unified-v5', 'gtel-premium-v6', 'gtel-simple-v7'].forEach(function (id) {
      var old = document.getElementById(id);
      if (old) old.remove();
    });
    if (!document.getElementById('gtel-unified-v8')) {
      var l = document.createElement('link');
      l.id = 'gtel-unified-v8'; l.rel = 'stylesheet';
      l.href = 'gtel-unified.css?v=8';
      document.head.appendChild(l);
    }
    if (!document.querySelector('link[data-gtel-fonts]')) {
      var f = document.createElement('link');
      f.setAttribute('data-gtel-fonts', '1');
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap';
      document.head.appendChild(f);
    }
  })();

  var currentFile = window.location.pathname.split('/').pop() || 'index.html';

  if (typeof window.openQuoteModal !== 'function') {
    window.openQuoteModal = function (service) {
      if (window.GTEL && typeof window.GTEL.openModal === 'function') {
        window.GTEL.openModal(service || 'Devis Global');
        return;
      }
      window.location.href = 'mailto:pro@gtelstore.ma?subject=' + encodeURIComponent(service || 'Demande de devis GTEL');
    };
  }

  // ── Source unique des solutions (menu + footer) ──
  var solutions = [
    { href: 'infrastructure-reseau.html', label: 'Infrastructure Réseau', i18n: 'nav.sol.network' },
    { href: 'datacenter.html', label: 'Datacenter', i18n: 'nav.sol.datacenter' },
    { href: 'cybersecurite.html', label: 'Cybersécurité', i18n: 'nav.sol.cyber' },
    { href: 'videosurveillance.html', label: 'Vidéosurveillance', i18n: 'nav.sol.video' },
    { href: 'controle-acces.html', label: 'Contrôle d\'Accès', i18n: 'nav.sol.access' },
    { href: 'telephonie-ip.html', label: 'Téléphonie IP', i18n: 'nav.sol.telephony' },
    { href: 'salles-reunion.html', label: 'Salles de Réunion', i18n: 'nav.sol.meeting' },
    { href: 'sonorisation.html', label: 'Sonorisation', i18n: 'nav.sol.sound' },
    { href: 'services-manages.html', label: 'Services Managés', i18n: 'nav.sol.managed' },
    { href: 'InfraDigitale.html', label: 'Infrastructure Digitale', i18n: 'nav.sol.digital' }
  ];

  function buildSolutionLinks() {
    return solutions.map(function (s) {
      var isCurrent = (currentFile === s.href) ? ' current-page' : '';
      return '<a href="' + s.href + '" class="' + isCurrent + '" data-i18n="' + s.i18n + '">' + s.label + '</a>';
    }).join('');
  }

  var isHome = (currentFile === 'index.html' || currentFile === '');

  // ── TOP BAR ──
  var topBarHTML =
    '<div class="gtel-topbar" id="gtel-topbar">' +
    '<div class="gtel-topbar-inner">' +
    '<div class="gtel-topbar-left">' +
    '<a href="tel:+212666287341"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>+212-666-287-341</a>' +
    '<span class="gtel-topbar-divider"></span>' +
    '<a href="mailto:pro@gtelstore.ma"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>pro@gtelstore.ma</a>' +
    '<span class="gtel-topbar-divider"></span>' +
    '<span data-i18n="topbar.delivery"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>Livraison partout au Maroc</span>' +
    '</div>' +
    '<div class="gtel-topbar-right">' +
    '<a href="#" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\');return false;" data-i18n="topbar.devis"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Demander un Devis</a>' +
    '</div></div></div>';

  // ── NAVBAR ──
  var navbarHTML =
    '<nav class="gtel-navbar" id="gtel-navbar">' +
    '<div class="gtel-navbar-inner">' +
    '<a href="index.html" class="gtel-navbar-logo"><img src="image/image.webp" alt="Logo GTEL"></a>' +
    '<div class="gtel-navbar-nav">' +
    '<a href="index.html" class="gtel-nav-link' + (isHome ? ' active' : '') + '" data-i18n="nav.home">Accueil</a>' +
    '<div class="gtel-solutions-wrap" tabindex="0">' +
    '<button class="gtel-solutions-trigger" aria-haspopup="true"><span data-i18n="nav.solutions">Solutions</span>' +
    '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg></button>' +
    '<div class="gtel-solutions-panel">' + buildSolutionLinks() + '</div>' +
    '</div>' +
    '<a href="index.html#poles" class="gtel-nav-link" data-i18n="nav.expertise">Expertise</a>' +
    '<a href="index.html#contact" class="gtel-nav-link" data-i18n="nav.contactlink">Contact</a>' +
    '</div>' +
    '<div class="gtel-navbar-actions">' +
    '<div class="gtel-lang-switch" id="gtel-lang-switch">' +
    '<button class="gtel-lang-btn" id="gtel-lang-btn">FR</button>' +
    '<div class="gtel-lang-menu">' +
    '<button onclick="gtelChangeLang(\'fr\')">FR</button>' +
    '<button onclick="gtelChangeLang(\'ar\')">AR</button>' +
    '<button onclick="gtelChangeLang(\'en\')">EN</button>' +
    '</div></div>' +
    '<button class="gtel-theme-toggle" id="gtel-theme-toggle" aria-label="Theme">' +
    '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>' +
    '</button>' +
    '<button class="gtel-nav-cta" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\')" data-i18n="nav.contact">Nous Contacter</button>' +
    '<button class="gtel-hamburger" id="gtel-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>' +
    '</div></div></nav>' +
    '<div class="gtel-mobile-overlay" id="gtel-mobile-overlay"></div>' +
    '<div class="gtel-mobile-panel" id="gtel-mobile-panel">' +
    '<div class="gtel-mobile-nav">' +
    '<a href="index.html" data-i18n="nav.home">Accueil</a>' +
    '<button id="gtel-mobile-solutions-btn" style="width:100%;text-align:left;background:none;border:none;padding:14px 6px;font-family:Sora,sans-serif;font-size:16px;font-weight:600;color:var(--ink);border-bottom:1px solid var(--line);cursor:pointer" data-i18n="nav.solutions">Solutions ▾</button>' +
    '<div id="gtel-mobile-solutions-sub" style="display:none;padding-left:12px">' + buildSolutionLinks() + '</div>' +
    '<a href="index.html#poles" data-i18n="nav.expertise">Expertise</a>' +
    '<a href="index.html#contact" data-i18n="nav.contactlink">Contact</a>' +
    '</div>' +
    '<button class="gtel-mobile-cta" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\');gtelCloseMobile();" data-i18n="nav.contact">Nous Contacter</button>' +
    '</div>';

  // ── FOOTER ──
  var ctaBannerHTML =
    '<div class="gtel-cta-banner"><div class="gtel-cta-card"><div>' +
    '<h3 data-i18n="cta.title">Un projet d\u2019infrastructure ? <em>Parlons-en.</em></h3>' +
    '<p data-i18n="cta.desc">Audit gratuit sous 48h — un seul interlocuteur, du conseil au matériel jusqu\u2019à la supervision.</p>' +
    '</div><div class="gtel-cta-actions">' +
    '<button class="gtel-cta-primary" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\')" data-i18n="cta.primary">Demander un audit</button>' +
    '<a class="gtel-cta-ghost" href="index.html#solutions" data-i18n="cta.secondary">Voir les solutions</a>' +
    '</div></div></div>';

  var socialHTML =
    '<div class="gtel-footer-social">' +
    '<a href="https://www.youtube.com/channel/UCglE90LPV-4MBtI3njcxhLA" target="_blank" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.06a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>' +
    '<a href="https://web.whatsapp.com/send?phone=+212666287341" target="_blank" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg></a>' +
    '<a href="https://www.linkedin.com/company/gtelstore" target="_blank" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>' +
    '<a href="https://www.instagram.com/gtelstore" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>' +
    '<a href="https://www.facebook.com/gtelstore" target="_blank" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"></path></svg></a>' +
    '<a href="https://www.tiktok.com/@gtelstore" target="_blank" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-.87-.96-1.35-2.2-1.35-3.5h-3.02v14.28c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.29 0 .57.04.83.12v-3.07a5.86 5.86 0 0 0-.83-.06A5.83 5.83 0 0 0 3.6 16.6a5.83 5.83 0 0 0 5.83 5.83 5.83 5.83 0 0 0 5.83-5.83V9.02a8.53 8.53 0 0 0 4.99 1.6V7.6a5.2 5.2 0 0 1-3.65-1.78z"></path></svg></a>' +
    '</div>';

  var footerHTML = ctaBannerHTML +
    '<footer class="gtel-footer" id="gtel-footer"><div class="gtel-footer-grid">' +
    '<div class="gtel-footer-brand"><img src="image/image.webp" alt="Logo GTEL">' +
    '<p data-i18n="footer.desc">Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.</p>' +
    socialHTML + '</div>' +
    '<div><h4 data-i18n="footer.nav">Navigation</h4><ul class="gtel-footer-links">' +
    '<li><a href="index.html" data-i18n="footer.home">Accueil</a></li>' +
    '<li><a href="index.html#solutions" data-i18n="footer.solutions">Nos Solutions</a></li>' +
    '<li><a href="index.html#poles" data-i18n="footer.expertise">Notre Expertise</a></li>' +
    '<li><a href="index.html#contact" data-i18n="footer.contact">Contact</a></li>' +
    '</ul></div>' +
    '<div><h4 data-i18n="footer.solutionsheading">Solutions</h4><ul class="gtel-footer-links">' +
    solutions.slice(0, 5).map(function (s) { return '<li><a href="' + s.href + '" data-i18n="' + s.i18n + '">' + s.label + '</a></li>'; }).join('') +
    '</ul></div>' +
    '<div><h4 data-i18n="footer.newsletter">Newsletter</h4>' +
    '<div class="gtel-footer-lang-btns" style="margin-bottom:14px">' +
    '<button onclick="gtelChangeLang(\'fr\')">FR</button><button onclick="gtelChangeLang(\'ar\')">AR</button><button onclick="gtelChangeLang(\'en\')">EN</button>' +
    '</div>' +
    '<form class="gtel-newsletter" onsubmit="return gtelNewsletter(event)">' +
    '<input type="email" required placeholder="votre@email.ma" aria-label="Email newsletter">' +
    '<button type="submit" aria-label="S\u2019inscrire">&rarr;</button>' +
    '</form></div>' +
    '</div>' +
    '<div class="gtel-footer-bottom">' +
    '<div data-i18n="footer.copyright">&copy; 2026 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.</div>' +
    '<div class="gtel-footer-bottom-links">' +
    '<a href="#" data-i18n="footer.legal">Mentions Légales</a>' +
    '<a href="#" data-i18n="footer.privacy">Politique de Confidentialité</a>' +
    '</div></div></footer>';

  var scrollTopHTML =
    '<div class="gtel-progress" id="gtel-progress"></div>' +
    '<a href="#" class="gtel-scroll-top" id="gtel-scroll-top" aria-label="Retour en haut">' +
    '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></a>';

  var transitionHTML =
    '<div id="gtel-transition"><div class="gtel-t-logo">GTEL <em>Solutions</em><div class="gtel-t-bar"><i></i></div></div></div>';

  // ══════════════════════════════════════════════════════════
  //  INJECTION — remplace tout header/footer déjà présent
  // ══════════════════════════════════════════════════════════
  document.querySelectorAll('.gtel-shared-shell, #main-header, #mobile-panel, footer#footer, footer.site-footer').forEach(function (el) {
    if (el.id !== 'gtel-navbar') el.remove();
  });

  var headWrapper = document.createElement('div');
  headWrapper.className = 'gtel-shared-shell';
  headWrapper.innerHTML = topBarHTML + navbarHTML;
  document.body.insertBefore(headWrapper, document.body.firstChild);

  var footWrapper = document.createElement('div');
  footWrapper.className = 'gtel-shared-shell';
  footWrapper.innerHTML = footerHTML + scrollTopHTML;
  document.body.appendChild(footWrapper);

  var transWrapper = document.createElement('div');
  transWrapper.innerHTML = transitionHTML;
  document.body.appendChild(transWrapper);

  document.body.classList.add('gtel-shared-shell-ready');

  // ══════════════════════════════════════════════════════════
  //  INTERACTIVITÉ
  // ══════════════════════════════════════════════════════════
  var hamburger = document.getElementById('gtel-hamburger');
  var overlay = document.getElementById('gtel-mobile-overlay');
  var panel = document.getElementById('gtel-mobile-panel');
  var solBtn = document.getElementById('gtel-mobile-solutions-btn');
  var solSub = document.getElementById('gtel-mobile-solutions-sub');

  function gtelOpenMobile() {
    overlay.classList.add('open'); panel.classList.add('open');
    hamburger.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }
  function gtelCloseMobile() {
    overlay.classList.remove('open'); panel.classList.remove('open');
    hamburger.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  window.gtelCloseMobile = gtelCloseMobile;
  if (hamburger) hamburger.addEventListener('click', function () {
    hamburger.classList.contains('is-active') ? gtelCloseMobile() : gtelOpenMobile();
  });
  if (overlay) overlay.addEventListener('click', gtelCloseMobile);
  if (solBtn) solBtn.addEventListener('click', function () {
    solSub.style.display = solSub.style.display === 'none' ? 'block' : 'none';
  });
  panel.querySelectorAll('.gtel-mobile-nav > a').forEach(function (a) {
    a.addEventListener('click', gtelCloseMobile);
  });

  // ── Scroll : navbar shadow + scroll-top + progress bar ──
  var navbar = document.getElementById('gtel-navbar');
  var scrollTopBtn = document.getElementById('gtel-scroll-top');
  var progress = document.getElementById('gtel-progress');
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (navbar) navbar.classList.toggle('is-scrolled', y > 20);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', y > 400);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }, { passive: true });
  if (scrollTopBtn) scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Theme toggle ──
  var themeBtn = document.getElementById('gtel-theme-toggle');
  (function initTheme() {
    var saved = localStorage.getItem('gtel-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', saved === 'dark');
  })();
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('gtel-theme', isDark ? 'dark' : 'light');
  });

  // ── Lang ──
  window.gtelChangeLang = function (lang) {
    if (typeof window.changeLanguage === 'function') window.changeLanguage(lang);
    var btn = document.getElementById('gtel-lang-btn');
    if (btn) btn.textContent = lang.toUpperCase();
    localStorage.setItem('gtel-lang', lang);
  };
  window.gtelNewsletter = function (e) {
    e.preventDefault();
    var input = e.target.querySelector('input');
    if (input) { input.value = ''; input.placeholder = 'Merci ! ✓'; }
    return false;
  };

  // ══════════════════════════════════════════════════════════
  //  TRANSITION UNIQUE ENTRE PAGES
  //  Intercepte les clics sur les liens internes du site,
  //  affiche un rideau court, puis navigue. Simple et fluide.
  // ══════════════════════════════════════════════════════════
  var curtain = document.getElementById('gtel-transition');

  function isInternalLink(a) {
    if (!a || !a.href) return false;
    if (a.target === '_blank') return false;
    if (a.hasAttribute('download')) return false;
    var url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    if (url.pathname === window.location.pathname && url.hash) return false; // ancre sur la même page
    return /\.html$/.test(url.pathname) || url.pathname.endsWith('/');
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a || !isInternalLink(a)) return;
    e.preventDefault();
    document.body.classList.add('gtel-page-out');
    if (curtain) curtain.classList.add('active');
    setTimeout(function () { window.location.href = a.href; }, 320);
  });

  window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('gtel-page-enter');
  });
  window.addEventListener('pageshow', function () {
    if (curtain) curtain.classList.remove('active');
    document.body.classList.remove('gtel-page-out');
  });

  // ── Reveal on scroll (.u-reveal) ──
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('u-on'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.u-reveal, .reveal, .stagger').forEach(function (el) { revealObserver.observe(el); });

  document.documentElement.classList.remove('gtel-shell-pending');
})();
