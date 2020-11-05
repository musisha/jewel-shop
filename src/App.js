import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { Landing } from './Landing';
import { Cart } from './Cart';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<React.Fragment>
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route exact path='/cart' component={Cart} />
						</Switch>
					</React.Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
