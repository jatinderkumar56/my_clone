import React from 'react'
import '../StylesFile/Footer3.css'
const Footer3 = ({footer}) => {
  return (
    <div className='allmain'>
    <div className='footer3main'>
    <div>
    <p>SUPPORT</p>
      {footer.support.map((item,index)=>(
         <a href=''>{item.name}</a>
      ))}
    </div>
    <div>
    <p>SHOP AND LEARN</p>
      {footer.shopAndLearn.map((item,index)=>(
         <a href=''>{item.name}</a>
      ))}
    </div>
    <div>
    <p>RETAIL STORE</p>
      {footer.retailStore.map((item,index)=>(
         <a href=''>{item.name}</a>
      ))}
    </div>
    <div>
    <p>ABOUT</p>
      {footer.aboutUS.map((item,index)=>(
         <a href=''>{item.name}</a>
      ))}
    </div>
    <div>
    <p>CONTACT US</p>
      {footer.contactUs.map((item,index)=>(
         <a href=''>{item.name}</a>
      ))}
    </div>
    <div>
    <p>Chat with our Virtual AI<br/> Bot(24/7 Live Agent Support)</p>
    <button >CHAT NOW</button>
    </div>
    </div>
    <div className='footer4main'>
    <div></div>
    <p>Copyright © 2025 - 2026 Xiaomi. All Rights Reserved</p>
    </div>
    </div>
   
  )
}

export default Footer3
