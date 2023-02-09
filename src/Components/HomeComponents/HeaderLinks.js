import React from 'react'
import { PropTypes } from 'prop-types'
 function HeaderLinks({name}) {
  return (
    <a href='#' className='text-[15px] font-[500]'>{name}</a>

  )
}
HeaderLinks.propTypes={
    name:PropTypes.string
}


export default HeaderLinks