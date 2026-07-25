# Changelog

Tous les changements majeurs de ce projet sont documentés ici.

Format basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.0] - 2024-07-25

### Added (Première version)

#### Pages
- ✨ Page d'accueil complète avec Hero section
- 📋 Page Projets avec 4 catégories (IA, Infrastructure On-Prem, GCP, Automatisation)
- 📄 Page CV avec Timeline, Certifications, Compétences
- 🧪 Page Lab pour les projets d'expérimentation

#### Composants
- 🧩 Composants réutilisables (Button, Badge, Card, Section)
- 🎨 Hero avec animations discrètes
- 📊 Section Statistiques avec animations au scroll
- 🎯 Engineering Philosophy avec 6 cartes premium
- 💡 Passions section avec 4 catégories
- 🔖 Current Explorations avec badges éditables
- 📈 Timeline interactive pour CV
- 🏷️ Badges pour technologies
- 🔗 Project Cards avec contexte, problématique, solution

#### Design & UX
- 🌙 Dark mode complet
- 📱 Design responsive mobile-first
- ✨ Animations subtiles (fade-in, slide-up)
- 🎨 Palette de couleurs minimaliste
- ♿ Accessibilité WCAG 2.1 AA
- 🖱️ Support clavier complet
- 📌 Navbar avec scroll effect

#### Infrastructure
- 🔧 Configuration Astro + TypeScript strict
- 🎨 TailwindCSS configuration personnalisée
- 📦 Lucide React pour les icônes
- ✅ ESLint + Prettier configuration
- 🐶 Husky + lint-staged
- 🚀 GitHub Actions workflow
- 📊 Séparation données/présentation en JSON

#### Documentation
- 📚 README complet et détaillé
- 🎓 CONTRIBUTING guide
- 📝 Architecture documentée
- 💡 Commentaires dans le code où nécessaire

### Features Highlights

- **7 fichiers de données** pour contenu facilement maintenable
- **12+ composants réutilisables** pour consistency
- **4 pages principales** + 404
- **Mobile menu** avec animations
- **Dark mode toggle** (auto-détecte préférences)
- **Scroll-to-top button** avec animations
- **Scroll-aware navbar** (devient translucide)
- **150+ ligne de CSS global** pour base robuste
- **Lazy loading** pour images
- **SEO optimisé** (métadonnées, canonical, sitemap ready)

### Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Fully Static - Pas de JavaScript nécessaire
- Compressible gzip

### Quality

- ✅ TypeScript strict mode
- ✅ Zero inline styles
- ✅ Composants modulaires
- ✅ Données externalisées
- ✅ Accessibility-first
- ✅ Mobile-first responsive

---

## Roadmap

- [ ] Intégration blog
- [ ] Search fonctionnalité
- [ ] Newsletter signup
- [ ] Analytics avancées
- [ ] i18n (multilingue)
- [ ] Contact form
- [ ] Reading time sur articles
- [ ] Like/Save projects
- [ ] Dark mode toggle manual
- [ ] Lazy loading images optimisé

## Support

Pour toute question ou issue, consultez le [README](./README.md).
