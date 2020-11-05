import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './Landing';
import { Cart } from './Cart';
import source from './img/jeweryimage.jpg';
export class Header extends React.Component {
	render() {
		return (
			<div>
				<img src='./img/jeweryimage.jpg' />
				<h3>Mastano</h3>
			</div>
		);
	}
}
