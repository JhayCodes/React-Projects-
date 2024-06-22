import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import ViewAllJobs from './components/ViewAllJobs'
import './App.css'


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <HomeCards />
    <ViewAllJobs />

    </>
  )
}

export default App
