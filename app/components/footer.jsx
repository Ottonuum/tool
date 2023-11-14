'use client'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-64'>
            <div className='grid grid-cols-4'>
                <div>
                <h26 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] mr-2'>AI startup</h26>
                </div>
                <div>
                    <h27 className='text-[18px]'>COMPANY</h27>
                    <p className='mt-5'>How it works</p>
                    <p>pricing</p>
                    <p>Demo</p>
                </div>
                <div>
                    <h28 className='text-[18px]'>RESOURCES</h28>
                    <p className='mt-5'>Blog post name goes here</p>
                    <p>Blog post name goes here</p>
                    <p>See all resources</p>
                </div>
                <div>
                    <h29 className='text-[18px]'>ABOUT</h29>
                    <p className='mt-5'>Terms and conditions</p>
                    <p>Privacy Policy</p>                  
                </div>
            </div>
            <img src="Img/Line.png" className='w-3/4 h-auto object-cover mx-auto p-10'/>
            <p className='text-center'>Copyright © 2022 Company name</p>
        </div>
    )
}

export default Footer