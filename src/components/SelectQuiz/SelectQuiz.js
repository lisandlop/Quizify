import React, { Component } from 'react';
import { compose, renderComponent } from 'recompose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';
import './SelectQuiz.scss'


class SelectQuiz extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
      };
    }
  
    componentDidMount() {
      this.setState({ loading: true });
      this.props.firebase.getAllQuizzes().then((response) => {
        // this.setState({
        //   name: response.
        // })
        console.log(response)
      })
    }

  
    render() {
  
      return (
        <div>
          <p id="selectaquiz">Select a Quiz</p>
    
  <Container>
    <Row>
    <Col sm={3}>
    <Form>
  <Form.Group controlId="exampleForm.Quiz">
    <Form.Label>Search quiz name</Form.Label>
    <input type="text" className="form-control mr-sm-3" placeholder={"Enter song"}/>

  </Form.Group>

  <Form.Group controlId="exampleForm.Author">
    <Form.Label>Search author of quiz</Form.Label>
    <Form.Control type="text" placeholder="Q_master" />
  
    <Col sm={6}>
    <th>Quiz Name</th>
    </Col>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.TypeOfMusic">
    <Form.Label>Search by genre</Form.Label>
    <Form.Control as="select">
      <option>Julmusik</option>
      <option>Sommarvisor</option>
      <option>Melodifestivalen</option>
      <option>Ungdomsmusik</option>
      <option>Barnsånger</option>
    </Form.Control>
  </Form.Group>

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
  export default withFirebase(SelectQuiz);
