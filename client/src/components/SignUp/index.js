import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';


const SignUp = (props)=> {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12 center'>
				<br/>
					<h1 className='title'>What's In My Fridge?</h1>
				</div>
			</div>
			<div className='row'>
				<div className = 'col-sm-3'></div>
					<div className = 'center signin-div col-sm-6'>
						<form name = "/auth/signup" onSubmit = {props.handleSubmit} className='signin-form'>
							<h1>REGISTER</h1>
							<br/>
							<div className='input-group-prepend'>
								<input className="form-control center" value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'EMAIL'/>
							</div>
							<br/>
							<div className='input-group-prepend'>
								<input className=" center form-control" autoComplete="new-password" name='password' type='password' value = {props.password} onChange = {props.handleChange} placeholder="PASSWORD"/>
							</div>
							<br/>
							<Link to = "/" >SIGN IN</Link>
							<br/>
							<input type="submit" style={{display:"none"}}/>
						</form>
						<button id='signup-btn' style={{marginTop: -9+ '%'}} className = 'signin-btn btn btn-primary center' name = "/auth/signup" onClick = {props.handleSubmit} type = 'submit'>REGISTER</button>
					</div>
				</div>
			<div className = 'col-sm-3'></div>
		</div>
	);
}

export default SignUp;