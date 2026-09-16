/* ============================================================
   THEME (Dark / Light) — persisted, brand-adapted
   ============================================================ */
(function(){
  const saved = localStorage.getItem('gtel-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
  function applyTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    document.getElementById('icon-sun').classList.toggle('hidden', t !== 'dark');
    document.getElementById('icon-moon').classList.toggle('hidden', t === 'dark');
    localStorage.setItem('gtel-theme', t);
  }
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(cur);
  });
})();

/* ============================================================
   LANGUAGE SYSTEM — FR / AR (RTL) / EN, no reload
   ============================================================ */
// I18N object is loaded from translations.js (window.I18N)
function changeLanguage(lang){
  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('current-lang-code').textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('gtel-lang', lang);
}
(function(){
  const saved = localStorage.getItem('gtel-lang') || 'fr';
  changeLanguage(saved);
})();

/* ============================================================
   STICKY HEADER + BACK TO TOP
   ============================================================ */
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const scrollBtn = document.getElementById('scroll-top-btn');
  header.classList.toggle('scrolled', window.scrollY > 50);
  if (window.scrollY > 400){
    scrollBtn.classList.remove('opacity-0','invisible','translate-y-2.5');
    scrollBtn.classList.add('opacity-100','visible','translate-y-0');
  } else {
    scrollBtn.classList.add('opacity-0','invisible','translate-y-2.5');
    scrollBtn.classList.remove('opacity-100','visible','translate-y-0');
  }
  const rail = document.getElementById('rail');
  const fill = document.getElementById('rail-fill');
  if (rail && fill){
    const r = rail.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / r.height));
    fill.style.height = (progress * 100) + '%';
  }
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
const mobileBtn = document.getElementById('mobile-hamburger');
const mobilePanel = document.getElementById('mobile-panel');
function closeMobilePanel(){
  mobilePanel.classList.remove('open');
  const spans = mobileBtn.querySelectorAll('span');
  spans[0].style.transform = ''; spans[1].style.opacity = '1'; spans[2].style.transform = '';
}
mobileBtn.addEventListener('click', () => {
  const isOpen = mobilePanel.classList.toggle('open');
  const spans = mobileBtn.querySelectorAll('span');
  if (isOpen){
    spans[0].style.transform = 'translateY(6px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
  } else { closeMobilePanel(); }
});
mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobilePanel));

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .reveal-scale, .rail-step').forEach(el => io.observe(el));

/* Tilt glow highlight for tech cards */
function tiltGlow(e, el){
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  el.style.setProperty('--my', (e.clientY - r.top) + 'px');
}

/* Snap-row dot indicators (benefits, mobile) */
(function(){
  const row = document.querySelector('.snap-row');
  const dotsWrap = document.getElementById('benefits-dots');
  if (!row || !dotsWrap) return;
  const items = row.querySelectorAll('.snap-item');
  items.forEach((_, i) => {
    const d = document.createElement('span');
    if (i === 0) d.classList.add('active');
    dotsWrap.appendChild(d);
  });
  row.addEventListener('scroll', () => {
    const idx = Math.round(row.scrollLeft / row.clientWidth);
    dotsWrap.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === idx));
  });
})();

/* ============================================================
   FAQ Accordion
   ============================================================ */
function toggleFAQ(btn){
  const content = btn.nextElementSibling;
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('.faq-btn').forEach(b => { b.setAttribute('aria-expanded','false'); b.nextElementSibling.style.maxHeight = null; });
  if (!isExpanded){ btn.setAttribute('aria-expanded','true'); content.style.maxHeight = content.scrollHeight + 'px'; }
}

/* ============================================================
   MODAL
   ============================================================ */
const quoteOverlay = document.getElementById('quote-modal-overlay');
const quoteServiceSelect = document.getElementById('quote-service');
function openQuoteModal(serviceTitle = 'Sonorisation'){
  quoteOverlay.classList.remove('opacity-0','invisible');
  quoteOverlay.classList.add('opacity-100','visible');
  quoteOverlay.querySelector('.quote-modal').classList.remove('translate-y-4');
  quoteOverlay.querySelector('.quote-modal').classList.add('translate-y-0');
  document.body.classList.add('overflow-hidden');
  if (quoteServiceSelect && serviceTitle){
    const opt = Array.from(quoteServiceSelect.options).find(o => o.text.trim().toLowerCase().includes(serviceTitle.toLowerCase()) || o.value === serviceTitle);
    quoteServiceSelect.value = opt ? opt.value : 'Sonorisation';
  }
}
function closeQuoteModal(){
  quoteOverlay.classList.remove('opacity-100','visible');
  quoteOverlay.classList.add('opacity-0','invisible');
  quoteOverlay.querySelector('.quote-modal').classList.remove('translate-y-0');
  quoteOverlay.querySelector('.quote-modal').classList.add('translate-y-4');
  document.body.classList.remove('overflow-hidden');
}
quoteOverlay.addEventListener('click', (e) => { if (e.target === quoteOverlay) closeQuoteModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeQuoteModal(); });

/* ============================================================
   FORM SUBMIT
   ============================================================ */
function handleQuoteSubmit(event){
  event.preventDefault();
  const name = document.getElementById('quote-name').value;
  const email = document.getElementById('quote-email').value;
  const phone = document.getElementById('quote-phone').value;
  const service = document.getElementById('quote-service').value;
  const message = document.getElementById('quote-message').value;

  fetch('../contact.php', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, phone, service, message }) })
    .then(res => res.json())
    .then(data => {
      const toast = document.getElementById('success-toast');
      toast.classList.remove('-translate-x-[150%]'); toast.classList.add('translate-x-0');
      setTimeout(() => { toast.classList.remove('translate-x-0'); toast.classList.add('-translate-x-[150%]'); }, 5000);
    })
    .catch(() => {
      console.log('Mocking dynamic email delivery locally:', { name, email, phone, service, message });
      const toast = document.getElementById('success-toast');
      toast.classList.remove('-translate-x-[150%]'); toast.classList.add('translate-x-0');
      setTimeout(() => { toast.classList.remove('translate-x-0'); toast.classList.add('-translate-x-[150%]'); }, 5000);
    });

  closeQuoteModal();
  document.getElementById('gtel-quote-form').reset();
}

/* ============================================================
   INTERACTIVE UPGRADE — counters, magnetic buttons, ripple,
   parallax hero, mobile sticky CTA bar behaviour
   ============================================================ */

/* --- Animated counters (stats strip) --- */
(function(){
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const cIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.done){
        e.target.dataset.done = '1';
        animate(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cIo.observe(c));
})();

/* --- Magnetic buttons (desktop / fine pointers only) --- */
if (window.matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* --- Ripple click feedback on primary buttons --- */
document.querySelectorAll('.glow-btn, .gold-btn').forEach(btn => {
  btn.addEventListener('click', function(e){
    const r = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(r.width, r.height);
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - r.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - r.top - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});

/* --- Subtle parallax on hero waveform while scrolling --- */
(function(){
  const layer = document.getElementById('hero-waveform');
  const heroSection = document.getElementById('hero-section');
  if (!layer || !heroSection) return;
  window.addEventListener('scroll', () => {
    const r = heroSection.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const offset = window.scrollY * 0.15;
    layer.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
})();

/* --- Mobile sticky CTA bar: hide while scrolling down, show on scroll up --- */
(function(){
  const bar = document.getElementById('mobile-cta-bar');
  if (!bar) return;
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 200){ bar.classList.add('hide-bar'); }
    else { bar.classList.remove('hide-bar'); }
    lastY = y;
  }, { passive: true });
})();