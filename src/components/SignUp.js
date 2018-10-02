import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../firebase';
import SocialLogin from './SocialLogin';
import * as routes from '../constants/routes';
import './form.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const SignUpPage = ({ history }) =>
  <div className="text-center">
    <div className="form-group">
      <h2>Just fill the form to be registered..</h2>
      <SignUpform history={history}/>
      <hr/>
      <br/>
    </div>
  </div>


  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  };
  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  class SignUpform extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
      const {
        username,
        email,
        passwordOne
      } = this.state;

      const { history } = this.props;

      auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordOne)
        .then(authUser => {
          db.doCreateUser(authUser.user.uid, username, email)
            .then(() => {
              this.setState({...INITIAL_STATE});
              history.push(routes.HOME);
            }).catch(error => {
              this.setState(byPropKey('error', error));
            });
        }).catch(error => {
            this.setState(byPropKey('error', error));
        });
        event.preventDefault();
    }
    render () {
      const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error
      } = this.state;
      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

      return (
        <div className="container">
          <form className="form form-group" onSubmit={this.onSubmit}>

            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Full Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" value={username}
                  name="firstname" placeholder="Enter Your name.."
                  onChange={event => this.setState(byPropKey('username', event.target.value))}
                />
              </div>
            </div>

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
                <input type="password" value={passwordOne}
                  name="lastname" placeholder="Enter Your Password.."
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Password Confirmation</label>
              </div>
              <div className="col-75">
                <input type="password" value={passwordTwo}
                  name="lastname" placeholder="Confirm Your Password.."
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                />
              </div>
            </div>

            <div className="text-center">
              <button disabled={isInvalid} type="submit" className="btn btn-primary">Sign Up</button>
              { error && <p>{error.message}</p> }
            </div>

          </form>

          <br/>
          <hr/>
          <SocialLogin/>

        </div>

      );
    }
  }

  const SignUpLink = () =>
    <p>
      <br/>
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

  export default withRouter(SignUpPage);
  export {
    SignUpform,
    SignUpLink
  };
