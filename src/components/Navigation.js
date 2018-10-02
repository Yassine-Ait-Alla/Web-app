import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOutButton from './SignOut';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import PublicNav from './Nav';
import HomeNav from './HomeNav';


const Navigation = ({ authUser }) =>
<div className="form-group">
  { authUser ? <HomeNav/> : <PublicNav/> }
</div>


const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navigation);
