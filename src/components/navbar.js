import React from 'react';
import './navbar.css';


function Navbar() {
    return (
   <div>


<nav className="navbar navbar-expand-lg navbar-light nav">
    <img src="https://www.bitrix24.com/bitrix/templates/bitrix24_2017/images/header/bitrix24-logo-en.svg" alt="" />


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul>
        <li className="nav-item active">
          <a className="top-link" href="#">TOOLS <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">PRICING</a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">PREMISE</a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">SOLUTION</a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">PARTNERS</a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">APPS</a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">BLOG</a>
        </li>
        <li className="nav-item">
          <a className="top-link" href="#">SUPPORT</a>
        </li>
        </ul>
      
     </div>   
  </nav>






   </div>


)
}

export default Navbar;