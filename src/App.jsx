import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Cta from './Components/Cta/Cta'
import Hero from './Components/Hero/Hero'
import Community from './Components/Community/Community'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Community />
        <Cta />
    </>
  )
}

export default App