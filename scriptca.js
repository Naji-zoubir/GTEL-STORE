/* ============================================================
   GTEL — script.js — interactions & animations
   ============================================================ */

/* ---------- Theme (dark / light) ---------- */
(function initTheme(){
  const saved = localStorage.getItem('gtel-theme');
  const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', preferred);
})();

function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('gtel-theme', next);
}

/* ---------- Mobile menu ---------- */
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

function closeMobileMenu(){ mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }
function openMobileMenu(){ mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; }

if(mobileToggle){
  mobileToggle.addEventListener('click', openMobileMenu);
  mobileClose.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
}

/* ---------- Header shadow on scroll ---------- */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 30 ? '0 8px 30px -18px rgba(0,0,0,.3)' : 'none';
}, { passive:true });

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ---------- Clearance rail (desktop) + mobile progress bar ---------- */
const railNodes = document.querySelectorAll('.rail-node');
const sections = Array.from(railNodes).map(n => document.getElementById(n.dataset.target)).filter(Boolean);
const progressFill = document.getElementById('mobile-progress-fill');

function updateRail(){
  let currentIndex = 0;
  sections.forEach((sec, i) => {
    const rect = sec.getBoundingClientRect();
    if(rect.top <= window.innerHeight * 0.4) currentIndex = i;
  });
  railNodes.forEach((n, i) => n.classList.toggle('active', i === currentIndex));

  if(progressFill){
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressFill.style.width = pct + '%';
  }
}
window.addEventListener('scroll', updateRail, { passive:true });
window.addEventListener('resize', updateRail);
updateRail();

railNodes.forEach(n => {
  n.addEventListener('click', () => {
    const target = document.getElementById(n.dataset.target);
    if(target) target.scrollIntoView({ behavior:'smooth' });
  });
});

/* ---------- FAQ accordion ---------- */
function toggleFAQ(btn){
  const content = btn.nextElementSibling;
  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  document.querySelectorAll('.faq-q').forEach(b => {
    b.setAttribute('aria-expanded', 'false');
    b.nextElementSibling.style.maxHeight = null;
  });

  if(!isOpen){
    btn.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

/* ---------- Modal ---------- */
const overlay = document.getElementById('modal-overlay');

function openQuoteModal(service = "Contrôle d'Accès"){
  overlay.classList.add('open');
  const select = document.getElementById('quote-service');
  if(select) select.value = service;
  document.body.style.overflow = 'hidden';
}
function closeQuoteModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
overlay?.addEventListener('click', (e) => { if(e.target === overlay) closeQuoteModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeQuoteModal(); });

/* ---------- Form submit ---------- */
function handleQuoteSubmit(event){
  event.preventDefault();
  const payload = {
    type: "devis",
    name: document.getElementById("quote-name").value,
    email: document.getElementById("quote-email").value,
    phone: document.getElementById("quote-phone").value,
    service: document.getElementById("quote-service").value,
    message: "Demande depuis la page Contrôle d'Accès & Intrusion"
  };

  fetch("../contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    const toast = document.getElementById("toast");
    const msg = document.getElementById("toast-msg");
    const lang = localStorage.getItem('gtel-lang') || 'fr';
    if(data.success){
      msg.textContent = (translations[lang] && translations[lang]['toast.success']) || 'Demande envoyée !';
    } else {
      msg.textContent = "⚠ " + (data.error || 'Erreur');
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    closeQuoteModal();
    document.getElementById("gtel-quote-form").reset();
  })
  .catch(() => {
    alert("Erreur de connexion avec le serveur PHP.");
  });
}

/* ---------- Hero canvas — access-network particle field ---------- */
(function heroParticles(){
  const canvas = document.getElementById('hero-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function initParticles(){
    const count = Math.min(70, Math.floor((w * h) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
    });

    for(let i = 0; i < particles.length; i++){
      for(let j = i + 1; j < particles.length; j++){
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if(dist < 140){
          ctx.strokeStyle = `rgba(251,184,43,${0.14 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.85)';
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  resize();
  initParticles();
  window.addEventListener('resize', () => { resize(); initParticles(); });
  if(!reduceMotion) requestAnimationFrame(step);
})();
