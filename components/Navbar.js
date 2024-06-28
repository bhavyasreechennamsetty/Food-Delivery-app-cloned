import React from 'react';
const Navbar = () => {
    return (
        <nav id="navbar">   
            <link rel="stylesheet" href="style.css"></link>
                <div id="logo">
                    <img width={30} src="logo.png" alt="Logo" />
                </div>
                <ul id="links">
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
        </nav>
    );
}

export default Navbar;