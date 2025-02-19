import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Footer = () => {
  return (
    <>
    <Helmet>
    <title>PrecisionTech Services - Footer</title>
    <meta
      name="description"
      content="Explore PrecisionTech Services through our footer. Find links to our homepage, about page, services, products, and contact information. Stay connected!"
    />
    <meta 
      name="keywords" 
      content="PrecisionTech, footer, Christchurch, CNC services, contact, services, products" 
    />
     </Helmet>

    <footer >

    <div id='footer' className='footer'>


    <div className='footer-top'>
    <Link to="/" className="footer-logo">
         <img src="/assets/new- logo foot2.png" alt="PrecisionTech Services Logo" />
    </Link>
    </div>

    <div className='footer-quote'>
     
        <li>
        <Link to="/quote" className='quote-link-foot'>GET A QUOTE</Link>
        </li>
           
       
    </div>

      <div className='footer-links'>
        <ul id='footer-menu'>
          <li>
          <Link to="/">Home</Link>
          </li>

          <li>
          <Link to="/about">About</Link>
          </li>

          <li>
          <Link to="/services">Services</Link>
          </li>

          <li>
          <Link to="/products">Products</Link>
          </li>
          
          <li>
          <Link to="/contact">Contact</Link>
          </li> 
        </ul>
      </div>
      <div>
  {/* 
    <div className="social-links-container">
      <ul id='facebook'>
        <li>
          <Link to="facebook-icon" smooth={true} duration={500}>
            <img
              src="/assets/facebook-50.png"
              alt="facebook icon-app"
              onClick={handleOpenFacebookClick}
              className="icon-link"
              id="social-icon"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </li>
      </ul>
    </div>
  */}
</div>

      <div className='footer-address'>
      <p>
      <span>PrecisionTech Services</span>
      <span>436 Halswell road</span>
      <span>Halswell, 8025</span>
      <span>Christchurch</span>
      <span>Canterbury</span>
      <span>New Zealand</span>
      <span>+64 22 590 5390</span>
      <span>compservicenz@gmail.com</span>
      </p>
      </div>
     
      <div className='footer-bottom'>
        <p>&copy; 2025 PrecisionTech Services | Privacy Policy</p>
        <br></br>
        <p>
    Website design and development by{' '}
    <a href="https://portfolio-gules-sigma-74.vercel.app" target="_blank" rel="noopener noreferrer">
      Maria Stromova
    </a>
  </p>
      </div>

    </div>
  </footer>
  </>
  )
}

export default Footer
