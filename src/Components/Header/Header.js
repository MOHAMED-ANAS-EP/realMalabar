import React from 'react'
import {
    
    Link
  } from "react-router-dom";
  import './Header.css'
  import logo from '../../assets/logo.png'
function Header() {
     
    return (    
        <header className=" home-page m-0 p-0" id="head-section">
        <nav className="navbar navbar-expand-lg  fixed-top" id="nav-sticky">
          <div className="container">
            <Link to="/" className="navbar-brand"><img className="logo" src={logo}/></Link>           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "><i className="fa fa-align-center"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">               
                <li className="nav-item ">
                  <Link to="/about" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/grid" className="nav-link">House</Link>                 
                </li>
                <li className="nav-item ">
                  <Link to="/grid" className="nav-link">Land</Link>                  
                </li>
                <li className="nav-item ">
                  <Link to="/grid" className="nav-link">Building</Link>                 
                </li>                                
                <li className="nav-item ">
                  <Link to="/grid" className="nav-link">Flat</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/about" className="nav-link">About</Link>                 
                </li>
  
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>            
            </div>
          </div>
        </nav>                  
      </header>
    )
}

export default Header
