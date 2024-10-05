import React from 'react'
import './navbar.css'
import logo from'../../Assets/logo.png'

import { useState, useRef } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {

  const navRef = useRef();

    const showNavbar = () => {
         navRef.current.classList.toggle('responsive_nav');
     }

  const [activeNav, setActiveNav] = useState('#');      

  const [isNavShow, setIsNavShow] = useState(false);

  return (
    
    <header>
		<a href='/home' className="logo">
          <img src={logo}  alt="Logo for the website" /> 
       </a>
			<nav className='nav-items' ref={navRef}>
				<a href="/home">Home</a>
				<a href="/visa">Market Place</a>	
				<a href="/blog">Create</a>			
        <a href="/blog">Community</a>	
        <a href="/info">Support</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaRegWindowClose />
				</button>
			</nav>
      <a href='' className="btn boton">Connect Wallet</a>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBarsStaggered />
			</button>
	</header>
  )
}

export default Navbar