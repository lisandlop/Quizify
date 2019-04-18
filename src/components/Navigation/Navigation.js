import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import './Navigation.scss';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
	<div id="navigation">

		<Navbar className="justify-content-center" bg="dark" variant="dark">
		{/* <Navbar className="headerBar justify-content-center"> */}
			<Navbar.Brand>
				<FontAwesomeIcon size="2x" icon={faSpotify} style={{color: 'lightgreen'}}/>
				<FontAwesomeIcon size="2x" icon={faQuestion} style={{color: 'lightgreen'}}/>
			</Navbar.Brand>
			<Navbar.Brand id="quizifyButton" href={ROUTES.LANDING}>Quizify</Navbar.Brand>
			<Navbar.Brand>
				<FontAwesomeIcon size="2x" icon={faQuestion} style={{color: 'lightgreen'}}/>
				<FontAwesomeIcon size="2x" icon={faSpotify} style={{color: 'lightgreen'}}/>
			</Navbar.Brand>
		</Navbar>
	</div>
);

export default Navigation;