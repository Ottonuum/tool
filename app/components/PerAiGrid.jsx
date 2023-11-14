'use client'
import React from 'react'

const PerAiGrid = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <img src='img/image 2.png' />
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h18 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Features</h18>
                <p>
                    <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Reflect</span>
                    <span className='text-4xl'>your personal <br />style, tone, opinions, <br />experiences, and <br />insights in your content</span>
                </p>
                </div>
            <div className='flex flex-col justify-center items-start'>
                <h19 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Features</h19>
                <p>
                    <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Reflect</span>
                    <span className='text-4xl'>your personal <br />style, tone, opinions, <br />experiences, and <br />insights in your content</span>
                </p>
            </div>
            <div>
            <img src='img/image 2.png' />
            </div>
            <div>
                <img src='img/image 2.png' />
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h20 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Features</h20>
                <p>
                <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>Custom AI</span>
                <span className='text-4xl'>model <br />tailored for each <br />individual user</span>
                </p>
            </div>
        </div>
    )
}

export default PerAiGrid 