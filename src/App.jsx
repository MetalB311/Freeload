// import './App.css';
// import Header from './components/Header';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home'
// import AuthScreen from '../src/Screens/AuthScreen'
// // import Auth from '../src/components/auth'

// // import HomeScreen from './screens/HomeScreen';
// // import AuthScreen from './Screens/AuthScreen';
// import Product from './components/Product';
// // import AdminScreen from './screens/AdminScreen';
// // import { useSelector } from 'react-redux';
// // import { Navigate } from 'react-router-dom';

// ***************************^^^^^^^above is old imports^^^^^^^^^*********************

import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Pistol from './components/Pistol'
import Product from './components/Product'
import Rifle from './components/Home'




function App() {
    
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;