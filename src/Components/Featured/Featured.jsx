import React, { useState } from 'react'

import './featured.css'
import { IoFlameOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import nft1 from '../../Assets/nft1.png'
import nft2 from '../../Assets/nft2.png'
import nft3 from '../../Assets/nft3.png'
import nft4 from '../../Assets/nft4.png'
import nft5 from '../../Assets/nft5.png'
import nft6 from '../../Assets/nft6.png'

const data = [
  {
    id: '1',
    image: nft1,
    name: 'Guy Ape',
    deadline: 'ends in:',
    time: '18h 23m 53s',
    bid: 'current bid',
    price: '12.9 ETH'
  },
  {
    id: '2',
    image: nft2,
    name: 'Sassy Ape',
    deadline: 'ends in:',
    time: '16h 52m 46s',
    bid: 'current bid',
    price: '15.6 ETH'
  },
  {
    id: '3',
    image: nft3,
    name: 'Worker Ape',
    deadline: 'ends in:',
    time: '21h 43m 24s',
    bid: 'current bid',
    price: '10.9 ETH'
  },
  {
    id: '4',
    image: nft4,
    name: 'Cop Ape',
    deadline: 'ends in:',
    time: '12h 00m 22s',
    bid: 'current bid',
    price: '18.2 ETH'
  },
  {
    id: '5',
    image: nft5,
    name: 'Chill Ape',
    deadline: 'ends in:',
    time: '23h 12m 38s',
    bid: 'current bid',
    price: '13.7 ETH'
  },
  {
    id: '6',
    image: nft6,
    name: 'Thug Ape',
    deadline: 'ends in:',
    time: '15h 15m 15s',
    bid: 'current bid',
    price: '15.0 ETH'
  },
]

const Featured = () => {

  const [posts, setPosts] = useState(data)

  return (
    <section className="section container feat-container">

       <div className="com-header">
          <h2>Featured Collections</h2>
          <a href="" className="butt">See all Collection <GoChevronRight /></a>
        </div>

      <div className="feat-cards">     
        {
          posts.map(({id, image, name, deadline, time, bid, price}) => {
            return <div key={id} className="feat-card">

                <div className="feat-top">
                  <img src={image} alt={name} />
                </div>

                <div className="feat-down">
                  <div className="name">
                    <h3>{ name }</h3>
                    <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
                  </div>

                  <div className="feat-cont">
                    <div className="time">
                      <h5>{ deadline }</h5>
                      <h4>{ time }</h4>
                    </div>

                    <div className="bid">
                      <h5>{ bid }</h5>
                      <h4>{ price }</h4>
                    </div>
                  </div>

                </div>

            </div>
          })
        }
      </div>

    </section>
  )
}

export default Featured