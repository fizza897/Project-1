import React from 'react'
import Image from 'next/image'
const Companies = () => {
  return (
    <>
    <div className=' bg-primary w-full h-60 flex'>

    <div className='container'>
        <div className='flex gap-24 mt-24'>

        <div className=''>
            <h1 className='text-2xl font-bold text-black break-words max-w-2xl '>Trusted by 2000+ companies worldwide.</h1>
            </div>            
            <div className='mr-2 flex'>
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