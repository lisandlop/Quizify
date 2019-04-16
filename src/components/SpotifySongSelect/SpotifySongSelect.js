import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { withSpotify } from '../Spotify';

import './SpotifySongSelect.scss';

class SpotifySongSelect extends Component {
  constructor(props) {
    super(props);

    this.song = '';
    this.artist = '';
    this.updated = false;

    this.state = {
      loading: false,
      songList: []
    }
  }

  handleSongChange = (e) => {
		this.song = e.target.value;
		this.updated = true;
  }
  
  handleArtistChange = (e) => {
		this.artist = e.target.value;
		this.updated = true;
	}

	handleSubmit = (e) => {
		e.preventDefault();

		//Update if new query
		if (this.updated) {
      
      //Preform API call
      let query = ''
      if (this.song !== '') { query += this.song; 
        if (this.artist !== '') query += ' '; }
      if (this.artist !== '') query += `artist:${this.artist}`;

      this.setState({ loading: true })
      this.props.spotify.searchTracks(query)
        .then(data => {
          var songList = data.tracks.items.map(song => {
            return song;
          });
          this.updated = false;

          this.setState({ songList: songList, loading: false });
        })
		}
  }

  playPause(trackID) {
    if (trackID === this.state.playing) {
      this.props.spotify.audio.pause()
      this.setState({ playing: null });
    }
    else {
      this.props.spotify.playAudio(trackID)
      this.setState({ playing: trackID });
    }
  }

  componentWillUnmount() {
    if (this.props.spotify.audio) this.props.spotify.audio.pause();
  }

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Select a song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Control placeholder="Search song" onChange={this.handleSongChange}/>
              </Col>
              <Col>
                <Form.Control placeholder="Search artist" onChange={this.handleArtistChange}/>
              </Col>
              <Col xs={2}>
                <Button variant="primary" type="submit" block>Search</Button>
              </Col>
            </Row>
          </Form>
          <CardDeck>
            {this.state.loading
              ? <h1>Loading...</h1>
              : this.state.songList.map((song, k) => (
                <Card className="songPreview" key={k}>
                  <Card.Img variant="top" src={song.album.images[0].url}/>
                  <Card.ImgOverlay className="justify-content-center" onClick={() => this.playPause(song.id)}>
                    {this.state.playing === song.id
                      ? <FontAwesomeIcon size="3x" icon={faPauseCircle}/>
                      : <FontAwesomeIcon size="3x" icon={faPlayCircle}/>
                    }
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Text>{song.name}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={() => this.props.selectSong(false, song)} block>Select</Button>
                  </Card.Footer>
                </Card>
            ))}
          </CardDeck>
        </Modal.Body>
      </div>
    );
  }
}

export default withSpotify(SpotifySongSelect);
