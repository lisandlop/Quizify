# Quizify

### [Deployed application](https://kthquizify.firebaseapp.com)

## First time setup:
```
git clone git@github.com:kthquizify/Quizify.git
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

Deploys the react app to firebase. Should ony be used from master branch.

<br/>
<br/>

---

<br/>
<br/>

## Development progress

- [x] Setup basic framework (React)
- [x] Install useful packages (Sass, React-router etc.)
- [x] Initial layout
- [x] Configure deployment method
- [x] Make contant with Spotify API
- [x] Connect to Firebase Cloudstore
- [ ] Install Spotify WebPlayer
- [ ] Setup Quizzing components
- [ ] ...

<br/>
<br/>

---

<br/>
<br/>

## File structure (images ignored)

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
    * */Quizzes*
      * Quizzes.js
        <br/>
        Currently serves as test for firebase db.
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
  * */constants*
    * routes.js
      <br/>
      Exports string-constants for each path used as a route.
  * */containers*
    * LandingPage.js
      <br/>
      Creates the landing page component. <br/>
      Corresponds to the '/' route.
    * TestPage.js
      <br/>
      Creates the test page component. <br/>
      Corresponds to the '/test' route.
  * */styles*
    * LandingPage.js
      <br/>
      Styles the LandingPage component with Sassy CSS.
    * TestPage.js
      <br/>
      Styles the TestPage component with Sassy CSS.
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

