import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../StylesFile/ProductReview.css'
const ProductReview = ({productreview}) => {
  return (
    <div className='productreview'>
    {productreview.map((item,index)=>(
       <ProductReviewCard name={item.name} price={item.price} image={item.image} review={item.review}/>
    ))}
    </div>
  )
}

export default ProductReview