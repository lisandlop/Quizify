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

    musicQuiz.map(track => {
      var quizSong = newQuiz.collection('songs').doc();

      var correctPosition = Math.floor(Math.random() * Math.floor(4));
      var options = track.falseOptions;
      options.splice(correctPosition, 0, track.answer);

      quizSong.set({
        correctAnswer: correctPosition,
        options: options,
        question: track.question,
        track: track.track
      }) 
    })
  }
};

export default Firebase;