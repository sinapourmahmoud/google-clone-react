import React from 'react'
import ResultsCard from './ResultsCard'

export default function Results() {
  return (
    <div className=' flex-1 pt-4'>
        <div className='text-gray-400 text-sm'>
            About 800,000,000 results for <strong className='text-black'>Ilan Mask</strong>
        </div>
        <div className='flex flex-col space-y-4 mt-5'>
            <ResultsCard/>

        </div>
    </div>
  )
}
