import React from 'react'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'

const About = () => {
  return (
    <div className='h-screen bg-slate-200'>
      <Navbar />
      <div className="w-[100%] flex flex-col gap-10 mt-20 h-[300%] bg-slate-200 p-5"></div>
      <BottomBar />
    </div>
  )
}

export default About
