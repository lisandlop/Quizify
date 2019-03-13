import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1 style={{color: '#eee'}}>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        // this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
  
    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (
        <form onSubmit={this.onSubmit}>
        <input
          name="username"
          className="form-control"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        /><br/>
        <input
          name="email"
          className="form-control"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        /><br/>
        <input
          name="passwordOne"
          className="form-control"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        /><br/>
        <input 
          name="passwordTwo"
          className="form-control"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        /><br/>
        <button className="form-control btn btn-light" type="submit">Sign Up</button>

        {error && <p style={{color: '#ff0000'}}>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.LANDING}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };