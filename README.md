# Mon Projet

## Description
Ce projet est une application web qui permet aux utilisateurs de consulter leurs informations de profil, incluant l'activité quotidienne, les sessions moyennes, les performances et les objectifs. Le projet utilise React pour le front-end et Node.js pour le back-end.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

### Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo

##Installer les dépendances

# Pour le front-end
cd mon-projet
npm install
# ou
yarn install

# Pour le back-end
cd ../P9-front-end-dashboard
npm install
# ou
yarn install

##Lancer le front-end
live-server

##Lancer le back-end
npm start
# ou
yarn start

##Mock des données
Pour faciliter le développement, des données mock sont utilisées. Elles sont définies dans le fichier mockData.js 
const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  // Autres utilisateurs...
];

##Structure du projet
Le projet est organisé comme suit :

css
Copier le code
mon-projet/
│
├── src/
│   ├── components/
│   │   ├── ActifQuotidient.js
│   │   ├── CourbeSessions.js
│   │   ├── CompossentOrga.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Accueil.js
│   │   ├── Profil.js
│   │   ├── Reglage.js
│   │   └── ...
│   │
│   ├── styles/
│   │   ├── App.scss
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── public/
│   ├── iconeUser/
│   │   ├── calories-icon.png
│   │   ├── carbs-icon.png
│   │   ├── fat-icon.png
│   │   ├── protein-icon.png
│   │   └── ...
│   └── ...
│
├── package.json
└── README.md


