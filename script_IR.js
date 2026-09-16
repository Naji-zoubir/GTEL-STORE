/* ==========================================================================
   GTEL — script.js
   Logique du site : thème, langue/RTL, menu, FAQ, modal, animations,
   canvas "backbone" (réseau de nœuds animé, remplace les visuels générés).
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------ THEME -- */
  const THEME_KEY = "gtel-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  }

  function toggleTheme() {
    const isDark = root.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  }
  window.toggleTheme = toggleTheme;

  /* --------------------------------------------------------- LANGUAGE -- */
  const LANG_KEY = "gtel-lang";
  const RTL_LANGS = ["ar"];
  const LANG_META = {
    fr: { flag: "🇫🇷", code: "FR", label: "Français" },
    ar: { flag: "🇲🇦", code: "AR", label: "العربية" },
    en: { flag: "🇬🇧", code: "EN", label: "English" }
  };

  function t(lang, key) {
    const dict = (window.GTEL_I18N && window.GTEL_I18N[lang]) || {};
    return dict[key] || (window.GTEL_I18N.fr && window.GTEL_I18N.fr[key]) || null;
  }

  function applyLanguage(lang) {
    if (!window.GTEL_I18N || !window.GTEL_I18N[lang]) lang = "fr";

    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (value === null) return;

      if (el.hasAttribute("data-i18n-gold-last")) {
        // Colore les 2 derniers mots en or, le reste reste blanc
        const words = value.trim().split(/\s+/);
        const goldCount = Math.min(2, words.length);
        const rest = words.slice(0, words.length - goldCount).join(" ");
        const gold = words.slice(words.length - goldCount).join(" ");
        el.innerHTML = (rest ? rest + " " : "") + '<span class="accent-gold">' + gold + "</span>";
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(lang, key);
      if (value !== null) el.setAttribute("placeholder", value);
    });

    const titleVal = t(lang, "meta.title");
    if (titleVal) document.title = titleVal;

    // Update visible lang trigger (code + flag)
    const meta = LANG_META[lang] || LANG_META.fr;
    const flagEl = document.getElementById("current-lang-flag");
    const codeEl = document.getElementById("current-lang-code");
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;

    document.querySelectorAll("[data-lang-opt]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-opt") === lang);
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    applyLanguage(saved || "fr");
  }

  window.changeLanguage = function (lang) {
    applyLanguage(lang);
    closeMobileMenu();
  };

  /* ------------------------------------------------------------ HEADER -- */
  function onScrollHeader() {
    const scrolled = window.scrollY > 40;
    document.querySelectorAll(".topbar-mobile, .rail").forEach((el) => {
      el.classList.toggle("scrolled", scrolled);
    });
  }

  /* -------------------------------------------------------- MOBILE NAV -- */
  const hamburger = document.getElementById("mobile-hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    if (hamburger) hamburger.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function toggleMobileMenu() {
    if (!mobileMenu) return;
    const willOpen = !mobileMenu.classList.contains("is-open");
    mobileMenu.classList.toggle("is-open", willOpen);
    if (hamburger) hamburger.classList.toggle("is-open", willOpen);
    document.body.style.overflow = willOpen ? "hidden" : "";
  }

  /* ------------------------------------------------------------- FAQ --- */
  window.toggleFAQ = function (btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-btn").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      b.nextElementSibling.style.maxHeight = null;
    });

    if (!isExpanded) {
      btn.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  /* ----------------------------------------------------------- MODAL --- */
  const overlay = document.getElementById("quote-modal-overlay");

  window.openQuoteModal = function (service) {
    if (!overlay) return;
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    const select = document.getElementById("quote-service");
    if (select && service) {
      const opt = Array.from(select.options).find((o) => o.value === service);
      if (opt) select.value = service;
    }
  };
  window.closeQuoteModal = function () {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  window.handleQuoteSubmit = function (event) {
    event.preventDefault();
    const currentLang = document.documentElement.lang || "fr";
    const payload = {
      type: "devis",
      name: document.getElementById("quote-name").value,
      email: document.getElementById("quote-email").value,
      phone: document.getElementById("quote-phone").value,
      service: document.getElementById("quote-service").value
    };

    const submitBtn = event.target.querySelector(".submit-btn");
    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>' + (t(currentLang, "modal.sending") || "...") + "</span>";

    fetch("contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const toast = document.getElementById("success-toast");
          if (toast) {
            toast.classList.add("is-visible");
            setTimeout(() => toast.classList.remove("is-visible"), 4000);
          }
          window.closeQuoteModal();
          event.target.reset();
        } else {
          alert(t(currentLang, "modal.errorSubmit") || "Erreur lors de l'envoi. Veuillez réessayer.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert(t(currentLang, "modal.errorConnection") || "Erreur de connexion. Veuillez réessayer.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
      });
  };

  /* -------------------------------------------------- SCROLL REVEAL --- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* -------------------------------------------------- SCROLL HINT ---- */
  function initScrollHints() {
    document.querySelectorAll(".bento").forEach((bento) => {
      const hint = bento.parentElement.querySelector(".scroll-hint");
      if (!hint) return;
      function check() {
        if (window.innerWidth < 768 && bento.scrollWidth > bento.clientWidth + 4) {
          hint.classList.add("show");
        } else {
          hint.classList.remove("show");
        }
      }
      check();
      window.addEventListener("resize", check);
      bento.addEventListener("scroll", () => {
        if (bento.scrollLeft > 20) hint.classList.remove("show");
      }, { once: true });
    });
  }

  /* -------------------------------------------------------- SIDE NAV -- */
  function initSideNav() {
    const links = document.querySelectorAll(".side-nav a[data-target]");
    if (!links.length) return;
    const sections = Array.from(links)
      .map((l) => document.getElementById(l.getAttribute("data-target")))
      .filter(Boolean);

    function onScroll() {
      let current = sections[0];
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      sections.forEach((sec) => {
        if (sec.offsetTop <= scrollPos) current = sec;
      });
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("data-target") === current.id));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================ */
  /* BACKBONE CANVAS — réseau de nœuds animé (signature visuelle)   */
  /* Remplace les visuels génératifs IA en un rendu léger, thématique
     et 100% généré côté client (pas d'images à charger).           */
  /* ============================================================ */
  function initBackbone() {
    const canvas = document.getElementById("backbone-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes, animId;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function colors() {
      const dark = root.getAttribute("data-theme") === "dark";
      return {
        dot: dark ? "rgba(139,92,246,0.85)" : "rgba(85,37,131,0.55)",
        line: dark ? "rgba(139,92,246,0.22)" : "rgba(85,37,131,0.14)",
        pulse: dark ? "rgba(251,184,43,0.9)" : "rgba(251,184,43,0.85)"
      };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(18, Math.min(46, Math.round((w * h) / 42000)));
      nodes = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.4 + Math.random() * 1.8,
        pulse: Math.random() * Math.PI * 2
      }));
    }

    function step() {
      const c = colors();
      ctx.clearRect(0, 0, w, h);
      const linkDist = Math.min(180, w * 0.14);

      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.pulse += 0.02;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.strokeStyle = c.line;
            ctx.globalAlpha = 1 - dist / linkDist;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      nodes.forEach((n) => {
        const glow = 0.5 + Math.sin(n.pulse) * 0.5;
        ctx.fillStyle = c.dot;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        if (glow > 0.85) {
          ctx.fillStyle = c.pulse;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(step);
    }

    resize();
    if (!reduceMotion) {
      step();
    } else {
      // Static single frame for reduced-motion users
      const c = colors();
      ctx.clearRect(0, 0, w, h);
      nodes.forEach((n) => {
        ctx.fillStyle = c.dot;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (animId) cancelAnimationFrame(animId);
        resize();
        if (!reduceMotion) step();
      }, 200);
    });

    // Redraw immediately on theme change so colors stay in sync
    const themeObserver = new MutationObserver(() => {});
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  }

  /* --------------------------------------------------------- BOOT ----- */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLanguage();
    initBackbone();
    initReveal();
    initScrollHints();
    initSideNav();
    onScrollHeader();

    window.addEventListener("scroll", onScrollHeader, { passive: true });

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    if (hamburger) hamburger.addEventListener("click", toggleMobileMenu);
    document.querySelectorAll(".mobile-menu a[href^='#'], .mobile-menu a[data-close]").forEach((a) => {
      a.addEventListener("click", closeMobileMenu);
    });

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) window.closeQuoteModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        window.closeQuoteModal();
        closeMobileMenu();
      }
    });
  });
})();