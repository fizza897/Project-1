import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className='bg-[#F7F7F7] flex mt-4   '>
    <div className='ml-11'>
      <Image src={"/Images/DdsgnrLibrary.png"} width={120} height={120} alt='abc'/>
    </div>
    <div className=''>
      <Link className='' href={"/"}>Home</Link>
      <Link href={"/"}>Courses</Link>
      <Link href={"/"}>Services</Link>
      <Link href={"/"}>Achievement</Link>
      <Link href={"/"}>About Us</Link>
      <Link href={"/"}>Testimonial</Link>
    </div>
    <div>

    </div>
    </div>
    </>
  )
}

export default Header