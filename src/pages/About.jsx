import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="wrapper">
      <Helmet>
        <title>About Us - PrecisionTech Services</title>
        <meta name="description" content="Learn more about PrecisionTech Services, a leading provider of precision solutions including CNC machining, mechanical fault finding, CAM programming, and more." />
        <meta name="keywords" content="About PrecisionTech Services, CNC machining, mechanical fault finding, CAM programming, PLC programming, machine controls, operator training, retrofitting, technical services" />
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
        <section className="about">
          <h2>About Us</h2>
          <div className="text">
            <p>At PrecisionTech Services, we are dedicated to delivering precision solutions tailored to your needs. With our expertise in mechanical and 
              control fault finding, CNC machining support, CAM programming, and more, we strive to exceed your expectations in every aspect of 
              technical service.</p>
            <p>Our team is committed to excellence, bringing together a wealth of knowledge and experience in various fields to provide you with the 
              highest quality of service. Whether you require assistance with CNC machine PLC programming, retrofitting machine controls, or 
              operator training, we are here to support you every step of the way.</p>
            <p>Let's optimize your processes and drive success together!</p>
          </div>

          <Link to="/contact">
          <button className="contact">CONTACT</button>
          </Link>

        </section>
      )}
    </div>
  );
};

export default About;

