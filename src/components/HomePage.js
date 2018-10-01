import React, { Component } from 'react';
import { db } from '../firebase';
import withAuthorization from './withAuthorization';
import HomeNav from './HomeNav';
import PublicNav from './Nav';
import { connect } from 'react-redux';
import './App.css';
import './style.css';

const HomePage = ({ authUser }) =>
  <div className="text-center">
    {authUser ? <HomeNav/> : <PublicNav/> }
  </div>

const authCondition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
  users: state.userState.users
});


export default connect(mapStateToProps)(HomePage);
