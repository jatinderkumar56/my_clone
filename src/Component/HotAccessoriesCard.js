import React from 'react'
import '../StylesFile/HotAccessoriesCard.css'
const HotAccessoriesCard = ({image,name,price,index}) => {
  return (
    <div className='HotAccessoriesCard'>
    <img src={image} alt={`${index} product`}/>
    <p>{name}</p>
    <span>{price}</span>
    </div>
  )
}

export default HotAccessoriesCard