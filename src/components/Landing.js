import React from 'react';
import { auth } from '../firebase';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const LandingPage = ({ authUser }) =>
      <div className="text-center">
        <h1>is it you {authUser}?</h1>
      </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(LandingPage);
