import React from 'react'
import '../StylesFile/videocard.css'

const playicon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"/></svg>
const VideoCard = ({image,name}) => {
  return (
    <div className='videocard' style={{backgroundImage:`url(${image})`}}>
      <a>{playicon}</a>
      <p>{name}</p>
    </div>
  )
}

export default VideoCard
