import React from 'react'

export default function ResultsCard({data}) {
  return (
    <div className='flex flex-col space-y-1  w-full max-w-[670px]'>
        <strong className='text-sm'>{data.displayLink}</strong>
    <h3 ><a href={data.link} className='text-[#1A0DAB] text-2xl font-semibold'>{data.title}</a></h3>
    <p className='font-medium text-sm leading-4 text-gray-600 whitespace-pre-wrap'>
        {data.snippet}
    </p>
    </div>
  )
}
