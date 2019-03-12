import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navigation.scss';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div id="navigation">
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default Navigation;