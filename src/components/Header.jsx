import React, { useState } from "react";
// import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
// import logo from '../images/background3.jpg';
import '../App.css'
// import Product from './Product'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  const handleMenu = () => setShowMenu(!showMenu);


  return (
    <header>
      <h1>FreeLoad</h1>
      {/* <BiMenu size="50px" style={{ zIndex: 3 }} onClick={handleMenu} /> */}
      <nav className={showMenu ? "menu-show" : "menu-hide"}>
        <h2>Free Reloading Data</h2>
        <Link to="/auth">
          <button onClick={handleMenu} className="nav-btn">
            Create Account
          </button>
        </Link>
        
          <Link to= '/auth'>
          <button onClick={handleMenu} className="nav-btn">
            Login
          </button>
        </Link>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </nav>
    </header>
  );
};

export default Header;