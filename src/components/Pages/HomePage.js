import React, { Fragment } from 'react'
import NavBar from '../NavBar'
import Hero from '../Home/Hero'
import How from '../Home/How'
import Plan from '../Home/Plan'
import Review from '../Home/Review'
import Record from '../Home/Record'
import WhyChoose from '../Home/WhyChoose'
import AboutUs from '../Home/AboutUs'
import Faq from '../Home/Faq'
import Footer from '../Home/Footer'

const HomePage = () => {
  return (
    <Fragment>
        <NavBar/>
        <Hero/>
        <How/>
        <Plan/>
        <Review/>
        <Record/>
        <WhyChoose/>
        <AboutUs/>
        <Faq/>
        <Footer/>
    </Fragment>
  )
}

export default HomePage