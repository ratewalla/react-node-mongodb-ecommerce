import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import data from '../data';

function HomePage(props){
    return(
        <ul className="products">
        {
          data.products.map(product=>
            <li>
                <div className="product">
                    <Link to={'/products/'+product._id}><img className="product-img" src={product.image} alt="product" srcset=""/></Link>
                    <div className="product-name"><Link to={'/products/'+product._id}>{product.name}</Link></div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="price">£{product.price}</div>
                    <div className="product-ratings">{product.rating} stars ({product.numReviews})</div>
                </div>
            </li>)
            }
        </ul> 
    )
}

export default HomePage;