import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import products from './products.json';
import { addToCart } from './cartItems';
import { Button } from 'antd';
require('materialize-css/dist/css/materialize.min.css');

class ProductCard extends Component {
	addToCart() {
		addToCart(this.props.productId);
	}

	render() {
		const product = products.find(
			(product) => product.id === this.props.productId,
		);

		return (
			<div className='cards-wrapper col s4' id='shop'>
				<div className='card'>
					<div className='card-image'>
						<img src={product.imageUrl} />

						<a
							className='btn-floating halfway-fab'
							id='newbtn'
							href={product.url}
							style={{
								backgroundColor: '#ff3399',
								color: 'black',
								textAlign: 'center',
								fontWeight: 'bold',
							}}>
							Buy
						</a>
					</div>
					<div className='card-content'>
						<span className='card-title'>{product.name}</span>
						<p>{product.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductCard;
