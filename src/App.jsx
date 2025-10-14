import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage.jsx'
import Experience from './pages/Experience.jsx'
import Project from './pages/Project.jsx'
import Contactus from './pages/Contactus.jsx'
import Aboutus from './pages/Aboutus.jsx'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/conatct-us" element={<Contactus />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </>
  )
}

export default App