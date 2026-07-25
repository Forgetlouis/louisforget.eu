# 🎯 Prochaines étapes

Voici les commandes pour démarrer immédiatement avec votre portfolio.

## 1️⃣ Installation des dépendances

```bash
cd portfolio/louisforget.eu
npm install
```

## 2️⃣ Démarrer le développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 3️⃣ Personnaliser les données

### Éditez les fichiers JSON

- `src/data/projects.json` - Vos projets majeurs
- `src/data/experience.json` - Parcours pro, études, certifications
- `src/data/skills.json` - Vos compétences
- `src/data/philosophy.json` - Votre philosophie d'ingénierie
- `src/data/explorations.json` - Sujets d'intérêt actuels
- `src/data/statistics.json` - Vos statistiques
- `src/data/lab.json` - Projets d'expérimentation
- `src/data/passions.json` - Vos passions

### Mettez à jour vos liens

Éditez `src/components/layout/Footer.astro`:
- GitHub
- LinkedIn
- Email

Éditez `src/components/home/Hero.astro`:
- Boutons CTA et liens externes

### Ajoutez votre photo

1. Placez votre photo dans `public/images/` (ratio 1:1 recommandé)
2. Éditez `src/components/home/Hero.astro`
3. Remplacez le placeholder par votre image

## 4️⃣ Vérifier la qualité du code

```bash
# Lint le code
npm run lint

# Formater le code
npm run format

# Vérifier le formatage (sans modifier)
npm run format:check

# Fix les erreurs de linting
npm run lint:fix
```

## 5️⃣ Déployer sur GitHub Pages

```bash
git add .
git commit -m "Initial commit: portfolio"
git push origin main
```

GitHub Actions déploiera automatiquement sur GitHub Pages! 🚀

---

**Plus d'infos:** Consultez [QUICKSTART.md](./QUICKSTART.md) pour un guide plus détaillé.
