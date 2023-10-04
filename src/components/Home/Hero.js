import React from 'react'
import './Css/Hero.scss'
const Hero = () => {
  return (
  <div className="hero-parent">
      <div className='hero-back'>
    <div className='hero-text-div'>
    <div>
     <h1>Global<span style={{color:'#447FF2'}}>FXPro</span></h1>
      <p>Your success is our priority <span style={{color:'#447FF2'}}>- trade with confidence <br /> succeed with ease.</span></p>
     </div>
     <div className='hero-section-button'>
        <button style={{background:'none'}}>Login</button>
        <button style={{color:'white'}}>Sign up</button>
     </div>
    </div>
    </div>
  </div>
  )
}

export default Hero
