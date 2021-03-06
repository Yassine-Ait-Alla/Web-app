import React, { Component } from 'react';
import { db } from '../firebase';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import './App.css';
import './style.css';
import { Link } from 'react-router-dom';
import PieChart from 'react-svg-piechart';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';



class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;
    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }
  render () {
    return (
      <div  className="container">
        <h1 className="">Home</h1>
          <Link className="nav-link" to={'/home'}><span className="sr-only">(current)</span></Link>

        <PieChart
          viewBoxSize={20}
          data={[
            {title: "Data 1", value: 35, color: "#E38627"},
            {title: "Data 2", value: 50, color: "#6A2135"},
            {title: "Data 5", value: 20, color: "#a1d9ce"},
            {title: "Data 3", value: 10, color: "#3da18d"}
          ]}
          expandOnHover
        />
      </div>
    );
  }
}



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
