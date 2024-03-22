import { useState } from 'react'
import "./everything.css"
import Navbar from './components/Navbar'
import Main from './components/Main'
import Bottom from './components/Bottom'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import FirstYear from './components/FirstYear'
import SecondYear from './components/SecondYear'
import ThirdYear from './components/ThirdYear'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AskUs from './components/AskUs'
import About from './components/About'
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' index element={<LandingPage/>} />
      <Route path='/First-year' index element={<FirstYear/>} />
      <Route path='/Second-year' index element={<SecondYear/>} />
      <Route path='/Third-year' index element={<ThirdYear/>} />
      <Route path='/Contact' index element={<Contact/>} />
      <Route path='/AskUs' index element={<AskUs/>} />
      <Route path='/About' index element={<About/>} />

    </Routes>
    <Footer/>
 

    </>
  )
}

export default App
