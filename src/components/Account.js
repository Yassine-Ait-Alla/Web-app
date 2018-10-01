import React from 'react';
import AccountNav from './AccountNav';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import userpic from './userpic.png';
import firebase from 'firebase';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const AccountPage = ({ authUser }) =>
  <div>
      <div className="text-center">
        <img src={ firebase.auth().currentUser.photoURL ?
                  firebase.auth().currentUser.photoURL
                  : userpic } />
        <h2>Account: {authUser.email}</h2>
        <br/>
      </div>
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
