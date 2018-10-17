import React from 'react';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import userpic from './userpic.png';
import UpdateProfileForm from './UpdateProfileForm';
import Dropdown from './AccountNav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const AccountPage = ({ authUser }) =>
  <div>
      <div className="text-right">
        <Dropdown/>
      </div>
      <div className="text-center">

        <img src={userpic} alt={"userpic"}/>
        <h3>Account: {authUser.email}</h3>
        <UpdateProfileForm/>

        <br/>
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
