import logo from './images/background3.jpg';
import './App.css';


function App() {
  return (
    
    <div className="App">
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

export default App;



// import {useContext} from 'react'
// import {Routes, Route, Navigate} from 'react-router-dom'
// import './App.css';

// import Header from './components/Header'
// // import Home from './components/Home'
// // import Auth from './components/Auth'
// // import Form from './components/Form'
// // import Profile from './components/Profile'
// // import AuthContext from './store/authContext'


// const App = () => {
//   // const authCtx = useContext(AuthContext)

//   return (
//     <div className="app">
//       <Header/>
//        <Routes>
//         {/* <Route path='/' element={<Home/>}/>
//         <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
//         <Route path='/form' element={authCtx.token ? <Form/> : <Navigate to='/Form'/>}/>
//         <Route path='/profile' element={authCtx.token ? <Profile/> : <Navigate to='/auth'/>}/>
//         <Route path='*' element={<Navigate to='/'/>}/> */}
//        </Routes>
//     </div>
//   )
// }

// export default App