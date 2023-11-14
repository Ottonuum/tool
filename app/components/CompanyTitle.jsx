'use client'
import React from 'react'

const CompanyTitle = () => {
    return (
        <div className='grid grid-cols-2 mt-24'>
  <div className='flex justify-center items-center'>
    <img src='img/image 4.png' />
  </div>
  <div className='flex flex-col justify-center items-center'>
    <h22 className='text-6xl font-bold mb-4'>Title Copy Goes Here <br />Be Awesome</h22>
    <p className='text-gray-600'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
    <button className='bg-[#4F4CE5] rounded-full py-1 font-inter text-[16  px] text-left '>TALK TO AN EXPERT</button>
  </div>
  <div>
  </div>
</div>

    )
} 

export default CompanyTitle