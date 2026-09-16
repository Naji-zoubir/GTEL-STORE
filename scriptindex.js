/* ==========================================================================
   GTEL — script.js
   ========================================================================== */

// 1. STICKY HEADER + BACK TO TOP
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (window.scrollY > 50) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
  if (window.scrollY > 400) {
    scrollBtn.classList.remove('opacity-0', 'invisible', 'translate-y-2.5');
    scrollBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
  } else {
    scrollBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
    scrollBtn.classList.add('opacity-0', 'invisible', 'translate-y-2.5');
  }
});

// 2. MOBILE MENU
const mobileBtn = document.getElementById('mobile-hamburger');
const navMenu = document.getElementById('nav-navigation');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('open');
    const spans = mobileBtn.querySelectorAll('span');
    if (mobileBtn.classList.contains('open')) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      navMenu.classList.remove('hidden');
      navMenu.classList.add('flex', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-white/95', 'dark:bg-[#1b1530]/95', 'backdrop-blur-xl', 'border-b-2', 'border-brand-gold', 'flex-col', 'p-8', 'gap-4', 'shadow-2xl');
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
      navMenu.classList.remove('flex', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-white/95', 'dark:bg-[#1b1530]/95', 'backdrop-blur-xl', 'border-b-2', 'border-brand-gold', 'flex-col', 'p-8', 'gap-4', 'shadow-2xl');
      navMenu.classList.add('hidden');
    }
  });
}

// 3. FILTER & SEARCH
const filterTabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.solution-card');
const searchInput = document.getElementById('search-solutions');

function applyFilters() {
  const activeTab = document.querySelector('.filter-tab.active');
  const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const titleElement = card.querySelector('.card-title') || card.querySelector('h3');
    const cardTitle = titleElement ? titleElement.textContent.toLowerCase() : '';
    const matchesCat = (category === 'all' || cardCategory === category);
    const matchesSearch = cardTitle.includes(query);
    const slide = card.closest('.carousel-slide') || card;
    if (matchesCat && matchesSearch) {
      slide.classList.remove('hidden');
    } else {
      slide.classList.add('hidden');
    }
  });
  if (solutionsDeck) solutionsDeck.refresh();
  if (solutionsPager) solutionsPager.refresh();
}

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    applyFilters();
  });
});

if (searchInput) searchInput.addEventListener('input', applyFilters);

// 4. MODAL
const quoteOverlay = document.getElementById("quote-modal-overlay");
const quoteServiceSelect = document.getElementById("quote-service");

function openQuoteModal(serviceTitle = "Diagnostic Global") {
  // Fix: force le texte des champs en noir, meme en mode sombre,
  // car le fond du formulaire reste clair.
  quoteOverlay.querySelectorAll("input, select, textarea").forEach(function(el) {
    el.style.color = "#1A1A2E";
  });

  quoteOverlay.classList.remove("opacity-0", "invisible");
  quoteOverlay.classList.add("opacity-100", "visible");
  quoteOverlay.querySelector(".quote-modal").classList.remove("translate-y-4");
  quoteOverlay.querySelector(".quote-modal").classList.add("translate-y-0");
  document.body.classList.add("overflow-hidden");

  if (quoteServiceSelect && serviceTitle) {
    const optionToSelect = Array.from(quoteServiceSelect.options).find(opt => opt.text.trim().toLowerCase().includes(serviceTitle.toLowerCase()) || opt.value === serviceTitle);
    if (optionToSelect) {
      quoteServiceSelect.value = optionToSelect.value;
    } else {
      quoteServiceSelect.value = "Devis Global";
    }
  }
}

function closeQuoteModal() {
  quoteOverlay.classList.remove("opacity-100", "visible");
  quoteOverlay.classList.add("opacity-0", "invisible");
  quoteOverlay.querySelector(".quote-modal").classList.remove("translate-y-0");
  quoteOverlay.querySelector(".quote-modal").classList.add("translate-y-4");
  document.body.classList.remove("overflow-hidden");
}

quoteOverlay.addEventListener("click", (e) => {
  if (e.target === quoteOverlay) closeQuoteModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeQuoteModal();
});

