import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MiniModal = () =>
<div>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<a href="#" data-toggle="modal" data-target="#login-modal">Login</a>

<div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
					<h1>Login to Your Account</h1><br/>
				  <form>
					<input type="text" name="user" placeholder="Username"/>
					<input type="password" name="pass" placeholder="Password"/>
					<input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
				  </form>

				  <div className="login-help">
					<a href="#">Register</a> - <a href="#">Forgot Password</a>
				  </div>
				</div>
			</div>
		  </div>
</div>


export default MiniModal;
