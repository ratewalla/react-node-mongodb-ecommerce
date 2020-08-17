import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductPage(props){
    
    const product = data.products.find(x => x._id === props.match.params.id);

    return(
        <div>
            <div className="back-to-results"><Link to="/">&lt; Back to Results</Link></div>
            <div className="details">
                <img className="details-image" src={"../"+product.image} alt="product" srcset=""/>
            
            <div className="details-info">
                <ul>
                    <li>{product.name}</li>
                    <li><b>£{product.price}</b></li>
                    <div className="details-description"><li>{product.description}</li></div>
                    <li>{product.brand}</li>
                    <li>{product.rating}</li>
                    <li>{product.numReviews}</li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>Price: {product.price}</li>
                    <li>Status: {product.status}</li>
                    <li>Qty: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select></li>
                    <li><button className="add-cart-button">Add to Cart</button></li>
                </ul>
                
            </div>
        </div>
        </div>
    )
}

export default ProductPage;