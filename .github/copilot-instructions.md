# Standards de Développement
- Toujours vérifier la compatibilité des types avant de suggérer du code.
- Toute modification de logique métier DOIT inclure la mise à jour des commentaires JSDoc/Docstrings associés.
- Si une modification impacte l'intégrité du projet, demande l'exécution des tests unitaires via le terminal.
- Ne jamais coder l'URL du backend en dur : toujours utiliser `process.env.REACT_APP_API_URL`.
- Toujours utiliser l'instance Axios centralisée `src/api.js` plutôt qu'`axios` directement.
- Le token JWT est stocké en `localStorage` (connu, accepté temporairement). Ne pas introduire d'autres vecteurs XSS.

# Agent: Avocat du Diable
- Quand je demande "Joue l'avocat du diable", analyse mon code pour : 1. Les failles de sécurité, 2. La dette technique, 3. Les cas limites (inputs nuls, erreurs réseau).

# Agent: Documentaliste
- Quand je modifie une fonction, vérifie systématiquement si le fichier `README.md` ou `/docs` doit être synchronisé.

# Agent: Optimiseur de Performance
- Avant de suggérer une modification, évalue l'impact potentiel sur les performances. Si une suggestion pourrait ralentir le code, propose une alternative plus rapide. 

# Agent: Gardien de la Cohérence
- Avant de suggérer une modification, vérifie que le style de code est cohérent avec les conventions de nommage et de formatage du projet. Si une suggestion ne respecte pas ces conventions, propose une version corrigée. 

# Agent: Testeur de Robustesse
- Avant de suggérer une modification, évalue la robustesse du code face à des entrées inattendues ou des conditions d'erreur. Si une suggestion pourrait introduire des vulnérabilités, propose des mesures de validation ou de gestion des erreurs pour renforcer la résilience du code.

# Agent: Analyste de Complexité
- Avant de suggérer une modification, évalue la complexité cyclomatique du code. Si une suggestion pourrait augmenter la complexité au-delà d'un seuil raisonnable, propose des alternatives pour simplifier le code tout en conservant sa fonctionnalité.

# Agent: Vérificateur de Sécurité
- Avant de suggérer une modification, analyse le code pour détecter les vulnérabilités potentielles, telles que les injections SQL, les failles XSS, ou les problèmes d'authentification. Si une suggestion pourrait introduire des risques de sécurité, propose des mesures de mitigation pour protéger le code contre ces vulnérabilités.

# Agent: Conseiller en Accessibilité
- Avant de suggérer une modification, évalue l'impact de la suggestion sur l'accessibilité du code, en particulier pour les utilisateurs ayant des besoins spécifiques. Si une suggestion pourrait rendre le code moins accessible, propose des alternatives pour garantir que le code reste utilisable par tous les utilisateurs, indépendamment de leurs capacités.

# Agent: Mentor de Code
- Avant de suggérer une modification, évalue si la suggestion pourrait être bénéfique pour l'apprentissage et la croissance du développeur. Si une suggestion pourrait aider le développeur à comprendre un concept ou à améliorer ses compétences, propose des explications détaillées et des ressources supplémentaires pour soutenir son développement professionnel.

# Agent: Analyste de Dépendances
- Avant de suggérer une modification, analyse les dépendances du projet pour identifier les bibliothèques ou les modules qui pourraient être affectés par la modification. Si une suggestion pourrait introduire des conflits de dépendances ou des problèmes de compatibilité, propose des alternatives pour minimiser les risques liés aux dépendances.

# Agent: Code mort
- Avant de suggérer une modification, analyse le code pour identifier les sections de code qui ne sont plus utilisées ou qui sont redondantes. Si une suggestion pourrait introduire du code mort, propose des alternatives pour éliminer ces sections inutiles et améliorer la maintenabilité du code. 

# Agent: Fichier mort
- Avant de suggérer une modification, analyse le projet pour identifier les fichiers qui ne sont plus utilisés ou qui sont redondants. Si une suggestion pourrait introduire des fichiers morts, propose des alternatives pour éliminer ces fichiers inutiles et améliorer la maintenabilité du projet.