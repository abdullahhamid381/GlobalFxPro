import React, { useState } from 'react';
import NavBar from '../NavBar';
import AboutUs from '../Home/AboutUs';

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
  <div>
    <NavBar/>
    <AboutUs/>
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <div className="error">{errors.name}</div>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <div className="error">{errors.phone}</div>
      </div>

      <div>
        <label>Company name/VAT:</label>
        <input
          type="text"
          name="companyNameVAT"
          value={formData.companyNameVAT}
          onChange={handleInputChange}
        />
        <div className="error">{errors.companyNameVAT}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  </div>
  );
};

export default ContactsDetails;
