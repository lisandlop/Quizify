import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';

import SpotifySongSelect from '../SpotifySongSelect/SpotifySongSelect';

import './CreateQuiz.scss';

//import './CreateQuestion.js';


class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      musicquiz: [{ question: "", answer: "" }],
      selectingSong: false
    }
  }
  

  handleChange = (e) => {
    if (["question", "answer"].includes(e.target.className)) {
      let musicquiz = [...this.state.musicquiz]
      musicquiz[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ musicquiz }, () => console.log(this.state.musicquiz))
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  addQuestion = (e) => {
    this.setState((prevState) => ({
      musicquiz: [...prevState.musicquiz, { question: "", answer: "" }],
    }));
  }

  handleSubmit = (e) => { e.preventDefault() }

  spotifySongSelection = (e) => {
    e.target.blur();
    this.setState({ selectingSong: true })
  }

  spotifySongSelected = () => {
    this.setState({ selectingSong: false })
  }
  
  render() {
    let { musicquiz } = this.state
    return (

      <div>
        <SpotifySongSelect show={this.state.selectingSong} selectSong={this.spotifySongSelected}/>

        <p id="selectaquiz">Create a Quiz</p>
        <Container>
          <Row>
            <Col sm={3}>
              <Form>

                <Form.Group controlId="CreateForm.Author">
                  <Form.Label>Enter author name</Form.Label>
                  <input type="text" className="form-control mr-sm-3" placeholder={"Author name"} />
                </Form.Group>

                <Form.Group controlId="CreateForm.QuizName">
                  <Form.Label>Enter quiz name</Form.Label>
                  <Form.Control type="text" placeholder="Question" />
                </Form.Group>

                <Button variant="primary" size="lg" className="AddButton" onClick={this.addQuestion} >
                  <span>Add question</span>
                </Button>

              </Form>
            </Col>

            <Col className="questionList">
            {
              musicquiz.map((val, idx) => {
                let questionId = `question-${idx}`, answerId = `answer-${idx}`
                return (

                  <div key={idx}>
                    <Row>

                      <Col>
                        <Form.Group id="vline">
                          <Form.Control type="text" placeholder="Question" />
                          <Form.Control type="text" placeholder="Song" onFocus={(e) => this.spotifySongSelection(e)}/>
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Control type="text" id="correct" placeholder="Correct answer" />
                          <Form.Control type="text" className="Wrong" placeholder="Wrong answer 1" />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Control type="text" className="Wrong" placeholder="Wrong answer 2" />
                          <Form.Control type="text" className="Wrong" placeholder="Wrong answer 3" />
                        </Form.Group>
                      </Col>

                    </Row>
                  </div>

                )
              })
            }
            </Col>

          </Row>

          <Row>
            <Col>
              <div className="Confirm" >
                <Button variant="primary" size="lg" className="ConfirmButton" onClick={() => this.props.SelectQuiz(true)}>
                  <span>Confirm</span>
                </Button>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

    );
  }


}

export default withFirebase(CreateQuiz);





