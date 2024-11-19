import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Header = () => {
  return (
    <div className='bg-primary'>
    <div className='container mx-auto flex flex-col mt-3 sm:flex-row  justify-between items-center py-4 space-y-6 sm:space-y-0  '>
    <div className=''>
      <Image src={"/Images/DdsgnrLibrary.svg"} width={120} height={120} alt='abc'/>
    </div>
    <div className=' flex flex-wrap bg-secondary justify-center sm:justify-between space-x-4 p-3 px-4 rounded-md '>
      <Link className='text-black ' href={"/"}>Home</Link>
      <Link className='text-black ' href={"/"}>Courses</Link>
      <Link className='text-black ' href={"/"}>Services</Link>
      <Link className='text-black ' href={"/"}>Achievement</Link>
      <Link className='text-black ' href={"/"}>About Us</Link>
      <Link className='text-black ' href={"/"}>Testimonial</Link>
    </div>
    <div className=' flex space-x-3 '>
      <Button className=' rounded-md border-black border  text-black py-1 px-4 hover:bg-gray-100'>SignUp</Button>
      <Button className='bg-black border rounded-md py-1 px-4 hover:bg-gray-800 text-primary'>Login</Button>
    </div>
    </div>
    </div>
  )
}

export default Header