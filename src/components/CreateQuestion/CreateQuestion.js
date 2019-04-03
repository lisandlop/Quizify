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


class CreateQuestion extends Component {
    constructor(props) {
      super(props);
      
    }
      
render() {
    
    return (
        <div>

  <Container>
    <Row>
    <Col sm={6}>
    <Form>

{/* LÄGGA TILL EN KNAPP SOM LÄGGER TILL FRÅGA */}

<Form.Group controlId="CreateForm.Questions">
    <Form.Label>Enter quiz questions</Form.Label>
   {/* <Form.Control type="text" placeholder="Question 1" />
    <Form.Control type="text" placeholder="Question 2" />
    <Form.Control type="text" placeholder="Question 3" />
    <Form.Control type="text" placeholder="Question 4" />*/}
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
  export default withFirebase(CreateQuestion);

   