import React from 'react'

import './hero.css'
import heroes from '../../Assets/heroes.png'

const Hero = () => {
  return (
    <section className="container section hero-container">
      <div className="hero-left">
        <h1 className='hero-head'>Discover, Create, <br /> and Trade Digital <br /> Art with NFTs</h1>
        <p className='hero-text'>Unlock the world of digital ownership—buy, sell,
           and collect unique digital assets on the decentralized marketplace.</p>
        <div className="hero-btns">
          <a href="" className="btn mover">Explore NFTs</a>
          <a href="" className="btn-primary btn">Create NFTs</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroes} alt="hero image" />
      </div>
      
    </section>
  )
}

export default Hero