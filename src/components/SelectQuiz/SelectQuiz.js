import React, { Component } from 'react';
import { compose, renderComponent } from 'recompose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { withFirebase } from '../Firebase';


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
          <input type="text" className="form-control mr-sm-3" placeholder={"Enter song"}/>
        
        <Container>
          <Row>
          <Col sm={3}>
          <Form>
  <Form.Group controlId="exampleForm.Author">
    <Form.Label>Author of quiz</Form.Label>
    <Form.Control type="text" placeholder="Q_master" />
  </Form.Group>
  <Form.Group controlId="exampleForm.TypeOfMusic">
    <Form.Label>Type of music</Form.Label>
    <Form.Control as="select">
      <option>Julmusik</option>
      <option>Sommarvisor</option>
      <option>Melodifestivalen</option>
      <option>Ungdomsmusik</option>
      <option>Barnsånger</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
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
    </tr>
    <tr>{allQuizzes}</tr>
  </thead>
  </Table>
          </Col>
        </Row>
        </Container></div>
      );
    }
  }
  export default withFirebase(SelectQuiz);