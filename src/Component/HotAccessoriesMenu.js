import React from 'react'
import { Link } from 'react-router-dom'
import '../StylesFile/AccoriesMenu.css'
const HotAccessoriesMenu = () => {
  return (
    <div className='hotaccessories'>

    <Link to='/music' className='accessLink'>Music Store</Link>
    <Link to='/smartdevice' className='accessLink'>Smart Devices</Link>
    <Link to='/home' className='accessLink'>Home</Link>
    <Link to='/lifestyle' className='accessLink'>Lifestyle</Link>
    <Link to='/mobileaccess' className='accessLink'>Mobile Accessories</Link>
     
    </div>
  )
}

export default HotAccessoriesMenu
