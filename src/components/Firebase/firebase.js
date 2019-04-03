import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './config.js'

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);


  // *** Quiz API ***

  getQuizByID = quizid => this.db.collection('quizzes').doc(quizid)
    .get()
    .then(snapshot => {
      return snapshot.data().name;
    });

  getAllQuizzes = () => this.db.collection('quizzes')
    .get()
    .then(snapshot => {
      let quizzes = []
      snapshot.forEach(doc => {
        quizzes[doc.id] = doc.data();
      })
      return quizzes;
    })

  getQuestionIDs = quizid => this.db.collection('quizzes').doc(quizid).collection('songs')
    .get()
    .then(snapshot => {
      let songs = []
      snapshot.forEach(doc => {
        songs.push(doc.id);
      })
      return songs;
    })

  getQuestionFromQuiz = (quizid, questionid) => this.db.collection('quizzes').doc(quizid).collection('songs').doc(questionid)
    .get()
    .then(snapshot => {
      return snapshot.data();
    })


};

export default Firebase;