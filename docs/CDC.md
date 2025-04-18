# 📬 Plateforme de Communication - Natura Energie+

## 🎯 Objectif du projet

Développer une application web dédiée à la génération, la personnalisation, et l'envoi de lettres types à destination des clients finaux, en lien avec un ERP. Cette plateforme permettra d'adresser des documents tels que :

- Courrier client
- Commande
- Facture
- Avoir

Ces courriers pourront être générés via une interface utilisateur ou automatiquement via des APIs ERP, selon des scénarios prévus dans des workflows métiers.

---

## 🔍 Objectifs détaillés

### Types de modèles supportés

Chaque document est associé à un modèle personnalisable basé sur les objets suivants :

- **Enseigne** : Paramètres de l'entité commerciale (coordonnées, charte, signature...)
- **Client** : Nom, prénom, adresse, coordonnées de contact, etc.
- **Commande** : Numéro, date, produits, montant, statut...
- **Facture** : Référence, détails des lignes, total, TVA, etc.
- **Avoir** : Motif, référence de la facture liée, montant, etc.

### Modes de diffusion pris en charge

En fonction du modèle de document, différentes méthodes d'envoi sont disponibles :

- 📥 **PDF** à déposer sur un site distant (mise sous pli / affranchissement)
- 🔗 **API distante** pour l'envoi automatique via des prestataires
- 📧 **Email** avec lettre en pièce jointe ou dans le corps du message
- 📱 **SMS** avec URL de consultation en ligne

---

## 🧰 Fonctionnalités principales

- **Choix de modèle** par type et enseigne
- **Personnalisation dynamique** avec fusion de données issues de l'ERP (via API)
- **Gestion des modèles** : ajout, suppression, mise à jour avec paramètres par défaut
- **Dictionnaire de paragraphes personnalisables** (ex. introduction, relances, mentions légales, etc.)
- **Ajout de pièces jointes** : factures, bons de commande, catalogues, documents annexes
- **Exportation multi-format** : PDF, DOCX, corps d’email HTML
- **Historique complet** des envois avec statut, contenu, mode de diffusion
- **Planification des jobs** et possibilité de relancer ou de générer un job depuis une API ERP ou l’IHM
- **Mise à jour de l’ERP** une fois le job exécuté

---

## 🔗 Intégration API et ERP

La plateforme communique avec plusieurs APIs pour :

- 🔄 **Récupérer les données** (client, commande, facture, avoir)
- 📤 **Créer des jobs** de génération de documents
- 📅 **Planifier l'exécution** de ces jobs
- 📌 **Archiver les PDF générés** dans la GED
- 🧾 **Mettre à jour l'ERP** avec les informations de traitement

Schémas d’usage :

### 🔁 Génération automatique (via API ERP)
1. L’ERP appelle une API de création de job avec :
   - Enseigne
   - Type de document
   - Référence client / commande / facture / avoir
2. Le job est planifié ou exécuté immédiatement
3. Le PDF est généré et envoyé selon le mode choisi (email, dépôt GED...)
4. Le lien du PDF est retourné à l’ERP et consigné dans la GED

### 🧑‍💼 Génération interactive (via IHM)
1. L’utilisateur (équipe CRC/MBO) ouvre l’IHM avec des paramètres URL (ex: réf. commande)
2. Il choisit un modèle, visualise et personnalise la lettre
3. Il planifie et déclenche le job
4. Envoi + archivage comme pour l’API

---

## 👥 Utilisateurs et parties prenantes

### Utilisateurs finaux :
- **Équipes CRC et MBO** : gestion manuelle via IHM
- **Enseignes du groupe** : personnalisation et pilotage des modèles

### Parties prenantes :
- Développeurs internes
- Intégrateurs ERP
- Prestataires tiers (GED, courrier)

---

## 💰 Budget et délais

> **Budget estimé** : à valider avec la DSI

### Délais prévisionnels :
- 🔧 Développement : [Début] → [Fin]
- 🧪 Tests & validation : [Début] → [Fin]
- 🚀 Déploiement : [Début] → [Fin]

---

## ⚙️ Stack technique

### Frontend
- React + Vite
- MUI (Material UI)
- Formik / Yup
- Axios / React Query / React Router
- Prisma

### Backend
- A preciser



## 📁 Arborescence recommandée

```
src/
├── api/                # Services API (ERP, jobs, etc.)
├── assets/             # Images, logos
├── components/         # Composants UI réutilisables
├── features/           # Modules (lettres, modèles, planification...)
├── layouts/            # Layouts principaux
├── pages/              # Pages de l’application
├── routes/             # Configuration du routage
├── styles/             # Fichiers de style globaux
├── utils/              # Fonctions utilitaires
├── App.tsx
└── main.tsx
```

---

## 🧪 À venir (roadmap)

- 🔍 Recherche dans l’historique de lettres
- 📊 Tableau de bord de monitoring
- 🧠 Gestion avancée des règles métiers et des relances
- 🎨 Personnalisation des modèles par enseigne via IHM

---

## 📚 Références et ressources

- [Documentation MUI](https://mui.com/)
- [PostgreSQL](https://www.postgresql.org/)

---

## 👨‍💼 Contact

**Laurent BOSCO**  
Chef de projet - Natura Energie+  
📧 lbosco@new-sh.com

