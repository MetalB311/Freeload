import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from '../images/background3.jpg';
// import Auth from '../Screens/AuthScreen'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  const handleMenu = () => setShowMenu(!showMenu);


  return (
    <header>
      <h1>FreeLoad</h1>
      <BiMenu size="35px" style={{ zIndex: 3 }} onClick={handleMenu} />
      <nav className={showMenu ? "menu-show" : "menu-hide"}>
        <h2>Free Reloading Data</h2>
        <Link to="/">
          <button onClick={handleMenu} className="nav-btn">
            Home
          </button>
        </Link>
        
          <Link to= '/Auth'>
          <button onClick={handleMenu} className="nav-btn">
            Login
          </button>
        </Link>
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
    </header>
  );
};

export default Header;