import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';

import { compose } from 'recompose';
import { withSpotify } from '../Spotify';
import { withFirebase } from '../Firebase';

import './Question.scss';

class Question extends Component {
	constructor(props) {
		super(props);

		this.points = 0;
		this.songList = [];

		this.state = {
			questionnr: 0,
			answerSelected: '', 
			correctAnswer: -1,
			options: ['', '', '', ''],
			track: []
			
		};
	}

	handleAnswer(answer) {
		if (this.state.answerSelected === "") {
			this.setState({ answerSelected: answer })
		}
	}

	checkAnswer(option) {
		if (option === this.state.answerSelected) {
			if (option === this.state.correctAnswer) {
				this.points += 1; 
				return "selectedCorrect"; 
			} 
			return "selectedWrong"; 
		}

		else if (option === this.state.correctAnswer && this.state.answerSelected !== '') return "correctAnswer"; 
		else if (this.state.answerSelected !== '') return "remainingAnswers disabled"; 
		return ""; 
	}

	getQuestion() {
		this.props.firebase.getQuestionFromQuiz(this.props.quizid, this.props.questions[this.state.questionnr]).then(response => {
			this.setState({
				questionnr: this.state.questionnr + 1,
				answerSelected: '',
				question: response.question,
				options: response.options,
				correctAnswer: response.correctAnswer
			})
			return response.track;
		}).then(track => {
			this.props.spotify.playAudio(track);
			this.props.spotify.getTrack(track).then(nowPlaying => {
				this.setState({ albumCover: nowPlaying.album.images[0].url })
				
				var artistString = nowPlaying.artists.map(artist => `${artist.name}`).join(', ');

				this.songList.push({songName: nowPlaying.name, artist: artistString})
			})
		})
	}

	componentDidMount() {
		this.getQuestion();
	}

	componentWillUnmount() {
		if (this.props.spotify.audio) this.props.spotify.audio.pause();
	}

	render() {
			return (
				<div className="Question">
					<h2>{this.state.questionnr !== 0 && `Question nr. ${this.state.questionnr}`}</h2>
					<h1>{this.state.question}</h1>
					<br/>
					
					<Row>
						<Col xs={12} sm={6}>
							<Row id="tictacRow" className="justify-content-center">
								<Card id="recordPlayer">
									<Card.Img id="record" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Vinyl_record.svg" alt="Record base" />
									<Card.ImgOverlay>
										<img id="recordLines" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Vinyl_disc_icon.svg" alt="Record lines"/>
									</Card.ImgOverlay>
									{this.state.answerSelected !== ''
										? <Card.ImgOverlay className="albumCover">
												<img id="album" className="rounded-circle" src={this.state.albumCover} alt="Album cover"/>
											</Card.ImgOverlay>
										: <div/>
									}
									<Card.ImgOverlay>
										<img id="recordHole" src="https://upload.wikimedia.org/wikipedia/commons/1/11/BlackDot.svg" alt=""/>
									</Card.ImgOverlay>
								</Card>
							</Row>
						</Col>

						<Col xs={12} sm={6} id="altCol">
							<br/>
							<Row>
								<Col xs={6}>
									<Button className={this.checkAnswer(0)} onClick={() => this.handleAnswer(0)} variant="warning" size="lg" block>{this.state.options[0]}</Button>
									{/* <Button className={this.checkAnswer(0)} onClick={() => this.handleAnswer(0)} id="opt1" size="lg" block>{this.state.options[0]}</Button> */}
								</Col><Col xs={6}>
									<Button className={this.checkAnswer(1)} onClick={() => this.handleAnswer(1)} variant="primary" size="lg" block>{this.state.options[1]}</Button>
								</Col>
							</Row>

							<Row>
								<Col xs={6}>
									<Button className={this.checkAnswer(2)} onClick={() => this.handleAnswer(2)} variant="info" size="lg" block>{this.state.options[2]}</Button>
								</Col><Col xs={6}>
									<Button className={this.checkAnswer(3)} onClick={() => this.handleAnswer(3)} variant="light" size="lg" block>{this.state.options[3]}</Button>
								</Col>
							</Row>

							{this.state.answerSelected === ''
								? <div/>
								: [this.state.questionnr !== this.props.questions.length
										? <Button key="next" id="nextQuestion" onClick={() => this.getQuestion()} variant="light" size="lg" block>Next question</Button>
										: <Button key="finish" id="checkResults" onClick={() => this.props.finishedQuiz(true, this.points, this.songList)} variant="light" size="lg" block>Check results</Button>
									]
							}
							<br/>
						</Col>

					</Row>
					<br/><br/>
			</div>
		);
	}
}

export default compose(withSpotify,withFirebase,)(Question); 