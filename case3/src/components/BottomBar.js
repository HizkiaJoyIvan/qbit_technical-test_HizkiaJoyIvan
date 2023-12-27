import React from 'react'

const BottomBar = () => {
  return (
    <div className='bg-slate-600 h-[50%] py-10 px-20'>
        <h1 className='text-2xl font-semibold'><span className='text-4xl text-cyan-300'>e</span>coharvest</h1>
        <div className="text-slate-200 mt-2">
            <h2 className='text-sm font-medium'>Main Office</h2>
            <div className="mt-2 text-xs font-normal">
                <p>Jalan Monjali No. 5</p>
                <p>Daerah Istimewa Yogyakarta</p>
                <p>Indonesia</p>
            </div>
            <h2 className='text-sm font-medium mt-2'>Customer Service</h2>
            <div className="mt-2 text-xs font-normal">
                <p>contact@agro.tech</p>
                <p>085879074218</p>
            </div>
        </div>
    </div>
  )
}

export default BottomBar
