import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'
import { RotatingLines } from 'react-loader-spinner'


const Contact = () => {

const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simulate loading for 3 seconds
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);

  return (
<>
    <Helmet>
        <title>Contact Us | PrecisionTech Services</title>
        <meta name="description" content="Get in touch with PrecisionTech Services for all your CNC machining and technical service needs. Fill out our contact form to reach us today." />
        <meta name="keywords" content="contact PrecisionTech Services, CNC machining support, technical services, reach us, contact form, customer support, contact us" />
      </Helmet>

      {loading ? (
        <div className="loader-container">
          <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#1F3946"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        </div>
      ) : (
    
      <section className='contact-page'>
        <div className='contact-form-container'>
        <h2>Contact Us</h2>
        <div className='contact-form-page'>

       <ContactForm />

       </div>
       </div>
       </section>
         )}
</>
  )
}

export default Contact

