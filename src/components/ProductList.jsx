import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductPage from './ProductPage';


function ProductList(){
    return (
        <main className="main">
            <div className="content">
                <Route path="/" exact="true" component={HomePage}/>
                <Route path="/products/:id" component={ProductPage}/>
            </div>
        </main>
    )
}

export default ProductList;