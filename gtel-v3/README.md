# GTEL V3 - "Ethereal Professional"

Design system moderne, minimaliste et professionnel pour le site GTEL.

## 📁 Structure du Projet

```
gtel-v3/
├── assets/
│   ├── css/
│   │   └── gtel-v3.css      (22KB - Design system complet)
│   └── js/
│       └── gtel-v3.js       (11KB - Fonctionnalités core)
└── index.html               (8KB - Page de démo)
```

**Total : ~41KB** - Ultra-léger et optimisé !

## ✨ Fonctionnalités

### Design
- ✅ **Glassmorphism 2.0** - Effets de flou avancés
- ✅ **Dark Mode natif** - Bascule avec persistance localStorage
- ✅ **Typographie fluide** - clamp() pour responsive parfait
- ✅ **Animations 60fps** - Scroll reveal, hover effects
- ✅ **Mobile-first** - Responsive sur tous appareils

### Composants Inclus
| Élément | Description |
|---------|-------------|
| **Header** | Sticky avec glassmorphism, dropdown intelligent |
| **Hero** | Layout 2 colonnes avec floating cards animées |
| **Stats Grid** | 4 colonnes responsive avec compteurs |
| **Solution Cards** | 6 cards avec hover effects et underline animé |
| **Footer** | 4 colonnes (brand, links, contact, social) |
| **Boutons** | 4 variants (primary, accent, outline, ghost) |

### JavaScript (Fonctionnalités)
- ✅ Injection header/footer (unifié sur toutes pages)
- ✅ Toggle dark mode avec localStorage
- ✅ Menu mobile avec accordion
- ✅ Scroll reveal animations (IntersectionObserver)
- ✅ Smooth scroll pour ancres
- ✅ Header scroll effect (shadow on scroll)
- ✅ Active nav link auto

## 🚀 Utilisation Rapide

### 1. Ouvrir la démo
```bash
# Double-cliquez sur index.html ou ouvrez dans votre navigateur
open gtel-v3/index.html
```

### 2. Intégrer sur une page existante

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Votre Page - GTEL</title>
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/gtel-v3.css">
</head>
<body>
    <!-- Header (sera injecté ici) -->
    <div id="gtel-header"></div>

    <!-- Votre contenu -->
    <main>
        <section class="hero">
            <div class="container">
                <h1>Votre Titre</h1>
                <p>Votre description...</p>
            </div>
        </section>
    </main>

    <!-- Footer (sera injecté ici) -->
    <div id="gtel-footer"></div>

    <!-- JS -->
    <script src="assets/js/gtel-v3.js"></script>
</body>
</html>
```

### 3. Ajouter des animations scroll

```html
<div class="reveal">Contenu animé au scroll</div>
<div class="reveal" style="transition-delay: 100ms">Avec délai</div>
```

## 🎨 Personnalisation CSS

### Variables principales (dans `gtel-v3.css`)

```css
:root {
    /* Couleurs */
    --primary: #2563eb;        /* Bleu principal */
    --accent: #06b6d4;         /* Cyan accent */
    
    /* Backgrounds */
    --bg-primary: #ffffff;     /* Light mode */
    --bg-secondary: #f8fafc;
    
    /* Dark mode (auto-overridden) */
    [data-theme="dark"] {
        --bg-primary: #0f172a;
        --text-primary: #f8fafc;
    }
}
```

### Changer les couleurs

Modifiez simplement les variables `--primary` et `--accent` pour adapter à votre charte graphique.

## 📱 Responsive Breakpoints

| Breakpoint | Min-width | Usage |
|------------|-----------|-------|
| Mobile | < 768px | Menu hamburger, 1 colonne |
| Tablet | ≥ 768px | Stats 2→4 cols, footer 2 cols |
| Desktop | ≥ 1024px | Nav desktop, hero 2 cols |

## 🔧 Maintenance

### Ajouter un lien au menu
Éditez `headerHTML` dans `assets/js/gtel-v3.js` :

```js
const headerHTML = `
    ...
    <a href="#nouveau" class="nav-link">Nouveau</a>
    ...
`;
```

### Modifier le footer
Éditez `footerHTML` dans le même fichier.

### Désactiver l'injection JS
Si vous préférez le HTML statique, copiez-collez directement le header/footer depuis le JS vers vos pages HTML.

## ⚡ Performance

| Métrique | Valeur |
|----------|--------|
| CSS total | 22KB |
| JS total | 11KB |
| Dependencies | 0 (Vanilla JS) |
| Requests | 2 (CSS + JS) |
| First Paint | < 1s |

## 🎯 Prochaines Étapes

1. **Tester** : Ouvrez `index.html` dans votre navigateur
2. **Personnaliser** : Adaptez couleurs et contenus
3. **Intégrer** : Copiez la structure sur vos pages existantes
4. **Déployer** : Uploadez le dossier `gtel-v3/`

---

**Créé avec ❤️ pour GTEL - Design "Ethereal Professional"**
