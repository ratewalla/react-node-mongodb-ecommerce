import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Header(){

    function openMenu(){
        document.querySelector('.sidebar').classList.add('open');
      }

    return (
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <Link to="/">Congo</Link> </div>
                <div className="header-links">
                    <Link to="#">Cart</Link>
                    <Link to="#">Login</Link>
                </div>
          </header>
    )
};

export default Header;