import React from 'react'
import NavBar from '../NavBar'
import AboutUs from '../Home/AboutUs'
import WhyChoose from '../Home/WhyChoose'
import Footer from '../Home/Footer'
import Translate from '../Reuse/Translate'

const AboutPage = () => {
  return (
    <div>
        <NavBar/>
        <Translate/>
        <AboutUs/>
        <WhyChoose/>
      
        <Footer/>
    </div>
  )
}

export default AboutPage