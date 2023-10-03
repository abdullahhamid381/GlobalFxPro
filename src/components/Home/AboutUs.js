import React from 'react'
import './Css/AboutUs.css'
const AboutUs = () => {
    return (
        <div className='about-parent'>
            <div className='about-title'>
                <h1 style={{ color: '' }}> Why Choose <span style={{ color: '#447FF2' }}> us</span></h1>
                <p>Discover early user’s feedback on  <span style={{ color: '#447FF2' }}>Dico integration within   <br /> their workflows.</span></p>
            </div>
            <div className='about-us-detail'>
                <h1>Your premier destination for <br /> forex trading excellence! <br />
                    At <span style={{ color: '#447FF2' }}>GlobalFXPro</span></h1>
                <p>A dynamic and innovative forex trading <br /> company that aims to empower traders of all <br /> levels to achieve financial success in the global <br /> currency markets</p>
            </div>

<div>
    <img src="./images/about-img.png" alt="" />
</div>

<div className='about-us-detail'>
                <h1>Together we are strong <br />
                     <span style={{ color: '#447FF2' }}>team</span></h1>
                <p>Our team of seasoned professionals, equipped <br /> with years of industry experience, is dedicated <br /> to providing top-notch trading solutions and <br /> exceptional customer service to our valued <br /> clients</p>
            </div>

        </div>
    )
}

export default AboutUs
