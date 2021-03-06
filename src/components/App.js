import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import ProfilesPage from './Profiles';
import UprofilePage from './Uprofile';
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import withAuthentication from './withAuthentication';
import './App.css';


const App = () =>
<Router>
  <div>
    <Navigation authUser={auth.currenUser}/>
    <hr/>
    <Route exact path={routes.LANDING} component={LandingPage}/>
    <Route exact path={routes.SIGN_UP} component={SignUpPage}/>
    <Route exact path={routes.SIGN_IN} component={SignInPage}/>
    <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage}/>
    <Route exact path={routes.HOME} component={HomePage}/>
    <Route exact path={routes.ACCOUNT} component={AccountPage}/>
    <Route exact path={routes.PROFILES} component={ProfilesPage}/>
    <Route exact path={routes.UPROFILE} component={UprofilePage}/>
  </div>
</Router>

export default withAuthentication(App);
