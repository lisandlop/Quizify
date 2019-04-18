import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import SpotifySongSelect from '../SpotifySongSelect/SpotifySongSelect';

import './CreateQuiz.scss';

//import './CreateQuestion.js';


class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.musicQuiz = [{ question: "", answer: "", falseOptions: [], track: "" }];

    this.state = {
      selectingSong: false
    }
  }
  
  handleChange = (e, idx, type, id = null) => {
    if (type == 'question') {
      this.musicQuiz[idx].question = e.target.value;
    }
    else if (type == 'correct') {
      this.musicQuiz[idx].answer = e.target.value;
    }
    else if (type == 'false') {
      this.musicQuiz[idx].falseOptions[id] = e.target.value;
    }
  }

  addQuestion = (e) => {
    this.musicQuiz.push({ question: "", answer: "", falseOptions: [], track: "" });
    this.setState({ reRender: true });
  }

  handleSubmit = (e) => { 
    e.preventDefault() 
    this.props.firebase.createNewQuiz(this.state.musicquiz);
  }

  spotifySongSelection = (e) => {
    e.target.blur();
    this.setState({ selectingSong: true, target: e.target })
  }

  spotifySongSelected = (cancelled, track) => {
    if (!cancelled) {
      document.getElementById(this.state.target.id).value = track.name;
      this.musicQuiz[this.state.target.id].track = track.id;
    }
    this.setState({ selectingSong: false, target: null })
  }

  deleteQuestion = (e) => {
    console.log("deleteyay")
    //addQuestion.remove(this.props.musicquiz);

  }
  
  render() {
    return (
      <Container>
        <Modal className="SpotifySongSelect" size="xl" show={this.state.selectingSong} onHide={() => this.spotifySongSelected(true)}>
          {this.state.selectingSong && <SpotifySongSelect selectSong={this.spotifySongSelected}/>}
        </Modal>

        <Row>
          <Col xs={12}>
            <p id="createaquiz">Create a Quiz</p>
          </Col>
          <Col sm={3}>
            <Form>

              <Form.Group controlId="CreateForm.Author">
                <Form.Label>Enter author name</Form.Label>
                <input type="text" className="form-control mr-sm-3" placeholder={"Author name..."} />
              </Form.Group>

              <Form.Group controlId="CreateForm.QuizName">
                <Form.Label>Enter quiz name</Form.Label>
                <Form.Control type="text" placeholder="Quiz name..." />
              </Form.Group>

              <Button variant="primary" size="lg" className="AddButton" onClick={this.addQuestion} >
                <span>Add question</span>
              </Button>

            </Form>
          </Col>

          <Col>
            <div className="questionList">
            {this.musicQuiz.map((val, idx) => {
            // let questionId = `question-${idx}`, answerId = `answer-${idx}`
            return (

              <div key={idx}>
                <Row>

                  <Col>
                    <Form.Group id="vline">
                      <Form.Control type="text" placeholder="Question" onChange={(e) => this.handleChange(e, idx, 'question')}/>
                      <Form.Control type="text" id={`${idx}`} placeholder="Song" onFocus={(e) => this.spotifySongSelection(e)}/>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Control type="text" id="correct" placeholder="Correct answer" onChange={(e) => this.handleChange(e, idx, 'correct')}/>
                      <Form.Control type="text" className="Wrong" placeholder="Wrong answer 1" onChange={(e) => this.handleChange(e, idx, 'false', 0)}/>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Control type="text" className="Wrong" placeholder="Wrong answer 2" onChange={(e) => this.handleChange(e, idx, 'false', 1)}/>
                      <Form.Control type="text" className="Wrong" placeholder="Wrong answer 3" onChange={(e) => this.handleChange(e, idx, 'false', 2)}/>
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

export default withFirebase(CreateQuiz);





