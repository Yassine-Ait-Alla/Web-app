import React from 'react';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const LandingPage = ({ authUser }) =>
      <div className="text-center">
        <h1>is it you {authUser.email}?</h1>
      </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(LandingPage);
