import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FlagIcon from '../FlagIcon/FlagIcon.js';

import './SelectQuiz.scss'

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class SelectQuiz extends Component {
    constructor(props) {
      super(props);
      
      let url = new URL(document.URL);

      this.quizName = url.searchParams.get("quizName") == null ? '' : url.searchParams.get("quizName");
      this.filter = url.searchParams.get("quizAuthor") == null ? '' : url.searchParams.get("quizAuthor");
      this.filter = url.searchParams.get("quizLanguage") == null ? '' : url.searchParams.get("quizLanguage");
  
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
        console.log("NameChange")
		this.quizname = e.target.value
		this.updated = true
  }
  
    handleAuthorChange = (e) => {
		this.quizAuthor = e.target.value
		this.updated = true
	}

    handleLanguageChange = (e) => {
        console.log('Language change')
        this.quizLanguage = e.target.value
        console.log(this.quizLanguage)
		this.updated = true
    }
    
	handleSubmit = (e) => {
        alert("Hit kom jag!")
        e.preventDefault()

    //Update URL if new query
	    if (this.updated) {
            console.log('Här nu')
            let url = '/search?'
            
            if (this.quizName!== '') {url += 'name='+ this.quizName}
            if (this.quizAuthor!== '') {url += 'name='+ this.quizAuthor}
            if (this.quizLanguage!== '') {url += 'name='+ this.quizLanguage}

			//Push new URL and re-render page
			window.history.pushState({}, '', url)
			this.updated = false;
			this.setState({updated: true})
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
                
                <form onSubmit={this.handleSubmit}>
                {/* <Form> */}

                  <Form.Group role="form" controlId="quizName">
                    <input type="text" className="form-control mr-sm-3" defaultValue={this.quizName} onChange={this.handleNameChange} placeholder="Quiz name"/>
                  </Form.Group>

                  <Form.Group controlId="quizAuthor">
                    <Form.Label>Search author of quiz</Form.Label>
                    <Form.Control type="text" onChange={this.handleAuthorChange} placeholder="Author" />
                  </Form.Group>

                  <Form.Group role="form" controlId="quizLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control as="select" onChange={this.handleLanguageChange}>
                      <option value="All">Any language</option>
                      <option disabled>-----------</option>
                      <option value="DK">Dansk</option>
                      <option value="GB">English</option>
                      <option value="ES">Español</option>
                      <option value="FR">Français</option>
                      <option value="FI">Íslenska</option>
                      <option value="DE">Deutsch</option>
                      <option value="NO">Norsk</option>
                      <option value="SV">Svenska</option>
                      <option value="FI">Soumi</option>
                    </Form.Control> 
                  </Form.Group>
                
                {/* </Form> */}
                </form>
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