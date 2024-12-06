import React from 'react'

const Grid = () => {
  return (
    <>
    <main className='grid grid-cols-8 grid-rows-5 h-screen gap-1 p-8'>
        <div className='bg-yellow-600 text-white flex justify-center items-center col-span-8'>Header</div>
        <div className='bg-lime-600 text-white flex justify-center items-center row-span-3'>Right Side Bar</div>
        <div className='bg-gray-600 text-white col-span-2'>Content 1</div>
        <div className='bg-gray-600 text-white col-span-2'>Content 2</div>
        <div className='bg-gray-600 text-white col-span-2'>Content 3</div>
        <div className='bg-gray-600 text-white col-span-2'>Content 4</div>
        <div className='bg-gray-600 text-white col-span-2'>Content 5</div>
        <div className='bg-gray-600 text-white col-span-2'>Content 6</div>
        <div className='bg-lime-600 text-white flex justify-center items-center row-span-3   '>left Side Bar</div>
        <div className='bg-yellow-600 text-white flex justify-center items-center col-span-8'>Footer</div>

    </main>
    
    </>
  )
}

export default Grid