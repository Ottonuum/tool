'use client';
import React from 'react';


const Navbar = () => {
    return (
        <nav className='bg-black px-[32px] w-full justify-between flex'>
            <div>
                <a href="" className='bg-gradient-to-r from-[#5350F6] to-[#E662FE] bg-clip-text text-transparent text-2xl font-medium'>AI startup</a>
            </div>
            <div className='w-[434px] h-[47px] flex justify-center items-center'>
                <ul className='flex gap-[32px]'>
                    <li>
                        <a href="" className='w-[40px] h-[] '>About</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <button className='bg-[#4F4CE5] rounded-full py-1 font-inter text-[16  px]'>GET STARTED</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar