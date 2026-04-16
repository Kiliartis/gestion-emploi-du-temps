# Gestion Emploi Du Temps

Application web de gestion d'emploi du temps pour une équipe.

## Stack technique

| Couche | Technologie |
|---|---|
| Frontend | React 19, React Router 7 |
| État global | Redux Toolkit 2 + React Redux |
| HTTP | Axios 1.15+ |
| Backend (prévu) | Node.js + Express |
| Base de données | MongoDB Atlas |
| Authentification | JWT (token stocké en localStorage) |

## Prérequis

- [Node.js](https://nodejs.org/fr) (LTS recommandé)
- Autoriser l'exécution de scripts PowerShell (Windows) :
  ```powershell
  # En administrateur
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
  ```
- Un cluster MongoDB Atlas (free tier suffisant pour démarrer)

## Installation

```bash
git clone git@github.com:Kiliartis/gestion-emploi-du-temps.git
cd gestion-emploi-du-temps
npm install
```

## Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
REACT_APP_API_URL=http://localhost:5000/api
```

> Ne jamais committer ce fichier. Il est exclu par `.gitignore`.

## Scripts disponibles

```bash
npm start       # Lance l'application en mode développement (http://localhost:3000)
npm test        # Lance les tests unitaires en mode interactif
npm run build   # Build de production dans /build
```

## Structure du projet

```
src/
├── api.js                    # Instance Axios centralisée
├── App.js                    # Composant racine + routes
├── app/store.js              # Configuration Redux store
├── components/
│   └── PrivateRoute.js       # Protection des routes authentifiées
├── features/
│   └── auth/authSlice.js     # Slice Redux pour l'authentification
└── pages/
    ├── Dashboard.js
    ├── Home.js
    └── Login.js
```

## Points d'attention (sécurité & architecture)

- Le token JWT est stocké en `localStorage` — vulnérable aux XSS. Migration vers `httpOnly cookie` recommandée.
- Redux n'est pas réhydraté au rafraîchissement de page — prévoir une vérification du token au démarrage.
- Toujours utiliser l'instance centralisée `api.js` plutôt qu'`axios` directement.
- `react-scripts` (CRA) n'est plus activement maintenu. Migration vers **Vite** recommandée à moyen terme.

## Outils utiles

- Générateur bcrypt pour les mots de passe de test : https://bcrypt-generator.com/

## Configuration Git (première fois)

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
ssh-keygen -t ed25519 -C "you@example.com"
# Ajouter la clé publique dans GitHub > Settings > SSH Keys
git remote set-url origin git@github.com:Kiliartis/gestion-emploi-du-temps.git
```
