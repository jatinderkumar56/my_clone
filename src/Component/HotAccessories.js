import React from 'react'
import HotAccessoriesCard from './HotAccessoriesCard'
import '../StylesFile/HotAccessories.css'
const HotAccessories = ({music,musicCover,smartdevice,smartdeviceCover,homeCover,home,lifeStyle,mobileAccessories,lifeStyleCover,mobileAccessoriesCover}) => { 
  return (
  <div className='MainHotAccesories' >
  <div>
  <img src={musicCover ||smartdeviceCover || homeCover || lifeStyleCover ||mobileAccessoriesCover}/>
  </div>
  <div className='HotAccesories'>
  {music && music.map((item,index)=>(
    <HotAccessoriesCard index={index} image={item.image} name={item.name} price={item.price} key={item.image} />
  ))}

  
  {home && home.map((item,index)=>(
    <HotAccessoriesCard index={index} image={item.image} name={item.name} price={item.price} key={item.image} />
  ))}
  {smartdevice && smartdevice.map((item,index)=>(
    <HotAccessoriesCard index={index} image={item.image} name={item.name} price={item.price} key={item.image} />
  ))}

  {lifeStyle && lifeStyle.map((item,index)=>(
    <HotAccessoriesCard index={index} image={item.image} name={item.name} price={item.price} key={item.image} />
  ))}
  {mobileAccessories && mobileAccessories.map((item,index)=>(
    <HotAccessoriesCard index={index} image={item.image} name={item.name} price={item.price} key={item.image} />
  ))}
   <HotAccessoriesCard image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'/>
  </div>
  </div>
  
  )
}

export default HotAccessories
