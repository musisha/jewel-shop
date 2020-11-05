import React, { Component } from 'react';
require('materialize-css/dist/css/materialize.min.css');

export class About extends React.Component {
	render() {
		return (
			<div className='about-us' id='about'>
				<h4>About Mastano Jewelry</h4>
				<h5>Company Owner, Patrick</h5>

				<p id='about_owner'>
					Patrick is the founder and executive chairman of mastano
					mining and logistics. He has been in business since 2009. He
					has vast experience in mining accounts and logistics.
					Patrick has vast network of international clients.
				</p>
			</div>
		);
	}
}
export default About;
