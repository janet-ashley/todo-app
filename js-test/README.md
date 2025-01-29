# To-Do List App

Une application de gestion de tâches (To-Do List) développée avec **React** et **Vite.js**. Cette application permet de gérer facilement vos tâches quotidiennes en les ajoutant, en les supprimant et en les affichant dans une interface simple et fluide.

## Fonctionnalités

- **Ajouter des tâches** : Ajoutez de nouvelles tâches à la liste.  
- **Supprimer des tâches** : Supprimez une tâche de la liste lorsque vous avez terminé.  
- **Afficher les tâches** : Visualisez toutes les tâches ajoutées.  
- **Navigation avec TanStack Router** : Gestion de la navigation entre les différentes pages de l'application.  
  - **Home** : Page principale affichant la liste des tâches.  
  - **About** : Page avec des informations à propos de l'application.  
  - **Link** : Chaque tâche est un lien cliquable qui redirige vers une page où les détails spécifiques de cette tâche sont affichés.  
- **Récupération de données avec Axios** : Utilisé pour récupérer les données de l'API.  
- **Gestion de l'état avec Zustand** : Gestion simple et performante de l'état global de l'application.  

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.  
- **Vite.js** : Outil de build ultra-rapide pour le développement React.  
- **TanStack Router** : Gestion du routage dans l'application.  
- **Axios** : Client HTTP pour récupérer des données depuis une API.  
- **Zustand** : Bibliothèque légère pour la gestion de l'état global.  

## Installation

### Prérequis

- **Node.js** installé sur votre machine.
- **npm** ou **yarn** pour gérer les dépendances.


## Structure de l'APP

/public
  ├── vite.svg                    # Logo Vite
  ├── index.html                   # Fichier HTML principal

/src
  ├── main.jsx                     # Point d'entrée de l'application React
  ├── App.jsx                      # Composant principal qui intègre toutes les pages et composants
  ├── App.css                      # Styles globaux de l'application
  ├── index.css                    # Styles additionnels

  ├── assets/                      # Dossier pour les images et autres ressources

  ├── components/                  # Composants réutilisables
  │    ├── AddTask.jsx              # Formulaire pour ajouter une tâche
  │    ├── Count.jsx                # Compteur des tâches 
  │    ├── Task.jsx                 # Affichage d'une tâche individuelle
  │    ├── TaskList.jsx             # Affichage de la liste des tâches
  │    ├── tasksPage.jsx            # Page contenant la liste des tâches et les actions associées

  ├── routes/                       # Configuration du routage avec TanStack Router
  │    ├── __root.jsx               # Route principale (Layout général)
  │    ├── index.jsx                # Page d'accueil avec la liste des tâches
  │    ├── about.jsx                # Page "À propos" avec informations sur l'application
  │    ├── task.$taskid.jsx         # Page de détails d'une tâche spécifique

  ├── Stores/                       # Gestion de l'état global avec Zustand
  │    ├── axiosInstance.js         # Instance Axios pour les appels API
  │    ├── Bears.jsx               
  │    ├── tasks.jsx                # Store Zustand pour la gestion des tâches

  ├── api/                          # Gestion des appels API
  │    ├── api.js                   # Fichier pour gérer les appels API avec Axios

  ├── routeTree.gen.ts              # Fichier de routes générées automatiquement

/config
  ├── vite.config.js                 # Configuration de Vite
  ├── eslint.config.js               # Configuration ESLint

/docs
  ├── README.md                      # Documentation du projet

/.github
  ├── .gitignore                     # Fichiers à ignorer dans Git

/package.json                         # Dépendances et scripts du projet
/package-lock.json                    # Fichier de verrouillage des dépendances






Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
