import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default () => (
  <div className="backpage" style={{textAlign: 'center'}}>
    <h2 style={{color: '#eee'}}>There is no such route!</h2>
    <Button variant="light" onClick={() => window.history.go(-1)}>Click here to go back</Button>
  </div>
)