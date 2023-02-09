import React from 'react'
import SearchBox from '../InternalComponents/SearchBox'
import SeacrhHeaderOptions from './SeacrhHeaderOptions';

export default function SerahcHeader() {
  return (
    <div className='h-[23vh] border-b p-5 flex flex-col justify-between'>
      <div className='flex items-center space-x-5'>
      <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' className='w-[6rem] h-[90%] object-contain' />
      <div className='w-[90%] mx-auto max-w-[650px]  px-3 shadow-md h-[44px] bg-white flex items-center rounded-3xl'>
   <SearchBox/>
    </div>
      </div>
    <div className='flex items-center justify-between  md:pl-[7rem]  w-[100%] max-w-[750px]'>
    <div className='flex items-center space-x-7'>
    <SeacrhHeaderOptions name="All" />
    <SeacrhHeaderOptions name="Images" />
    <SeacrhHeaderOptions name="Maps" />
    <SeacrhHeaderOptions name="more" />
      </div>
      <div className='flex items-center space-x-5'>
<SeacrhHeaderOptions name="Settings" />
<SeacrhHeaderOptions name="tools" />
      </div>
    </div>
    </div>
  )
}
