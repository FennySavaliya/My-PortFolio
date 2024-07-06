import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Skill from './Component/Skill/Skill'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>     
      <Hero/> 
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
