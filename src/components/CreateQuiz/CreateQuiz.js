import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


import * as ROUTES from '../../constants/routes';
import SpotifySongSelect from '../SpotifySongSelect/SpotifySongSelect';


import { compose } from 'recompose';
import { withSpotify } from '../Spotify';
import { withFirebase } from '../Firebase';
import { withDragDrop } from '../DragDrop';


import './CreateQuiz.scss';


class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.quiz = { name: '', author: '', language: '' };
    this.questionList = [{ question: '', answer: '', falseOptions: [], track: '', trackName: '' }];
    this.modalMessage = {message:''};

    if (JSON.parse(localStorage.getItem('createQuizQuestions')))
      this.questionList = JSON.parse(localStorage.getItem('createQuizQuestions'))

    this.state = {
      loading: true,
      selectingSong: false,
      quizSubmitted: false,
      handleSubmission: false
    }

    this.deleteQuestion = this.deleteQuestion.bind(this)
  }


  handleQuizChange = (e, type) => {
    if (type === 'name') this.quiz.name = e.target.value;
    else if (type === 'author') this.quiz.author = e.target.value;
    else if (type === 'lang') this.quiz.language = e.target.value;
  }

  handleQuestionChange = (e, idx, type, id = null) => {
    if (type === 'question') this.questionList[idx].question = e.target.value;
    else if (type === 'correct') this.questionList[idx].answer = e.target.value;
    else if (type === 'false') this.questionList[idx].falseOptions[id] = e.target.value;
  }

  addQuestion = (e) => {
    let valid = this.validateQuestion(this.questionList[this.questionList.length - 1]);

    if (true) {
      this.questionList.push({ question: '', answer: '', falseOptions: [], track: '' });
      localStorage.setItem('createQuizQuestions', JSON.stringify(this.questionList));
    }
    else alert('Please fill in previous question fully first.');

    this.setState({ reRender: true });
  }

  validateQuestion(question) {
    let flag = false;

    Object.keys(question).forEach(key => {
      if (Array.isArray(question[key])) {
        question[key].forEach(item => { if (item === '') flag = true; })
      }
      else if (question[key] === '') flag = true;
    })

    return !flag;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let flagged = false;

    if(this.quiz.name === '') { 
      flagged = true;
      this.handleSubmission = true;
      this.modalMessage.message = 'Fill in quiz name';
    }
    else if (this.quiz.author === '') { 
      flagged = true;
      this.handleSubmission = true;
      alert('Fill in quiz author');
    }
    else if (this.quiz.language === '') { 
      flagged = true;
      this.handleSubmission = true;
      alert('Fill in quiz language');
    }
    else if (!this.validateQuestion(this.questionList[this.questionList.length - 1])) {
      flagged = true;
      this.handleSubmission = true;
      alert('Finish or remove the last question.');
    }

    
    if (!flagged) {
      this.props.firebase.createNewQuiz(this.quiz, this.questionList).then(e => {
        localStorage.removeItem('createQuizQuestions');
        alert('Quizzen sparad!');
        this.setState({ quizSubmitted: true })
      })
    }
  }

  spotifySongSelection = (e) => {
    e.target.blur();
    this.setState({ selectingSong: true, target: e.target })
  }

  spotifySongSelected = (cancelled, track) => {
    if (!cancelled) {
      document.getElementById(this.state.target.id).value = track.name;
      this.questionList[this.state.target.id].track = track.id;
      this.questionList[this.state.target.id].trackName = track.name;
    }
    this.setState({ selectingSong: false, target: null })
  }

  deleteQuestion = (e, idx) => {
    this.questionList.splice(idx, 1);
    if (this.questionList.length === 0) this.questionList.push({ question: '', answer: '', falseOptions: [], track: '' });
    document.getElementById('questionFields').reset();
    this.setState({ reRender: true });
  }

  componentWillMount() {
    this.props.spotify.getMe().then(response => {
      if (response.display_name) {
        this.quiz.author = response.display_name;
        document.getElementById('quizAuthor').value = response.display_name;
      }
    })
    this.setState({ loading: false });
  }

  

  render() {
    return (
      <Container>
        {this.state.quizSubmitted && <Redirect to={ROUTES.LANDING}/>}

        <Modal className="SpotifySongSelect" size="xl" show={this.state.selectingSong} onHide={() => this.spotifySongSelected(true)}>
          {this.state.selectingSong && <SpotifySongSelect selectSong={this.spotifySongSelected} />}
        </Modal>

        <Modal className="SubmissionMessage" size="xl" show={this.state.handleSubmission}>
        </Modal>

        <Row>
          <Col xs={12}>
            <p id="createaquiz">Create a Quiz</p>
          </Col>
          <Col sm={3}>
            <Form id="QuizForm">

              <Form.Group controlId="quizName">
                <Form.Label>Quiz name:</Form.Label>
                <Form.Control type="text" placeholder="Set name..." onChange={(e) => this.handleQuizChange(e, 'name')} />
              </Form.Group>

              <Form.Group controlId="quizAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Set author..." onClick={(e) => this.handleQuizChange(e, 'author')} />
              </Form.Group>

              <Form.Group controlId="quizLanguage">
                <Form.Label>Language of questions:</Form.Label>
                <Form.Control as="select" onChange={(e) => this.handleQuizChange(e, 'lang')}>
                  <option value="">Set language</option>
                  <option disabled>-----------</option>
                  <option value="DK">Dansk</option>
                  <option value="GB">English</option>
                  <option value="ES">Español</option>
                  <option value="FR">Français</option>
                  <option value="IS">Íslenska</option>
                  <option value="DE">Deutsch</option>
                  <option value="NO">Norsk</option>
                  <option value="SE">Svenska</option>
                  <option value="FI">Soumi</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" size="lg" className="ConfirmButton" onClick={(e) => this.handleSubmit(e)} block>
                <span>Submit Quiz</span>
              </Button>

              <Button id="backBtn" variant="dark" style={{ marginTop: '15px' }} block onClick={() => window.history.go(-1)}>
                Back to main menu
              </Button>
            </Form>
          </Col>

          <Col>
            <Form id="questionFields" className="questionList">
              {this.questionList.map((val, idx) => {
                return (
                  <div key={idx}>
                    <Row>

                      <Col>
                        <Form.Group id="vline">
                          <Form.Control type="text" defaultValue={this.questionList[idx].question} placeholder="Question" 
                                        onChange={(e) => this.handleQuestionChange(e, idx, 'question')} 
                                        readOnly={this.questionList.length > idx + 1}/>
                          <Form.Control type="text" defaultValue={this.questionList[idx].trackName} id={`${idx}`} placeholder="Song" 
                                        onFocus={(e) => this.spotifySongSelection(e)}/>
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Control type="text" defaultValue={this.questionList[idx].answer} id="correct" placeholder="Correct answer" 
                                        onChange={(e) => this.handleQuestionChange(e, idx, 'correct')} 
                                        readOnly={this.questionList.length > idx + 1}/>
                          <Form.Control type="text" defaultValue={this.questionList[idx].falseOptions[0]} className="Wrong" placeholder="Wrong answer 1" 
                                        onChange={(e) => this.handleQuestionChange(e, idx, 'false', 0)} 
                                        readOnly={this.questionList.length > idx + 1}/>
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Control type="text" defaultValue={this.questionList[idx].falseOptions[1]} className="Wrong" placeholder="Wrong answer 2" 
                                        onChange={(e) => this.handleQuestionChange(e, idx, 'false', 1)} 
                                        readOnly={this.questionList.length > idx + 1}/>
                          <Form.Control type="text" defaultValue={this.questionList[idx].falseOptions[2]} className="Wrong" placeholder="Wrong answer 3" 
                                        onChange={(e) => this.handleQuestionChange(e, idx, 'false', 2)} 
                                        readOnly={this.questionList.length > idx + 1}/>
                        </Form.Group>
                      </Col>

                      <Col>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <Button className="DeleteButton" size="lg" onClick={(e) => this.deleteQuestion(e, idx)}>
                          <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                      </Col>

                    </Row>
                  </div>
                )})
              }
            </Form>
            <Button variant="primary" size="lg" className="AddButton" onClick={this.addQuestion} style={{ width: '50%', position: 'left'}}>
              <span>Add question</span>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }


}

export default compose(withSpotify, withFirebase)(CreateQuiz);





