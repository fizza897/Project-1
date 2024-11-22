"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Header = () => {
  const [isOpen,setIsOpen] =useState(false)
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='bg-primary'>
    <div className='container mx-auto flex flex-col mt-3 sm:flex-row  justify-between items-center py-4  space-y-6 sm:space-y-0  '>
    <div className=''>
      <Image src={"/Images/DdsgnrLibrary.svg"} width={120} height={120} alt='abc'/>
    </div>
    
    <div className=' flex flex-wrap gap-6 bg-secondary justify-center sm:justify-between space-x-4 p-3 px-4 rounded-md '>
      <Link className='text-black ' href={"/"}>Home</Link>
      <Link className='text-black ' href={"/"}>Courses</Link>
      <Link className='text-black ' href={"/"}>Services</Link>
      <Link className='text-black ' href={"/"}>Achievement</Link>
      <Link className='text-black ' href={"/"}>About Us</Link>
      <Link className='text-black ' href={"/"}>Testimonial</Link>
      <div className='space-x-2  '>
      <Button className='bg-secondary border border-neutral-950 '>Login</Button>
      <Button className='bg-black border w-[95px] h-[40px] rounded-[5px] border-black border border-[1px]  w-[80px] h-[40px] p-[8px] px-[20px]  gap-[8px]  text-black hover:bg-gray-100  rounded-l hover:bg-gray-800 text-primary'>SignUp</Button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header