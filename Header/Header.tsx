import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Header = () => {
  return (
    <>
    <div className='bg-primary flex mt-4   '>
    <div className='ml-11'>
      <Image src={"/Images/DdsgnrLibrary.png"} width={120} height={120} alt='abc'/>
    </div>
    <div className='space-x-6 ml-32'>
      <Link className='text-black mt-5' href={"/"}>Home</Link>
      <Link className='text-black mt-1.5' href={"/"}>Courses</Link>
      <Link className='text-black mt-1.5' href={"/"}>Services</Link>
      <Link className='text-black mt-1.5' href={"/"}>Achievement</Link>
      <Link className='text-black mt-1.5' href={"/"}>About Us</Link>
      <Link className='text-black mt-1.5' href={"/"}>Testimonial</Link>
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