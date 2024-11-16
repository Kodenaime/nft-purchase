import React, { useState } from 'react'

import './about.css'

const aboutData = [
  {
    id: '1',
    title: 'Create & Mint',
    description: 'Turn your digital creations into verifiable, tradable NFTs in just a few clicks.' 
  },
  {
    id: '2',
    title: 'Buy & Sell',
    description: 'Explore our marketplace, find unique assets, and easily transact using your preferred crypto wallet.' 
  },
  {
    id: '3',
    title: 'Earn & Collect',
    description: 'Earn royalties from your creations or build a collection of rare digital assets that appreciate in value.' 
  }
]

const About = () => {

  const [info, setInfo] = useState(aboutData)

  return (
    <section className="container section about-container">
      <h2>How it Works</h2>
      <div className="about-cards">
          {
            info.map(({id, title, description}) => {
              return  <div key={id} className="about-card">
                  <h4>{ title }</h4>
                  <p>{ description }</p>
              </div>
            })
          }
       
        
      </div>
    </section>
  )
}

export default About