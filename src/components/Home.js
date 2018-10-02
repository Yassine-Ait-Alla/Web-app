import React, { Component } from 'react';
import { db } from '../firebase';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import './App.css';
import './style.css';
import { Link } from 'react-router-dom';
import PieChart from 'react-svg-piechart';

const ChartDisplay = ({ content }) =>
<div>

</div>

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;
    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );

  }
  render () {
    const { users } = this.props;
    console.log({users});
    return (
      <div  className="text-center">
        <h1 className="">Home</h1>
          <Link className="nav-link" to={'/home'}><span className="sr-only">(current)</span></Link>

        <p>The Home Page is accessible by signed-in Users</p>
        { !!users && <UserList users={users} /> }
        <div>

        </div>

      </div>
    );
  }
}



const UserList = ({ users }) =>

  <div>
    <h2>List of Users</h2>

    <p  className="success-message">(Saved in firebase database)</p>
    {
      Object.keys(users).map(key =>
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
)(HomePage);
