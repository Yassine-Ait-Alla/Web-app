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

      console.log("gender:", this.state.gender)
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
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Update Your Profile
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"  aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">


                <div className="modal-header">
                  <h5 className="text-denter" id="exampleModalLabel">Update your Profile</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body">

                      <div className="container">
                        <h5>Choose a gender</h5>
                        <form>
                            <label className="radio-inline">
                              <input type="radio" name="optradio"
                                onChange={event => this.setState(byPropKey('gender', 'female'))}
                              />female
                            </label>
                            <label className="radio-inline">
                              <input type="radio" name="optradio"
                                onChange={event => this.setState(byPropKey('gender', 'male'))}
                              />male
                            </label>
                            <label className="radio-inline">
                              <input type="radio" name="optradio"
                                onChange={event => this.setState(byPropKey('gender', 'non-binary-genderless'))}
                              />none
                            </label>
                          </form>
                        </div>

                  </div>



                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" onSubmit={this.onSubmit} className="btn btn-primary">Submit</button>
                  </div>


            </div>
        </div>
      </div>

    </div>



      );
    }
  }


  export default UpdateProfileForm;
