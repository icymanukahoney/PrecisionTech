import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Quote from './pages/Quote'
import Contact from './pages/Contact'
import Products from './pages/Products'


//import Test from './pages/Test';     <Route path='/test' element={<Test/>}/>


// import components
import SingleService from './components/SingleService'


const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
       
        <Route path='/service/:id' element={<SingleService />} />
        <Route path='/contact' element={<Contact/>}/>
       
        <Route path="/quote" element={<Quote />} />
        

    </Routes>
  )
}

export default Links


