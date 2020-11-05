import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from './products.json';
import { About } from './About';
import { Homebg } from './Homebg';

export class Landing extends React.Component {
	render() {
		const productCards = products.map((product) => (
			<React.Fragment>
				<ProductCard
					productId={product.id}
					key={product.id}
					url={product.url}
				/>
			</React.Fragment>
		));

		return (
			<div id='wrap'>
				<div className='row'>
					<Homebg />
				</div>

				<div className='container'>
					{/* <div className='row'>
						<About />
					</div> */}

					<div className='row'>{productCards}</div>

					{/* <Link id='cart-btn' role='button' to='/cart'>
						go to cart
					</Link> */}
				</div>
			</div>
		);
	}
}
