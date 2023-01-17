// import logo from './images/background3.jpg';
// import './App.css';
// // import auth from '../server/controllers/authScreen'
// import Home from '../src/components/Home'



// function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
//       <h1> FreeLoad </h1>
//         <input placeholder='Email'/>
//         <input placeholder='password'/>
//       <a 
//           className="CreateAcct-link"
//           href=''
//           target='_blank'
//           rel='noopener moreferrer'>
//             Create Account </a>
           

//             <input placeholder='Email'/>
//             <input placeholder='password'/>
            
//         <a
//           className="Login-link"
//           href='Home'
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Login
//         </a>
        
//         <img src={logo} className="App-logo" alt="logo" />
       
       
//       </header>
//     </div>
//   );
// }

// export default App;



import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'

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
        
      </Routes>
    </div>
  );
}

export default App;