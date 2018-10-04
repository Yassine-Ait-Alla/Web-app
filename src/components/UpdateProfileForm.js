import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../firebase';
import * as routes from '../constants/routes';
import './form.css';


  const INITIAL_STATE = {
    gender: '',
    orientation: '',
    bio: '',
    error: null
  };
  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  class UpdateProfileForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
      const {
        gender,
        orientation,
        bio
      } = this.state;

      const { history } = this.props;

      authUser => {
        db.updateUser(authUser.user.uid, this.state.gender,
          this.state.orientation, this.state.bio)
          .then(() => {
            this.setState({...INITIAL_STATE});
          }).catch(error => {
            this.setState(byPropKey('error', error));
          });
      }
      event.preventDefault();

    }
    render () {
      const {
        gender,
        orientation,
        bio,
        error
      } = this.state;
      const isInvalid =
      gender === '' || orientation === '' || bio === '';

      return (

      <form onSubmit={this.onSubmit}>
        <div className="radio">
          <label>
            <input type="radio" name="optradio"/>Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="optradio"/>Option 2
          </label>
        </div>
        <div className="radio disabled">
          <label>
            <input type="radio" name="optradio"/>Option 3
          </label>
        </div>
      </form>

      );
    }
  }


  export default UpdateProfileForm;
