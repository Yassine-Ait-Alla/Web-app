import React from 'react';
import { auth } from '../firebase';

const SignOutButton = () =>
<button className="btn btn-dark btn-primary" role="button" type="button" onClick={auth.doSignOut}>
              Signout</button>

export default SignOutButton;
