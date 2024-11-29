import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image';
  

const CarouselSize = () => {
  return (
    <div className="container mx-auto max-w-5xl py-8 relative">
    <Carousel className='h-64'>
  <CarouselContent className='flex gap-4'>
    <CarouselItem className='flex gap-64 mt-12'>
      <Image src={"/Images/DdsgnrLibrary.svg"} alt='abx' width={150} height={150}/>
      <Image src={"/Images/DdsgnrLibrary.svg"} alt='abx' width={150} height={150}/>
      <Image src={"/Images/DdsgnrLibrary.svg"} alt='abx' width={150} height={150}/>
    </CarouselItem>
    <CarouselItem className='flex gap-64 mt-12'>
      <Image src={"/Images/DdsgnrLibrary.svg"} alt='abx' width={150} height={150}/>
      <Image src={"/Images/DdsgnrLibrary.svg"} alt='abx' width={150} height={150}/>
      <Image src={"/Images/DdsgnrLibrary.svg"} alt='abx' width={150} height={150}/>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default CarouselSize;