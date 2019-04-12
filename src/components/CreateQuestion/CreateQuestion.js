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
import './CreateQuiz.js';


class CreateQuestion extends React.Component { 
  
  state = {
    musicquiz: [{question:"", answer:""}],
  }
    
    handleChange = (e) => {
      if (["question", "answer"].includes(e.target.className)) {
        let musicquiz = [...this.state.musicquiz]
        musicquiz[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({musicquiz}, () => console.log(this.state.musicquiz))
      } else {
        this.setState({ [e.target.name]: e.target.value})
      }
    }

  addQuestion = (e) => {
    this.setState((prevState) => ({
      musicquiz: [...prevState.musicquiz, {question:"", answer:""}],
    }));
  }

handleSubmit = (e) => { e.preventDefault() }
render() { 
  let {musicquiz} = this.state    
  return (

  <div>
    
  <Container>
    <Row>
    
    musicquiz.map((val, idx)=> {
      let questionId = `question-${idx}`, answerId = `answer-${idx}`
      return (

<div>
<Row>

  <Col auto> 
    <Form.Group controlId="CreateForm.QuizName" id="vline">
      <Form.Control type="text" placeholder="Question" />
      <Form.Control type="text" placeholder="Song" />
    </Form.Group>
  </Col>

  <Col auto> 
    <Form.Group controlId="CreateForm.QuizName">
      <Form.Control type="text" id="correct" placeholder="Correct answer" />
      <Form.Control type="text" className="Wrong" placeholder="Wrong answer 1" />
    </Form.Group>
  </Col>

  <Col auto>
    <Form.Group controlId="CreateForm.QuizName">
      <Form.Control type="text" className="Wrong" placeholder="Wrong answer 2" />
      <Form.Control type="text" className="Wrong" placeholder="Wrong answer 3" />
    </Form.Group>  
  </Col>

</Row>
</div>

      )
    })
  }

}
</Row>
</Container>
</div>
  
} 

export default withFirebase(CreateQuestion);
  
  
  
 /*</Row> /*constructor(props) {
      super(props);
      
    }
      
render() {
    
    return (
        <div>

  <Container>
    <Row>
    <Col sm={6}>
    <Form> 

/* LÄGGA TILL EN KNAPP SOM LÄGGER TILL FRÅGA */

/*

<Form.Group controlId="CreateForm.Questions">
    <Form.Label>Enter quiz questions</Form.Label>
   {/* <Form.Control type="text" placeholder="Question 1" />
    <Form.Control type="text" placeholder="Question 2" />
    <Form.Control type="text" placeholder="Question 3" />
    <Form.Control type="text" placeholder="Question 4" />*/

/*
</Form.Group>

</Form>
          </Col>
          <Col md="auto">
          <Table striped bordered hover>

  </Table>
          </Col>
        </Row>
        </Container>
        </div>

      ); 
    }
  }
*/




   