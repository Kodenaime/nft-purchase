import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Cta from './Components/Cta/Cta'
import Hero from './Components/Hero/Hero'
import Community from './Components/Community/Community'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'
import Featured from './Components/Featured/Featured'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Featured />
        <Community />
        <Support />
        <Cta />
        <Footer />
    </>
  )
}

export default App