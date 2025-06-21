import React from 'react'
import '../StylesFile/heading.css'
const Heading = ({title,className}) => {
  return (
    <div className='heading'>
    <div></div>
      <p className={`${className}`}>{title}</p>
    <div></div>
    </div>
  )
}

export default Heading
