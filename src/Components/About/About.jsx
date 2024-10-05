import React from 'react'

import './about.css'

const About = () => {
  return (
    <section className="container about-container">
      <h2>How it Works</h2>
      <div className="about-cards">
        <div className="about-card">
          <h4>Create & Mint</h4>
          <p>Turn your digital creations into verifiable, tradable NFTs in just a few clicks.</p>
        </div>
        <div className="about-card">
          <h4>Buy & Sell</h4>
          <p>Explore our marketplace, find unique assets, and easily transact using your preferred crypto wallet.</p>
        </div>
        <div className="about-card">
          <h4>Earn & Collect</h4>
          <p>Earn royalties from your creations or build a collection of rare digital assets that appreciate in value.</p>
        </div>
      </div>
    </section>
  )
}

export default About