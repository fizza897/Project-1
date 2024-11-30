import React from 'react'
import Image from 'next/image'
const Companies = () => {
  return (
    <>
    <div className=' bg-primary w-full h-60 flex'>
    <div className='container'>
        <div className='flex mt-24 gap-4'>
        <div className=''>
            <h1 className='text-2xl font-roboto text-black break-words  '>Trusted by 2000+ companies  worldwide.</h1>
            </div>            
            <div className='flex  '>
            <Image src={"/Images/AirbnbLogo.svg"} alt='abc' width={123} height={38}/>
            <Image src={"/Images/Second.svg"} alt='abc' width={123} height={38}/>
            <Image src={"/Images/Ipsum.svg"} alt='abc' width={123} height={38}/>
            <Image src={"/Images/Logo.svg"} alt='abc' width={123} height={38}/>
            <Image src={"/Images/Lastlogo.svg"} alt='abc' width={123} height={38}/>
            <Image src={"/Images/Logoipsum.svg"} alt='abc' width={123} height={38}/>

        </div>
            {/* <Image src={"/Images/AirbnbLogo.svg"} alt='abc' width={123} height={38}/> */}


        
    </div>
        </div>
    </div>
    </>
  )
}

export default Companies