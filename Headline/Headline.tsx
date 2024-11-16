import React from 'react'
import { FaLinkedin,FaTwitter,FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Headline = () => {
  return (
    <>
      <div className='w-full h-12 flex border-4  bg-secondary justify-between'>
        <div className='ml-14 flex gap-2'>
          <p className='text-black font-normal mt-1.5'>Phone Number: 956 742 455 678</p>
          <p className='text-primary font-normal mt-1.5'>|</p>
          <p className='text-black font-normal mt-1.5'>Phone Number: 956 742 455 678</p>
        </div>
        <div className='mr-11 flex gap-3'>
          <FaLinkedin size={21} className='mt-2.5'/>
          <FaFacebookF size={21} className='mt-2.5'/>
          <FaInstagram size={21} className='mt-2.5'/>
          <FaTwitter size={21} className='mt-2.5'/>

        </div>
      </div>
    </>
  )
}

export default Headline