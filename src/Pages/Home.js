import React from 'react'
import HomeHeader from '../Components/HomeComponents/HomeHeader'
import MainHome from '../Components/HomeComponents/MainHome'

export default function Home() {

  return (
    <div className='flex flex-col h-[100vh]'>
        <HomeHeader/>
        <MainHome/>
    </div>
  )
}
