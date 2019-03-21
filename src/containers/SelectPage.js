import React, { Component } from 'react';
import '../styles/SelectPage.scss';

import SelectQuiz from '../components/SelectQuiz/SelectQuiz'

class SelectPage extends Component {
  render() {
    return (
      <div className="SelectPage">
        <SelectQuiz/>
      </div>
    );
  }
}

export default SelectPage;