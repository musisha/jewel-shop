import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	change = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};

	submit = (e) => {
		e.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		axios
			.post('localhost:9000/api/v1/auth/login', {
				email,
				password,
			})
			.then((res) => {
				if (res.data.token !== null) {
					localStorage.setItem('token', res.data.token);
					this.props.history.push('/cart');
				} else {
					console.log(res.data.message);
					window.location.reload();
				}
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submit}>
					<label htmlFor='email'>email</label>
					<input
						type='text'
						name='email'
						onChange={this.change}
						value={this.state.email}
					/>
					<br /> <br />
					<label htmlFor='password'>password</label>
					<input
						type='password'
						name='password'
						onChange={this.change}
						value={this.state.password}
					/>
					<button type='submit'>submit</button>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