// 5. FORM SUBMIT
function handleQuoteSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("quote-name").value;
  const email = document.getElementById("quote-email").value;
  const phone = document.getElementById("quote-phone").value;
  const service = document.getElementById("quote-service").value;
  const message = document.getElementById("quote-message").value;

  fetch("php/contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, service, message })
  })
  .then(res => res.json())
  .then(data => {
    const toast = document.getElementById("success-toast");
    if (data.success) {
      toast.innerHTML = "✓ Demande de devis envoyée avec succès à <strong>pro@gtelstore.ma</strong> !";
    } else {
      toast.innerHTML = "⚠ Erreur : " + data.error;
    }
    toast.classList.remove('-translate-x-[150%]');
    toast.classList.add('translate-x-0');
    setTimeout(() => {
      toast.classList.remove('translate-x-0');
      toast.classList.add('-translate-x-[150%]');
    }, 5000);
  })
  .catch(err => {
    console.log("Mocking dynamic email delivery locally:", { name, email, phone, service, message });
    const toast = document.getElementById("success-toast");
    toast.classList.remove('-translate-x-[150%]');
    toast.classList.add('translate-x-0');
    setTimeout(() => {
      toast.classList.remove('translate-x-0');
      toast.classList.add('-translate-x-[150%]');
    }, 5000);
  });

  closeQuoteModal();
  document.getElementById("gtel-quote-form").reset();
}

// 6. SCROLL REVEAL
const revealTargets = document.querySelectorAll('.reveal, .stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealTargets.forEach(el => revealObserver.observe(el));

// 7. MOUSE GLOW (ambient light following the cursor)
const mouseGlow = document.getElementById('mouse-glow');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  window.addEventListener('pointermove', (e) => {
    mouseGlow.style.setProperty('--mx', e.clientX + 'px');
    mouseGlow.style.setProperty('--my', e.clientY + 'px');
  });
} else {
  mouseGlow.style.display = 'none';
}

// 8. DUST PARTICLES (motes dorées, agrandies et plus visibles ; respecte reduced-motion)
(function initDust() {
  const canvas = document.getElementById('dust-canvas');
  if (!canvas || prefersReducedMotion) { if (canvas) canvas.style.display = 'none'; return; }
  const ctx = canvas.getContext('2d');
  let w, h, motes;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function makeMotes(count) {
    return Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3.2 + 1.4,       // motes plus grandes qu'avant (0.4–2.2 -> 1.4–4.6)
      speed: Math.random() * 0.4 + 0.1,
      drift: Math.random() * 0.7 - 0.35,
      gold: Math.random() > 0.4
    }));
  }
  resize();
  motes = makeMotes(Math.min(70, Math.floor((w * h) / 16000)));
  window.addEventListener('resize', () => { resize(); motes = makeMotes(Math.min(70, Math.floor((w * h) / 16000))); });

  function tick() {
    ctx.clearRect(0, 0, w, h);
    motes.forEach(m => {
      m.y -= m.speed;
      m.x += m.drift * 0.2;
      if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w; }
      if (m.x < -10) m.x = w + 10;
      if (m.x > w + 10) m.x = -10;
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = m.gold ? 'rgba(251,184,43,0.85)' : 'rgba(139,92,246,0.65)';
      ctx.shadowColor = m.gold ? 'rgba(251,184,43,0.9)' : 'rgba(139,92,246,0.7)';
      ctx.shadowBlur = 6;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
})();

// 9. LANGUAGE SYSTEM (translit)
document.addEventListener('DOMContentLoaded', () => {
  translit.init('fr');
});

// 10. DARK / LIGHT MODE
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem('gtel-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  if (theme === 'dark') root.classList.add('dark');

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle-btn');
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', root.classList.contains('dark'));
    toggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      const isDark = root.classList.contains('dark');
      localStorage.setItem('gtel-theme', isDark ? 'dark' : 'light');
      toggle.setAttribute('aria-pressed', isDark);
    });
  });
})();

