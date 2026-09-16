/* ═══════════════════════════════════════════════════════════════════
   GTEL ULTIMATE v1 — Navigation Unifiée
   Header, Footer et Menu Mobile avec animations fluides
   ═══════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Liste des solutions
  const solutions = [
    { href: 'infrastructure-reseau.html', label: 'Infrastructure Réseau' },
    { href: 'datacenter.html', label: 'Datacenter' },
    { href: 'cybersecurite.html', label: 'Cybersécurité' },
    { href: 'videosurveillance.html', label: 'Vidéosurveillance' },
    { href: 'controle-acces.html', label: 'Contrôle d\'Accès' },
    { href: 'telephonie-ip.html', label: 'Téléphonie IP' },
    { href: 'salles-reunion.html', label: 'Salles de Réunion' },
    { href: 'sonorisation.html', label: 'Sonorisation' },
    { href: 'services-manages.html', label: 'Services Managés' },
    { href: 'InfraDigitale.html', label: 'Infrastructure Digitale' }
  ];

  // Page actuelle
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // HTML du Header
  const headerHTML = `
<header class="gtel-header" id="gtel-header">
  <div class="header-inner">
    <a href="index.html" class="header-logo">
      <img src="image/image.webp" alt="GTEL Logo">
    </a>
    
    <nav class="header-nav">
      <ul class="header-nav-links">
        <li><a href="index.html" class="header-nav-link ${currentPage === 'index.html' ? 'active' : ''}">Accueil</a></li>
        <li class="nav-dropdown">
          <button class="dropdown-trigger" aria-expanded="false">
            Solutions
            <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
          </button>
          <div class="dropdown-menu">
            ${solutions.map(sol => `
              <a href="${sol.href}" class="dropdown-item ${currentPage === sol.href ? 'active' : ''}">${sol.label}</a>
            `).join('')}
          </div>
        </li>
      </ul>
    </nav>
    
    <div class="header-actions">
      <div class="lang-switcher">
        <button class="lang-btn" id="lang-btn">
          <span id="current-lang">FR</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
        </button>
        <div class="lang-menu" id="lang-menu">
          <button class="lang-option active" data-lang="fr">🇫🇷 Français</button>
          <button class="lang-option" data-lang="ar">🇲🇦 العربية</button>
          <button class="lang-option" data-lang="en">🇬🇧 English</button>
        </div>
      </div>
      
      <button class="theme-toggle" id="theme-toggle" aria-label="Basculer thème">
        <div class="theme-toggle-knob">
          <svg class="theme-icon sun" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>
          <svg class="theme-icon moon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </div>
      </button>
      
      <button class="btn-cta" onclick="openQuoteModal('Devis')">Nous Contacter</button>
      
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</header>

<div class="mobile-overlay" id="mobile-overlay"></div>
<div class="mobile-panel" id="mobile-panel">
  <div class="mobile-header">
    <span class="mobile-header-title">Menu</span>
    <button class="mobile-close" id="mobile-close">&times;</button>
  </div>
  <nav class="mobile-nav">
    <a href="index.html" class="mobile-nav-link ${currentPage === 'index.html' ? 'active' : ''}">Accueil</a>
    <button class="mobile-solutions-toggle" id="mobile-solutions-btn">
      Solutions
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
    </button>
    <div class="mobile-solutions-list" id="mobile-solutions-list">
      ${solutions.map(sol => `
        <a href="${sol.href}" class="mobile-solution-link ${currentPage === sol.href ? 'active' : ''}">${sol.label}</a>
      `).join('')}
    </div>
    <button class="btn-cta mobile-cta" onclick="openQuoteModal('Devis');closeMobile();">Nous Contacter</button>
  </nav>
</div>`;

  // HTML du Footer
  const footerHTML = `
<footer class="gtel-footer">
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="image/image.webp" alt="GTEL" class="footer-logo">
        <p class="footer-description">Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.</p>
        <div class="footer-social">
          <a href="https://www.youtube.com/channel/UCglE90LPV-4MBtI3njcxhLA" target="_blank" class="social-link" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.06a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
          <a href="https://web.whatsapp.com/send?phone=+212666287341" target="_blank" class="social-link" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/company/gtelstore" target="_blank" class="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          </a>
          <a href="https://www.instagram.com/gtelstore" target="_blank" class="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.facebook.com/gtelstore" target="_blank" class="social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"></path></svg>
          </a>
        </div>
      </div>
      
      <div class="footer-column">
        <h4>Navigation</h4>
        <ul class="footer-links">
          <li><a href="index.html">Accueil</a></li>
          <li><a href="index.html#solutions">Nos Solutions</a></li>
          <li><a href="index.html#poles">Notre Expertise</a></li>
          <li><a href="#" onclick="openQuoteModal('Diagnostic');return false;">Demander un diagnostic</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Contact</h4>
        <ul class="footer-contact">
          <li>
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>241, Boulevard Emile Zola, 5ème étage Bureau 10, 20082 Casablanca</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>+212-666-287-341</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>pro@gtelstore.ma</span>
          </li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Langues</h4>
        <div style="display:flex;gap:8px;margin-bottom:20px;">
          <button onclick="changeLang('fr')" style="padding:8px 16px;background:var(--bg-surface-2);border:1px solid var(--border-subtle);border-radius:8px;color:var(--text-secondary);font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='var(--primary)';this.style.color='#fff'" onmouseout="this.style.background='var(--bg-surface-2)';this.style.color='var(--text-secondary)'">FR</button>
          <button onclick="changeLang('ar')" style="padding:8px 16px;background:var(--bg-surface-2);border:1px solid var(--border-subtle);border-radius:8px;color:var(--text-secondary);font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='var(--primary)';this.style.color='#fff'" onmouseout="this.style.background='var(--bg-surface-2)';this.style.color='var(--text-secondary)'">AR</button>
          <button onclick="changeLang('en')" style="padding:8px 16px;background:var(--bg-surface-2);border:1px solid var(--border-subtle);border-radius:8px;color:var(--text-secondary);font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='var(--primary)';this.style.color='#fff'" onmouseout="this.style.background='var(--bg-surface-2)';this.style.color='var(--text-secondary)'">EN</button>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div>&copy; 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.</div>
      <div class="footer-bottom-links">
        <a href="#">Mentions Légales</a>
        <a href="#">Politique de Confidentialité</a>
      </div>
    </div>
  </div>
</footer>`;

  // Injection dans le DOM
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Gestion du scroll header
  const header = document.getElementById('gtel-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = window.scrollY;
  });

  // Menu Mobile
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobilePanel = document.getElementById('mobile-panel');
  const mobileClose = document.getElementById('mobile-close');
  const mobileSolutionsBtn = document.getElementById('mobile-solutions-btn');
  const mobileSolutionsList = document.getElementById('mobile-solutions-list');

  function openMobile() {
    mobileOverlay.classList.add('active');
    mobilePanel.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobile() {
    mobileOverlay.classList.remove('active');
    mobilePanel.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
    window.closeMobile = closeMobile;
  }

  hamburger.addEventListener('click', openMobile);
  mobileClose.addEventListener('click', closeMobile);
  mobileOverlay.addEventListener('click', closeMobile);
  
  mobileSolutionsBtn.addEventListener('click', () => {
    mobileSolutionsList.classList.toggle('active');
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  // Charger le thème sauvegardé
  const savedTheme = localStorage.getItem('gtel-theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
  
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('gtel-theme', isDark ? 'dark' : 'light');
  });

  // Language Switcher
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const currentLang = document.getElementById('current-lang');
  const langOptions = langMenu.querySelectorAll('.lang-option');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    langMenu.classList.remove('active');
  });

  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = option.dataset.lang;
      
      // Mettre à jour l'affichage
      langOptions.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      currentLang.textContent = lang.toUpperCase();
      
      // Ici vous pouvez intégrer votre système de traduction existant
      if (typeof translit !== 'undefined' && translit.change) {
        translit.change(lang);
      }
    });
  });

  // Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal, .stagger');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Exposer la fonction closeMobile globalement
  window.closeMobile = closeMobile;
  window.openQuoteModal = window.openQuoteModal || function(service) {
    console.log('Demande de devis:', service);
    // Intégrer ici votre logique de modal existante
  };

})();
