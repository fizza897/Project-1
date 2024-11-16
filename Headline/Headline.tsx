import React from 'react'
import { FaLinkedin,FaTwitter,FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Headline = () => {
  return (
    <>

    <div className='container mx-auto p-4 bg-secondary border-4'>
      <div className='w-full h-12 flex flex-col sm:flex-row md:flex-row  justify-between items-center'>
        <div className=' flex gap-4 text-sm sm:text-base'>
          <p className='text-black font-normal mt-1.5'>Phone Number:fizza 455 678</p>
          <p className='text-primary font-normal mt-1.5'>|</p>
          <p className='text-black font-normal mt-1.5'>Phone Number: 956 742 455 678</p>
        </div>
        <div className=' flex gap-4 text-sm sm:text-base'>
          <FaLinkedin size={21} className='mt-2.5'/>
          <FaFacebookF size={21} className='mt-2.5'/>
          <FaInstagram size={21} className='mt-2.5'/>
          <FaTwitter size={21} className='mt-2.5'/>

        </div>
      </div>
    </div>
    </>
  )
}

export default Headline