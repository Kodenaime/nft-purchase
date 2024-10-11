import React from 'react'

import './cta.css'

const Cta = () => {
  return (
    <section className="container section cta-container">
      <h2 className="cta-head">Start your NFT Journey Today</h2>
      <p className="cta-text">Whether you're a creator ready to mint your first NFT or a collector
         searching for unique digital assets, our platform makes it easy to dive into the world of NFTs.
         Start exploring or creating today!</p>

      <div className="cta-btns">
        <a href="" className="btn mover">Explore Market Place</a>
        <a href="" className="btn-primary btn">Create NFT's</a>
      </div>
    </section>
  )
}

export default Cta