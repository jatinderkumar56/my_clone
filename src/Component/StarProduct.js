import React from 'react'
import '../StylesFile/StarProduct.css'
const StarProduct = ({starProduct}) => {
  return (
    <div className='starproduct'>
      <div className='imgdiv1'>
      <a href={starProduct[0].url}><img  src={starProduct[0].image}/></a>
      </div>
      <div className='imgdiv'>
      <a href={starProduct[1].url}><img className='myimg' src={starProduct[1].image}/></a>
      <a href={starProduct[2].url}><img className='myimg' src={starProduct[2].image}/></a>
      <a href={starProduct[3].url}><img className='myimg' src={starProduct[3].image}/></a>
      </div>
    </div>
  )
}

export default StarProduct
