'use client'
import React from 'react'

const InfoGrid = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-no-repeat'>
                <h4 className=' text-6xl pt-24'>Title Copy Goes Here Be Awesome</h4>
                <p className='p-8' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut dolorum nesciunt saepe alias ullam cum molestiae, laboriosam, inventore quibusdam voluptas sunt porro, enim aut qui recusandae provident cupiditate minus!</p>
            </div>
            <div className='bg-no-repeat'style={{ backgroundImage: "url('img/Frame 3.png')", backgroundPosition: 'top right'}}>
                <h5 className='text-2xl pt-24 '>Tailoring Posts</h5>
                <p className='p-4'>for various social networks to maximize exposure and audience engagement</p>
                <h6 className=' text-2xl pt-10'>Auto-engaging</h6>
                <p className='p-4'>with your audience to strengthen your online presence and profile score</p>
            </div>
            <div className='bg-no-repeat' style={{ backgroundImage: "url('img/Frame 3.png')"}}>
                <h7 className=' text-2xl pt-24'>Tailoring Posts</h7>
                <p className='p-4'>for various social networks to maximize exposure and audience engagement</p>
                <h8 className=' text-2xl pt-20'>Auto-engaging</h8>
                <p className='p-4'>with your audience to strengthen your online presence and profile score</p>
            </div>
            <div className='bg-no-repeat' style={{ backgroundImage: "url('/path_to_your_image4.png')" }}>
                <h9 className='text-6xl pt-24'>Title Copy Goes Here Be Awesome</h9>
                <p className='p-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quidem non omnis iste suscipit sed quos tenetur consequatur quis, odit eligendi similique, neque assumenda quam eos veritatis laboriosam obcaecati deleniti.</p>
            </div>
        </div>
    )
}

export default InfoGrid
