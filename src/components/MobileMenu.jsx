import React from 'react'
import {Link} from 'react-router-dom'
import { X } from 'react-bootstrap-icons'

const MobileMenu = ({closeMethod}) => {
  return (
    <>
    <button id='close-nav-menu' onClick={closeMethod}>
      <X />
    </button>
    <ul id='mobile-menu'>
      {/* Mobile Nav Links */}
      <li>
        <Link to='/' onClick={closeMethod}>Home</Link>
      </li>
      <li>
        <Link to='/about' onClick={closeMethod}>About</Link>
      </li>
      <li>
        <Link to='/services' onClick={closeMethod}>Services</Link>
      </li>

      <li>
        <Link to='/products' onClick={closeMethod}>Products</Link>
      </li>

      <li>
        <Link to='/contact' onClick={closeMethod}>Contact</Link>
      </li>

      <li>
        <Link to='/quote' onClick={closeMethod}>Get a quote</Link>
      </li>
      
    </ul>
  </>
  )
}

export default MobileMenu
