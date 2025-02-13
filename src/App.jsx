import { HashRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './scss/App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Links from './Links'

function App() {
  
  return (
    <HelmetProvider>
    <HashRouter>
    <Header/>
    <Links />
    <Footer/>
    </HashRouter>
    </HelmetProvider>
  )
}

export default App
