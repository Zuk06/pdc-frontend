# PDC Frontend

Application frontend pour la gestion et la génération de documents.

## Technologies

- React + Vite + TypeScript
- Material UI (MUI)
- React Query + Zustand
- Zod pour la validation
- @react-pdf/renderer et docx pour la génération de documents
- Axios pour les requêtes API
- Jest + React Testing Library pour les tests

## Installation

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour la production
npm run build

# Lancement des tests
npm test
```

## Structure du Projet

```
src/
├── api/                # Services API
│   ├── erp/           # Intégration ERP
│   ├── documents/     # Gestion des documents
│   └── jobs/          # Gestion des jobs
├── components/         # Composants UI
│   ├── common/        # Composants réutilisables
│   └── documents/     # Composants spécifiques aux documents
├── features/          # Fonctionnalités
│   ├── templates/     # Gestion des modèles
│   ├── documents/     # Génération de documents
│   ├── jobs/          # Planification des jobs
│   └── history/       # Historique des envois
├── models/            # Types et interfaces
├── utils/             # Utilitaires
└── hooks/             # Hooks personnalisés
```

## Scripts Disponibles

- `npm run dev` : Lance l'application en mode développement
- `npm run build` : Compile l'application pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm test` : Lance les tests

## Contribution

1. Cloner le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser sur la branche
5. Créer une Pull Request
