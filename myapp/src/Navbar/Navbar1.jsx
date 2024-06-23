// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
// import logo from './logo.png';

const Navbar = () => {

  const[isopen,setisopen]=useState(false)
  const toggle=()=>{
    setisopen(!isopen)
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h2>Website</h2></Link>
       
      </div>
      <div className="menu " onClick={toggle}>==</div>
   
      <ul className={`navbar-list ${isopen?'open':''}`}>
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/service">Service</Link></li>
        <li className="navbar-item"><Link to="/blog">Blog</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/register">Register</Link></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li>
      </ul>

     
    </nav>
  );
};

export default Navbar;
