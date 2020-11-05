import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import AuthService from './services/authService';
import axios from 'axios';

class Checkout extends React.Component {
	state = {
		token: undefined,
		redirect: null,
	};

	// getCurrentUser() {
	// 	return localStorage.getItem('token');
	// }
	onclick() {
		const token = AuthService.getCurrentUser();
		if (!token || token === null) {
			return console.log('login');
		}
		this.setState({ token: token, redirect: this.props.redirect });
		axios.get(`${this.state.redirect}`);
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={this.onclick}>Buy now</button>
			</React.Fragment>
		);
	}
}

export default withRouter(Checkout);
