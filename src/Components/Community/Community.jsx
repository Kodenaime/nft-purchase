import React, { useState } from 'react'

import './community.css'
import { GoChevronRight } from "react-icons/go";

const communityData = [
  {
    id: '1',
    title: 'Royalties',
    description: 'TEarn a percentage of each resale of your NFT.' 
  },
  {
    id: '2',
    title: 'Low Fees & Instant Transactions',
    description: 'Enjoy low gas fees and fast transactions powered by our platform’s efficiency.' 
  },
  {
    id: '3',
    title: 'Ownership & Authenticity',
    description: 'Every NFT is backed by blockchain technology ensuring true ownership and authenticity.' 
  },
  {
    id: '4',
    title: 'Global Marketplace',
    description: 'Connect with buyers, sellers, and collectors from around the world.' 
  }
]


const Community = () => {

  const [infos, setInfos] = useState(communityData)
  
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
        {
            infos.map(({id, title, description}) => {
              return <div key={id} className="com-card">
                  <h2>{ title }</h2>
                  <p>{ description }</p>
              </div>
            })
        }

      </div>
    </section>
  )
}

export default Community