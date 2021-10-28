
import React from 'react'
import './style.css'
import './media.css'
import {BrowserRouter as Router,
  Route, 
} from "react-router-dom";
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Grids from './Pages/Grids';
// import Login from './Components/Login/Login';
// import SignUp from './Components/SignUp/SignUp';
import ProprtyDetails from './Pages/ProprtyDetails';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';







function App() {
  return (
    <div>
     <Router>
     <Header/>
     <Route exact path='/'>
        <Home/>
      </Route>
      <Route  path='/about'>
         <About/>
      </Route>  
      <Route  path='/contact'>
         <Contacts/>
      </Route>  
      <Route  path='/grid'>
         <Grids/>
      </Route> 
      {/* <Route  path='/login'>
         <Login/>
      </Route> 
      <Route  path='/signup'>
         <SignUp/>
      </Route>       */}
      <Route  path='/details'>
         <ProprtyDetails/>
      </Route>
      <Footer/>  
     </Router>
    </div>
  )
}

export default App
