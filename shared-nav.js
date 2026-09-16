/* ══════════════════════════════════════════════════════════════════
   GTEL Solutions — shared-nav.js
   Dynamically injects unified top-bar, navbar, and footer into every page.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  document.documentElement.classList.add('gtel-shell-pending');

  // ── v10 Evolve : L'excellence design ──
  (function loadUnified() {
    var files = [
      'gtel-unified-v5|gtel-unified-v5.css?v=5',
      'gtel-premium-v6|gtel-premium-v6.css?v=6',
      'gtel-simple-v7|gtel-simple-v7.css?v=7',
      'gtel-essential-v8|gtel-essential-v8.css?v=8',
      'gtel-vercel-v9|gtel-vercel-v9.css?v=9',
      'gtel-evolve-v10|gtel-evolve-v10.css?v=10'
    ];
    files.forEach(function(pair){
      var parts = pair.split('|');
      if (!document.getElementById(parts[0])) {
        var x = document.createElement('link');
        x.id = parts[0]; x.rel = 'stylesheet'; x.href = parts[1];
        document.head.appendChild(x);
      }
    });
    console.log('%cGTEL v10 Evolve', 'background:#552583;color:#fff;padding:4px 8px;border-radius:6px');
  })();

  // ── Mouse tracking for Bento Items ──
  document.addEventListener('mousemove', function(e) {
    var bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach(function(item) {
      var rect = item.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', x + 'px');
      item.style.setProperty('--mouse-y', y + 'px');
    });
  });

  // ── Detect current page for "current-page" highlighting ──
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

  // ── Solutions list (single source of truth) ──
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

  function buildSolutionLinks(isMobile) {
    return solutions.map(function (s) {
      var isCurrent = (currentFile === s.href) ? ' current-page' : '';
      return '<a href="' + s.href + '" class="' + isCurrent + '" data-i18n="' + s.i18n + '">' + s.label + '</a>';
    }).join('\n');
  }

  // ── TOP BAR HTML ──
  var topBarHTML = '\
<div class="gtel-topbar" id="gtel-topbar">\
  <div class="gtel-topbar-inner">\
    <div class="gtel-topbar-left">\
      <a href="tel:+212666287341">\
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>\
        +212-666-287-341\
      </a>\
      <span class="gtel-topbar-divider"></span>\
      <a href="mailto:pro@gtelstore.ma">\
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>\
        pro@gtelstore.ma\
      </a>\
      <span class="gtel-topbar-divider"></span>\
      <span data-i18n="topbar.delivery">\
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>\
        Livraison partout au Maroc\
      </span>\
    </div>\
    <div class="gtel-topbar-right">\
      <a href="#" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\');return false;" data-i18n="topbar.devis">\
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>\
        Demander un Devis\
      </a>\
    </div>\
  </div>\
</div>';

  // ── NAVBAR HTML ──
  var isHome = (currentFile === 'index.html' || currentFile === '');
  var navbarHTML = '\
<nav class="gtel-navbar" id="gtel-navbar">\
  <div class="gtel-navbar-inner">\
    <a href="index.html" class="gtel-navbar-logo">\
      <img src="image/image.webp" alt="Logo GTEL">\
    </a>\
    <div class="gtel-navbar-nav">\
      <a href="index.html" class="gtel-nav-link' + (isHome ? ' active' : '') + '" data-i18n="nav.home">Accueil</a>\
      <div class="gtel-solutions-wrap">\
        <button class="gtel-solutions-trigger">\
          <span data-i18n="nav.solutions">Solutions</span>\
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>\
        </button>\
        <div class="gtel-solutions-panel">\
          ' + buildSolutionLinks(false) + '\
        </div>\
      </div>\
    </div>\
    <div class="gtel-navbar-actions">\
      <div class="gtel-lang-switch" id="gtel-lang-switch">\
        <button class="gtel-lang-btn" id="gtel-lang-btn">\
          <span id="gtel-lang-code">FR</span>\
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>\
        </button>\
        <div class="gtel-lang-menu" id="gtel-lang-menu">\
          <button data-lang="fr" class="active-lang" onclick="gtelChangeLang(\'fr\')">🇫🇷 Français</button>\
          <button data-lang="ar" onclick="gtelChangeLang(\'ar\')">🇲🇦 العربية</button>\
          <button data-lang="en" onclick="gtelChangeLang(\'en\')">🇬🇧 English</button>\
        </div>\
      </div>\
      <button class="gtel-theme-toggle" id="gtel-theme-toggle" aria-label="Basculer thème clair/sombre">\
        <svg class="icon-sun" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>\
        <svg class="icon-moon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>\
      </button>\
      <button class="gtel-nav-cta" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\')" data-i18n="nav.contact">Nous Contacter</button>\
      <button class="gtel-hamburger" id="gtel-hamburger" aria-label="Menu">\
        <span></span><span></span><span></span>\
      </button>\
    </div>\
  </div>\
</nav>\
<div class="gtel-mobile-overlay" id="gtel-mobile-overlay"></div>\
<div class="gtel-mobile-panel" id="gtel-mobile-panel">\
  <div class="gtel-mobile-header">\
    <span>Menu</span>\
    <button class="gtel-mobile-close" id="gtel-mobile-close" aria-label="Fermer">&times;</button>\
  </div>\
  <div class="gtel-mobile-nav">\
    <a href="index.html"' + (isHome ? ' class="current-page"' : '') + ' data-i18n="nav.home">Accueil</a>\
    <button class="gtel-mobile-solutions-btn" id="gtel-mobile-solutions-btn">\
      <span data-i18n="nav.solutions">Solutions</span>\
      <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>\
    </button>\
    <div class="gtel-mobile-solutions-sub" id="gtel-mobile-solutions-sub">\
      ' + buildSolutionLinks(true) + '\
    </div>\
    <button class="gtel-mobile-cta" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\');gtelCloseMobile();" data-i18n="nav.contact">Nous Contacter</button>\
  </div>\
</div>';

  // ── FOOTER HTML ──
  var ctaBannerHTML = '\
<div class="gtel-cta-banner">\
  <div class="gtel-cta-card">\
    <div>\
      <h3 data-i18n="cta.title">Un projet d\\u2019infrastructure ? <em>Parlons-en.</em></h3>\
      <p data-i18n="cta.desc">Audit gratuit sous 48h — un seul interlocuteur, du conseil au matériel jusqu\\u2019à la supervision.</p>\
    </div>\
    <div class="gtel-cta-actions">\
      <button class="gtel-cta-primary" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Global\')" data-i18n="cta.primary">Demander un audit</button>\
      <a class="gtel-cta-ghost" href="index.html#solutions" data-i18n="cta.secondary">Voir les solutions</a>\
    </div>\
  </div>\
</div>';

  var footerHTML = ctaBannerHTML + '\
<footer class="gtel-footer" id="gtel-footer">\
  <div class="gtel-footer-grid">\
    <div class="gtel-footer-brand">\
      <img src="image/image.webp" alt="Logo GTEL">\
      <p data-i18n="footer.desc">Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.</p>\
      <div class="gtel-footer-social">\
        <a href="https://www.youtube.com/channel/UCglE90LPV-4MBtI3njcxhLA" target="_blank" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.06a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>\
        <a href="https://web.whatsapp.com/send?phone=+212666287341" target="_blank" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg></a>\
        <a href="https://www.linkedin.com/company/gtelstore" target="_blank" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>\
        <a href="https://www.instagram.com/gtelstore" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>\
        <a href="https://www.facebook.com/gtelstore" target="_blank" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"></path></svg></a>\
        <a href="https://www.tiktok.com/@gtelstore" target="_blank" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-.87-.96-1.35-2.2-1.35-3.5h-3.02v14.28c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.29 0 .57.04.83.12v-3.07a5.86 5.86 0 0 0-.83-.06A5.83 5.83 0 0 0 3.6 16.6a5.83 5.83 0 0 0 5.83 5.83 5.83 5.83 0 0 0 5.83-5.83V9.02a8.53 8.53 0 0 0 4.99 1.6V7.6a5.2 5.2 0 0 1-3.65-1.78z"></path></svg></a>\
      </div>\
    </div>\
    <div>\
      <h4 data-i18n="footer.nav">Navigation</h4>\
      <ul class="gtel-footer-links">\
        <li><a href="index.html" data-i18n="footer.home">Accueil</a></li>\
        <li><a href="index.html#solutions" data-i18n="footer.solutions">Nos Solutions</a></li>\
        <li><a href="index.html#poles" data-i18n="footer.expertise">Notre Expertise</a></li>\
        <li><a href="#" onclick="if(typeof openQuoteModal===\'function\')openQuoteModal(\'Devis Footer\');return false;" data-i18n="footer.diagnostic">Demander un diagnostic</a></li>\
      </ul>\
    </div>\
    <div>\
      <h4 data-i18n="footer.contact">Informations de contact</h4>\
      <ul class="gtel-footer-contact">\
        <li>\
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>\
          <span>241, Boulevard Emile Zola, 5ème étage Bureau 10, 20082 Casablanca</span>\
        </li>\
        <li>\
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>\
          <span>+212-666-287-341</span>\
        </li>\
        <li>\
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>\
          <span>pro@gtelstore.ma</span>\
        </li>\
      </ul>\
    </div>\
    <div>\
      <h4 data-i18n="footer.languages">Langues</h4>\
      <div class="gtel-footer-lang-btns">\
        <button onclick="gtelChangeLang(\'fr\')">FR</button>\
        <button onclick="gtelChangeLang(\'ar\')">AR</button>\
        <button onclick="gtelChangeLang(\'en\')">EN</button>\
      </div>\
      <form class="gtel-newsletter" onsubmit="return gtelNewsletter(event)">\
        <input type="email" required placeholder="votre@email.ma" aria-label="Email newsletter">\
        <button type="submit" aria-label="S\\u2019inscrire">&rarr;</button>\
      </form>\
    </div>\
  </div>\
  <div class="gtel-footer-bottom">\
    <div data-i18n="footer.copyright">&copy; 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.</div>\
    <div class="gtel-footer-bottom-links">\
      <a href="#" data-i18n="footer.legal">Mentions Légales</a>\
      <a href="#" data-i18n="footer.privacy">Politique de Confidentialité</a>\
    </div>\
  </div>\
</footer>';

  // ── SCROLL-TOP BUTTON HTML ──
  var scrollTopHTML = '\
<div class="gtel-progress" id="gtel-progress"></div>\
<a href="#" class="gtel-scroll-top" id="gtel-scroll-top" aria-label="Retour en haut">\
  <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>\
</a>';

  // ══════════════════════════════════════════════════════════
  //  INJECTION
  // ══════════════════════════════════════════════════════════

  // Insert top bar + navbar at the very beginning of <body>
  var wrapper = document.createElement('div');
  wrapper.className = 'gtel-shared-shell';
  wrapper.innerHTML = topBarHTML + navbarHTML;
  
  // Insert before the first child of body
  if (document.body.firstChild) {
    document.body.insertBefore(wrapper, document.body.firstChild);
  } else {
    document.body.appendChild(wrapper);
  }

  // Insert footer + scroll-top before </body>
  var footerWrapper = document.createElement('div');
  footerWrapper.className = 'gtel-shared-shell';
  footerWrapper.innerHTML = footerHTML + scrollTopHTML;
  document.body.appendChild(footerWrapper);
  document.body.classList.add('gtel-shared-shell-ready');

  // ══════════════════════════════════════════════════════════
  //  INTERACTIVITY
  // ══════════════════════════════════════════════════════════

  // ── Mobile menu ──
  var hamburger = document.getElementById('gtel-hamburger');
  var overlay = document.getElementById('gtel-mobile-overlay');
  var panel = document.getElementById('gtel-mobile-panel');
  var closeBtn = document.getElementById('gtel-mobile-close');
  var solBtn = document.getElementById('gtel-mobile-solutions-btn');
  var solSub = document.getElementById('gtel-mobile-solutions-sub');

  function gtelOpenMobile() {
    if (overlay) overlay.classList.add('open');
    if (panel) panel.classList.add('open');
    if (hamburger) hamburger.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  window.gtelCloseMobile = function() {
    if (overlay) overlay.classList.remove('open');
    if (panel) panel.classList.remove('open');
    if (hamburger) hamburger.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  window.gtelNewsletter = function(e) {
    e.preventDefault();
    var input = e.target.querySelector('input');
    var btn = e.target.querySelector('button');
    if (input && input.value) {
      btn.textContent = '\u2713';
      input.value = '';
      input.placeholder = 'Merci ! À très vite.';
      setTimeout(function(){ btn.innerHTML = '&rarr;'; }, 2500);
    }
    return false;
  };

  if (hamburger) hamburger.addEventListener('click', gtelOpenMobile);
  if (closeBtn) closeBtn.addEventListener('click', gtelCloseMobile);
  if (overlay) overlay.addEventListener('click', gtelCloseMobile);

  if (solBtn && solSub) {
    solBtn.addEventListener('click', function () {
      solSub.classList.toggle('open');
      solBtn.classList.toggle('expanded');
    });
  }

  // Close mobile menu when clicking a link
  if (panel) {
    panel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', gtelCloseMobile);
    });
  }

  // ── Language switcher ──
  var langSwitch = document.getElementById('gtel-lang-switch');
  var langBtn = document.getElementById('gtel-lang-btn');

  if (langBtn && langSwitch) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langSwitch.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      langSwitch.classList.remove('open');
    });
  }

  // Global language change function — bridges to whatever i18n system the page uses
  window.gtelChangeLang = function (lang) {
    // Update displayed code
    var codeEl = document.getElementById('gtel-lang-code');
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    // Update active state in menu
    var menu = document.getElementById('gtel-lang-menu');
    if (menu) {
      menu.querySelectorAll('button').forEach(function (btn) {
        btn.classList.remove('active-lang');
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active-lang');
      });
    }

    // Close dropdown
    if (langSwitch) langSwitch.classList.remove('open');

    // Bridge to existing translation systems
    if (typeof translit !== 'undefined' && translit.change) {
      translit.change(lang);
    } else if (typeof changeLanguage === 'function') {
      changeLanguage(lang);
    }

    // Set RTL for Arabic
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  };

  // ── Navbar scroll effect ──
  var navbar = document.getElementById('gtel-navbar');
  window.addEventListener('scroll', function () {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    var prog = document.getElementById('gtel-progress');
    if (prog) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    }

    // Scroll-top button
    var scrollTop = document.getElementById('gtel-scroll-top');
    if (scrollTop) {
      if (window.scrollY > 400) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    }
  }, { passive: true });

  // ── Theme toggle ──
  var themeBtn = document.getElementById('gtel-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      // Try to use existing page theme toggles first
      var existingToggle = document.getElementById('theme-toggle-btn') ||
                           document.getElementById('theme-toggle');
      if (existingToggle && existingToggle !== themeBtn) {
        existingToggle.click();
        return;
      }
      // Fallback: toggle dark class / data-theme
      var html = document.documentElement;
      if (html.classList.contains('dark') || html.getAttribute('data-theme') === 'dark') {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('gtel-theme', 'light');
      } else {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('gtel-theme', 'dark');
      }
    });
  }

  // v8 — TRANSITION feuille blanche + gros titre
  document.body.classList.add('gtel-page-enter');

  var transEl = document.createElement('div');
  transEl.id = 'gtel-transition';
  transEl.innerHTML = '<div class="gtel-t-panel gtel-t-gold"></div><div class="gtel-t-panel"></div>' +
    '<div class="gtel-t-center"><div class="gtel-t-logo">GTEL — SOLUTIONS</div>' +
    '<div class="gtel-t-name" id="gtel-t-name">Chargement</div><div class="gtel-t-bar"><i></i></div></div>';
  document.body.appendChild(transEl);

  var solIndex = -1;
  solutions.forEach(function (s, i) { if (s.href === currentFile) solIndex = i; });
  var prevSol = solutions[(solIndex - 1 + solutions.length) % solutions.length];
  var nextSol = solutions[(solIndex + 1) % solutions.length];

  var navBusy = false;
  window.gtelGo = function (href, label) {
    if (!href || navBusy) return;
    if (href.charAt(0) === '#') {
      var t = document.querySelector(href);
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
      return;
    }
    navBusy = true;
    var clean = (label || href.split('/').pop().replace('.html','').replace(/-/g,' ')).trim().substring(0,42);
    var nameEl = document.getElementById('gtel-t-name');
    if (nameEl) nameEl.textContent = clean;
    function doNav() { window.location.href = href; }
    transEl.classList.add('gtel-t-active');
    document.body.classList.add('gtel-page-out');
    setTimeout(doNav, 560);
  };

  // Intercepte liens internes → transition rideau
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;
    if (a.target === '_blank' || e.ctrlKey || e.metaKey) return;
    if (href.indexOf('.html') === -1) return;
    e.preventDefault();
    if (typeof gtelCloseMobile === 'function') gtelCloseMobile();
    var lbl = (a.getAttribute('title') || a.textContent || href).trim().substring(0, 42);
    window.gtelGo(href, lbl);
  });

  // —— DOCK flottant : toutes les solutions en 1 clic ——
  var shortNames = ['Rés','Dat','Cyb','Vid','Acc','Tel','Réu','Son','Man','Dig'];
  var dock = document.createElement('div');
  dock.className = 'gtel-dock'; dock.id = 'gtel-dock';
  var dockHTML = '<a href="index.html" class="home-btn" title="Accueil">⌂<span class="tip">Accueil</span></a><span class="sep"></span>';
  dockHTML += solutions.map(function (s, i) {
    var on = (s.href === currentFile) ? ' on' : '';
    return '<a href="' + s.href + '" title="' + s.label + '" class="' + on + '">' + shortNames[i] + '<span class="tip">' + s.label + '</span></a>';
  }).join('');
  dockHTML += '<span class="sep"></span><a href="#" id="gtel-dock-search" title="Recherche rapide (Ctrl+K)">⌕<span class="tip">Recherche — Ctrl+K</span></a>';
  dock.innerHTML = dockHTML;
  document.body.appendChild(dock);
  setTimeout(function(){ dock.classList.add('show'); }, 900);
  // cache le dock quand le footer est visible (évite le chevauchement)
  var footerEl = document.getElementById('gtel-footer');
  if (footerEl && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      dock.style.opacity = en[0].isIntersecting ? '0' : '1';
      dock.style.pointerEvents = en[0].isIntersecting ? 'none' : 'auto';
    }, { threshold: 0.08 }).observe(footerEl);
  }
  var dockSearch = document.getElementById('gtel-dock-search');
  if (dockSearch) dockSearch.addEventListener('click', function (e) { e.preventDefault(); openPalette(); });

  // —— Passerelle entre solutions : précédent / suivant avec la même transition ——
  if (solIndex >= 0) {
    var bridge = document.createElement('nav');
    bridge.className = 'gtel-page-bridge';
    bridge.setAttribute('aria-label', 'Navigation entre solutions');
    bridge.innerHTML =
      '<a class="gtel-page-bridge-link prev" href="' + prevSol.href + '" title="' + prevSol.label + '">' +
        '<span>Précédent</span><strong>' + prevSol.label + '</strong>' +
      '</a>' +
      '<a class="gtel-page-bridge-link next" href="' + nextSol.href + '" title="' + nextSol.label + '">' +
        '<span>Suivant</span><strong>' + nextSol.label + '</strong>' +
      '</a>';
    document.body.appendChild(bridge);
  }

  // —— PALETTE Ctrl+K : navigation ultra-rapide ——
  var palOv = document.createElement('div'); palOv.className = 'gtel-palette-ov'; palOv.id = 'gtel-palette-ov';
  var pal = document.createElement('div'); pal.className = 'gtel-palette'; pal.id = 'gtel-palette';
  var palLinks = [{ href: 'index.html', label: 'Accueil', tag: 'Home' }]
    .concat(solutions.map(function (s) { return { href: s.href, label: s.label, tag: 'Solution' }; }))
    .concat([{ href: 'index.html#solutions', label: 'Toutes les solutions', tag: 'Voir' },
             { href: 'index.html#poles', label: "Pôles d'expertise", tag: 'Voir' }]);
  pal.innerHTML = '<input id="gtel-palette-input" type="text" placeholder="Aller vers… (ex : cyber, réunion, datacenter)" autocomplete="off">' +
    '<div class="gtel-palette-list" id="gtel-palette-list"></div>' +
    '<div class="gtel-palette-hint"><span><b>↑↓</b> naviguer</span><span><b>↵</b> ouvrir</span><span><b>esc</b> fermer</span><span style="margin-left:auto"><b>Ctrl K</b> ouvrir</span></div>';
  document.body.appendChild(palOv); document.body.appendChild(pal);
  var palInput = document.getElementById('gtel-palette-input');
  var palList = document.getElementById('gtel-palette-list');
  var palSel = 0, palFiltered = palLinks;
  function renderPalette(q) {
    q = (q || '').toLowerCase();
    palFiltered = palLinks.filter(function (l) { return l.label.toLowerCase().indexOf(q) !== -1; });
    if (!palFiltered.length) palFiltered = palLinks;
    palSel = 0;
    palList.innerHTML = palFiltered.map(function (l, i) {
      return '<a href="' + l.href + '" data-i="' + i + '" class="' + (i === 0 ? 'sel' : '') + '"><span class="k">' + l.label.charAt(0) + '</span>' + l.label + '<small>' + l.tag + '</small></a>';
    }).join('');
    palList.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); closePalette(); window.gtelGo(a.getAttribute('href'), a.textContent); });
      a.addEventListener('mousemove', function () {
        palSel = parseInt(a.getAttribute('data-i'), 10);
        palList.querySelectorAll('a').forEach(function (x) { x.classList.remove('sel'); });
        a.classList.add('sel');
      });
    });
  }
  function openPalette() {
    palOv.classList.add('open'); pal.classList.add('open');
    renderPalette(''); palInput.value = '';
    setTimeout(function(){ palInput.focus(); }, 60);
  }
  function closePalette() { palOv.classList.remove('open'); pal.classList.remove('open'); }
  window.gtelPalette = openPalette;
  palOv.addEventListener('click', closePalette);
  palInput.addEventListener('input', function () { renderPalette(palInput.value); });
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.classList.contains('open') ? closePalette() : openPalette(); }
    if (e.key === 'Escape') closePalette();
    if (pal.classList.contains('open') && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      palSel = e.key === 'ArrowDown' ? (palSel + 1) % palFiltered.length : (palSel - 1 + palFiltered.length) % palFiltered.length;
      palList.querySelectorAll('a').forEach(function (x, i) { x.classList.toggle('sel', i === palSel); });
      var selEl = palList.querySelectorAll('a')[palSel];
      if (selEl && selEl.scrollIntoView) selEl.scrollIntoView({ block: 'nearest' });
    }
    if (pal.classList.contains('open') && e.key === 'Enter') {
      e.preventDefault();
      var target = palFiltered[palSel];
      if (target) { closePalette(); window.gtelGo(target.href, target.label); }
    }
    // ← → : solution précédente / suivante (hors champs texte)
    if (!pal.classList.contains('open') && solIndex >= 0 && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      if (e.key === 'ArrowRight') window.gtelGo(nextSol.href, nextSol.label);
      if (e.key === 'ArrowLeft') window.gtelGo(prevSol.href, prevSol.label);
    }
  });

  // —— Reveal unifié ——
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); en.target.classList.add('u-on'); revealObs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .stagger').forEach(function (el) { revealObs.observe(el); });
  document.querySelectorAll('section, [class*="-card"], .scope-card, .diag-card').forEach(function (el) {
    if (!el.classList.contains('reveal') && !el.closest('.gtel-navbar') && !el.closest('.gtel-footer') && !el.closest('.gtel-dock')) {
      el.classList.add('u-reveal'); revealObs.observe(el);
    }
  });

  // —— Dots sections (mouvement vertical créatif) ——
  var sections = Array.from(document.querySelectorAll('section[id]'));
  if (sections.length > 1) {
    var sectionNav = document.createElement('div');
    sectionNav.className = 'gtel-section-nav';
    var html = '';
    sections.forEach(function (sec) {
      var h = sec.querySelector('h1, h2, h3');
      var label = h ? h.textContent.trim().substring(0, 26) : sec.id.replace(/-/g, ' ');
      label = label.replace(/</g, '&lt;');
      html += '<div class="gtel-section-nav-dot" data-target="#' + sec.id + '"><span class="tooltip">' + label + '</span></div>';
    });
    sectionNav.innerHTML = html;
    document.body.appendChild(sectionNav);
    setTimeout(function () { sectionNav.classList.add('visible'); }, 1000);
    var dots = sectionNav.querySelectorAll('.gtel-section-nav-dot');
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var s = document.querySelector(this.getAttribute('data-target'));
        if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
      });
    });
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          dots.forEach(function (d) { d.classList.remove('active'); });
          var ad = sectionNav.querySelector('.gtel-section-nav-dot[data-target="#' + entry.target.id + '"]');
          if (ad) ad.classList.add('active');
        }
      });
    }, { threshold: 0.3, rootMargin: '-100px 0px -20% 0px' });
    sections.forEach(function (sec) { navObs.observe(sec); });
  }

})();
