import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
export default function SeacrhHeaderOptions({name}) {
  return (
    <div className='cursor-pointer flex items-center space-x-1'>
   {
    name=='All' ?  <SearchIcon fontSize='small' /> : name=='Images' ? <ImageIcon fontSize='small' /> : name=='more' ? <MoreVertIcon fontSize='small' /> : name=='Maps' ? <FmdGoodIcon fontSize='small' /> : null
   }
    <a href='#' className='text-gray-600'>{name}</a>
  </div>
    )
}
