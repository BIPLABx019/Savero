import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div className='w-screen h-screen relative'>
    <div className=' absolute inset-0   h-screen bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[size:65px_65px]'></div>
    <div className='z-20 w-screen h-screen flex flex-col gap-8  px-8'>
        <Navbar/>
        <LandingPage/>    
    </div>
    </div>
  )
}

export default App