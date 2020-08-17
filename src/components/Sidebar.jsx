import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Sidebar(){

    function closeMenu(){
        document.querySelector('.sidebar').classList.remove('open');
    }
    
    return (
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>Trousers</li>
            <li>Shirts</li>
        </ul>
    </aside>
    )
};

export default Sidebar;