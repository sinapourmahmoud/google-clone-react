import React from 'react'
import HomeSearch from './HomeSearch'

export default function MainHome() {
  return (
    <div className=' flex-1 pt-[20vh] '>
        <div className='flex flex-col space-y-5 '>
    <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' className='w-[90%] h-[100px] max-h-[120px] object-contain mx-auto' />
      

    <HomeSearch/>
        <div className='flex items-center justify-center  space-x-7'>
    <button className='bg-gray-200 py-2 px-4 rounded-sm'>
        Google Search
    </button>
    <button className='bg-gray-200 py-2 px-4 rounded-sm'>
        Im freeing lucky
    </button>
        </div>
        </div>
    </div>
  )
}
