"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen,setIsOpen] =useState(false)
  return (
    <>
    <div className='bg-primary'>
    <div className='container mx-auto flex flex-col mt-3 sm:flex-row  justify-between items-center py-4 space-y-6 sm:space-y-0  '>
    <div className=''>
      <Image src={"/Images/DdsgnrLibrary.svg"} width={120} height={120} alt='abc'/>
    </div>
    <div className='sm:hidden flex'>
      <Button className='flex flex-col items-center justify-center w-8 h-8 space-y-1' onClick={()=>setIsOpen(!isOpen)}>
<Menu className=''/>
<span className={`h-1 w-full bg-black transition-transform ${isOpen ? "rotate-45 translate-y-2":""}`}></span>
      </Button>
    </div>
    <div className={`flex flex-col sm:flex-row sm:flex sm:space-x-4 bg-secondary justify-center sm:justify-between  p-3 px-4 rounded-md ${isOpen ? "flex":"hidden"} sm:items-center w-full sm:w-auto p-3 sm:p-0`}>
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
    // mobile responsive 
    <div className=''></div>
    </>
  )
}

export default Header