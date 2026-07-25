# Contribution

Merci d'être intéressé par la contribution à ce projet! 

Ce guide explique comment contribuer et maintenir la qualité du code.

## 🚀 Processus de contribution

1. **Fork** le dépôt
2. **Créez une branche** pour votre feature: `git checkout -b feature/ma-feature`
3. **Committez** vos changements: `git commit -m 'Ajout de ma feature'`
4. **Poussez** vers la branche: `git push origin feature/ma-feature`
5. **Créez une Pull Request**

## 🔧 Standards de code

### Qualité

- **TypeScript strict** - Aucun `any` sans justification
- **ESLint** - Les règles sont appliquées automatiquement
- **Prettier** - Le formatage est automatisé
- **Tests** - Les changements majeurs doivent avoir des tests

### Conventions

- Nommage des fichiers: `kebab-case` (sauf composants TypeScript: `PascalCase`)
- Composants Astro: `PascalCase`
- Variables/fonctions: `camelCase`
- Constantes: `SCREAMING_SNAKE_CASE`

### Commits

Utilisez les prefixes conventionnels:

- `feat:` - Nouvelle feature
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage/style
- `refactor:` - Refactorisation
- `test:` - Tests
- `chore:` - Maintenance

Exemple: `feat: add dark mode toggle`

## 📝 Avant de committer

```bash
# Format le code
npm run format

# Vérifie les erreurs
npm run lint

# Fix les erreurs si possible
npm run lint:fix
```

Ces commandes s'exécutent automatiquement via Husky avant chaque commit.

## 🎨 Ajouter du contenu

### Ajouter un nouveau projet

1. Editez `src/data/projects.json`
2. Ajoutez une entrée dans la catégorie appropriée
3. Incluez liens GitHub et démo si disponible

### Ajouter une expérience

1. Editez `src/data/experience.json`
2. Utilisez les formats: `experience`, `education`, ou `certification`

### Ajouter une compétence

1. Editez `src/data/skills.json`
2. Catégorisez dans la section appropriée

## 🧪 Build et Test

```bash
# Build local
npm run build

# Preview
npm run preview

# Vérifier la qualité
npm run lint
npm run format:check
```

## 📚 Documentation

- Mettez à jour le README si vous changez l'architecture
- Documentez les nouvelles features dans les commentaires du code
- Utilisez des commits clairs et descriptifs

## ❓ Questions?

Ouvrez une issue pour discuter avant de commencer du travail important.

---

**Merci de contribuer!** ♥
