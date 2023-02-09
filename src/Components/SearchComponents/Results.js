import React from 'react'
import ResultsCard from './ResultsCard'
import useFetch from './../../customHooks/UseFetch'
export default function Results() {
    let {items,info,id}=useFetch()
  return (
    <div className=' flex-1 pt-4'>
        <div className='text-gray-400 text-sm'>
            About {info?.formattedTotalResults} results ({info?.formattedSearchTime} Seconds) for <strong className='text-gray-600'>{info && id}</strong>
        </div>
        <div className='flex flex-col space-y-10 mt-5'>
            {
                items?.map((item,index)=>{
                    return <ResultsCard key={index} data={item} />
                })
            }

        </div>
    </div>
  )
}
