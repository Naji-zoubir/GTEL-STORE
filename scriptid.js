/* =========================================================================
   GTEL — script.js
   Thème clair/sombre · Multilingue FR/AR/EN (RTL) · Animations au scroll ·
   Navigation mobile · FAQ · Modal de devis · Toast
   ========================================================================= */
(function () {
  "use strict";

  const STORAGE_THEME = "gtel-theme";
  const STORAGE_LANG = "gtel-lang";
  const FLAGS = { fr: "🇫🇷", ar: "🇲🇦", en: "🇬🇧" };
  const RTL_LANGS = ["ar"];

  /* ---------------------------- THEME ---------------------------- */
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    const theme = saved || "light";
    document.documentElement.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_THEME, next);
  }

  /* ---------------------------- LANGUAGE / i18n ---------------------------- */
  function applyTranslations(lang) {
    const dict = (window.translations && window.translations[lang]) || {};
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
  }

  function setLang(lang) {
    if (!window.translations || !window.translations[lang]) lang = "fr";
    const isRTL = RTL_LANGS.includes(lang);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    applyTranslations(lang);

    const flagEl = document.getElementById("lang-flag");
    const codeEl = document.getElementById("lang-code");
    if (flagEl) flagEl.textContent = FLAGS[lang] || "🌐";
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    document.querySelectorAll("[data-lang-opt]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-opt") === lang);
    });

    localStorage.setItem(STORAGE_LANG, lang);
  }

  function initLang() {
    const saved = localStorage.getItem(STORAGE_LANG) || "fr";
    setLang(saved);
  }

  /* ---------------------------- MOBILE NAV ---------------------------- */
  function initMobileNav() {
    const btn = document.getElementById("hamburger");
    const panel = document.getElementById("mobile-nav");
    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      btn.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    panel.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        panel.classList.remove("open");
        btn.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------------------- HEADER / SCROLL PROGRESS ---------------------------- */
  function initScrollEffects() {
    const header = document.getElementById("site-header");
    const progress = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 40);
      if (progress) {
        const h = document.documentElement;
        const scrollable = h.scrollHeight - h.clientHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = pct + "%";
      }
      updateTimelineFill();
    }, { passive: true });
  }

  /* ---------------------------- SIDE RAIL ACTIVE STATE ---------------------------- */
  function initSideRail() {
    const links = document.querySelectorAll(".side-rail a");
    if (!links.length) return;
    const sections = Array.from(links)
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(`.side-rail a[href="#${entry.target.id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------------------- SCROLL REVEAL ---------------------------- */
  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
  }

  /* ---------------------------- TIMELINE PROGRESS FILL ---------------------------- */
  function updateTimelineFill() {
    const timeline = document.getElementById("timeline");
    const fill = document.getElementById("timeline-fill");
    if (!timeline || !fill) return;
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.75;
    const total = rect.height + vh * 0.5;
    let progressed = start - rect.top;
    progressed = Math.max(0, Math.min(progressed, total));
    const pct = total > 0 ? (progressed / total) * 100 : 0;
    fill.style.height = pct + "%";

    document.querySelectorAll(".tl-step").forEach((step) => {
      const r = step.getBoundingClientRect();
      if (r.top < vh * 0.7) step.classList.add("in-view");
    });
  }

  /* ---------------------------- SPOTLIGHT CURSOR (guarantee & threat cards) ---------------------------- */
  function initSpotlight() {
    const targets = document.querySelectorAll(".g-panel, .threat-card");
    targets.forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (e.clientX - r.left) + "px");
        el.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* ---------------------------- MAGNETIC BUTTONS ---------------------------- */
  function initMagneticButtons() {
    const buttons = document.querySelectorAll(".btn");
    const strength = 0.25;
    buttons.forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* ---------------------------- COUNT-UP STATS ---------------------------- */
  function animateCount(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^(\d+(?:[.,]\d+)?)/);
    if (!match) return; // non-numeric values (e.g. "Zero") stay static
    const target = parseFloat(match[1].replace(",", "."));
    const suffix = raw.slice(match[1].length);
    const decimals = match[1].includes(".") || match[1].includes(",") ? match[1].split(/[.,]/)[1].length : 0;
    const duration = 1400;
    const start = performance.now();
    el.classList.add("counting");

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = (target * eased).toFixed(decimals);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    }
    requestAnimationFrame(tick);
  }

  function initCountUp() {
    const nums = document.querySelectorAll(".d-num[data-count]");
    if (!nums.length) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((n) => observer.observe(n));
  }

  /* ---------------------------- FAQ ---------------------------- */
  function toggleFaq(btn) {
    const item = btn.closest(".faq-item");
    const answer = item.querySelector(".faq-a");
    const wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach((el) => {
      el.classList.remove("open");
      el.querySelector(".faq-a").style.maxHeight = null;
    });

    if (!wasOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  }

  /* ---------------------------- MODAL ---------------------------- */
  function openModal(service) {
    const overlay = document.getElementById("quote-modal-overlay");
    if (!overlay) return;
    overlay.classList.add("open");
    const select = document.getElementById("quote-service");
    if (select && service) select.value = service;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const overlay = document.getElementById("quote-modal-overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ---------------------------- FORM SUBMIT ---------------------------- */
  function handleQuoteSubmit(event) {
    event.preventDefault();
    const lang = document.documentElement.getAttribute("lang") || "fr";
    const dict = (window.translations && window.translations[lang]) || {};

    const payload = {
      type: "devis",
      name: document.getElementById("quote-name").value,
      email: document.getElementById("quote-email").value,
      phone: document.getElementById("quote-phone").value,
      service: document.getElementById("quote-service").value,
      message: "Demande depuis la page Infrastructure Digitale"
    };

    fetch("contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((data) => {
        const toast = document.getElementById("success-toast");
        const msg = document.getElementById("toast-msg");
        if (data.success) {
          msg.textContent = dict["toast.success"] || "✓ Demande envoyée avec succès !";
        } else {
          msg.textContent = (dict["toast.error"] || "⚠ Erreur :") + " " + (data.error || "");
        }
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 4000);
        closeModal();
        document.getElementById("gtel-quote-form").reset();
      })
      .catch(() => {
        const toast = document.getElementById("success-toast");
        const msg = document.getElementById("toast-msg");
        msg.textContent = dict["toast.error"] || "⚠ Erreur de connexion avec le serveur.";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 4000);
      });
  }

  /* ---------------------------- INIT ---------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLang();
    initMobileNav();
    initScrollEffects();
    initSideRail();
    initReveal();
    updateTimelineFill();
    initSpotlight();
    initMagneticButtons();
    initCountUp();

    document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);

    // close modal on backdrop click
    document.getElementById("quote-modal-overlay")?.addEventListener("click", (e) => {
      if (e.target.id === "quote-modal-overlay") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  });

  /* ---------------------------- PUBLIC API (used by inline onclick=) ---------------------------- */
  window.GTEL = {
    setLang,
    toggleFaq,
    openModal,
    closeModal,
    handleQuoteSubmit
  };
})();