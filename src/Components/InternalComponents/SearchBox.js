import React, { useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useNavigate } from 'react-router-dom';
export default function SearchBox() {
  let input=useRef(null)
  let navigate=useNavigate()
 const submit=(e)=>{
 
  if(e.key=='Enter'){
    navigate(`/search/${input.current.value}`)
  }
 }
  return (
  <>
         
          <SearchIcon/>
        
        <input type="text" ref={input} onKeyDown={submit}   className=" flex-1 px-2  h-full  outline-none border-0" placeholder='Search a Google or type URL' />
      
      <KeyboardVoiceIcon/>
         
    </>

  )
}
