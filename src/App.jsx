import { HashRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import './scss/App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Links from './Links'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }, [pathname])

  return null
}

function App() {
  
  return (
    <HelmetProvider>
    <HashRouter>
  <ScrollToTop />
  <Header/>
  <Links />
  <Footer/>
</HashRouter>
    </HelmetProvider>
  )
}

export default App

