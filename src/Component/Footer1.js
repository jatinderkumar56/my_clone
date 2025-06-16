import React from 'react'
import '../StylesFile/footer1.css'
 const restart=<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M451 934q-123-10-207-101t-84-216q0-77 35.5-145T295 361l43 43q-56 33-87 90.5T220 617q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741 617q0-109-75.5-184.5T481 357h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801 617q0 125-83.5 216T511 934Z"/></svg>
 const map=<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="m612 936-263-93-179 71q-17 9-33.5-1T120 883V325q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840 268v565q0 11-7.5 19T814 864l-202 72Zm-34-75V356l-196-66v505l196 66Zm60 0 142-47V302l-142 54v505Zm-458-12 142-54V290l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"/></svg>
 const verified=<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="m436 709 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160 533V295l320-120 320 120v238q0 152-90 279.5T480 975Zm0-62q115-38 187.5-143.5T740 533V337l-260-98-260 98v196q0 131 72.5 236.5T480 913Zm0-337Z"/></svg>
 const Footer1 = () => {
  return (
    <div className='footer1'>
     <div>
     {restart}
     <p><b>Hassle-free replacement</b><br/>10 day eazy replacement polict on mi.pk</p>
     </div>
     <div>
     {verified}
     <p><b>100% secure payments</b><br/>We support Cards, Wallets, EMI and COD</p>
     
     </div>
     <div>
     {map}
     <p><b>Vast service network</b><br/>1000 Mi service-centers across 600 cities</p>
     
     </div>
    </div>
  )
}

export default Footer1
