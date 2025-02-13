import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
// import mobile menu
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'

const Header = () => {

    //set a state to check if the mobile menu is open or not
const [menuIsOpen, openMenu] = useState(false);


const toggleMobileMenu = () => {
   openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
}
 
  return (
    <>
       <Helmet>
        <title>PrecisionTech Services - Header</title>
        <meta
          name="description"
          content="Navigate through PrecisionTech Services for our offerings including services, products, quotes, and contact. Find all the essential links in our header section."
        />
        <meta
          name="keywords"
          content="PrecisionTech, services, products, contact, quote, home, about, header"
        />
      </Helmet>

    <header className="header">
    <div id='topnav'>

      <div id='logo'>
       <Link to="/">
       <img src="/assets/new-logo.png" alt="Logo" />
       </Link>
      </div>

       {/* Desktop Menu */}
       <div id='main-look-nav'>

       <ul id='menu'>

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

           <li>
               <Link to="/quote" className='quote-link'>GET A QUOTE</Link>
           </li>
       </ul>

       </div>

       {/* Hamburger on desktop */}
       <div id='menu-container'>
            <button id='menu-button' className='show-mobile-menu-button' 
            onClick={toggleMobileMenu}>
                <List id='hamburger-icon'/>
            </button>
        </div>
     </div>

     {/* If menuIsOpen, show the mobile menu */}
     {/* give the mobile menu our close method as a prop */}
     {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
     
     </header>
   </>
  )
}

export default Header
