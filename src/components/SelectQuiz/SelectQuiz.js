import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FlagIcon from '../FlagIcon/FlagIcon.js';

import './SelectQuiz.scss'

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class SelectQuiz extends Component {
    constructor(props) {
      super(props);
      
      let url = new URL(document.URL);

      this.quizName = url.searchParams.get("name") == null ? '' : url.searchParams.get("name");
      this.quizAuthor = url.searchParams.get("author") == null ? '' : url.searchParams.get("author");
      this.quizLanguage = url.searchParams.get("lang") == null ? '' : url.searchParams.get("lang");

      this.state = {
        loading: true,
        quizzes: [],
        filtered: [],
      };

      this.updated = false;
    }
    
  componentDidMount() {
    this.props.firebase.getAllQuizzes().then((response) => {
      this.setState({
        quizzes: response,
        loading: false
      })
    })
  }

  handleNameChange = (e) => {
		this.quizName = e.target.value;
		this.updated = true;
  }
  
  handleAuthorChange = (e) => {
		this.quizAuthor = e.target.value;
		this.updated = true;
	}

  handleLanguageChange = (e) => {
    this.quizLanguage = e.target.value;
    this.updated = true;
  }
    
	handleSubmit = (e) => {
    e.preventDefault()

      //Update URL if new query
	    if (this.updated) {
        let url = ROUTES.SELECT + '?';
        
        if (this.quizName !== '') url += 'name='+ this.quizName;
        if (this.quizAuthor !== '') {
          if (url[url.length -1] !== '?') url += '&';
          url += 'author='+ this.quizAuthor;
        }
        if (this.quizLanguage !== '') {
          if (url[url.length -1] !== '?') url += '&';
          url += 'lang='+ this.quizLanguage;
        }

        //Push new URL and re-render page
        window.history.pushState({}, '', url)
        this.updated = false;
        this.setState({ reRender: true });
      }
    }


    render() {
      return (
        <Container>
            <Row>
              <Col xs={12}>
                <p id="selectaquiz">Select a Quiz</p>
              </Col>
              <Col xs={12} sm={4}>
                
                <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId="quizName">
                    <Form.Label>Quiz name:</Form.Label>
                    <Form.Control type="text" defaultValue={this.quizName} onChange={this.handleNameChange} placeholder="Quiz name"/>
                  </Form.Group>

                  <Form.Group controlId="quizAuthor">
                    <Form.Label>Quiz author:</Form.Label>
                    <Form.Control type="text" defaultValue={this.quizAuthor} onChange={this.handleAuthorChange} placeholder="Author" />
                  </Form.Group>

                  <Form.Group controlId="quizLanguage">
                    <Form.Label>Language of questions:</Form.Label>
                    <Form.Control as="select" defaultValue={this.quizLanguage} onChange={this.handleLanguageChange}>
                      <option value="">Any language</option>
                      <option disabled>-----------</option>
                      <option value="DK">Dansk</option>
                      <option value="GB">English</option>
                      <option value="ES">Español</option>
                      <option value="FR">Français</option>
                      <option value="IS">Íslenska</option>
                      <option value="DE">Deutsch</option>
                      <option value="NO">Norsk</option>
                      <option value="SV">Svenska</option>
                      <option value="FI">Soumi</option>
                    </Form.Control> 
                  </Form.Group>

                  <Button variant="primary" type="submit" block>Search</Button>
                
                </Form>
              </Col>


              <Col xs={12} sm={8} className="quizList">

                {this.state.loading
                ? <h1>Loading...</h1>
                : this.state.quizzes.map((quiz, k) => (
                  <Link key={k} to={`${ROUTES.PLAY}/${quiz.id}`}>
                    <Card bg="info" text="white" style={{ marginBottom: '20px' }}>
                      <Card.ImgOverlay>
                        <FlagIcon code={quiz.language.toLowerCase()} size={'3x'}/>
                      </Card.ImgOverlay>
                      <Card.Body>
                        <Card.Title>{quiz.name}</Card.Title>
                        <Card.Text>{`By: ${quiz.author}`}</Card.Text>
                      </Card.Body>
                      <Card.Footer style={{ fontStyle: 'italic' }}>
                        {`Quiz id: ${quiz.id}`}
                      </Card.Footer>
                    </Card>
                  </Link>
                ))}

              </Col>
            </Row>
            <br /><br />
        </Container>
      ); 
    }
  }
  export default withFirebase(SelectQuiz);