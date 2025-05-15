import React from 'react'
import { MoveUpRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div>
      <h1 className='font-medium ml-24 mt-[25%] text-6xl w-[55%]'>CLAIM YOUR SELF-SOVERIGN IDENTITY ON BITCOIN</h1>
      <p className='text-gray-500 ml-24 mt-6 text-2xl'>Register and start saving today</p>
      <button className="ml-24 mt-12 bg-[#7D5FFF] p-2 text-3xl flex items-center ">
        <div className='mr-32 ml-6'>
        START SAVING NOW  
        </div>
        <div>
          <div className='bg-black p-4'>
            <MoveUpRight color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
          </div>
        </div>

      </button>
    </div>
  )
}

export default LandingPage