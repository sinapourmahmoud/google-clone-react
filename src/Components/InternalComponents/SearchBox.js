import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
export default function SearchBox() {
  return (
  <>
        <SearchIcon/>
        
        <input type="text" className=" flex-1 px-2  h-full  outline-none border-0" placeholder='Search a Google or type URL' />
      
      <KeyboardVoiceIcon/>
    </>

  )
}
