import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
export default function HomeSearch() {
  return (
  
        <div className='w-[70%] mx-auto max-w-[561px] mt-5 px-3 shadow-md h-[44px] bg-white flex items-center rounded-3xl'>
        <SearchIcon/>
        
        <input type="text" className=" flex-1 px-2  h-full  outline-none border-0" placeholder='Search a Google or type URL' />
      
      <KeyboardVoiceIcon/>
      </div>

  )
}
