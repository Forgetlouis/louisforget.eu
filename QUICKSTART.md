# 🚀 Guide de Démarrage

Bienvenue sur votre portfolio professionnel premium!

## ⚡ Installation rapide

```bash
# 1. Naviguer dans le dossier du projet
cd portfolio/louisforget.eu

# 2. Installer les dépendances
npm install

# 3. Démarrer le développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

## 📝 Étapes recommandées

### 1️⃣ Personnalisez vos données (5 min)

Éditez les fichiers dans `src/data/`:

- **`skills.json`** - Vos compétences
- **`experience.json`** - Votre parcours pro et formation
- **`projects.json`** - Vos projets majeurs
- **`philosophy.json`** - Votre philosophie (optionnel)
- **`statistics.json`** - Vos chiffres
- **`explorations.json`** - Vos domaines d'intérêt
- **`lab.json`** - Vos expérimentations
- **`passions.json`** - Vos passions

### 2️⃣ Mettez à jour vos liens (5 min)

- **`src/components/layout/Footer.astro`** - GitHub, LinkedIn, email
- **`src/components/home/Hero.astro`** - Boutons CTA
- **Liens externes** - Vérifiez tous les hyperliens

### 3️⃣ Ajoutez votre photo (5 min)

1. Mettez votre photo dans `public/images/` (ratio 1:1 recommandé)
2. Éditez `src/components/home/Hero.astro`
3. Remplacez le placeholder par votre image

### 4️⃣ Configurez votre domaine (10 min)

#### Pour GitHub Pages:
1. Allez aux **Settings** du repo
2. Scrollez à **Pages**
3. Configurez votre domaine personnalisé

#### Pour autre plateforme:
- Vercel: Importez le repo, connectez votre domaine
- Netlify: Pareil que Vercel
- Cloudflare: DNS + Pages

### 5️⃣ Testez avant de déployer (5 min)

```bash
# Build local
npm run build

# Preview
npm run preview

# Ouvrir http://localhost:3000
```

### 6️⃣ Validez la qualité (5 min)

```bash
# Vérifier TypeScript
npm run lint

# Vérifier le formatage
npm run format:check

# Corriger automatiquement
npm run lint:fix
npm run format
```

### 7️⃣ Déployez! 🚀

```bash
# Commit et push
git add .
git commit -m "Initial commit: portfolio setup"
git push origin main
```

GitHub Actions déploiera automatiquement!

## 🎨 Personnalisation avancée

### Modifier les couleurs

Éditez `tailwind.config.mjs`:

```javascript
extend: {
  colors: {
    primary: '#...',
    secondary: '#...',
  }
}
```

### Ajouter des fonts

Dans `src/layouts/BaseLayout.astro`, modifiez les imports Google Fonts.

### Changer la structure

- Pages: `src/pages/`
- Composants: `src/components/`
- Données: `src/data/`

## ✅ Checklist avant lancement

- [ ] Toutes les données mises à jour
- [ ] Liens GitHub/LinkedIn/Email corrects
- [ ] Photo de profil ajoutée
- [ ] Build sans erreurs
- [ ] Score Lighthouse 95+
- [ ] Responsive sur mobile (tester)
- [ ] Dark mode fonctionne
- [ ] Tous les liens internes marchent
- [ ] Analytics configurée (optionnel)
- [ ] Domaine personnalisé configuré

## 📊 Performance Optimization (Optionnel)

### Images

```bash
# Utilisez des images optimisées
# Format: WebP avec fallback JPG
# Size: < 100KB ideally
```

### Lazy Loading

```astro
<!-- Astro Image component (v3+) -->
<Image src={...} alt="..." loading="lazy" />
```

### Compression

```bash
# Plugins TailwindCSS pour minification
# Astro minifie automatiquement
```

## 🔗 Ressources utiles

- [Astro Docs](https://docs.astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [TypeScript](https://www.typescriptlang.org)

## 🆘 Troubleshooting

### "npm: command not found"
→ Installer Node.js depuis nodejs.org

### "Port 3000 déjà utilisé"
```bash
# Utilisez un autre port
npm run dev -- --port 3001
```

### "Build fails"
```bash
# Nettoyer cache et rebuild
rm -rf node_modules dist
npm install
npm run build
```

### "GitHub Pages ne se met pas à jour"
- Vérifiez les GitHub Actions
- Mettez à jour le `astro.config.mjs` avec votre repo URL
- Attendez 2-3 minutes après le push

## 💡 Tips & Tricks

1. **Testez dark mode**: Appuyez sur F12 → Preferences → Appearance → Dark

2. **Validez l'accessibilité**: 
   - Tab pour naviguer au clavier
   - Utilisez un lecteur d'écran

3. **Vérifiez les performances**:
   - F12 → Lighthouse → Analyze page load

4. **Mettez à jour Git hooks**:
   ```bash
   npx husky install
   ```

5. **Utilisez Git branches**:
   ```bash
   git checkout -b feat/new-section
   # ... modifications
   git push origin feat/new-section
   # Créer une PR
   ```

## 🎓 Apprendre plus

Ce projet démontre:
- ✅ Architecture modulaire
- ✅ TypeScript strict
- ✅ Components pattern
- ✅ Data-driven content
- ✅ Performance optimization
- ✅ Accessibility best practices
- ✅ CI/CD automation
- ✅ Professional code quality

Explorez le code pour apprendre!

---

## 🔥 Vous êtes prêt!

Vous avez maintenant un portfolio premium et performant. Personnalisez-le et partagez-le lors de vos prochains entretiens!

**Questions?** Consultez le [README](./README.md) ou le [CONTRIBUTING](./CONTRIBUTING.md).

**Bonne chance!** ♥
