import React from 'react'
import './About.css'
import theme from '../../assets/theme.png'
import fenny from '../../assets/fenny.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      
     <div className="title">
        <h1>About Me</h1>
        <img src={theme} alt="" height={400} />
      </div>
      <div className='content'>
      <div className='about-content'>
        <p>I'm Fenny,<span> React Developer with experties in creating dynamic web application.</span></p><br/>
        <p> Our experties spans HTML, CSS, JavaScript and various server side frameworks. I excel in building seamless web experiances, leveraging my knowledge of Reacct for interactive UI components. My comprehensive skill set enables me to handle the entire development process, ensuring cohesive integration and functionality across all layers of a web application.</p>
      </div>
      <div className='about-img'>
        <img src={fenny} alt="" height={400}/>
      </div>
      </div>
    </div>
  )
}

export default About
