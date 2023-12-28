import React from 'react'

const BottomBar = () => {
  return (
    <div className='bg-slate-600 h-[50%] py-10 px-20 flex justify-between'>
      <div>
        <h1 className='text-3xl font-semibold'><span className='text-5xl text-cyan-300'>e</span>coharvest</h1>
        <div className="text-slate-200 mt-2">
            <h2 className='text-md font-medium'>Main Office</h2>
            <div className="mt-2 text-sm font-normal">
                <p>Jalan Monjali No. 5</p>
                <p>Daerah Istimewa Yogyakarta</p>
                <p>Indonesia</p>
            </div>
            <h2 className='text-sm font-medium mt-2'>Customer Service</h2>
            <div className="mt-2 text-sm font-normal">
                <p>contact@agro.tech</p>
                <p>085879074218</p>
            </div>
        </div>
      </div>
      <div className='flex'>
        <div className="text-slate-200 mt-2 mr-20">
            <h2 className='text-lg font-medium border-b-2 border-opacity-85'>Our Best Products</h2>
            <div className="mt-2 text-sm font-normal flex flex-col gap-2">
                <p>Smart Farming Kit</p>
                <p>Organic Fertilizer</p>
                <p>Crop Monitoring</p>
            </div>
        </div>
        <div className="text-slate-200 mt-2 mr-20">
            <h2 className='text-lg font-medium border-b-2 border-opacity-85'>Company</h2>
            <div className="mt-2 text-sm font-normal flex flex-col gap-2">
                <p>About Us</p>
                <p>Careers</p>
                <p>Partner With Us</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
