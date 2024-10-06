import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Cta from './Components/Cta/Cta'
import Hero from './Components/Hero/Hero'
import Community from './Components/Community/Community'
import Support from './Components/Support/Support'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Community />
        <Support />
        <Cta />
    </>
  )
}

export default App