import React from 'react'
import { FaLinkedin,FaTwitter,FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Headline = () => {
  return (
    <>

    <div className=' mx-auto p-2 bg-secondary border-black border-2'>
      <div className=' container w-full flex flex-col sm:flex-row justify-between items-center gap-4'>
        <div className=' flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base items-center sm:text-start'>
          <p className='text-black font-normal mt-1.5'>Phone Number: 956 742 455 678</p>
          <p className='text-primary font-medium mt-1.5 hidden sm:block'>|</p>
          <p className='text-black font-normal mt-1.5'>Email:info@ddsgnr.com</p>
        </div>
        <div className=' flex gap-4 justify-center sm:justify-end items-center'>
          <FaLinkedin size={21} className=' text-black cursor-pointer mt-2.5'/>
          <FaFacebookF size={21} className=' text-black cursor-pointer mt-2.5'/>
          <FaInstagram size={21} className=' text-black cursor-pointer mt-2.5'/>
          <FaTwitter size={21} className=' text-black cursor-pointer mt-2.5'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Headline