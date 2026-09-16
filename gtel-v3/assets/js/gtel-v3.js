/**
 * GTEL V3 - Core JavaScript
 * Minimalist, High-Performance
 * 
 * Features:
 * - Header injection (unified across pages)
 * - Footer injection
 * - Dark mode toggle with localStorage
 * - Mobile menu
 * - Scroll animations
 * - Smooth scrolling
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        headerSelector: '#gtel-header',
        footerSelector: '#gtel-footer',
        revealClass: 'reveal',
        activeClass: 'active',
        storageKey: 'gtel-theme'
    };

    // Header Template
    const headerHTML = `
        <header class="header" id="main-header">
            <div class="container header-inner">
                <a href="index.html" class="logo">
                    <div class="logo-icon">G</div>
                    <span>GTEL</span>
                </a>
                
                <nav class="nav-desktop">
                    <a href="index.html" class="nav-link active">Accueil</a>
                    <a href="#solutions" class="nav-link">Solutions</a>
                    <div class="dropdown">
                        <a href="#services" class="nav-link">Services ▾</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">
                                <div class="dropdown-icon">📡</div>
                                <div>
                                    <strong>Télécommunications</strong>
                                    <div style="font-size:0.8rem;color:var(--text-muted)">Infrastructure réseau</div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="dropdown-icon">☁️</div>
                                <div>
                                    <strong>Cloud Solutions</strong>
                                    <div style="font-size:0.8rem;color:var(--text-muted)">Hébergement & SaaS</div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="dropdown-icon">🔒</div>
                                <div>
                                    <strong>Cybersécurité</strong>
                                    <div style="font-size:0.8rem;color:var(--text-muted)">Protection avancée</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#about" class="nav-link">À Propos</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </nav>
                
                <div class="header-actions">
                    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                        🌙
                    </button>
                    
                    <div class="lang-switcher">
                        <span class="lang-current">FR</span>
                        <span style="color:var(--text-muted);font-size:0.75rem">▾</span>
                    </div>
                    
                    <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        
        <div class="mobile-menu" id="mobileMenu">
            <nav class="mobile-nav">
                <a href="index.html" class="mobile-link active">Accueil</a>
                <a href="#solutions" class="mobile-link">Solutions</a>
                <div class="mobile-dropdown-toggle" style="padding:16px 20px;color:var(--text-secondary);font-weight:600;cursor:pointer">
                    Services ▾
                </div>
                <div class="mobile-dropdown" id="mobileServices">
                    <a href="#" class="mobile-link">📡 Télécommunications</a>
                    <a href="#" class="mobile-link">☁️ Cloud Solutions</a>
                    <a href="#" class="mobile-link">🔒 Cybersécurité</a>
                </div>
                <a href="#about" class="mobile-link">À Propos</a>
                <a href="#contact" class="mobile-link">Contact</a>
            </nav>
        </div>
    `;

    // Footer Template
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a href="index.html" class="logo">
                            <div class="logo-icon">G</div>
                            <span>GTEL</span>
                        </a>
                        <p>Votre partenaire de confiance en solutions de télécommunications et technologies innovantes depuis plus de 20 ans.</p>
                        <div class="footer-social">
                            <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                            <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
                            <a href="#" class="social-link" aria-label="Facebook">f</a>
                            <a href="#" class="social-link" aria-label="Instagram">📷</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="footer-title">Solutions</h4>
                        <ul class="footer-links">
                            <li><a href="#">Télécommunications</a></li>
                            <li><a href="#">Cloud & Data</a></li>
                            <li><a href="#">Cybersécurité</a></li>
                            <li><a href="#">IoT & Connectivité</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="footer-title">Entreprise</h4>
                        <ul class="footer-links">
                            <li><a href="#">À Propos</a></li>
                            <li><a href="#">Carrières</a></li>
                            <li><a href="#">Actualités</a></li>
                            <li><a href="#">Partenaires</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="footer-title">Contact</h4>
                        <ul class="footer-links">
                            <li><a href="mailto:contact@gtel.com">contact@gtel.com</a></li>
                            <li><a href="tel:+33123456789">+33 1 23 45 67 89</a></li>
                            <li>Paris, France</li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p class="footer-copyright">© 2025 GTEL. Tous droits réservés.</p>
                    <div class="footer-legal">
                        <a href="#">Mentions Légales</a>
                        <a href="#">Confidentialité</a>
                        <a href="#">CGU</a>
                    </div>
                </div>
            </div>
        </footer>
    `;

    // Initialize Theme
    function initTheme() {
        const savedTheme = localStorage.getItem(CONFIG.storageKey);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    }

    // Update Theme Icon
    function updateThemeIcon(theme) {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Toggle Theme
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(CONFIG.storageKey, next);
        updateThemeIcon(next);
    }

    // Inject Header & Footer
    function injectComponents() {
        const headerContainer = document.querySelector(CONFIG.headerSelector);
        const footerContainer = document.querySelector(CONFIG.footerSelector);
        
        if (headerContainer) headerContainer.innerHTML = headerHTML;
        if (footerContainer) footerContainer.innerHTML = footerHTML;
        
        // Re-bind events after injection
        setTimeout(initEvents, 50);
    }

    // Initialize Events
    function initEvents() {
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Mobile Menu
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
        const mobileDropdown = document.getElementById('mobileServices');
        
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle(CONFIG.activeClass);
                mobileMenu.classList.toggle(CONFIG.activeClass);
            });
            
            // Close on link click
            mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.classList.remove(CONFIG.activeClass);
                    mobileMenu.classList.remove(CONFIG.activeClass);
                });
            });
        }
        
        // Mobile Dropdown
        if (mobileDropdownToggle && mobileDropdown) {
            mobileDropdownToggle.addEventListener('click', () => {
                mobileDropdown.classList.toggle(CONFIG.activeClass);
            });
        }
        
        // Header Scroll Effect
        const header = document.getElementById('main-header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }, { passive: true });
        }
        
        // Scroll Reveal
        initReveal();
        
        // Active Nav Link
        setActiveNavLink();
    }

    // Scroll Reveal Animation
    function initReveal() {
        const reveals = document.querySelectorAll(`.${CONFIG.revealClass}`);
        
        const revealOnScroll = () => {
            reveals.forEach(el => {
                const rect = el.getBoundingClientRect();
                const triggerPoint = window.innerHeight * 0.85;
                
                if (rect.top < triggerPoint) {
                    el.classList.add(CONFIG.activeClass);
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll, { passive: true });
        revealOnScroll(); // Check on load
    }

    // Set Active Nav Link Based on URL
    function setActiveNavLink() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href === page || (page === '' && href === 'index.html'))) {
                link.classList.add(CONFIG.activeClass);
            }
        });
    }

    // Smooth Scroll for Anchor Links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(targetId);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Initialize
    function init() {
        initTheme();
        injectComponents();
        initSmoothScroll();
        
        console.log('✅ GTEL V3 Initialized');
    }

    // Run on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
