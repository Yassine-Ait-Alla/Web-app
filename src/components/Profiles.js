import React, { Component } from 'react';
import { db } from '../firebase';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './App.css';
import './style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';



class ProfilesPage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;
    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );

  }
  render () {
    const { users } = this.props;
    return (
      <div  className="container">
        <h2 className="">Users</h2>

        { !!users && <UserList users={users} /> }


      </div>
    );
  }
}



const UserList = ({ users }) =>

  <div  className="text-center">


    <h6  className="success-message">Saved in firebase database</h6>
    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
      )}


  </div>



const authCondition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
  users: state.userState.users
});
const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users})
});

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(ProfilesPage);
