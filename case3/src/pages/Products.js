import React from 'react'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'
import { products } from '../assets/Products'

const Products = () => {
  return (
    <div className='h-screen bg-slate-200'>
      <Navbar />
      <div className="w-[100%] flex flex-col gap-10 mt-20 h-[300%] bg-slate-200 p-5 items-center">
        <h1 className='text-center text-blue-800 font-bold text-4xl'>Our Products</h1>
        <p className='w-[90%] text-md text-slate-800 font-semibold md:w-[50%]'>Jelajahi rangkaian solusi pertanian inovatif dan berkelanjutan kami yang dirancang untuk meningkatkan produktivitas dan mempromosikan praktik pertanian ramah lingkungan.</p>
        <div className="grid grid-cols-1 gap-9 justify-center mx-auto md:grid-cols-3">
            {products.map((p) => (
                <div className="group w-60 h-80 rounded-xl border-blue-700 border-solid border-2 hover:cursor-pointer hover:border-4 hover:scale-105 hover:bg-slate-100 relative m-0 p-0">
                <div className="flex flex-col p-4" key={p.id}>
                  <img 
                    src="/assets/Product.jpg" 
                    alt="" 
                    className='w-[100%] rounded-xl'
                  />
                  <div className="flex flex-col gap-2 items-center">
                    <p className='font-semibold text-blue-700'>{p.name}</p>
                    <p className='text-sm text-slate-800'>{p.description.slice(0, 120)} <span className='text-blue-500 text-md'>.....</span></p>
                  </div>
                </div>
                <p className="absolute bottom-0 left-0 bg-blue-700 text-center font-semibold text-sm text-white w-[100%] opacity-20 group-hover:opacity-100 transition-all duration-300 px-2 py-1">Selengkapnya</p>
              </div>
            ))}
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default Products
