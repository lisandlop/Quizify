import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedhat } from '@fortawesome/free-brands-svg-icons';

import './Navigation.scss';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div id="navigation">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <FontAwesomeIcon size="2x" icon={faRedhat}/>
            </Navbar.Brand>

            <Nav>
                <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default Navigation;