import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './config.js'

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

  // Get
  // ------------------------------------------------------------

  getQuizByID = quizid => this.db.collection('quizzes').doc(quizid)
    .get()
    .then(snapshot => {
      return snapshot.data();
    });

  async getQuizzesByParams(name, author, lang) {
    var query = this.db.collection('quizzes');
    if (lang !== '') query = query.where('language', '==', lang);

    let result = query.get()
      .then(snapshot => {
        let quizzes = []
        snapshot.forEach(doc => {
          let quiz = doc.data()
          quiz.id = doc.id;

          let flag = false;
          if (name !== '' && !quiz.name.toLowerCase().includes(name.toLowerCase())) flag = true;
          if (author !== '' && !quiz.author.toLowerCase().includes(author.toLowerCase())) flag = true;

          if (!flag) quizzes.push(quiz)
        })
        return quizzes;
      })
    return result;
  }

  getAllQuizzes = () => this.db.collection('quizzes')
    .get()
    .then(snapshot => {
      let quizzes = []
      snapshot.forEach(doc => {
        let quiz = doc.data()
        quiz.id = doc.id;

        quizzes.push(quiz)
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


  // Set
  // ------------------------------------------------------------
  async createNewQuiz(musicQuiz) {
    var newQuiz = this.db.collection('quizzes').doc();

    newQuiz.set({
      name: 'Jura och Jonatan testat',
      author: 'Jura & Jonatan',
      language: 'Blahonga'
    })

    console.log(musicQuiz)

    for (let index = 0; index < 2; index++) {
      var quizSong = newQuiz.collection('songs').doc();
      
      quizSong.set({
        track: `asdjoasdas${index}`
      })
      
    }

  }


//   db.collection("cities").add({
//     name: "Tokyo",
//     country: "Japan"
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
};

export default Firebase;