import React from 'react'
import { ChevronDown } from 'lucide-react';

const Headline = ({className}:{className:string}) => {
  return (
    <>
    <div className='hidden sm:block md:block'>
    <div className='w-full bg-black h-[48px]'>
    <div className='bg-black w-[1440px] h-[48px] flex justify-center items-center mx-auto   '>
<p className='text-white inline-block align-middle ml-72 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <div className='ml-96 flex mt-3'>
      <p className='text-white text-center flex'>English
      <ChevronDown className='inline-block' size={34}  /> 
      </p>
    </div>

    </div>
    </div>
    </div>
   
    </>
  )
}

export default Headline