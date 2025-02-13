import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async'
import { RotatingLines } from 'react-loader-spinner'

const services = [
    {
      id: 1,
      title: 'Machine breakdown repairs on call',
      description: 'Mechanical and control issues, repairs, supply of second hand parts with warranty, new parts',
      info: `
We provide reliable, on-demand repair services to address mechanical and control system issues in your machinery. Whether it's a sudden breakdown or recurring technical problems, our experienced team is equipped to restore your equipment to peak performance quickly and effectively.
      
What We Offer:

1. Mechanical Repairs: Prompt identification and resolution of mechanical issues to restore functionality.
2. Control System Repairs: Troubleshooting and repairing control systems to ensure seamless operations.
3. Replacement Parts:
- Second-Hand Parts with Warranty: Cost-effective solutions with reliable performance guarantees.
- Brand-New Parts: High-quality, durable components to meet your specific needs.

Why Choose Us?

Experienced technicians with a deep understanding of various machinery.
Quick response times to reduce your downtime.
Competitive pricing without compromising on quality.

Let us help you maintain productivity and avoid unnecessary delays. 
Contact us today to schedule a repair!

    `
    },
    {
      id: 2,
      title: 'Machinery regular servicing',
      description: 'All types of industrial machines',
      info: `
 Keep your industrial machines performing at their best with our professional servicing solutions.
      
What We Service:
We handle all types of industrial machines, catering to a wide range of industries and equipment types.
      
  Our Servicing Includes:
- Inspection and Diagnosis.
- Preventative Maintenance.
- Component Replacement.
- Cleaning and Calibration.

Let us take the hassle out of machinery maintenance with expert servicing tailored to your needs. 
Contact us today to schedule your regular servicing plan!
     `
    },
    {
      id: 3,
      title: 'CAD/CAM support',
      description: '',
      info: `
Our CAD/CAM support services are designed to streamline your design and manufacturing processes, helping you achieve precision and efficiency in your operations. 

What We Offer:

CAD (Computer-Aided Design):

- Assistance with creating and editing detailed technical drawings and 3D models.
- Support for designing components and assemblies to meet your specifications.
- Help with design optimization to improve functionality and reduce manufacturing costs.

CAM (Computer-Aided Manufacturing):

- Integration of CAD designs into manufacturing systems for seamless production.
- Programming and setup of CNC machines using CAM software.
- Troubleshooting and support to ensure accurate machining processes.

Transform your ideas into reality with our professional CAD/CAM support services. 
Contact us to learn how we can assist you in achieving your goals!

     `
    },
    {
      id: 4,
      title: 'Machine operation',
      description: 'On call machine operator for short term cover',
      info: `
We provide on-call machine operators for short-term cover when you need immediate assistance. 

Our on-call machine operators ensure that your machinery continues to run without delays, even when unexpected challenges arise.
      
Contact us today to arrange for an on-call machine operator!
     `
    },
    {
      id: 5,
      title: 'Computer service, upgrade and optimisation networking for machine controls',
      info: `
We specialize in optimizing and upgrading computer systems used for machine control, ensuring they function efficiently and effectively within your production environment. 
Our services are designed to enhance the performance, reliability, and connectivity of the computer systems that drive your machines.

What We Offer:
- Computer System Upgrades: Upgrading your existing systems to ensure compatibility with the latest software and hardware.
- Optimization: Fine-tuning and optimizing your machine control systems to enhance speed, accuracy, and reliability.
- Networking Solutions: Setting up and maintaining secure and efficient networks for machine communication and control.
- Troubleshooting and Support: Identifying and resolving any computer-related issues that may be affecting machine performance.

Contact us to learn how we can improve and optimize your machine control systems today!

     `
    },
    {
      id: 6,
      title: 'Machine Consumable Sale and Supply',
      description: 'Touch probes aftermarket installations, touch probe stylus, relays, and oils',
      info: `
We provide high-quality consumables for machine operations, ensuring that your equipment runs smoothly and efficiently.
From touch probes and stylus to relays and lubricants, we offer a comprehensive selection of machine parts and supplies for all your operational needs.

What We Offer:
- Touch Probes & Aftermarket Installations: We supply and install touch probes, enhancing your machine’s precision and efficiency.
-Touch Probe Stylus: A wide variety of stylus options to match your machine's specific needs.
- Relays: Durable and reliable relays for consistent machine performance.
- Oils & Lubricants: Premium oils and lubricants to keep your machinery running smoothly and minimize wear and tear.

Contact us today to learn more about our machine consumable offerings and to place an order!

     `
    },

  ];

const Services = ({ displayCount, isHomePage  }) => {

//const navigate = useNavigate();
const servicesClassName = isHomePage ? "service-section-home" : "services-page";

const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simulate loading for 3 seconds
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);

    return (
<div >

    <Helmet>
    <title>Our Services | PrecisionTech</title>
    <meta name="description"
    content="Explore our comprehensive range of CNC machining and technical services, including machine repairs, regular servicing, CAD/CAM support, and more."/>
    <meta name="keywords" 
    content="CNC machining, machine repairs, technical services, CAM programming, operator training, machinery servicing, CAD/CAM support" />
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

     <div className={servicesClassName}>

     
      <section className='service-page-section'>
      <h2>Our Services</h2>
      <div className="services-container">

      <div className="service-box">
        
          <div className="service-grid">
            {services.slice(0, displayCount).map((service, index) => (
              <div className="grid" key={index}>
                <h3>{service.title}</h3>
                <h4>{service.description}</h4>
                <Link to={`/service/${service.id}`} className="learn-more-link" >Learn More</Link>
              </div>
            ))}
          </div>
          </div>

      </div>
      </section>
      </div>
      )}
      </div>
    )
  }
  export { services }
  export default Services
  
