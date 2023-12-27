import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5"
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi"
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {

    const [openModal, setOpenModal] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
        <nav className='bg-blue-800 text-white font-semibold h-[10%] flex items-center px-10 justify-between'>
            <h1 className='text-2xl'><span className='text-4xl text-cyan-300'>e</span>coharvest</h1>
            <div className="gap-8 items-center hidden md:flex">
                <Link to={'/'}>
                    <p className='hover:scale-105 hover:cursor-pointer hover:border-b'>Home</p>
                </Link>
                <Link to={'/products'}>
                    <p className='hover:scale-105 hover:cursor-pointer hover:border-b'>Products</p>
                </Link>
                <Link to={'/aboutus'}>
                    <p className='hover:scale-105 hover:cursor-pointer hover:border-b'>About Us</p>
                </Link>
            </div>
            <div 
                className={`hover:scale-110 hover:text-slate-300 hover:cursor-pointer md:block hidden ${openModal ? "text-slate-300" : "text-white"}`}
                onClick={() => setOpenModal(!openModal)}
            >
                <IoPerson className='text-xl'/>
            </div>
            <div 
                className="hover:scale-110 hover:text-slate-300 hover:cursor-pointer md:hidden block"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
                <FiAlignJustify className='text-4xl'/>
            </div>
            {openModal && (
                <div
                    className='bg-white absolute right-5 top-20 p-4 rounded-lg w-52 flex flex-col gap-2 opacity-0 transition-opacity duration-500'
                    style={{ opacity: 1 }}
                >
                    <p className='text-white bg-blue-600 px-2 py-1 rounded-md text-center'>Sign In</p>
                    <p className='text-center text-blue-600'>Sign Up</p>
                </div>
            )}
            {openMobileMenu && (
                <>
                    <div className="bg-gray-700 absolute z-9 inset-0 opacity-40"></div>
                    <div className='bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-96 z-10 flex flex-col gap-5 rounded-xl p-3'>
                        <RxCross1 className='text-blue-600 font-extrabold' onClick={() => setOpenMobileMenu(false)}/>
                        <p className='text-center text-blue-600 text-2xl'>Home</p>
                        <p className='text-center text-blue-600 text-2xl'>Products</p>
                        <p className='text-center text-blue-600 text-2xl'>About Us</p>
                        <p className='text-white bg-blue-600 px-2 py-1 rounded-md text-center text-2xl mt-10'>Sign In</p>
                        <p className='text-center text-blue-600 text-2xl'>Sign Up</p>
                    </div>
                </>
            )}
        </nav>
  )
}

export default Navbar
