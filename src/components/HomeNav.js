import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import SignOutButton from './SignOut';
import SearchBar from './SearchBar';
import Cadran from './Clock';



const HomeNav = () =>
<div className="">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

      <li><Cadran/></li>

        <li className="nav-item active">
          <Link className="nav-link" to={'/home'}>Home <span className="sr-only">(current)</span></Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Landing<span className="sr-only">(current)</span></Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/account'}>Account<span className="sr-only">(current)</span></Link>
        </li>


        <SearchBar />

        <li className="right-align"><SignOutButton/></li>





      </ul>
    </div>

  </nav>
</div>

const INITIAL_STATE = {
  research: ''
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default HomeNav;
