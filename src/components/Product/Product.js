import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in Stok order soon.</p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div>
    );
};

export default Product;