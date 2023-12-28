import React from 'react'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'

const About = () => {
  return (
    <div className='h-screen bg-slate-200'>
      <Navbar />
      <div className="w-[100%] flex flex-col gap-10 mt-20 md:h-[120%] bg-slate-200 py-5 px-20 items-center">
        <h1 className='text-blue-800 font-bold text-4xl'>About Us</h1>
        <p className='text-slate-800 font-semibold text-xl'>
          EcoHarvest adalah perusahaan yang berkomitmen untuk mendukung pertanian berkelanjutan dan
          ramah lingkungan. Kami percaya bahwa inovasi teknologi dapat memberikan solusi bagi
          tantangan dalam dunia pertanian modern.
        </p>
        <div className="relative w-[100%] flex mt-10">
            <div className="bg-cyan-300 rounded-lg p-5 absolute inset-0 mt-3 ml-3 w-[75%] h-[100%]"></div>
            <div className="bg-blue-200 rounded-lg p-5 relative z-2 w-[75%] h-[100%] flex items-center gap-5 flex-col md:flex-row">
                <img src="/assets/Founder.jpg" alt="" className='md:w-80 md:h-80 rounded-3xl opacity-90 hover:opacity-100 w-56 h-56'/>
                <div className="flex flex-col gap-5">
                    <h1 className='text-2xl font-bold text-blue-900'>Our Founder</h1>
                    <p className='font-semibold text-slate-800 text-lg'>
                    Agus Susilo adalah pendiri dan CEO EcoHarvest. Dengan latar belakang yang kuat dalam
                    pertanian dan teknologi, Agus memimpin tim dengan visi untuk menciptakan perubahan
                    positif dalam industri pertanian global.
                    </p>
                </div>
            </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default About
