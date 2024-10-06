import React from 'react'

import './support.css'
import eth from '../../Assets/etherum.png'
import sol from '../../Assets/solana.png'
import meta from '../../Assets/metamask.png'
import pol from '../../Assets/polygon.png'
import coin from '../../Assets/coin.png'
import phant from '../../Assets/phantom.png'
import chain from '../../Assets/chain.png'
import met from '../../Assets/meta.png'

const Support = () => {
  return (
    <section className="section container sup-container">
      <h2 className="sup-head">
        Our Partners & Integrations
      </h2>
      <div className="sup-cards">
        <div className="sup-card">
          <img src={eth} alt="" />
        </div>
        <div className="sup-card">
          <img src={sol} alt="" />
        </div>
        <div className="sup-card">
          <img src={meta} alt="" />
        </div>
        <div className="sup-card">
          <img src={pol} alt="" />
        </div>
        <div className="sup-card">
          <img src={coin} alt="" />
        </div>
        <div className="sup-card">
          <img src={phant} alt="" />
        </div>
        <div className="sup-card">
          <img src={chain} alt="" />
        </div>
        <div className="sup-card">
          <img src={met} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Support