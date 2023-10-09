import React, { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import "./NavBar.scss";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="nav-bar-parent">
      <nav className="navbar">
        <div className="nav-container">
         <div className="logo-div">
         <div  className="nav-logo">
            <img src="./images/logo.png" alt="" />
            <h1 className="logo-title">Global<span style={{color:'#447FF2'}}>FXPro</span></h1>
          </div>
         </div>

          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div
               
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </div>
            </li>
            <li className="nav-item">
              <div
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </div>
            </li>
            <li className="nav-item">
              <div
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </div>
            </li>
       
          </ul>
          <div style={{display:'flex',alignItems:'center',gap:'20px'}} className="login-navbar">
            <button className="log-in" style={{color:'#447FF2',}}>Login</button>
            <button className="log-in" style={{color:'white',background:'#447FF2',}}>Sign Up</button>
          </div>
          
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                     <AiOutlineClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
