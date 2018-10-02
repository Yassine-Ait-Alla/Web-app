import React from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import SocialLogin from './SocialLogin';
import * as routes from '../constants/routes';
import './form.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const SignInPage = ({ history }) =>
  <div className="text-center">
    <h1>SignIn</h1>
    <SignInForm history={history} />

    <hr/>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="container">
        <form className="form form-group" onSubmit={this.onSubmit}>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Email Address</label>
            </div>
            <div className="col-75">
              <input type="text" value={email}
                name="lastname" placeholder="Enter Your Email.."
                onChange={event => this.setState(byPropKey('email', event.target.value))}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Password</label>
            </div>
            <div className="col-75">
              <input type="password" value={password}
                name="lastname" placeholder="Enter Your Password.."
                onChange={event => this.setState(byPropKey('password', event.target.value))}
              />
            </div>
          </div>

          <div className="text-center">
            <button disabled={isInvalid} type="submit" className="btn btn-primary">Sign In</button>
            { error && <p>{error.message}</p> }
          </div>

        </form>
        <SignUpLink />
        <PasswordForgetLink />

        <br/>
        <hr/>
        <SocialLogin/>

      </div>

    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
