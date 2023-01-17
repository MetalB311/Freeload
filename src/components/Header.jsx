import logo from '../images/background3.jpg';
import '../App.css';
import {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import AuthContext from '..'


const Header =() => {
  return (
    
      <div className="Header">
        <header className="App-header">
      <h1> FreeLoad </h1>
      <a 
          className="CreateAcct-link"
          href='auth'
          target='_blank'
          rel='noopener moreferrer'>
            Create Account </a>

        <a
          className="Login-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
        
        <img src={logo} className="App-logo" alt="logo" />
       
       
      </header>
    </div>
  );
}

export default Header;