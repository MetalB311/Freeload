import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Auth from '../src/Screens/AuthScreen'

// import HomeScreen from './screens/HomeScreen';
// import AuthScreen from './Screens/AuthScreen';
// import ProductScreen from './screens/ProductScreen';
// import AdminScreen from './screens/AdminScreen';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

function App() {
    
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Auth />} />
        
      </Routes>
    </div>
  );
}

export default App;