// 11. PILE DE CARTES MOBILE (deck) — remplace les longues listes de cartes
//     par un empilement animé et glissable au doigt, en dessous de 768px.
//     Au-dessus de 768px, la grille/le flex d'origine reste inchangé(e).
function initCardDeck(opts) {
  const container = typeof opts.container === 'string' ? document.querySelector(opts.container) : opts.container;
  if (!container) return null;
  const dotsWrap = opts.dots ? document.querySelector(opts.dots) : null;
  const prevBtn = opts.prev ? document.querySelector(opts.prev) : null;
  const nextBtn = opts.next ? document.querySelector(opts.next) : null;
  const advanceSelector = opts.advanceTrigger || '.carousel-advance-trigger';
  // Autoplay désactivé par défaut si explicitement mis à false dans les options.
  const autoplayEnabled = opts.autoplay !== false;
  const mqMobile = window.matchMedia('(max-width: 767px)');

  let cards = [];
  let current = 0;
  let timer = null;
  let active = false;
  let startX = 0, startY = 0, dragging = false;
  let wasSwipe = false;

  function getAllCards() {
    return Array.prototype.slice.call(container.children).filter(el =>
      el.matches(opts.itemSelector) && !el.classList.contains('hidden')
    );
  }

  function setHeight() {
    const activeCard = cards[current];
    if (activeCard) container.style.minHeight = activeCard.offsetHeight + 'px';
  }

  function render() {
    const total = cards.length;
    cards.forEach((card, i) => {
      card.classList.remove('deck-active', 'deck-below', 'deck-below-2', 'deck-below-3');
      const diff = (i - current + total) % total;
      if (diff === 0) card.classList.add('deck-active');
      else if (diff === 1) card.classList.add('deck-below');
      else if (diff === 2) card.classList.add('deck-below-2');
      else if (diff === 3) card.classList.add('deck-below-3');
    });
    if (dotsWrap) {
      Array.from(dotsWrap.children).forEach((dot, i) => dot.classList.toggle('active', i === current));
    }
    setHeight();
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'deck-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Aller à la carte ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function goTo(index) {
    if (!cards.length) return;
    current = ((index % cards.length) + cards.length) % cards.length;
    render();
    restart();
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function restart() {
    if (timer) clearInterval(timer);
    timer = null;
    if (!autoplayEnabled) return; // pas de passage automatique pour ce carrousel
    timer = setInterval(() => goTo(current + 1), opts.interval || 4800);
  }
  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function onTouchStart(e) {
    dragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }
  function onTouchEnd(e) {
    if (!dragging) return;
    dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      wasSwipe = true;
      setTimeout(() => { wasSwipe = false; }, 300);
      if (dx < 0) next(); else prev();
    }
  }
  function onPrevClick() { prev(); }
  function onNextClick() { next(); }
  // Cliquer/tapoter sur la photo (ou la carte marquée comme déclencheur) fait
  // avancer vers la carte suivante — pas de défilement automatique.
  function onCardClick(e) {
    if (wasSwipe) return;
    if (e.target.closest('.deck-dot, .carousel-nav-btn, a, button')) return;
    const trigger = e.target.closest(advanceSelector);
    if (trigger && container.contains(trigger)) next();
  }

  function activate() {
    if (active) return;
    cards = getAllCards();
    if (!cards.length) return;
    active = true;
    cards.forEach(c => c.classList.add('deck-item'));
    container.classList.add('deck-stack');
    current = 0;
    buildDots();
    render();
    restart();
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    container.addEventListener('click', onCardClick);
    if (prevBtn) prevBtn.addEventListener('click', onPrevClick);
    if (nextBtn) nextBtn.addEventListener('click', onNextClick);
  }

  function deactivate() {
    if (!active) return;
    active = false;
    stopTimer();
    container.classList.remove('deck-stack');
    container.style.minHeight = '';
    cards.forEach(c => c.classList.remove('deck-item', 'deck-active', 'deck-below', 'deck-below-2', 'deck-below-3'));
    if (dotsWrap) dotsWrap.innerHTML = '';
    container.removeEventListener('touchstart', onTouchStart);
    container.removeEventListener('touchend', onTouchEnd);
    container.removeEventListener('click', onCardClick);
    if (prevBtn) prevBtn.removeEventListener('click', onPrevClick);
    if (nextBtn) nextBtn.removeEventListener('click', onNextClick);
  }

  // Recalcule la liste des cartes visibles (ex: après un filtre) sans tout ré-initialiser.
  function refresh() {
    if (!active) return;
    cards.forEach(c => c.classList.remove('deck-item', 'deck-active', 'deck-below', 'deck-below-2', 'deck-below-3'));
    cards = getAllCards();
    cards.forEach(c => c.classList.add('deck-item'));
    current = 0;
    buildDots();
    render();
    restart();
  }

  function handleChange(e) { if (e.matches) activate(); else deactivate(); }
  if (mqMobile.addEventListener) mqMobile.addEventListener('change', handleChange);
  else mqMobile.addListener(handleChange);

  if (mqMobile.matches) activate();

  return { refresh };
}

