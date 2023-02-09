import React from 'react'
import Results from '../Components/SearchComponents/Results'
import SearchHeader from '../Components/SearchComponents/SearchHeader'
export default function Search() {
  return (
    <div className='min-h-[100vh] flex flex-col overflow-hidden'>
        <SearchHeader/>
        <Results/>
    </div>
  )
}
