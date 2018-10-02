import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { SignInUser, toggleClose, toggleOpen } from '../redux/actions/actions';

class SignInWith extends Component {
  render() {
    const responseGoogle = (res) => {
      let postData = {
        name: res.w3.ig,
        provider: 'google',
        email: res.w3.U3,
        provider_id: res.EL,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      }
      this.props.SignInUser(postData)
      this.props.toggleClose()
    }
    return (
      <div>
        <div data-behavior="overlay" className={this.props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'}>
          <button onClick={this.props.toggleClose} data-behavior="close-overlay" className="overlay-close">
            <span className="glyphicon glyphicon-remove"></span>
          </button>
          <nav>
            <h2 className="grayed-heading center">Sign In</h2>
            <ul className="omniauth-button-group">
              <li className="omniauth-button-google">
                <GoogleLogin className="button-google"
                clientId="53631572956-mo43hoitcaad85t2cmj0tvoa7dtgq1kv.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFaillure={responseGoogle}/>
                  <i className="fa fa-google"></i>
                  <span>SignIn with Google</span>
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalMode: state.common.modalMode
  }
}

export default connect(mapStateToProps,  {
  toggleClose,
  toggleOpen,
  SignInUser
})(SignInWith);
