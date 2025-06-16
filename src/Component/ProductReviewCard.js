import React from 'react'
import '../StylesFile/ReviewCard.css'
const ProductReviewCard = ({image,name,price,review}) => {
  return (
    <div className='reviewcard'>
    <img src={image}/>
   
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
   
    
    </div>
  )
}

export default ProductReviewCard