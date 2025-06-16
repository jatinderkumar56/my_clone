import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Banner = ({end}) => {
  return (

    <Carousel fade>
   {end.map((item,index)=>(

    <Carousel.Item key={item.image} interval={1000}>
    <img
      className="d-block w-100"
      src={item.image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.source}</p>
      <u>Read more</u>
    </Carousel.Caption>
  </Carousel.Item>
  ))}
      
    </Carousel>
  )
}

export default Banner
