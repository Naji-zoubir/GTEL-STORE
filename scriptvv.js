/* =======================================================================
   GTEL — Vidéosurveillance — script.js
   Thème clair/sombre, multilingue (FR/AR/EN) + RTL, menu mobile,
   FAQ, modal de devis, révélation au scroll, réseau de lignes lumineuses.
   ======================================================================= */
(function () {
  "use strict";

  const RTL_LANGS = ["ar"];
  const html = document.documentElement;

  /* =====================================================================
     1) THEME (clair / sombre) — persistant via localStorage
     ===================================================================== */
  const ThemeManager = {
    key: "gtel_theme",
    init() {
      const saved = localStorage.getItem(this.key);
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.apply(saved || (prefersDark ? "dark" : "light"));
      const btn = document.getElementById("theme-toggle");
      if (btn) btn.addEventListener("click", () => this.toggle());
    },
    apply(theme) {
      if (theme === "dark") html.setAttribute("data-theme", "dark");
      else html.removeAttribute("data-theme");
      localStorage.setItem(this.key, theme);
    },
    toggle() {
      const isDark = html.getAttribute("data-theme") === "dark";
      this.apply(isDark ? "light" : "dark");
    }
  };

  /* =====================================================================
     2) LANGUE (FR / AR / EN) + RTL — persistant via localStorage
     ===================================================================== */
  const LangManager = {
    key: "gtel_lang",
    current: "fr",
    init() {
      const saved = localStorage.getItem(this.key) || "fr";
      this.change(saved, true);
      document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
        btn.addEventListener("click", () => this.change(btn.getAttribute("data-lang-choice")));
      });
      const switcher = document.querySelector(".lang-switcher");
      const trigger = document.getElementById("lang-trigger");
      if (trigger && switcher) {
        trigger.addEventListener("click", (e) => {
          e.stopPropagation();
          switcher.classList.toggle("open");
        });
        document.addEventListener("click", () => switcher.classList.remove("open"));
      }
    },
    change(lang, silent) {
      const dict = (window.GTEL_I18N && window.GTEL_I18N[lang]) || window.GTEL_I18N.fr;
      this.current = lang;
      html.setAttribute("lang", lang);
      html.setAttribute("dir", RTL_LANGS.includes(lang) ? "rtl" : "ltr");
      localStorage.setItem(this.key, lang);

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const k = el.getAttribute("data-i18n");
        if (dict[k] !== undefined) el.textContent = dict[k];
      });
      document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const k = el.getAttribute("data-i18n-html");
        if (dict[k] !== undefined) el.innerHTML = dict[k];
      });

      document.querySelectorAll(".lang-option").forEach((opt) => {
        opt.classList.toggle("active", opt.getAttribute("data-lang-choice") === lang);
      });
      const codeEl = document.getElementById("current-lang-code");
      if (codeEl) codeEl.textContent = lang.toUpperCase();

      document.querySelectorAll(".footer-lang-btns button, .drawer-lang button").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-lang-choice") === lang);
      });

      if (document.title) {
        document.title = dict["meta.title"] || document.title;
      }
      if (!silent) window.dispatchEvent(new CustomEvent("gtel:langchange", { detail: lang }));
    }
  };
  window.changeLanguage = (lang) => LangManager.change(lang);

  /* =====================================================================
     3) HEADER — ombre au scroll
     ===================================================================== */
  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }, { passive: true });
  }

  /* =====================================================================
     4) MENU MOBILE (drawer plein écran)
     ===================================================================== */
  function initMobileDrawer() {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("drawer-overlay");
    const drawer = document.getElementById("drawer");
    const closeBtn = document.getElementById("drawer-close");
    if (!hamburger || !overlay || !drawer) return;

    function open() {
      overlay.classList.add("open");
      drawer.classList.add("open");
      hamburger.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      overlay.classList.remove("open");
      drawer.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.style.overflow = "";
    }
    hamburger.addEventListener("click", () => {
      drawer.classList.contains("open") ? close() : open();
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  /* =====================================================================
     5) FAQ ACCORDÉON
     ===================================================================== */
  function initFAQ() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-q");
      const answer = item.querySelector(".faq-a");
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            other.querySelector(".faq-a").style.maxHeight = null;
            other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          }
        });
        if (isOpen) {
          item.classList.remove("open");
          answer.style.maxHeight = null;
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* =====================================================================
     6) MODAL DE DEVIS + ENVOI (contact.php)
     ===================================================================== */
  function initModal() {
    const overlay = document.getElementById("quote-modal-overlay");
    if (!overlay) return;
    const serviceSelect = document.getElementById("quote-service");
    const form = document.getElementById("gtel-quote-form");

    window.openQuoteModal = function (service) {
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
      if (service && serviceSelect) serviceSelect.value = service;
    };
    window.closeQuoteModal = function () {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    };
    overlay.addEventListener("click", (e) => { if (e.target === overlay) window.closeQuoteModal(); });
    document.querySelectorAll("[data-modal-close]").forEach((b) => b.addEventListener("click", window.closeQuoteModal));

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const dict = window.GTEL_I18N[LangManager.current];
        const payload = {
          type: "devis",
          name: document.getElementById("quote-name").value,
          email: document.getElementById("quote-email").value,
          phone: document.getElementById("quote-phone").value,
          service: document.getElementById("quote-service").value,
          message: "Demande depuis la page Vidéosurveillance"
        };

        fetch("../contact.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
          .then((res) => res.json())
          .then((data) => {
            showToast(data.success ? dict["toast.success"] : dict["toast.error"] + " " + data.error);
            window.closeQuoteModal();
            form.reset();
          })
          .catch(() => {
            alert(dict["toast.connfail"]);
          });
      });
    }
  }

  function showToast(message) {
    const toast = document.getElementById("success-toast");
    if (!toast) return;
    const msgEl = document.getElementById("toast-msg");
    if (msgEl && message) msgEl.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  }

  /* =====================================================================
     7) RÉVÉLATION AU SCROLL (IntersectionObserver)
     ===================================================================== */
  function initScrollReveal() {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* =====================================================================
     8) RÉSEAU DE LIGNES LUMINEUSES (canvas) — élément signature GTEL
     Évoque la fibre optique / le maillage réseau / les flux de caméras.
     ===================================================================== */
  function initLightNetwork() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let w, h, nodes, raf;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width * devicePixelRatio;
      h = canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      const count = Math.max(18, Math.round((rect.width * rect.height) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.28 * devicePixelRatio,
        r: (Math.random() * 1.6 + 0.8) * devicePixelRatio
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const maxDist = 150 * devicePixelRatio;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(251,184,43,${alpha * 0.35})`;
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139,92,246,0.85)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }
  }

  /* =====================================================================
     9) BOUTON "ouvrir devis" génériques
     ===================================================================== */
  function initQuoteButtons() {
    document.querySelectorAll("[data-open-quote]").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.openQuoteModal(btn.getAttribute("data-open-quote") || "Vidéosurveillance");
      });
    });
  }

  /* =====================================================================
     INIT
     ===================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    ThemeManager.init();
    LangManager.init();
    initHeaderScroll();
    initMobileDrawer();
    initFAQ();
    initModal();
    initQuoteButtons();
    initScrollReveal();
    initLightNetwork();
  });
})();