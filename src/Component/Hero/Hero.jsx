import React from 'react'
import './Hero.css'
import hero1 from '../../assets/hero1.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/insta.png'
import fb from '../../assets/fb.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero-container'>
      <div className='hero-content'>
        <h2><span>Building Digital</span><span> Experiences That Inspire</span> </h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas Seamless and Visually Stunning Web Solutions
        </p>
        <div className='hero-action'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
          <div className='hero-resume'>My Resume</div>
          </div>
          <div className='connect-icon'>
            <img src={github} alt="" height={50}/>
            <img src={linkedin} alt="" height={50} />
            <img src={insta} alt="" height={50}/>
            <img src={fb} alt="" height={50} />
            
          </div>
      </div>

      <div className='hero-img'>
        <div className='photo'>
        
          <img src={hero1} alt="" height={370} />
        
        </div>

        <div>
          <div className="tech-icon">
            <img src={html} alt="" height={50}/>
          </div>

          <div className='tech-icon'>
            <img src={css} alt="" height={50}/>
          </div>

          <div className='tech-icon'>
            <img src={js} alt="" height={50}/>
          </div>

          <div className='tech-icon'>
            <img src={react} alt="" height={50}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
