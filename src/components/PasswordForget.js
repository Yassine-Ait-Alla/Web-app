import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import './form.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const PasswordForgetPage = () =>
  <div className="text-center">
    <h1>Password forget</h1>
    <PasswordForgetForm/>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: '',
  error: null
}

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const { email } = this.state;
    auth.doPasswordReset(email)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
    }).catch(error => {
      this.setState(byPropKey('error', error));
    });
    event.preventDefault();
  }
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <div className="container">
        <form className="form form-group" onSubmit={this.onSubmit}>
          <input
            className="col-75"
            value={this.state.email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <button  className="btn btn-primary" disabled={isInvalid} type="submit">Reset My Password</button>
          {error && <p>{error.message}</p>}
        </form>
      </div>

    );
  }
}

const PasswordForgetLink = () =>
<p>
  <Link to={routes.PASSWORD_FORGET}>Forgot Password ?</Link>
</p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink
}
