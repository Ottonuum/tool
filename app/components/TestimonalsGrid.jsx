'use client'
import React from 'react'

const TestimonialsGrid = () => {
    return (
      <div className='flex justify-center items-center'>
        {/* Testimonial 1 */}
        <div className='flex-1 mx-4 bg-[#1E1E26] rounded-lg'>
          <div className='p-4'>
            <p className='text-white text-center'>
              “Amet minim mollit non deserunt ullamco <br />
              est sit aliqua dolor do amet sint. Velit officia <br />
              consequat duis enim velit mollit. <br />
              Exercitation veniam consequat.”
            </p>
          </div>
          <div className='flex items-center mt-4'>
            <img src='img/Image 3.png'className='mr-4' />
            <div>
              <p className='text-white text-[19px]'>Author Name</p>
              <p className='text-white'>VP of Company</p>
            </div>
            <div className='flex items-center ml-auto'>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
  
        {/* Testimonial 2 */}
        <div className='flex-1 mx-4 bg-[#1E1E26] rounded-lg'>
          <div className='p-4 '>
            <p className='text-white text-center'>
              “Amet minim mollit non deserunt ullamco <br />
              est sit aliqua dolor do amet sint. Velit officia <br />
              consequat duis enim velit mollit. <br />
              Exercitation veniam consequat.”
            </p>
          </div>
          <div className='flex items-center mt-4'>
            <img src='img/Image 3.png' className='mr-4' />
            <div className=''>
              <p className='text-white text-[19px]'>Author Name</p>
              <p className='text-white'>VP of Company</p>
            </div>
            <div className='flex items-center ml-auto'>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
  
        {/* Testimonial 3 */}
        <div className='flex-1 mx-4 bg-[#1E1E26] rounded-lg'>
          <div className='p-4'>
            <p className='text-white text-center'>
              “Amet minim mollit non deserunt ullamco <br />
              est sit aliqua dolor do amet sint. Velit officia <br />
              consequat duis enim velit mollit. <br />
              Exercitation veniam consequat.”
            </p>
          </div>
          <div className='flex items-center mt-4'>
            <img src='img/Image 3.png' className='mr-4' />
            <div>
              <p className='text-white text-[19px]'>Author Name</p>
              <p className='text-white'>VP of Company</p>
            </div>
            <div className='flex items-center ml-auto'>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialsGrid;
  