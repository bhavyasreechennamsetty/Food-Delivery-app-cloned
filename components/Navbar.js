import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [isLogin, setisLogin]=useState("login");
    return (
        <nav id="navbar">   
            <link rel="stylesheet" href="style.css"></link>
                <div id="logo">
                    <img width={30} src="logo.png" alt="Logo" />
                </div>
                <ul id="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/offers">Offer</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><button className={isLogin=="login"?"login":"logout"} onClick={()=>{
                        isLogin=isLogin=="login"?"logout":"login"
                        setisLogin(isLogin)
                    }}>{isLogin}</button></li>
                </ul>
        </nav>
    );
}
export default Navbar;