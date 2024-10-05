import React from 'react'

import './community.css'
import { GoChevronRight } from "react-icons/go";

const Community = () => {
  return (
    <section className="container section com-container">
      <div className="com-header">
        <h2>Join our growing NFT Community</h2>
        <a href="" className="butt">Join Community <GoChevronRight /></a>
      </div>
      <h5 className="com-head">
        Join Artify NFT community to enjoy these perks.
      </h5>

      <div className="com-cards">
        <div className="com-card">
          <h2>Royalties</h2>
          <p>Earn a percentage of each resale of your NFT.</p>
        </div>
        <div className="com-card">
          <h2>Low Fees & Instant Transactions</h2>
          <p>Enjoy low gas fees and fast transactions powered by our platform’s efficiency.</p>
        </div>
        <div className="com-card">
          <h2>Ownership & Authenticity</h2>
          <p>Every NFT is backed by blockchain technology ensuring true ownership and authenticity.</p>
        </div>
        <div className="com-card">
          <h2>Global Marketplace</h2>
          <p>Connect with buyers, sellers, and collectors from around the world.</p>
        </div>
      </div>
    </section>
  )
}

export default Community