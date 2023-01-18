import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import AuthScreen from '../src/Screens/AuthScreen'
// import Auth from '../src/components/auth'

// import HomeScreen from './screens/HomeScreen';
// import AuthScreen from './Screens/AuthScreen';
import Product from './components/Product';
// import AdminScreen from './screens/AdminScreen';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

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