import React from 'react'

import './featured.css'
import { IoFlameOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import nft1 from '../../Assets/nft1.png'
import nft2 from '../../Assets/nft2.png'
import nft3 from '../../Assets/nft3.png'
import nft4 from '../../Assets/nft4.png'
import nft5 from '../../Assets/nft5.png'
import nft6 from '../../Assets/nft6.png'

const Featured = () => {
  return (
    <section className="section container feat-container">
       <div className="com-header">
        <h2>Featured Collections</h2>
        <a href="" className="butt">See all Collection <GoChevronRight /></a>
      </div>

      <div className="feat-cards">

        <div className="feat-card">
          <div className="feat-top">
            <img src={nft1} alt="" />
          </div>

          <div className="feat-down">
            <div className="name">
              <h3>Guy Ape</h3>
              <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
            </div>

            <div className="feat-cont">
                <div className="time">
                  <h5>ends in:</h5>
                  <h4>18h 23m 53s</h4>
                </div>

                <div className="bid">
                  <h5>current bid:</h5>
                  <h4>12.9 ETH</h4>
                </div>
            </div>        

          </div>
          <a className="button">View Collection</a>
            
        </div>
        <div className="feat-card">
          <div className="feat-top">
            <img src={nft2} alt="" />
          </div>

          <div className="feat-down">
            <div className="name">
              <h3>Sassy Ape</h3>
              <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
            </div>

            <div className="feat-cont">
                <div className="time">
                  <h5>ends in:</h5>
                  <h4>18h 23m 53s</h4>
                </div>

                <div className="bid">
                  <h5>current bid:</h5>
                  <h4>12.9 ETH</h4>
                </div>
            </div>        

          </div>
          <a className="button">View Collection</a>
            
        </div>
        <div className="feat-card">
          <div className="feat-top">
            <img src={nft3} alt="" />
          </div>

          <div className="feat-down">
            <div className="name">
              <h3>Worker Ape</h3>
              <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
            </div>

            <div className="feat-cont">
                <div className="time">
                  <h5>ends in:</h5>
                  <h4>18h 23m 53s</h4>
                </div>

                <div className="bid">
                  <h5>current bid:</h5>
                  <h4>12.9 ETH</h4>
                </div>
            </div>        

          </div>
          <a className="button">View Collection</a>
            
        </div>
        <div className="feat-card">
          <div className="feat-top">
            <img src={nft4} alt="" />
          </div>

          <div className="feat-down">
            <div className="name">
              <h3>Cop Ape</h3>
              <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
            </div>

            <div className="feat-cont">
                <div className="time">
                  <h5>ends in:</h5>
                  <h4>18h 23m 53s</h4>
                </div>

                <div className="bid">
                  <h5>current bid:</h5>
                  <h4>12.9 ETH</h4>
                </div>
            </div>        

          </div>
          <a className="button">View Collection</a>
            
        </div>
        <div className="feat-card">
          <div className="feat-top">
            <img src={nft5} alt="" />
          </div>

          <div className="feat-down">
            <div className="name">
              <h3>Chill Ape</h3>
              <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
            </div>

            <div className="feat-cont">
                <div className="time">
                  <h5>ends in:</h5>
                  <h4>18h 23m 53s</h4>
                </div>

                <div className="bid">
                  <h5>current bid:</h5>
                  <h4>12.9 ETH</h4>
                </div>
            </div>        

          </div>
          <a className="button">View Collection</a>
            
        </div>
        <div className="feat-card">
          <div className="feat-top">
            <img src={nft6} alt="" />
          </div>

          <div className="feat-down">
            <div className="name">
              <h3>Thug Ape</h3>
              <a href="" className="bot"><IoFlameOutline /> Trending Now!</a>
            </div>

            <div className="feat-cont">
                <div className="time">
                  <h5>ends in:</h5>
                  <h4>18h 23m 53s</h4>
                </div>

                <div className="bid">
                  <h5>current bid:</h5>
                  <h4>12.9 ETH</h4>
                </div>
            </div>        

          </div>
          <a className="button">View Collection</a>
            
        </div>
        
      </div>

    </section>
  )
}

export default Featured