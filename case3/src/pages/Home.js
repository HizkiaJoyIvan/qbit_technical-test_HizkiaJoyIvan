import React from 'react'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'

const Home = () => {
  return (
    <>
        <div className='h-screen bg-slate-200'>
            <Navbar />
            <div className="w-[100%] flex flex-col gap-10 mt-20 h-[300%] bg-slate-200 p-5">
                <div className="flex mx-10 justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className='text-blue-800 text-5xl font-bold'>Harvesting Tomorrow, <br/>
                            Today with EcoHarvest
            
                        </h1>
                        <button className='rounded-full bg-slate-200 text-blue-700 border-solid border-4 border-blue-700 hover:bg-blue-700 hover:text-white font-bold w-[40%] justify-start p-2 text-lg'>Get Started</button>
                    </div>
                    <img 
                        src="/assets/Farmer.png" 
                        alt="" 
                        className='w-96 h-96'
                    />
                </div>
                <div className="mt-10 flex flex-col gap-10 px-10">
                    <div className='flex justify-center items-center gap-5'>
                        <div className="relative w-[50%] hover:scale-110 h-[75%]">
                            <div className="bg-cyan-300 rounded-lg p-5 absolute inset-0 mt-3 ml-3 w-[75%] h-[100%]"></div>
                            <div className="bg-blue-200 rounded-lg p-5 relative z-10 w-[75%] h-[100%] flex items-center">
                                <h1 className="text-blue-800 font-bold text-2xl">
                                    Membantu Pertanian untuk Dunia yang Lebih Hijau
                                </h1>
                            </div>
                        </div>
                        <div className="opacity-90 flex items-center w-[100%] hover:scale-105 hover:opacity-80">
                            <img src="assets/Petani.jpg" alt="" className='rounded-l-3xl h-52 w-[50%]'/>
                            <p className='p-2 rounded-r-3xl bg-blue-500 text-white text-sm  flex items-center h-52 w-[50%] font-semibold'>Kami menyediakan solusi pertanian ramah lingkungan untuk mendukung pertumbuhan tanaman yang sehat dan produktif.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="opacity-90 flex items-center w-[100%] hover:scale-105 hover:opacity-80">
                            <img src="assets/Content2.jpg" alt="" className='rounded-l-3xl h-52 w-[50%]'/>
                            <p className='p-2 rounded-r-3xl bg-blue-500 text-white text-sm  flex items-center h-52 w-[50%] font-semibold'>Jalin kerjasama dengan kami untuk menciptakan masa depan pertanian yang lebih baik.
                                Temukan peluang kemitraan yang saling menguntungkan.</p>
                        </div>
                        <div className="relative w-[50%] hover:scale-110 h-[75%] ml-20">
                            <div className="bg-cyan-300 rounded-lg p-5 absolute inset-0 mt-3 ml-3 w-[75%] h-[100%]"></div>
                            <div className="bg-blue-200 rounded-lg p-5 relative z-10 w-[75%] h-[100%] flex items-center">
                                <h1 className="text-blue-800 font-bold text-2xl">
                                    Kemitraan dan Kolaborasi
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="relative w-[50%] hover:scale-110 h-[75%]">
                            <div className="bg-cyan-300 rounded-lg p-5 absolute inset-0 mt-3 ml-3 w-[75%] h-[100%]"></div>
                            <div className="bg-blue-200 rounded-lg p-5 relative z-10 w-[75%] h-[100%] flex items-center">
                                <h1 className="text-blue-800 font-bold text-2xl">
                                Mengapa Memilih Kami
                                </h1>
                            </div>
                        </div>
                        <div className="opacity-90 flex items-center w-[100%] hover:scale-105 hover:opacity-80">
                            <img src="assets/Content3.jpg" alt="" className='rounded-l-3xl h-52 w-[50%]'/>
                            <p className='p-2 rounded-r-3xl bg-blue-500 text-white text-sm  flex items-center h-52 w-[50%] font-semibold'>Teknologi yang teruji untuk pertanian yang lebih efisien dan berkelanjutan.
                                Dukungan ahli dari tim kami untuk memastikan keberhasilan Anda.
                                Bergabunglah dengan ribuan petani yang telah sukses bersama EcoHarvest.</p>
                        </div>
                    </div>

                </div>
            </div>
            <BottomBar />
        </div>
    </>
  )
}

export default Home
