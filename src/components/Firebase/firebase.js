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

  getQuizByID = id => this.db.collection('quizzes').doc(id)
    .get()
    .then(snapshot => {
      return snapshot.data().name;
    });

  getAllQuizzes = () => this.db.collection('quizzes')
    .get()
    .then(snapshot => {
      let quizzes = Array()
      snapshot.forEach(doc => {
        quizzes[doc.id] = doc.data();
      })
      return quizzes;
    })

  getQuestionFromQuiz = (quizid, questionid) => this.db.collection('quizzes').doc(quizid).collection('songs').doc(questionid)
    .get()
    .then(snapshot => {
      return snapshot.data();
    })


};

export default Firebase;