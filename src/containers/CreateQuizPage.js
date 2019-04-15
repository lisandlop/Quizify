import React, { Component } from 'react';
import '../styles/CreateQuizPage.scss';

import CreateQuiz from '../components/CreateQuiz/CreateQuiz';

class CreateQuizPage extends Component {
  render() {
    return (
      <div className="CreateQuizPage backpage">
        <CreateQuiz/>
      </div>
    );
  }
}

export default CreateQuizPage;