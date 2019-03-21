import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';

import './Question.scss';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: 0,
            answerSelected: "", 
            correctAnswer: "C"
        };
    }

    handleAnswer(answer) {
        if (this.state.answerSelected == "") {
            this.setState({ answerSelected: answer })
        }
        console.log(answer);
    }

    checkAnswer(option) {
        if (option == this.state.answerSelected) {
            if (option == this.state.correctAnswer) return "selectedCorrect"; 
            return "selectedWrong"; 
        }

        else if (option == this.state.correctAnswer && this.state.answerSelected != "") return "correctAnswer"; 
        else if (this.state.answerSelected) return "remainingAnswers disabled"; 
        return ""; 

    }

    render() {
        return (
            <div className="Question">
                <h2>Question nr{this.question}</h2>
                <h1>Random question?</h1>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row id="tictacRow">
                            <Card id="recordPlayer">
                                <Card.Img id="record" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Vinyl_record.svg" alt="Record base" />
                                <Card.ImgOverlay>
                                    <img id="recordLines" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Vinyl_disc_icon.svg" alt="Record lines"/>
                                </Card.ImgOverlay>
                                <Card.ImgOverlay>
                                    <img id="recordHole" src="https://upload.wikimedia.org/wikipedia/commons/1/11/BlackDot.svg" alt=""/>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} id="altCol">
                        <br/>
                        <Row>
                            <Button className={this.checkAnswer ("A")} onClick={() => this.handleAnswer("A") } id="altButtons" variant="warning" size="lg">Random answer</Button>
                            <Button className={this.checkAnswer ("B")} onClick={() => this.handleAnswer("B") } id="altButtons" variant="primary" size="lg">Random answer</Button>
                        </Row>
                        <Row>
                            <Button className={this.checkAnswer ("C")} onClick={() => this.handleAnswer("C") } id="altButtons" variant="info" size="lg">Random answer</Button>
                            <Button className={this.checkAnswer ("D")} onClick={() => this.handleAnswer("D") } id="altButtons" variant="light" size="lg">Random answer</Button>
                        </Row>
                        {this.state.answerSelected == "" ? (<div/>) : (
                            <Button id="nextQuestion" variant="light" size="lg" block>Next question</Button>
                        ) }
                        <br/>
                    </Col>
                </Row>
                <br/><br/>
            </div>
        );
    }
}

export default Question; 