// 12. CARROUSEL SOLUTIONS (bureau) — pagine par groupes de cartes (3 en desktop,
//     2 en tablette) via les flèches, tant que le deck mobile n'est pas actif.
function initGridPager(opts) {
  const viewport = document.querySelector(opts.viewport);
  const track = document.querySelector(opts.track);
  const prevBtn = opts.prev ? document.querySelector(opts.prev) : null;
  const nextBtn = opts.next ? document.querySelector(opts.next) : null;
  const dotsWrap = opts.dots ? document.querySelector(opts.dots) : null;
  if (!viewport || !track) return null;

  const mqDesktop = window.matchMedia('(min-width: 768px)');
  let page = 0, pages = 1, active = false, pageWidth = 0;

  function getPerPage() { return window.innerWidth >= 1024 ? 3 : 2; }

  function getVisibleCards() {
    return Array.prototype.slice.call(track.children).filter(el =>
      el.matches(opts.itemSelector) && !el.classList.contains('hidden')
    );
  }

  function layout() {
    const perPage = getPerPage();
    const cards = getVisibleCards();
    const gapPx = 24; // gap-6
    const vw = viewport.clientWidth;
    const cardWidth = (vw - gapPx * (perPage - 1)) / perPage;
    cards.forEach(c => { c.style.flex = '0 0 ' + cardWidth + 'px'; });
    pageWidth = vw + gapPx;
    pages = Math.max(1, Math.ceil(cards.length / perPage));
    page = Math.min(page, pages - 1);
    buildDots();
    render();
  }

  function render() {
    track.style.transform = 'translateX(-' + (page * pageWidth) + 'px)';
    if (prevBtn) prevBtn.disabled = page === 0;
    if (nextBtn) nextBtn.disabled = page >= pages - 1;
    if (dotsWrap) Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === page));
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    if (pages <= 1) { dotsWrap.classList.remove('is-active'); return; }
    dotsWrap.classList.add('is-active');
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.className = 'sol-dot' + (i === page ? ' active' : '');
      dot.setAttribute('aria-label', 'Page ' + (i + 1));
      dot.addEventListener('click', () => { page = i; render(); });
      dotsWrap.appendChild(dot);
    }
  }

  function goNext() { if (page < pages - 1) { page++; render(); } }
  function goPrev() { if (page > 0) { page--; render(); } }
  function onResize() { if (active) layout(); }

  function activate() {
    if (active) return;
    active = true;
    track.classList.add('sol-carousel-track');
    page = 0;
    layout();
    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);
    window.addEventListener('resize', onResize);
  }

  function deactivate() {
    if (!active) return;
    active = false;
    track.classList.remove('sol-carousel-track');
    track.style.transform = '';
    getVisibleCards().forEach(c => { c.style.flex = ''; });
    if (dotsWrap) { dotsWrap.innerHTML = ''; dotsWrap.classList.remove('is-active'); }
    if (prevBtn) prevBtn.removeEventListener('click', goPrev);
    if (nextBtn) nextBtn.removeEventListener('click', goNext);
    window.removeEventListener('resize', onResize);
  }

  function refresh() { page = 0; if (active) layout(); }

  function handleChange(e) { if (e.matches) activate(); else deactivate(); }
  if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', handleChange);
  else mqDesktop.addListener(handleChange);
  if (mqDesktop.matches) activate();

  return { refresh };
}

let solutionsDeck = null;
let solutionsPager = null;

document.addEventListener('DOMContentLoaded', () => {
  solutionsDeck = initCardDeck({
    container: '#solutions-container-grid',
    itemSelector: '.solution-card',
    dots: '#solutions-deck-dots',
    interval: 4500
  });

  solutionsPager = initGridPager({
    viewport: '.solutions-carousel-viewport',
    track: '#solutions-container-grid',
    itemSelector: '.solution-card',
    prev: '#solutions-prev',
    next: '#solutions-next',
    dots: '#solutions-carousel-dots'
  });

  initCardDeck({
    container: '#sectors-carousel-viewport .carousel-track',
    itemSelector: '.carousel-slide',
    dots: '#sectors-carousel-dots',
    prev: '#sectors-prev',
    next: '#sectors-next',
    advanceTrigger: '.sector-photo-frame',
    autoplay: false
  });

  initCardDeck({
    container: '#partners-deck',
    itemSelector: '.partner-tree',
    dots: '#partners-deck-dots',
    prev: '#partners-prev',
    next: '#partners-next',
    advanceTrigger: '.partner-tree',
    autoplay: false
  });

  initCardDeck({
    container: '#poles-deck',
    itemSelector: '.glass-dark',
    dots: '#poles-deck-dots',
    prev: '#poles-prev',
    next: '#poles-next',
    advanceTrigger: '.pole-photo, .glass-dark',
    autoplay: false
  });
});