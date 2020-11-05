import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('materialize-css/dist/css/materialize.min.css');

export class Homebg extends React.Component {
	render() {
		return (
			<div id='banner'>
				<div className='container header-txt'>
					<h2 id='main-txt'>Mastano Jewelry</h2>

					<h5 id='subhead'>Adorn yourself</h5>

					<div className='row'>
						<a id='solid-btn' role='button' href='/'>
							Shop Now
						</a>

						<a id='clear-btn' href='/about'>
							Learn More
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Homebg;
