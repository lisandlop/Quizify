import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import './Navigation.scss';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div id="navigation">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <FontAwesomeIcon size="2x" icon={faSpotify}/>
                <FontAwesomeIcon size="2x" icon={faQuestion}/>
            </Navbar.Brand>
            <Navbar.Brand>Quizify</Navbar.Brand>

            <Nav>
                <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
                <Nav.Link href={ROUTES.SELECT}>SelectQuiz</Nav.Link>
                <Nav.Link href={ROUTES.PLAY + '/BaFGpkf52zTNGOwN7pAq'}>PlayQuiz</Nav.Link>
                <Nav.Link href={ROUTES.CREATE}>CreateQuiz</Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default Navigation;