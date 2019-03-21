import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/SelectPage.scss';

import SelectQuiz from '../components/SelectQuiz/SelectQuiz'

class SelectPage extends Component {
  render() {
    return (
      <div className="SelectPage">
        <SelectQuiz> </SelectQuiz>
      </div>
    );
  }
}

export default SelectPage;