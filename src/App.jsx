import React from 'react'
import Navbar from './component/Navbar'
import './App.css'
import Home from './component/Home'
import Skills from './component/Skills'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
const App = () => {
  return (
   <>
    <Navbar/>
    <Home/>
    <About/>
<Skills/>
<Contact/>
<Footer/>
    </>
  )
}

export default App