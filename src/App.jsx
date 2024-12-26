import './App.css'
import React from 'react'
import About from './components/About/About'
import Links from './components/Links/Links'
import Footer from './components/Footer/Footer'
import LinksModal from './components/LinksModal/LinksModal'

const App = () => {
  return (
    <>
      <About />
      <LinksModal />
      <Links />
      <Footer />
    </>
  )
}

export default App