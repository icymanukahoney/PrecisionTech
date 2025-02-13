import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = 'https://formspree.io/f/xanyjaog';
      await axios.post(endpoint, { name, email, message });
      setSubmitted(true);
      
      // Show thank you message briefly, then navigate to reload Contact page
      setTimeout(() => {
        setSubmitted(false); 
        setName(''); // Clear the name field
        setEmail(''); // Clear the email field
        setMessage(''); // Clear the message field
        navigate('/contact', { replace: true }); 
      }, 2000); // Adjust delay as desired
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div key={location.key}> {/* Unique key forces remount */}

      <Helmet>
        <title>Contact Us | PrecisionTech</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, or feedback. We're here to help you with all your CNC and technical service needs."
        />
        <meta 
          name="keywords" 
          content="contact us, CNC services, technical support, PrecisionTech, inquiry form" 
        />
      </Helmet>

      {submitted ? (
        <div>
          <h3>Thank you for your message!</h3>
          <p>It has been submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-element">
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-element">
            <label>
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-element">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

