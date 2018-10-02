import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from '../logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return(
      <div>
        <div data-react-className="UserOverlay" data-react-props="{}">
          <div className="overlay overlay-hugeinc" data-reactroot="">
            <button className="overlay-close">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
            <nav className="users-overlay">
              <h2 className="grayed-heading center">YAS</h2>
              <ul><li className="pagination-button-group"></li></ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.authUser.user,
    isAuth: state.authUser.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSignInWith: () => { dispatch({types: 'TOGGLE_MODAL', modalMode: true})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
