import axios from 'axios';
import { API_URL } from '../config/config';

class AuthService {
	login(email, password) {
		console.log(`${API_URL}login`);
		return axios
			.post(`${API_URL}login`, {
				email,
				password,
			})
			.then((res) => {
				if (res.data.token !== null) {
					localStorage.setItem('token', res.data.token);
					// this.props.history.push('/transactions');
				} else {
					console.log(res.data.message);
					window.location.reload();
				}
			});
	}

	logout() {
		localStorage.removeItem('token');
	}

	register(
		businessname,
		emailaddress,
		websiteurl,
		description,
		country,
		preferredcurrency,
		password,
		confirmpassword,
	) {
		return axios.post(API_URL + 'signup', {
			businessname,
			emailaddress,
			websiteurl,
			description,
			country,
			preferredcurrency,
			password,
			confirmpassword,
		});
	}

	getCurrentUser() {
		return localStorage.getItem('token');
	}
}

export default new AuthService();
