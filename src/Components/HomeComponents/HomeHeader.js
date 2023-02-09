import React from 'react'
import HeaderLinks from './HeaderLinks'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function HomeHeader() {
  return (
    <div className='  flex items-center justify-between h-[10vh]'>
        <div className='flex items-center space-x-5'>
            <HeaderLinks  name='About' />
            <HeaderLinks name="Store" />
        </div>
        <div className='flex items-center space-x-5'>
        <HeaderLinks name="Gmail" />
        <HeaderLinks name="Images" />
    <AppsIcon style={{'cursor':'pointer'}} />
    <AccountCircleIcon style={{'cursor':'pointer'}} />
       


        </div>

    </div>
  )
}
