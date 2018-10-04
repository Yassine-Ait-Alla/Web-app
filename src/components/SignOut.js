import React from 'react';
import { auth } from '../firebase';

const SignOutButton = () =>
<button className="btn btn-dark btn-primary" type="button" onClick={auth.doSignOut}>
              Log Out</button>

export default SignOutButton;
