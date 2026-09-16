/* ==========================================================================
   GTEL — Téléphonie IP — Script principal
   Gère : thème clair/sombre, langue (FR/AR/EN + RTL), menu mobile,
   accordéon FAQ, modal de devis, animations au scroll.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- THEME ---------------- */
  const root = document.documentElement;
  const THEME_KEY = 'gtel-theme';

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }
  const savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(btn=>{
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(current);
    });
  });

  /* ---------------- LANGUAGE ---------------- */
  const LANG_KEY = 'gtel-lang';
  const FLAGS = { fr:'🇫🇷', en:'🇬🇧', ar:'🇲🇦' };
  const NAMES = { fr:'Français', en:'English', ar:'العربية' };
  const DIRS  = { fr:'ltr', en:'ltr', ar:'rtl' };

  function translatePage(lang){
    const dict = (window.GTEL_TRANSLATIONS && window.GTEL_TRANSLATIONS[lang]) || {};
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined){
        el.innerHTML = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', DIRS[lang] || 'ltr');
    document.querySelectorAll('.lang-code').forEach(el=> el.textContent = lang.toUpperCase());
    document.querySelectorAll('.lang-flag').forEach(el=> el.textContent = FLAGS[lang]);
    document.querySelectorAll('.lang-opt, .footer-lang-btns button').forEach(el=>{
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });
    localStorage.setItem(LANG_KEY, lang);
  }

  window.changeLanguage = function(lang){
    if(!DIRS[lang]) return;
    translatePage(lang);
  };

  const savedLang = localStorage.getItem(LANG_KEY) || 'fr';
  translatePage(savedLang);

  /* ---------------- HEADER SCROLL STATE ---------------- */
  const topBar = document.querySelector('.top-bar');
  const onScroll = () => {
    if (topBar) topBar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* ---------------- MOBILE MENU ---------------- */
  const burger = document.getElementById('burger-btn');
  const mobilePanel = document.getElementById('mobile-panel');
  if (burger && mobilePanel){
    burger.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
    });
    mobilePanel.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=> mobilePanel.classList.remove('open'));
    });
  }

  /* ---------------- FAQ ACCORDION ---------------- */
  window.toggleFAQ = function(btn){
    const body = btn.nextElementSibling;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q').forEach(b=>{
      b.setAttribute('aria-expanded','false');
      b.nextElementSibling.style.maxHeight = null;
    });
    if (!isOpen){
      btn.setAttribute('aria-expanded','true');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  };

  /* ---------------- QUOTE MODAL ---------------- */
  const overlay = document.getElementById('quote-modal-overlay');

  window.openQuoteModal = function(service){
    if (!overlay) return;
    overlay.classList.add('open');
    const select = document.getElementById('quote-service');
    if (select && service) select.value = service;
  };
  window.closeQuoteModal = function(){
    if (overlay) overlay.classList.remove('open');
  };
  if (overlay){
    overlay.addEventListener('click', (e)=>{
      if (e.target === overlay) window.closeQuoteModal();
    });
  }

  window.handleQuoteSubmit = function(event){
    event.preventDefault();
    const lang = document.documentElement.getAttribute('lang') || 'fr';
    const dict = (window.GTEL_TRANSLATIONS && window.GTEL_TRANSLATIONS[lang]) || {};
    const payload = {
      type: 'devis',
      name: document.getElementById('quote-name').value,
      email: document.getElementById('quote-email').value,
      phone: document.getElementById('quote-phone').value,
      service: document.getElementById('quote-service').value,
      message: 'Demande depuis la page Téléphonie IP'
    };

    fetch('../contact.php', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>{
      const toast = document.getElementById('success-toast');
      const msgEl = document.getElementById('toast-msg');
      if (data.success){
        msgEl.textContent = dict['toast.success'] || 'Envoyé !';
      } else {
        msgEl.textContent = (dict['toast.error'] || 'Erreur : ') + data.error;
      }
      toast.classList.add('show');
      setTimeout(()=> toast.classList.remove('show'), 4000);
      window.closeQuoteModal();
      document.getElementById('gtel-quote-form').reset();
    })
    .catch(()=>{
      const dict2 = (window.GTEL_TRANSLATIONS && window.GTEL_TRANSLATIONS[lang]) || {};
      alert(dict2['toast.connfail'] || 'Erreur de connexion avec le serveur.');
    });
  };

  /* ---------------- DIAGNOSTIC CAROUSEL (mobile) ---------------- */
  const diagList = document.getElementById('diag-list');
  const diagPrev = document.getElementById('diag-prev');
  const diagNext = document.getElementById('diag-next');
  const diagDots = document.getElementById('diag-dots');
  if (diagList && diagPrev && diagNext && diagDots){
    const diagRows = Array.from(diagList.querySelectorAll('.diag-row'));

    diagRows.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Aller à l\'élément ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        diagRows[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      diagDots.appendChild(dot);
    });
    const dotEls = Array.from(diagDots.children);

    const scrollDiag = (dir) => {
      const row = diagList.querySelector('.diag-row');
      const gap = 14;
      const amount = row ? row.getBoundingClientRect().width + gap : diagList.clientWidth * 0.86;
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      diagList.scrollBy({ left: (isRTL ? -dir : dir) * amount, behavior: 'smooth' });
    };
    diagPrev.addEventListener('click', () => scrollDiag(-1));
    diagNext.addEventListener('click', () => scrollDiag(1));

    let scrollTicking = false;
    diagList.addEventListener('scroll', () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const center = diagList.scrollLeft + diagList.clientWidth / 2;
        let closest = 0, closestDist = Infinity;
        diagRows.forEach((row, i) => {
          const dist = Math.abs((row.offsetLeft + row.offsetWidth / 2) - center);
          if (dist < closestDist){ closestDist = dist; closest = i; }
        });
        dotEls.forEach((d, i) => d.classList.toggle('active', i === closest));
        scrollTicking = false;
      });
    }, { passive: true });
  }

  /* ---------------- BENEFIT CAROUSEL ARROWS ---------------- */
  const benefitTrack = document.querySelector('.benefit-grid');
  const prevBtn = document.getElementById('benefit-prev');
  const nextBtn = document.getElementById('benefit-next');
  if (benefitTrack && prevBtn && nextBtn){
    const scrollByCard = (dir) => {
      const card = benefitTrack.querySelector('.benefit-card');
      const gap = 16;
      const amount = card ? card.getBoundingClientRect().width + gap : benefitTrack.clientWidth * 0.85;
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      benefitTrack.scrollBy({ left: (isRTL ? -dir : dir) * amount, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
  }

  /* ---------------- SCROLL REVEALS ---------------- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-scale, .section-marker').forEach(el=> io.observe(el));
  document.querySelectorAll('.ai-photo:not(.hero-bg)').forEach(el=> io.observe(el));

});