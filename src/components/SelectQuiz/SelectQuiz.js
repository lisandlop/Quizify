import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SelectQuiz.scss'

import { withFirebase } from '../Firebase';

class SelectQuiz extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: true,
        quizzes: []
      };
    }
  
    componentDidMount() {
      this.props.firebase.getAllQuizzes().then((response) => {
        this.setState({
          quizzes: response,
          loading: false
        })
      })
    }

    render() {
      return (
        <div>
          <p id="selectaquiz">Select a Quiz</p>

          <Container>
            <Row>
              {/* <Col sm={3}> */}
              <Col xs={12} sm={4}>
                <Form>

                  <Form.Group controlId="exampleForm.Quiz">
                    <Form.Label>Search quiz name</Form.Label>
                    <input type="text" className="form-control mr-sm-3" placeholder={"Quiz name"}/>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.Author">
                    <Form.Label>Search author of quiz</Form.Label>
                    <Form.Control type="text" placeholder="Q_master" />
                  </Form.Group>
                </Form>
              </Col>


              <Col xs={12} sm={8} className="quizList">

                {this.state.quizzes.map((quiz, k) => (
                  <Card key={k} bg="info" text="white" style={{ marginBottom: '20px' }}>
                    <Card.Body>
                      <Card.Title>{quiz.name}</Card.Title>
                      <Card.Text>{`By: ${quiz.author}`}</Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ fontStyle: 'italic' }}>{`Quiz id: ${quiz.id}`}</Card.Footer>
                  </Card>
                ))}

              </Col>
            </Row>

            
                
            

            <Row md={12}>
              <Col>

                <div className = "Confirm" >
                  <Button variant="primary" size="lg" className="ConfirmButton">
                    <span>Confirm</span>
                  </Button>
                </div>

              </Col>
            </Row>
            <br /><br />

          </Container>
          </div>

      ); 
    }
  }
  export default withFirebase(SelectQuiz);
