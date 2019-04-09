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
			<Navbar.Brand>
				<FontAwesomeIcon size="2x" icon={faSpotify}/>
				<FontAwesomeIcon size="2x" icon={faQuestion}/>
			</Navbar.Brand>
			<Navbar.Brand href={ROUTES.LANDING}>Quizify</Navbar.Brand>
			<Navbar.Brand>
				<FontAwesomeIcon size="2x" icon={faQuestion}/>
				<FontAwesomeIcon size="2x" icon={faSpotify}/>
			</Navbar.Brand>
		</Navbar>
	</div>
);

export default Navigation;