/* ============================================================
   GTEL — SERVICES MANAGÉS — INTERACTIONS
   ============================================================ */

/* ---------- Theme (dark / light) ---------- */
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("gtel-theme", theme); } catch(e){}
}
function initTheme(){
  let saved = null;
  try { saved = localStorage.getItem("gtel-theme"); } catch(e){}
  if (!saved){
    saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(saved);
}
function toggleTheme(){
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

/* ---------- Signal rail — scroll progress ---------- */
function updateRail(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;
  doc.style.setProperty("--scroll-pct", pct + "%");

  const header = document.getElementById("site-header");
  if (header) header.style.boxShadow = scrollTop > 40 ? "0 12px 30px -20px rgba(0,0,0,0.35)" : "none";
}

/* ---------- Mobile nav panel ---------- */
function toggleMobilePanel(force){
  const panel = document.getElementById("mobile-panel");
  const shouldOpen = typeof force === "boolean" ? force : !panel.classList.contains("open");
  panel.classList.toggle("open", shouldOpen);
  document.body.style.overflow = shouldOpen ? "hidden" : "";
}

/* ---------- Reveal on scroll ---------- */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

/* ---------- Active nav-link highlight while scrolling ---------- */
function initSectionSpy(){
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".rail-dot");
  if (!sections.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const dot = document.querySelector(`.rail-dot[data-target="${entry.target.id}"]`);
      if (!dot) return;
      dot.classList.toggle("active", entry.isIntersecting);
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}

/* ---------- Pricing plan tabs (mobile) ---------- */
function initPlanTabs(){
  const tabs = document.querySelectorAll(".plan-tab");
  const cards = document.querySelectorAll(".plan-card");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      cards.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      const target = document.querySelector(`.plan-card[data-plan="${tab.dataset.plan}"]`);
      if (target) target.classList.add("active");
    });
  });
}

/* ---------- Carousel scroll-dots (perimeter section) ---------- */
function initCarouselDots(trackSelector, dotsSelector){
  const track = document.querySelector(trackSelector);
  const dots = document.querySelectorAll(`${dotsSelector} span`);
  if (!track || !dots.length) return;
  track.addEventListener("scroll", () => {
    const index = Math.round(track.scrollLeft / (track.firstElementChild.offsetWidth + 18));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }, { passive: true });
}

/* ---------- FAQ accordion ---------- */
function toggleFAQ(btn){
  const content = btn.nextElementSibling;
  const isExpanded = btn.getAttribute("aria-expanded") === "true";
  document.querySelectorAll(".faq-btn").forEach(b => {
    b.setAttribute("aria-expanded", "false");
    b.nextElementSibling.style.maxHeight = null;
  });
  if (!isExpanded){
    btn.setAttribute("aria-expanded", "true");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

/* ---------- Quote modal ---------- */
function openQuoteModal(service){
  const overlay = document.getElementById("quote-overlay");
  overlay.classList.add("open");
  const select = document.getElementById("quote-service");
  if (service && select) select.value = service;
  document.body.style.overflow = "hidden";
}
function closeQuoteModal(){
  const overlay = document.getElementById("quote-overlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function handleQuoteSubmit(event){
  event.preventDefault();
  const lang = document.documentElement.lang || "fr";
  const dict = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]) || {};

  const payload = {
    type: "devis",
    name: document.getElementById("quote-name").value,
    email: document.getElementById("quote-email").value,
    phone: document.getElementById("quote-phone").value,
    service: document.getElementById("quote-service").value,
    message: "Demande depuis la page Services Managés"
  };

  fetch("../contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    const toast = document.getElementById("success-toast");
    const msgEl = document.getElementById("toast-msg");
    if (data.success){
      msgEl.innerText = dict["toast.success"] || "✓ Demande envoyée avec succès !";
    } else {
      msgEl.innerText = (dict["toast.error"] || "⚠ Erreur : ") + data.error;
    }
    toast.style.transform = "translateX(0)";
    setTimeout(() => { toast.style.transform = ""; }, 4000);
    closeQuoteModal();
    document.getElementById("gtel-quote-form").reset();
  })
  .catch(() => {
    alert((dict["toast.connfail"]) || "Erreur de connexion avec le serveur.");
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateRail();
  initReveal();
  initSectionSpy();
  initPlanTabs();
  initCarouselDots(".perimeter-track", ".scroll-hint");

  window.addEventListener("scroll", updateRail, { passive: true });

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const hamburger = document.getElementById("mobile-trigger");
  if (hamburger) hamburger.addEventListener("click", () => toggleMobilePanel(true));
  const closeBtn = document.getElementById("mobile-panel-close");
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMobilePanel(false));
  document.querySelectorAll("#mobile-panel a, #mobile-panel button.btn").forEach(el => {
    el.addEventListener("click", () => toggleMobilePanel(false));
  });
});
