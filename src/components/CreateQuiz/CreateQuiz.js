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
    //constructor(props) {
      //super(props);

        state = {
        musicquiz: [{question:"", answer:""}],
        }
    }
      
render() {
    let {musicquiz} = this.state    
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
    <Form.Control type="text" placeholder="Question" />
</Form.Group>
  

{/* LÄGGA TILL EN KNAPP SOM LÄGGER TILL FRÅGA */}

<Button variant="primary" size="lg" className="AddButton" onClick={() => this.handleclick()}>
    <span>Add question</span>
</Button>
{
          musicquiz.map((val, idx)=> {
            let questionId = `question-${idx}`, answerId = `answer-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={questionId}>{`Question #${idx + 1}`}</label>
                <input
                  type="text"
                  name={questionId}
                  data-id={idx}
                  id={questionId}
                  className="question"
                />
                <label htmlFor={answerId}>Answer</label>
                <input
                  type="text"
                  name={answerId}
                  data-id={idx}
                  id={answerId}
                  className="answer"
                />
              </div>
            )
          })
        }

</Form>
          </Col>
          <Col md={2}>
          
<Form.Group controlId="CreateForm.QuizName">
    <Form.Control type="text" placeholder="Quiz name" />
</Form.Group>

<Form.Group controlId="CreateForm.QuizName">
    <Form.Control type="text" placeholder="Song" />
</Form.Group>

</Col>
<Col md={2}>

<Form.Group controlId="CreateForm.QuizName">
    <Form.Control type="text" placeholder="Correct answer" />
</Form.Group>

<Form.Group controlId="CreateForm.QuizName">
    <Form.Control type="text" placeholder="Wrong answer 1" />
</Form.Group>

</Col>
<Col md={2}>

<Form.Group controlId="CreateForm.QuizName">
    <Form.Control type="text" placeholder="Wrong answer 2" />
</Form.Group>

<Form.Group controlId="CreateForm.QuizName">
    <Form.Control type="text" placeholder="Wrong answer 3" />
</Form.Group>

</Col>
<Col md={2}>

        
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
  
  class Foo extends Component {
    // Note: this syntax is experimental and not standardized yet.
    handleClick = () => {
      console.log('Click happened');
    }
    render() {
      return <button onClick={this.handleClick}>Add Question</button>;
    }
  } 
  export default withFirebase(CreateQuiz);



   