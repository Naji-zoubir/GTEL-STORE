/* ==========================================================================
   GTEL — Cybersécurité — Comportements d'interface
   Complète CYCB.js (qui ne gère que les traductions).
   Ce fichier gère : reveal au scroll, header sticky, menu mobile,
   dark/light mode, rail d'index, FAQ, modale de devis, toast, effet de frappe hero.
   ========================================================================== */

(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     1. HEADER — état "scrolled" + barre de progression
  --------------------------------------------------------------------- */
  const header = document.getElementById("site-header");
  const progressBar = document.getElementById("scroll-progress");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
    if (progressBar) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progressBar.style.width = pct + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------------------
     2. REVEAL AU SCROLL (.reveal / .reveal-stagger)
  --------------------------------------------------------------------- */
  document.querySelectorAll(".reveal-stagger").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty("--i", i);
    });
  });

  const revealTargets = document.querySelectorAll(".reveal");
  if (prefersReduced) {
    revealTargets.forEach((el) => el.classList.add("in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("in"));
  }

  /* ---------------------------------------------------------------------
     3. MENU MOBILE (hamburger)
  --------------------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  function closeMobileNav() {
    if (hamburger) hamburger.classList.remove("open");
    if (mobileNav) mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  }
  function toggleMobileNav() {
    const isOpen = mobileNav && mobileNav.classList.toggle("open");
    if (hamburger) hamburger.classList.toggle("open", !!isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
  if (hamburger) hamburger.addEventListener("click", toggleMobileNav);
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobileNav));
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1040) closeMobileNav();
  });

  /* ---------------------------------------------------------------------
     4. SÉLECTEUR DE LANGUE — support tactile (le CSS ne gère que :hover)
  --------------------------------------------------------------------- */
  document.querySelectorAll(".lang-switch").forEach((sw) => {
    const trigger = sw.querySelector(".lang-current");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !sw.classList.contains("open");
      document.querySelectorAll(".lang-switch.open").forEach((el) => el.classList.remove("open"));
      sw.classList.toggle("open", willOpen);
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".lang-switch.open").forEach((el) => el.classList.remove("open"));
  });

  /* ---------------------------------------------------------------------
     5. DARK / LIGHT MODE
  --------------------------------------------------------------------- */
  const THEME_KEY = "gtel-theme";
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "dark");
  }
  function getPreferredTheme() {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------------------------------------------------------------------
     6. RAIL D'INDEX (desktop) — scrollspy + clic pour naviguer
  --------------------------------------------------------------------- */
  const railButtons = Array.from(document.querySelectorAll(".index-rail button[data-target]"));
  const railSections = railButtons
    .map((btn) => document.getElementById(btn.getAttribute("data-target")))
    .filter(Boolean);

  railButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-target"));
      if (target) target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  if ("IntersectionObserver" in window && railSections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          railButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-target") === entry.target.id);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    railSections.forEach((sec) => spy.observe(sec));
  }

  /* ---------------------------------------------------------------------
     7. FAQ — accordéon
  --------------------------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    const panel = item.querySelector(".faq-a");
    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      // ferme les autres items du même groupe (comportement accordéon)
      item.parentElement.querySelectorAll(".faq-item").forEach((other) => {
        if (other === item) return;
        const otherBtn = other.querySelector(".faq-q");
        const otherPanel = other.querySelector(".faq-a");
        if (otherBtn && otherPanel) {
          otherBtn.setAttribute("aria-expanded", "false");
          otherPanel.style.maxHeight = "0px";
        }
      });

      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
    });
  });

  /* ---------------------------------------------------------------------
     8. MODALE DE DEVIS
  --------------------------------------------------------------------- */
  const modalOverlay = document.getElementById("modal-overlay");
  const quoteService = document.getElementById("quote-service");
  let lastFocusedEl = null;

  window.openQuoteModal = function (service) {
    if (!modalOverlay) return;
    if (service && quoteService) {
      const opt = Array.from(quoteService.options).find((o) => o.value === service);
      if (opt) quoteService.value = service;
    }
    lastFocusedEl = document.activeElement;
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    const firstField = document.getElementById("quote-name");
    if (firstField) setTimeout(() => firstField.focus(), 200);
  };

  window.closeQuoteModal = function () {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  };

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeQuoteModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
      closeQuoteModal();
    }
  });

  /* ---------------------------------------------------------------------
     9. FORMULAIRE DE DEVIS — soumission + toast
  --------------------------------------------------------------------- */
  const quoteForm = document.getElementById("gtel-quote-form");
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast() {
    if (!toast) return;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 4000);
  }

  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // TODO: brancher ici l'envoi réel (endpoint backend / service d'emailing).
      closeQuoteModal();
      quoteForm.reset();
      showToast();
    });
  }

  /* ---------------------------------------------------------------------
     10. HERO — effet de frappe (typing) sur le titre
  --------------------------------------------------------------------- */
  const heroTitle = document.getElementById("hero-typed");
  let typingTimer = null;

  function typeHeroTitle() {
    if (!heroTitle) return;
    const full = heroTitle.getAttribute("data-full") || heroTitle.textContent;
    if (prefersReduced) {
      heroTitle.textContent = full;
      return;
    }
    clearTimeout(typingTimer);
    heroTitle.textContent = "";
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    heroTitle.appendChild(document.createTextNode(""));
    heroTitle.appendChild(cursor);

    let i = 0;
    const speed = 28;
    function step() {
      if (i <= full.length) {
        heroTitle.childNodes[0].nodeValue = full.slice(0, i);
        i++;
        typingTimer = setTimeout(step, speed);
      }
    }
    step();
  }
  typeHeroTitle();

  // Ré-exécute l'effet de frappe quand la langue change (CYCB.js écrase le texte)
  window.addEventListener("gtel:langchange", () => {
    if (heroTitle) {
      // CYCB.js vient de remettre le texte traduit en dur : on le récupère
      // comme nouvelle référence avant de relancer l'animation.
      const dictText = heroTitle.textContent;
      heroTitle.setAttribute("data-full", dictText);
      typeHeroTitle();
    }
  });
})();