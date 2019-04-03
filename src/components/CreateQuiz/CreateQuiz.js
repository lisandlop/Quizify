import React, { Component } from 'react';
import { compose, renderComponent } from 'recompose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';
import './CreateQuiz.scss';
//import './CreateQuestion.js';


class CreateQuiz extends Component {
    constructor(props) {
      super(props);
      
    }
      
render() {
    
    return (
        <div>
          <p id="selectaquiz">Create a Quiz</p>
    
  <Container>
    <Row>
    <Col sm={6}>
    <Form>

<Form.Group controlId="CreateForm.Author">
    <Form.Label>Enter author name</Form.Label>
    <input type="text" className="form-control mr-sm-3" placeholder={"Author name"}/>
</Form.Group>

<Form.Group controlId="CreateForm.QuizName">
    <Form.Label>Enter quiz name</Form.Label>
    <Form.Control type="text" placeholder="Quiz name" />
</Form.Group>
  

{/* LÄGGA TILL EN KNAPP SOM LÄGGER TILL FRÅGA */}

<Button variant="primary" size="lg" className="AddButton" onClick={() => this.props.CreateQuestion}>
    <span>Add question</span>
</Button>

</Form>
          </Col>
          <Col md="auto">
          <Table striped bordered hover>
          

  <thead>
    <tr>
      <th>#</th>
      <th>Quiz Name</th>
      <th>Author Name</th>
      <th>Genre</th>
    </tr>
    {/* <tr>{allQuizzes}</tr> */}
  </thead>


  </Table>
          </Col>
        </Row>
    <Row md={12}>
      <Col md={3}>
        <div className = "Confirm" >
          <Button variant="primary" size="lg" className="ConfirmButton" onClick={() => this.props.SelectQuiz(true)}>
            <span>Confirm</span>
          </Button>
        </div>
      </Col>
    </Row>
        </Container></div>

      ); 
    }
  }
  export default withFirebase(CreateQuiz);

   