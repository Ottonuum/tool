'use client'
import React from 'react'

const Modes = () => {
    return (
        <div className='flex justify-center mb-8'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-[#181924]'>
                    <h11>
                        <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Proactive</span>
                        <span className='text-4xl'>Mode</span>
                    </h11>
                    <p className='mt-5 mb-36'>Regularly publish thought pieces
                    <br/>
                    and engage with your audience</p>
                    <button className='bg-[#4F4CE5] rounded-full py-1 font-inter text-[16  px]'>CHOOSE THE MODE</button>
                </div>
                <div className='bg-[#181924]'>
                    <h13>
                        <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Proactive</span>
                        <span className='text-4xl'>Mode</span>
                    </h13>
                    <p className='mt-5 mb-36'>Regularly publish thought pieces
                    <br /> 
                    and engage with your audience</p>
                    <button className='bg-[#4F4CE5] rounded-full py-1 font-inter text-[16  px]'>CHOOSE THE MODE</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Modes 