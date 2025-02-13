import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import '../scss/App.css'
import QuoteForm from '../components/QuoteForm'
import { RotatingLines } from 'react-loader-spinner'


const Quote = () => {

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
        <title>Request a Quote - PrecisionTech Services</title>
        <meta 
          name="description" 
          content="Get a personalized quote for our CNC milling machine services. Fill out the form to get started today!" 
        />
        <meta name="keywords" 
         content="CNC machining, precision services, CAM programming, retrofitting, machine controls, operator training, technical services, PLC programming, custom manufacturing, CNC milling, precision machining, prototyping, milling services, CNC parts" 
        />
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

    <section className='quote-form'>
      <div className='quote-form-container'>
       <h2 className='quote-title'>Request a Quote</h2>
       <div className='quote-form-page'>
  
        <QuoteForm />

       </div>
      </div>
    </section>
 )}
  </>
  )
}

export default Quote
