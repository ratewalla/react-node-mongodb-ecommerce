import React from 'react';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {

  return (
  <BrowserRouter>
    <div className="grid-container">
            <Header />
            <Sidebar />
            <ProductList />
            <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
