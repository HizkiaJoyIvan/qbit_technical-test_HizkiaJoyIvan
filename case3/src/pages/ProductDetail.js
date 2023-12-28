import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'
import { useParams } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"

const ProductDetail = () => {
    const { id } = useParams()
    const productID = parseInt(id)

    const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URI}/products/${productID}`, {
          method: 'GET',
        })
        const data = await res.json()
        setProduct(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className='h-screen bg-slate-200'>
      <Navbar />
      <div className="w-[100%] flex gap-10 mt-20 h-[120%] bg-slate-200 p-20 md:flex-row flex-col">
        <div className="flex flex-col gap-5 w-[50%] items-center">
          <img 
              src="/assets/Product.jpg" 
              alt="" 
              className='w-80 h-80 rounded-md opacity-90 hover:opacity-100'
          />
          <div className="flex bg-blue-800 rounded-xl text-white font-semibold gap-3 px-3 py-2 text-xl items-center hover:bg-blue-700 hover:scale-105 cursor-pointer">
            <FaShoppingCart />
            <p>Beli Sekarang</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <h1 className='text-blue-800 font-bold text-4xl'>{product.name}</h1>
            <p className='text-slate-600 font-semibold'>{product.description}</p>
            <div className="mt-2 bg-white px-4 py-2 rounded-md flex flex-col items-start opacity-80">
                <h2 className='bg-blue-800 text-white font-bold text-lg py-1 px-2 rounded-xl'>Benefits</h2>
                <p className='font-semibold'>{product.benefits}</p>
            </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default ProductDetail
