import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Hero = () => {
  return (
    <>
    <div className='container mx-auto flex'>
      <div className='mt-56'>
        <h1 data-aos="fade-up" className='text-6xl font-bold break-words max-w-xl'>Learn new skills online with ease</h1>
        <p className='text-xl break-words'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        <div className='mt-3 flex gap-3'>
        <Button className='bg-black text-white rounded-sm'>Start learning now</Button>
        <Button className='bg-white   rounded-sm'>Start learning now</Button>
        </div>
      </div>
      
      <div className='ml-9'>
        <Image className='md:max-lg:flex' src={"/Images/Hero.svg"} alt='avbc' width={640} height={900} />
      </div>
      
    </div>
    </>
  )
}

export default Hero