import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import SpotifySongSelect from '../SpotifySongSelect/SpotifySongSelect';

import { compose } from 'recompose';
import { withSpotify } from '../Spotify';
import { withFirebase } from '../Firebase';


import './CreateQuiz.scss';


class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.quiz = { name: '', author: '', lang: '' };
    this.questionList = [{ question: "", answer: "", falseOptions: [], track: "" }];

    this.state = {
      loading: true,
      selectingSong: false
    }
  }

  handleQuizChange = (e, type) => {
    if (type === 'name') this.quiz.name = e.target.value;
    else if (type === 'author') this.quiz.author = e.target.value;
    else if (type === 'lang') this.quiz.lang = e.target.value;
  }

  handleQuestionChange = (e, idx, type, id = null) => {
    if (type === 'question') this.questionList[idx].question = e.target.value;
    else if (type === 'correct') this.questionList[idx].answer = e.target.value;
    else if (type === 'false') this.questionList[idx].falseOptions[id] = e.target.value;
  }

  addQuestion = (e) => {
    this.questionList.push({ question: "", answer: "", falseOptions: [], track: "" });
    this.setState({ reRender: true });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.firebase.createNewQuiz(this.quiz, this.questionList);
  }

  spotifySongSelection = (e) => {
    e.target.blur();
    this.setState({ selectingSong: true, target: e.target })
  }

  spotifySongSelected = (cancelled, track) => {
    if (!cancelled) {
      document.getElementById(this.state.target.id).value = track.name;
      this.questionList[this.state.target.id].track = track.id;
    }
    this.setState({ selectingSong: false, target: null })
  }

  deleteQuestion = (e) => {
    console.log("deleteyay")
    //addQuestion.remove(this.props.questionList);

  }

  componentWillMount() {
    this.props.spotify.getMe().then(response => {
      this.quiz.author = response.display_name;
    })
    this.setState({ loading: false });
  }

  render() {
    return (
      <Container>
        <Modal className="SpotifySongSelect" size="xl" show={this.state.selectingSong} onHide={() => this.spotifySongSelected(true)}>
          {this.state.selectingSong && <SpotifySongSelect selectSong={this.spotifySongSelected} />}
        </Modal>

        <Row>
          <Col xs={12}>
            <p id="createaquiz">Create a Quiz</p>
          </Col>
          <Col sm={3}>
            <Form>

              <Form.Group controlId="CreateForm.QuizName">
                <Form.Label>Enter quiz name</Form.Label>
                <Form.Control type="text" placeholder="Quiz name..." onClick={(e) => this.handleQuizChange(e, 'name')} />
              </Form.Group>

              <Form.Group controlId="CreateForm.QuizAuthor">
                <Form.Label>Enter author name</Form.Label>
                <Form.Control type="text" defaultValue={this.spotifyName} placeholder="Author name..." onClick={(e) => this.handleQuizChange(e, 'author')} />
              </Form.Group>

              <Form.Group controlId="CreateForm.Language">
                <Form.Label>Enter quiz name</Form.Label>
                <Form.Control as="select" onClick={(e) => this.handleQuizChange(e, 'lang')}>
                  <option value="">Any language</option>
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

              <Button variant="primary" size="lg" className="AddButton" onClick={this.addQuestion} >
                <span>Add question</span>
              </Button>

            </Form>
          </Col>

          <Col>
            <div className="questionList">
              {this.questionList.map((val, idx) => {
                return (

                  <div key={idx}>
                    <Row>

                      <Col>
                        <Form.Group id="vline">
                          <Form.Control type="text" placeholder="Question" onChange={(e) => this.handleQuestionChange(e, idx, 'question')} />
                          <Form.Control type="text" id={`${idx}`} placeholder="Song" onFocus={(e) => this.spotifySongSelection(e)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Control type="text" id="correct" placeholder="Correct answer" onChange={(e) => this.handleQuestionChange(e, idx, 'correct')} />
                          <Form.Control type="text" className="Wrong" placeholder="Wrong answer 1" onChange={(e) => this.handleQuestionChange(e, idx, 'false', 0)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Control type="text" className="Wrong" placeholder="Wrong answer 2" onChange={(e) => this.handleQuestionChange(e, idx, 'false', 1)} />
                          <Form.Control type="text" className="Wrong" placeholder="Wrong answer 3" onChange={(e) => this.handleQuestionChange(e, idx, 'false', 2)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <Button className="DeleteButton" size="lg" onClick={this.deleteQuestion}><i className="fa fa-trash"></i></Button>
                      </Col>

                    </Row>
                  </div>
                )
              })
              }</div>
            <div className="Confirm" >
              <Button variant="primary" size="lg" className="ConfirmButton" onClick={(e) => this.handleSubmit(e)} block>
                <span>Confirm</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }


}

export default compose(withSpotify, withFirebase)(CreateQuiz);





