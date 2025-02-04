import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate=useNavigate()
    const login=()=>{
        navigate('Login')
    }
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-blue flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold">Welcome to MedEquip Store</h1>
      <p className="mt-4 text-lg max-w-2xl">
        Your trusted partner in providing high-quality medical equipment for professionals and individuals.
        Get the best products at the best prices, delivered to your doorstep.
      </p>
      <button 
        className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 text-lg font-semibold rounded-full"
        onClick={login}
      >
        Get Started
      </button><br></br>
      <img src='https://www.medilinesurgicals.com/assets/img/about/about-img1.jpg' alt='Medical equipments'></img>
    </div>
  )
}

export default Landing