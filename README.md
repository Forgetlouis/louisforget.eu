# Portfolio de Louis Forget

Portfolio professionnel premium pour Louis Forget - Cloud Engineer, Platform Engineer et SRE.

**[Visiter le site →](https://louisforget.eu)**

## 📋 Vue d'ensemble

Portfolio minimaliste et premium inspiré des meilleurs sites techniques (Vercel, Stripe, Linear, Cloudflare, shadcn/ui).

### Caractéristiques principales

- ✨ **Design premium et minimaliste** - Sobre élégant avec beaucoup d'espace blanc
- ⚡ **Performances optimisées** - Score Lighthouse 95+
- 📱 **Fully responsive** - Parfait sur tous les appareils
- 🌙 **Dark mode** - Support complet du mode sombre
- 🚀 **Static Site** - Généré statiquement, déployable sur GitHub Pages
- 🔍 **SEO optimisé** - Métadonnées complètes et structure sémantique
- ♿ **Accessible** - WCAG 2.1 AA compliant, support clavier
- 📊 **Données séparées** - Contenu en JSON, facile à maintenir

## 🛠 Stack technique

- **Framework**: [Astro](https://astro.build) - SSG performant
- **Langage**: TypeScript - Typage strict
- **CSS**: TailwindCSS - Utility-first styling
- **Composants UI**: Lucide React - Icônes minimalistes
- **Qualité de code**: ESLint, Prettier, Husky
- **CI/CD**: GitHub Actions - Déploiement automatique
- **Déploiement**: GitHub Pages

## 🏗 Architecture

```
src/
├── components/       # Composants réutilisables
│   ├── layout/      # Navigation, Footer
│   ├── home/        # Composants page d'accueil
│   ├── projects/    # Cartes projets
│   ├── timeline/    # Timeline CV
│   └── common/      # Primitives (Button, Badge, Card, etc.)
├── data/            # Données (JSON)
│   ├── projects.json
│   ├── experience.json
│   ├── skills.json
│   ├── explorations.json
│   ├── philosophy.json
│   ├── statistics.json
│   ├── lab.json
│   └── passions.json
├── pages/           # Pages Astro
│   ├── index.astro  # Accueil
│   ├── projects.astro
│   ├── cv.astro
│   ├── lab.astro
│   └── 404.astro
├── layouts/         # Layouts Astro
│   └── BaseLayout.astro
└── utils/           # Utilitaires
    └── icons.ts
public/              # Assets statiques
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou pnpm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/louisforget/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Développement
npm run dev

# Build production
npm run build

# Preview
npm run preview
```

## 📝 Commandes

```bash
# Développement (hot reload)
npm run dev

# Build pour production
npm run build

# Preview du site généré
npm run preview

# Lint le code
npm run lint

# Fix les problèmes de linting
npm run lint:fix

# Formater le code
npm run format

# Vérifier la formatage
npm run format:check
```

## 🎨 Personnalisation

### Modifier le contenu

Tous les contenus du site sont dans `src/data/`. Modifiez simplement les fichiers JSON :

- **projects.json** - Vos projets majeurs
- **experience.json** - Expérience pro et formation
- **skills.json** - Compétences techniques et transversales
- **philosophy.json** - Votre philosophie d'ingénierie
- **explorations.json** - Sujets d'intérêt actuel
- **lab.json** - Projets d'expérimentation
- **passions.json** - Vos passions personnelles
- **statistics.json** - Statistiques chiffrées

### Configuration du site

- **astro.config.mjs** - Configuration Astro
- **tailwind.config.mjs** - Personnalisation TailwindCSS
- **tsconfig.json** - Configuration TypeScript

## 🎯 Pages

### Accueil (`/`)
- Hero section
- À propos
- Philosophie d'ingénierie (6 cartes)
- Passions
- Statistiques
- Explorations actuelles

### Projets (`/projects`)
- Organisés par catégories
  - IA & Agents
  - Infrastructure On-Prem
  - Google Cloud Platform
  - Automatisation
- Case studies détaillées
- Lien GitHub et démos

### CV (`/cv`)
- Timeline expérience professionnelle
- Formation
- Certifications
- Compétences techniques catégorisées
- Compétences transversales
- Langues

### Lab (`/lab`)
- Projets d'expérimentation
- Statut de chaque projet
- Barre de progression
- Technologies utilisées
- Lien GitHub

## 📊 Performance

Score Lighthouse cible: **95+**

Pour vérifier les performances:
```bash
npm run build
npm run preview
# Ouvrir Chrome DevTools → Lighthouse
```

## ♿ Accessibilité

- Support clavier complet
- ARIA labels appropriés
- Contraste WCAG AA
- Images optimisées
- Sémantique HTML correcte
- Navigation claire

## 🌐 Déploiement

### GitHub Pages

1. Configurez votre dépôt
2. Allez à Settings → Pages
3. Sélectionnez "Deploy from a branch"
4. Branch: `main`, Folder: root
5. Les GitHub Actions déploieront automatiquement

Fichier `.github/workflows/deploy.yml` inclus pour l'automatisation.

### Autre plateforme statique

Le site peut être déployé sur:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

Simplement: `npm run build` générera `/dist` prêt à être déployé.

## 🔧 Configuration GitHub Actions

Fichier inclus: `.github/workflows/deploy.yml`

Déploie automatiquement sur GitHub Pages à chaque push sur main.

## 📚 Best Practices implémentées

- ✅ Composants réutilisables et maintenables
- ✅ Séparation données/présentation
- ✅ TypeScript strict
- ✅ Linting et formatting automatique
- ✅ Animations discrètes (fade-in, translate)
- ✅ Responsive design mobile-first
- ✅ Dark mode natif
- ✅ SEO optimisé
- ✅ Performances optimisées
- ✅ Accessibilité WCAG 2.1 AA

## 🎓 Ce que ce projet démontre

Ce dépôt est conçu comme un projet technique de référence à présenter en entretien:

- ✨ Architecture claire et modulaire
- 📐 Bonnes pratiques de développement
- 🎨 Design et UX professionnels
- 🚀 Performance et optimisations
- 📚 Documentation complète
- 🔧 Outils de qualité (ESLint, Prettier, Husky)
- 🔄 CI/CD automatisé
- ♿ Accessibilité et Web Standards
- 📱 Responsive et adaptatif
- 🌙 Attention aux détails (dark mode, animations, etc)

## 📝 Licence

MIT - Libre d'utilisation

## 📧 Contact

- 🔗 [GitHub](https://github.com/louisforget)
- 💼 [LinkedIn](https://linkedin.com/in/louisforget)
- ✉️ [Email](mailto:louis@example.com)

---

**Designed & Built by Louis Forget** ♥
