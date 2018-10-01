import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { auth } from '../firebase';
import SocialLogin from './SocialLogin';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';
import HomePage from './HomePage';
import AccountPage from './Account';
import LandingPage from './Landing';
import './App.css';

const App = () =>
<Router>
  <div>
    <HomePage authUser={auth.currenUser}/>
    <Route exact path={"/signin"} component={SignInPage} />
    <Route exact path={"/signup"} component={SignUpPage} />
    <Route exact path={"/"} component={LandingPage} />
    <Route exact path={"/account"} component={AccountPage} />
  </div>
</Router>

export default App;
