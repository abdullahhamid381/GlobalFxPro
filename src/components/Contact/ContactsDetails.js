import React, { useState } from 'react';
import NavBar from '../NavBar';
import AboutUs from '../Home/AboutUs';
import Translate from '../Reuse/Translate';
import { BsFacebook, BsTelegram, BsInstagram } from 'react-icons/bs'
import './ContactDetail.scss'
import Footer from '../Home/Footer';
const ContactsDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyNameVAT: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    companyNameVAT: '',
  });

  const validateEmail = (email) => {
    // You can use a more sophisticated email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // You can use a more sophisticated phone number validation logic
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: validateEmail(formData.email) ? '' : 'Invalid email address',
      phone: validatePhone(formData.phone) ? '' : 'Invalid phone number',
      companyNameVAT: formData.companyNameVAT ? '' : 'Company name/VAT is required',
    };

    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.values(newErrors).every((error) => error === '')) {
      // Perform your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='contact-detail-parent'>
      <NavBar />
      <Translate />
      <div className="contact-para">
        <h1>Contact  <span>us</span></h1>
        <p>Our dedicated support team is available and ready to assist you 24/5.
          Please get in touch using the details below if you have any questions about our service or products.</p>

        <img src="./images/contactpic.png" alt="" />
      </div>

      <div className='form-parent'>
        <div className="form-text">
          <h1>Feel free to contact <span>us!</span></h1>
          <p>Our team of seasoned professionals, equipped with years of industry experience, is dedicated to providing top-notch trading solutions and exceptional customer service to our valued clients</p>

          <div className='media'>
            <h1>Connect with Social</h1>
            <div className='icons'>
              <span><BsFacebook /></span>
              <span><BsInstagram /></span>
              <span><BsTelegram /></span>
            </div>

          </div>
        </div>
        <div className="form">
          <div className="width">
            <div className='form-info'>
              <h1>Contact us!</h1>
              <p>
                Let’s discuss your project, or together we will find a solution to the most difficult tasks
              </p>
            </div>
            <div >
              <form onSubmit={handleSubmit}>
                <div className='email' style={{ paddingTop: '20px' }}>

                  <input
                    type="text"
                    name="name" placeholder='Name'
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <div className="error">{errors.name}</div>
                </div>
                <div className="email-phone">

                  <div className='email spec' >

                    <input
                      type="text" placeholder='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <div className="error">{errors.email}</div>
                  </div>

                  <div className='email'>

                    <input
                      type="text" placeholder='Phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <div className="error">{errors.phone}</div>
                  </div>
                </div>

                <div className='email' style={{ paddingBottom: '20px' }}>

                  <input placeholder='Company name/VAT'
                    type="text"
                    name="companyNameVAT"
                    value={formData.companyNameVAT}
                    onChange={handleInputChange}
                  />
                  <div className="error">{errors.companyNameVAT}</div>
                </div>
                <div className='para'>
                  <p>By clicking on the button the below, you accept our policy policy</p>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactsDetails;
