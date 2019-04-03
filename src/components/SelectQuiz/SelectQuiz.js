import React, { Component } from 'react';
import { compose, renderComponent } from 'recompose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SelectQuiz.scss'
import { Function } from 'core-js';


class SelectQuiz extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        questionNr: 0, 
        quizName: '', 
        quizAuthor: '',
        questions: []
      };
    }
  
    componentDidMount() {
      this.setState({ loading: true });
      this.props.firebase.getAllQuizzes().then((response) => {
        this.setState({
          questions: response
          // questionNr: this.state.questionNr + 1,
          // quizName: response.name, 
          // quizAuthor: response.author
        })
        console.log(response)
      })
    }

    render() {

      var questionList = this.state.questions.map(function(question){
        return(<tr>
          <td>1</td>
          <td>Hello there</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>)
      }); 
      // // <li key={i}>Test</li>); 
      // <li> {question} </li>); 

  
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

              {/* <Col md="auto" className="quizList"> */}
              <Col xs={12} sm={8} className="quizList">
                <Table striped bordered hover>

                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Quiz Name</th>
                      <th>Author Name</th>
                      <th>Nr of q</th>
                    </tr>
                    {/* <tr>{allQuizzes}</tr> */}
                  </thead>

                  <tbody>
                    {questionList}
                  </tbody>

                </Table>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card bg="info" text="white" style={{ width: '18rem' }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>

            <Row md={12}>
              <Col>

                <div className = "Confirm" >
                  <Button variant="primary" size="lg" className="ConfirmButton" onClick={() => this.props.SelectQuiz(true)}>
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
