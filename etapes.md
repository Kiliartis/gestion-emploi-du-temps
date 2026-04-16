<!-- Valable sur W11 -->

# Étapes du projet — Gestion Emploi du Temps

## FAIT

### Infrastructure & Environnement
- [x] Installer Node.js (https://nodejs.org/fr)
- [x] Autoriser l'exécution de scripts PowerShell
  ```powershell
  # En administrateur
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
  ```
- [x] Initialiser le projet avec Create React App
- [x] Installer les dépendances : `react-router-dom axios redux react-redux @reduxjs/toolkit`
- [x] Initialiser le dépôt Git + clé SSH GitHub

### Sécurité & Qualité
- [x] Corriger la faille axios "DoS via __proto__ in mergeConfig" → mis à jour en 1.15
- [x] Centraliser les appels HTTP dans `src/api.js`
- [x] Utiliser `process.env.REACT_APP_API_URL` (plus d'URL en dur)
- [x] Ajouter un intercepteur JWT dans `api.js` (Authorization header automatique)
- [x] Gérer les erreurs réseau dans le thunk `login` (err.response peut être undefined)

### Frontend — Architecture
- [x] Routing avec React Router 7 (`App.js`)
- [x] Redux store (`src/app/store.js`)
- [x] Slice d'authentification (`src/features/auth/authSlice.js`) : login/logout
- [x] `PrivateRoute.js` compatible React Router 7 (utilise `<Outlet />`)
- [x] `Login.js` refactorisé : utilise le thunk Redux via `api.js`, normalisation email

### Documentation & Outillage
- [x] `README.md` mis à jour (stack, installation, structure, points d'attention)
- [x] `.gitignore` renforcé (.env, logs, éditeur, OS)
- [x] `.github/copilot-instructions.md` complété (règles API, JWT, agents IA)

---

## À FAIRE

### Backend (rien n'existe — à créer from scratch)
- [ ] Initialiser un projet Node.js + Express dans `/backend`
- [ ] Connexion à MongoDB Atlas (Mongoose)
- [ ] Modèle User (email, password hashé avec bcrypt, rôle)
- [ ] Route `POST /auth/register`
- [ ] Route `POST /auth/login` (retourne un JWT)
- [ ] Middleware de vérification JWT (routes protégées)
- [ ] Modèle Créneau / Planning (à définir selon le besoin métier)
- [ ] Routes CRUD pour les créneaux

### Frontend — Fonctionnalités métier
- [ ] Créer `.env.local` localement avec `REACT_APP_API_URL=http://localhost:5000/api`
- [ ] Page d'inscription (`Register.js`)
- [ ] `Dashboard.js` — affichage réel des données (planning, créneaux)
- [ ] Composant de calendrier / emploi du temps
- [ ] Gestion des rôles (admin vs employé) dans l'UI
- [ ] Réhydrater Redux au démarrage (vérifier le token en localStorage)
- [ ] Page profil utilisateur

### Tests
- [ ] Tests unitaires : `authSlice` (login fulfilled/rejected/pending)
- [ ] Tests unitaires : `PrivateRoute` (redirige si non authentifié)
- [ ] Tests d'intégration : formulaire `Login`

### Infrastructure (moyen terme)
- [ ] Migrer de CRA vers Vite (react-scripts non maintenu, 50 vulnérabilités)
- [ ] Configurer un déploiement (Vercel/Netlify pour le frontend, Render/Railway pour le backend)
- [ ] Passer le JWT en `httpOnly cookie` côté backend (actuellement localStorage — risque XSS)

---

## Outils utiles
- Générateur bcrypt pour les mots de passe de test : https://bcrypt-generator.com/
- MongoDB Atlas : https://www.mongodb.com/products/platform/atlas-database
