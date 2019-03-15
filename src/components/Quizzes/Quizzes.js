import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

class QuizBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      quizzes: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    var quizList = [];
    this.props.firebase.quizzes().then(snapshot => {
      snapshot.forEach((doc) => {
        quizList[doc.id] = doc.data();
      });

      this.setState({ loading: false, quizzes: quizList });
    });
  }

  componentWillUnmount() {
    this.props.firebase.quizzes().off();
  }

  render() {
    const { quizzes, loading } = this.state;
    
    const QuizList = ({ quizzes }) => (
      <ul>
        {quizzes.map(quiz => (
          <QuizItem key={quiz} quiz={quiz} />
        ))}
      </ul>
    );
    
    const QuizItem = ({ quiz }) => (
      <li>
        <strong>{quiz.userId}</strong> {quiz.text}
      </li>
    );

    return (
      <div>
        {loading && <div>Loading ...</div>}

        <QuizList quizzes={quizzes} />
      </div>
    );
  }
}

export default withFirebase(QuizBase);
