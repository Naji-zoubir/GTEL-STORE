/* ============================================================
   GTEL — CATALOGUE  |  script.js
   Handles: i18n (fr/ar/en + RTL), dark/light theme, header state,
   filter/search ledger, scroll reveal, modal + form submit,
   toast, back-to-top, and the hero circuit-canvas animation.
   ============================================================ */
(() => {
  "use strict";

  /* ---------------- STATE ---------------- */
  let translations = {};
  let currentLang = localStorage.getItem("gtel-lang") || "fr";
  let activeCategory = "all";

  /* ---------------- 1. THEME ---------------- */
  function initTheme() {
    const saved = localStorage.getItem("gtel-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gtel-theme", next);
    updateThemeLabel();
  }

  function updateThemeLabel() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const theme = document.documentElement.getAttribute("data-theme");
    const dict = translations[currentLang] || {};
    btn.setAttribute("aria-label", theme === "dark" ? (dict["theme.toLight"] || "") : (dict["theme.toDark"] || ""));
  }

  /* ---------------- 2. I18N ---------------- */
  function loadTranslations() {
    // languagecat.js is loaded via <script> before this file and exposes
    // window.GTEL_I18N — no fetch() needed, so this also works when the
    // page is opened directly from disk (file://) without a local server.
    translations = window.GTEL_I18N || { fr: {} };
    if (!window.GTEL_I18N) {
      console.error("window.GTEL_I18N introuvable — vérifiez que languagecat.js est chargé AVANT maincat.js");
    }
    applyLanguage(currentLang, false);
  }

  function applyLanguage(lang, persist = true) {
    const dict = translations[lang] || translations.fr || {};
    currentLang = lang;
    if (persist) localStorage.setItem("gtel-lang", lang);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    const codeEl = document.getElementById("current-lang-code");
    if (codeEl) codeEl.textContent = dict["lang.current"] || lang.toUpperCase();

    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    updateThemeLabel();
    updateResultCount();
  }

  window.changeLanguage = (lang) => applyLanguage(lang, true);

  /* ---------------- 3. HEADER SCROLL STATE ---------------- */
  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    const toTop = document.getElementById("to-top-btn");
    if (!header) return;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 30);
      if (toTop) toTop.classList.toggle("show", y > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- 4. MOBILE MENU ---------------- */
  function initBurger() {
    const burger = document.getElementById("burger-btn");
    const nav = document.getElementById("primary-nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-link:not(.nav-has-menu > .nav-link)").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.classList.remove("open");
      });
    });
  }

  /* ---------------- 5. FILTER CHIP SLIDER ---------------- */
  function moveChipSlider(btn) {
    const slider = document.getElementById("chip-slider");
    const track = document.getElementById("chip-track");
    if (!slider || !track || !btn) return;
    const trackRect = track.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    const offset = isRTL ? trackRect.right - btnRect.right : btnRect.left - trackRect.left;
    slider.style.width = btnRect.width + "px";
    slider.style.transform = `translateX(${isRTL ? -offset : offset}px)`;
  }

  function initFilters() {
    const chips = document.querySelectorAll(".chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        activeCategory = chip.dataset.category;
        moveChipSlider(chip);
        applyFilters();
      });
    });
    const active = document.querySelector(".chip.active");
    if (active) requestAnimationFrame(() => moveChipSlider(active));
    window.addEventListener("resize", () => {
      const a = document.querySelector(".chip.active");
      if (a) moveChipSlider(a);
    });
  }

  function applyFilters() {
    const searchInput = document.getElementById("catalogue-search");
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const rows = document.querySelectorAll(".ledger-row");
    let visible = 0;

    rows.forEach((row) => {
      const cat = row.getAttribute("data-category");
      const keywords = row.getAttribute("data-keywords") || "";
      const title = row.querySelector(".ledger-title")?.innerText.toLowerCase() || "";
      const model = row.querySelector(".ledger-model")?.innerText.toLowerCase() || "";
      const brand = row.querySelector(".ledger-brand")?.innerText.toLowerCase() || "";

      const catMatches = activeCategory === "all" || cat === activeCategory;
      const searchMatches =
        !query || title.includes(query) || model.includes(query) || brand.includes(query) || keywords.includes(query);
      const shouldShow = catMatches && searchMatches;

      if (shouldShow) {
        visible++;
        if (row.style.display === "none") row.style.display = "";
        requestAnimationFrame(() => row.classList.remove("row-hide"));
      } else {
        row.classList.add("row-hide");
        window.setTimeout(() => {
          if (row.classList.contains("row-hide")) row.style.display = "none";
        }, 260);
      }
    });

    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.style.display = visible === 0 ? "block" : "none";
    updateResultCount(visible);
  }

  function updateResultCount(explicitCount) {
    const el = document.getElementById("result-count");
    if (!el) return;
    const count = explicitCount !== undefined ? explicitCount : document.querySelectorAll(".ledger-row:not([style*='display: none'])").length;
    const dict = translations[currentLang] || translations.fr || {};
    const template = dict["results.count"] || "{n}";
    el.textContent = template.replace("{n}", count);
  }
  window.searchCatalogue = applyFilters;

  /* ---------------- 4b. MOBILE PRODUCT CAROUSEL ---------------- */
  function initLedgerCarousel() {
    const grid = document.getElementById("product-grid");
    const prev = document.getElementById("ledger-prev");
    const next = document.getElementById("ledger-next");
    if (!grid || !prev || !next) return;

    const isRTL = () => document.documentElement.getAttribute("dir") === "rtl";

    const cardStep = () => {
      const card = grid.querySelector(".ledger-row:not(.row-hide)");
      const gap = 16;
      return card ? card.getBoundingClientRect().width + gap : grid.clientWidth * 0.86;
    };

    const scrollDir = (dir) => {
      const sign = isRTL() ? -1 : 1;
      grid.scrollBy({ left: dir * sign * cardStep(), behavior: "smooth" });
    };

    prev.addEventListener("click", () => scrollDir(-1));
    next.addEventListener("click", () => scrollDir(1));

    const updateArrowState = () => {
      const max = grid.scrollWidth - grid.clientWidth - 2;
      const pos = Math.abs(grid.scrollLeft);
      const atStart = pos <= 2;
      const atEnd = pos >= max;
      if (isRTL()) {
        prev.disabled = atEnd;
        next.disabled = atStart;
      } else {
        prev.disabled = atStart;
        next.disabled = atEnd;
      }
    };

    grid.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);
    const observer = new MutationObserver(() => window.setTimeout(updateArrowState, 300));
    observer.observe(grid, { attributes: true, subtree: true, attributeFilter: ["class", "style"] });
    updateArrowState();
  }

  /* ---------------- 5b. PRODUCT IMAGE LOADING ---------------- */
  function svgFallback(label) {
    const initials = (label || "GTEL")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 148 112'>
      <rect x='30' y='24' width='88' height='64' rx='9' fill='none' stroke='#552583' stroke-width='3'/>
      <circle cx='74' cy='56' r='15' fill='none' stroke='#fbb82b' stroke-width='3'/>
      <text x='74' y='61' font-family='sans-serif' font-size='13' font-weight='800' fill='#552583' text-anchor='middle'>${initials}</text>
    </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function initImageLoading() {
    document.querySelectorAll(".ledger-img").forEach((img) => {
      const media = img.closest(".ledger-media");
      const markReady = () => {
        img.classList.add("img-loaded");
        media?.classList.add("media-ready");
      };
      if (img.complete && img.naturalWidth > 0) {
        markReady();
        return;
      }
      img.addEventListener("load", markReady, { once: true });
      img.addEventListener(
        "error",
        () => {
          img.src = svgFallback(img.getAttribute("alt"));
          img.classList.add("img-fallback");
          markReady();
        },
        { once: true }
      );
    });
  }

  /* ---------------- 5c. HERO METRIC COUNTERS ---------------- */
  function initHeroCounters() {
    const wrap = document.querySelector(".hero-metrics");
    const metrics = document.querySelectorAll(".hero-metric b");
    if (!wrap || !metrics.length) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let done = false;

    const animate = () => {
      if (done) return;
      done = true;
      metrics.forEach((el) => {
        const raw = el.textContent.trim();
        const match = raw.match(/\d+/);
        if (!match || reduceMotion) {
          el.classList.add("counted");
          return;
        }
        const target = parseInt(match[0], 10);
        const suffix = raw.slice(match.index + match[0].length);
        const prefix = raw.slice(0, match.index);
        const duration = 900;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else {
            el.textContent = raw;
            el.classList.add("counted");
          }
        }
        requestAnimationFrame(step);
      });
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate();
              io.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(wrap);
    } else {
      animate();
    }
  }

  /* ---------------- 5d. HERO MOUSE GLOW ---------------- */
  function initHeroGlow() {
    const hero = document.querySelector(".hero");
    const glow = document.getElementById("hero-glow");
    if (!hero || !glow) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.setProperty("--mx", x + "%");
      glow.style.setProperty("--my", y + "%");
    });
  }

  /* ---------------- 6. SCROLL REVEAL ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((i) => i.classList.add("in-view"));
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((i) => io.observe(i));
  }

  /* ---------------- 7. MODAL SYSTEM ---------------- */
  const overlay = () => document.getElementById("quote-modal-overlay");

  window.openQuoteModal = function (serviceName = "Équipements Génériques") {
    const ov = overlay();
    if (ov) {
      ov.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    const input = document.getElementById("quote-product");
    if (input) input.value = serviceName;
    const titleEl = document.getElementById("form-title");
    const dict = translations[currentLang] || {};
    if (titleEl) titleEl.textContent = dict["modal.title"] || "Demande d'Étude B2B";
  };

  window.closeQuoteModal = function () {
    const ov = overlay();
    if (ov) {
      ov.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  };

  window.openQuoteWithProduct = function (productName) {
    const titleEl = document.getElementById("form-title");
    const dict = translations[currentLang] || {};
    if (titleEl) titleEl.textContent = dict["modal.titleProduct"] || "Demande de Cotation B2B";
    window.openQuoteModal(productName);
  };

  function initModal() {
    const ov = overlay();
    if (ov) {
      ov.addEventListener("click", (e) => {
        if (e.target === ov) window.closeQuoteModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") window.closeQuoteModal();
    });
  }

  /* ---------------- 8. FORM SUBMIT ---------------- */
  window.handleQuoteSubmit = function (event) {
    event.preventDefault();
    const dict = translations[currentLang] || {};

    const name = document.getElementById("quote-name")?.value || "";
    const email = document.getElementById("quote-email")?.value || "";
    const phone = document.getElementById("quote-phone")?.value || "";
    const product = document.getElementById("quote-product")?.value || "Catalogue Général";

    if (!name || !email || !phone) {
      alert(dict["modal.requiredAlert"] || "Veuillez remplir les champs obligatoires (*)");
      return;
    }

    const payload = { type: "catalogue", name, email, phone, entreprise: "Non spécifiée", interet: product };
    const toast = document.getElementById("success-toast");

    fetch("contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (toast) {
          const title = data.success ? dict["toast.success.title"] : "⚠ " + (data.error || "Erreur");
          toast.querySelector(".toast-title").textContent = title;
          toast.querySelector(".toast-desc").textContent = dict["toast.success.desc"] || "";
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 5000);
        }
        window.closeQuoteModal();
        document.getElementById("gtel-quote-form")?.reset();
      })
      .catch(() => {
        if (toast) {
          toast.querySelector(".toast-title").textContent = dict["toast.success.title"] || "";
          toast.querySelector(".toast-desc").textContent = dict["toast.local.desc"] || "";
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 5000);
        }
        window.closeQuoteModal();
      });
  };

  /* ---------------- 9. HERO CIRCUIT CANVAS ---------------- */
  function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, nodes;
    const NODE_COUNT = 46;
    const LINK_DIST = 130;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width * devicePixelRatio;
      h = canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const dist = LINK_DIST * devicePixelRatio;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduceMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            ctx.strokeStyle = `rgba(251,184,43,${(1 - d / dist) * 0.35})`;
            ctx.lineWidth = 1 * devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(255,255,255,0.75)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", () => resize());
  }

  /* ---------------- 10. INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadTranslations();
    initHeaderScroll();
    initBurger();
    initFilters();
    applyFilters();
    initLedgerCarousel();
    initImageLoading();
    initHeroCounters();
    initHeroGlow();
    initReveal();
    initModal();
    initHeroCanvas();

    document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
    document.getElementById("catalogue-search")?.addEventListener("input", applyFilters);
  });
})();