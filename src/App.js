import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { Landing } from './Landing';
import { Cart } from './Cart';
import Login from './Login';
import ProductCard from './ProductCard';
import About from './About';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<React.Fragment>
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/about' component={About} />
						</Switch>
					</React.Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
