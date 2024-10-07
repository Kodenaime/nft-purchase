import React from 'react'

import './footer.css'
import logo from '../../Assets/logo.png'
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="border"></div>
      <section className="container foot-container">
      <div className="foot-top">
        <div className="foot-left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p className="foot-text">
            Unlock the world of digital ownership—buy, sell, and collect unique digital assets on the decentralized marketplace.
          </p>
          <div className="socials">
            <a href="" className="social"><FaXTwitter /></a>
            <a href="" className="social"><FaDiscord /></a>
            <a href="" className="social"><FaTelegramPlane /></a>
            <a href="" className="social"><FaYoutube /></a>
          </div>
        </div>

          <div className="foot-right">
              <div className="foot-links">
                <h3>Quick Links</h3>
                <a className='foot-link' href="">Explore</a>
                <a className='foot-link' href="">Marketplace</a>
                <a className='foot-link' href="">Create</a>
                <a className='foot-link' href="">Community</a>
              </div>

              <div className="foot-links">
                <h3>Resources</h3>
                <a className='foot-link' href="">Help Center</a>
                <a className='foot-link' href="">Paterns</a>
                <a className='foot-link' href="">Blog</a>
                <a className='foot-link' href="">Newsletter</a>
              </div>

              <div className="foot-links">
                <h3>Company</h3>
                <a className='foot-link' href="">About Us</a>
                <a className='foot-link' href="">Careers</a>
                <a className='foot-link' href="">Support</a>
                
              </div>
          </div>
      </div>
      
      
      <div className="foot-down">
        <small> &copy; 2024 Sapphire. All rights reserved.</small>
        <div className="terms">
          <a href="" className="term">Privacy Policy</a>
          <a href="" className="term">Terms and Conditions</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer