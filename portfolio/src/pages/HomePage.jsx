import React from 'react'
import Navbar from '../components/Navbar'
import HeroPage from './HeroPage'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Certificates from './Certificates'
import Chatbot from './Chatbot'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div>
      <HeroPage/>
      <Education/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Certificates/>
      <Chatbot/>
      <Contact/>
    </div>
  )
}

export default HomePage