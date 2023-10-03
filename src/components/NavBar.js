import React, { useState } from "react";

import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         <div className="logo-div">
         <div  className="nav-logo">
            <img src="./images/logo.png" alt="" />
            <h1 className="logo-title">Global<span style={{color:'#447FF2'}}>FXPro</span></h1>
          </div>
         </div>

          <div style={{display:'flex'}}> 
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
            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
            <button className="log-in" style={{color:'#447FF2',fontSize:'16px',fontWeight:'700',border:'1px solid #447FF2',padding:'10px 20px',borderRadius:'25px'}}>Login</button>
            <button className="log-in" style={{color:'white',background:'#447FF2',fontSize:'16px',fontWeight:'700',border:'1px solid #447FF2',padding:'10px 20px',borderRadius:'25px'}}>Sign Up</button>
          </div>
          </ul>
         
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
