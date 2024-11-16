import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Header = () => {
  return (
    <>
    <div className='bg-primary flex mt-4 justify-between items-center w-full  '>
    <div className='ml-11'>
      <Image src={"/Images/DdsgnrLibrary.png"} width={120} height={120} alt='abc'/>
    </div>
    <div className=' flex space-x-6 justify-center items-center '>
      <Link className='text-black ' href={"/"}>Home</Link>
      <Link className='text-black ' href={"/"}>Courses</Link>
      <Link className='text-black ' href={"/"}>Services</Link>
      <Link className='text-black ' href={"/"}>Achievement</Link>
      <Link className='text-black ' href={"/"}>About Us</Link>
      <Link className='text-black ' href={"/"}>Testimonial</Link>
    </div>
    <div className='space-x-3 ml-64 '>
      <Button className=' rounded-md border-black border  text-black'>SignUp</Button>
      <Button className='bg-black border rounded-md  text-primary'>Login</Button>
    </div>
    </div>
    </>
  )
}

export default Header