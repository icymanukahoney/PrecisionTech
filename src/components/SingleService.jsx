import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { services } from '../pages/Services'
import { Helmet } from 'react-helmet-async'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import {ArrowLeft} from 'react-bootstrap-icons'

const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()


   
  useEffect(() => {
    
    console.log('Services');
  
    const fetchService = () => {
      // Simulate a delay for the loader
      setTimeout(() => {

         // Find the movie with the matching ID
        const selectedService = services.find((service) => service.id === Number(id));
        
        // Set the found service to the state
        setService(selectedService);

        setLoading(false); // Set loading to false when done

      }, 2000); // Adjust delay as needed
    };
    fetchService();
    
  }, [id]);

  // Render the component based on the movie data
  return (
    <div className='full-page-single-service'>

      <Helmet>
        <title>{service ? `${service.title} | PrecisionTech Services` : 'Service Details | PrecisionTech Services'}</title> {/* Dynamic title */}
        <meta
          name="description"
          content={service ? service.description : 'Explore the service details of PrecisionTech Services. Offering expert CNC machining, mechanical fault finding, and more.'}
        /> 
        <meta
          name="keywords"
          content="CNC machining, mechanical fault finding, technical services, retrofitting, machine controls, operator training, PrecisionTech Services"
        /> {/* Meta keywords */}
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
        ) :  (

    <div className="single-service-page">
    <button className='back-button' onClick={() => navigate(-1)}><ArrowLeft/>Go Back</button>
          
          <div className="text-column">
          <h3>{service.title}</h3>
          <h4>{service.description}</h4>
          <p className="info-page">{service.info}</p>
          </div>

        <Link to="/contact">
          <button className="contact">CONTACT</button>
        </Link>
    </div>
 )}
    </div>
  );
};

export default SingleService
