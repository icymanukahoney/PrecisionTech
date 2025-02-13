import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });
  
  const [formStatus, setFormStatus] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const location = useLocation(); // To track navigation

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post('https://getform.io/f/bqoomwyb', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormStatus('Form submitted successfully!');
      setSubmitted(true); // Hide the form after submission
    } catch (error) {
      console.error('Error submitting the form:', error);
      setFormStatus('Error submitting the form. Please try again.');
    }
  };

  // Reset form state on page navigation
  useEffect(() => {
    setSubmitted(false); // Reset the form to be visible again
    setFormStatus(''); // Clear the status message
    setFormData({
      name: '',
      email: '',
      message: '',
      file: null,
    });
  }, [location]); // Triggered whenever the URL changes

  return (
    <div>
      <Helmet>
        <title>Request a Quote | PrecisionTech Services</title> {/* Page title */}
        <meta name="description" content="Get a quote for CNC machining, mechanical fault finding, and technical services from PrecisionTech Services." /> 
        <meta name="keywords" content="CNC machining, precision services, mechanical fault finding, technical services, PLC programming, retrofitting, machine controls, operator training, technical support" />
      </Helmet>

      {/* The form is hidden if it's submitted */}
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>

          <div className="form-element">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          <div className="form-element">
            <label>Message</label>
            <textarea name="message" onChange={handleChange} required />
          </div>

          <div className="form-element">
            <label>File</label>
            <input type="file" name="file" onChange={handleChange} />
          </div>

          <div className="form-element">
            <button type="submit" className="submit-button">SUBMIT</button>
          </div>
        </form>
      )}

      {/* Form submission status message */}
      {formStatus && <p>{formStatus}</p>}
    </div>
  );
};

export default QuoteForm;










