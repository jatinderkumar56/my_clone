import React from 'react'

const OfferCard = ({ key,index,src,link}) => {
  return (
  
      <a href={link}><img src={src} alt={`${index} offer`}/></a>
     
  )
}

export default OfferCard
