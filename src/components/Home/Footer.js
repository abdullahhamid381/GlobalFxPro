import React, { Fragment } from 'react'
import './Css/Footer.scss'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <div><img src="./images/logo2.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
              </div>
              <div className="social-links" style={{ marginLeft: '-12px', marginTop: '15px' }}>
                <a href="#"><FaFacebook /></a>
                <a href="#"><BsInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><AiOutlineTwitter /></a>
              </div>
            </div>
            <div className="two-row-footer">
              <div className="footer-col" id='second'>
                <h4>Product</h4>
                <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Case studies</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Updates</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Culture</a></li>
                </ul>
              </div>
            </div>
            <div className="two-row-footer">
              <div className="footer-col">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Getting started</a></li>
                  <li><a href="#">Help center</a></li>
                  <li><a href="#">Server status</a></li>
                  <li><a href="#">order status</a></li>
                  <li><a href="#">Report a bug</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contacts us</h4>
                <ul>
                  <li><a href="#">contact@company.com</a></li>
                  <li><a href="#">(414) 687 - 5892</a></li>
                  <li><a href="#">Metalic</a></li>
                  <li><a href="#">794 Mcallister St
                    San Francisco, 94102</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </footer>
      <div style={{ background: 'white' }}>
        <div className='copy-right'>
          <h3>Copyright © 2023 GlobalFXPro</h3>
          <h3>All Rights Reserved |<span> Terms and Conditions | Privacy Policy</span></h3>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer