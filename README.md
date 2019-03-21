# [Quizify](https://kthquizify.firebaseapp.com)

## First time setup :floppy_disk:
```
git clone git@github.com:kthquizify/Quizify.git
cd Quizify
yarn install
```

### Setup firebase 
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

## Available Scripts :computer:

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn deploy`

Deploys the react app to firebase. Should ony be used from master branch.

<br/>
<br/>

---

<br/>
<br/>

## Development progress :chart_with_upwards_trend:

- [x] Setup basic framework (React)
- [x] Install useful packages (Sass, React-router etc.)
- [x] Initial layout
- [x] Configure deployment method
- [x] Make contant with Spotify API
- [x] Connect to Firebase Cloudstore
- [ ] Install Spotify WebPlayer
- [ ] Setup Quizzing components
- [ ] Make all buttons work
- [ ] Create a quiz
- [ ] Create filter functions
- [ ] ...
- [ ] ...
- [ ] ...
- [ ] ...

<br/>
<br/>

---

<br/>
<br/>

## File structure (images ignored) :open_file_folder:

*/public*
  * *index.html* 
    <br/>
    The foundation in which the app rests.

*/src*
  * */components*
    * */Firebase*
      * config.js
        <br/>
        Contains the network secrets for the Firebase API.
      * context.js
        <br/>
        Creates context's so that different parts of the Firebase connection can be instantiated from different parts of the component hierarchy.
      * firebase.js
        <br/>
        Serves as our model for calling the Firebase API.
      * indes.jx
        <br/>
        Exports the necessary functionalities from this folder.
    * */Navigation*
      * Navigation.js
        <br/>
        Creates html code for navigation.
      * Navigation.scss
        <br/>
        Styles the navigation component with Sassy CSS.
    * */Question*
      * Question.js
        <br/>
        Creates a question component.
      * Question.scss
        <br/>
        Styles the uestion component with Sassy CSS.
    * */Quizzes*
      * Quizzes.js
        <br/>
        Currently serves as test for firebase db.
    * */SelectQuiz*
      * SelectQuiz.js
        <br/>
        Creates a select quiz component.
    * */SignUp*
      * SignUp.js
        <br/>
        Currently serves as test for firebase auth.
    * */Spotify*
      * Spotify.js
        <br/>
        Creates a spotify component and connections to the Spotify API.
      * Spotify.scss
        <br/>
        Styles the spotify component with Sassy CSS.
    * */StartQuiz*
      * StartQuiz.js
        <br/>
        Contains a button that starts the quiz.
      * StartQuiz.sccs*
        <br/>
        Styles the startquiz component with Sassy CSS.
  * */constants*
    * routes.js
      <br/>
      Exports string-constants for each path used as a route.
  * */containers*
    * LandingPage.js
      <br/>
      Creates the landing page. <br/>
      Corresponds to the '/' route.
    * QuizPage.js
      <br/>
      Creates the quiz playing page. <br/>
      Corresponds to the '/playQuiz' route.
    * SelectPage.js
      <br/>
      Creates the select quiz page. <br/>
      Corresponds to the '/selectQuiz' route.
  * */styles*
    * LandingPage.scss
      <br/>
      Styles the LandingPage component with Sassy CSS.
    * QuizPage.scss
      <br/>
      Styles the QuizPage component with Sassy CSS.
    * SelectPage.scss
      <br/>
      Styles the SelectPage component with Sassy CSS.
  * App.js
    <br/>
    Router for the application.
  * App.test.js
    <br/>
    Test-file for application stability.
  * index.css
    <br/>
    Global css for the entire application.
  * index.js
    <br/>
    Instantiates the application and firebase connection.
  * serviceWorker.js
    <br/>
    Default React service worker.

