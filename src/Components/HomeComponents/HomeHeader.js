import React from 'react'
import HeaderLinks from './HeaderLinks'

export default function HomeHeader() {
  return (
    <div className=' bg-red-500 flex items-center justify-between h-[10vh]'>
        <div className='flex items-center space-x-5'>
            <HeaderLinks  name='About' />
            <HeaderLinks name="Store" />
        </div>
        <div className='flex items-center space-x-5'>
        <HeaderLinks name="Gmail" />
        <HeaderLinks name="Images" />
        <HeaderLinks name="" />
        <HeaderLinks name="" />
       


        </div>

    </div>
  )
}
