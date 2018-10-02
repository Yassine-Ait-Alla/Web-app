import React from 'react';
import AccountNav from './AccountNav';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import userpic from './userpic.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Mapp from './Map';


const AccountPage = ({ authUser }) =>
  <div>
      <div className="text-center">
        <img src={userpic} />
        <h3>Account: {authUser.email}</h3>
        <br/>
        <br/>
        <Mapp/>
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
