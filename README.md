# Quizify

## First time setup:
```
git clone git@github.com:JonatanLindstroom/MusicQuiz.git
cd Quizify
yarn install
```

### Setup firebase:
In *src/components/Firebase* add a file *config.js* with credentials of following format:
```
const config = {
    apiKey: "abcdefghijklmnopqrstuvxyz",
    authDomain: "project.firebaseapp.com",
    databaseURL: "https://project.firebaseio.com",
    projectId: "project",
    storageBucket: "project.appspot.com",
    messagingSenderId: "1234567890"
};

export default config;
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn deploy`

Deploys the react app to gh-pages.

