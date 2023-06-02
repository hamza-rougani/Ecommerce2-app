import React from 'react'
import {Swipe} from './swiper'
import { Link } from 'react-router-dom'

function SlideImage(e) {
  const cataImages=[
    `http://127.0.0.1:8000/storage/${e.ca.img3}`,
    `http://127.0.0.1:8000/storage/${e.ca.img7}`,
    `http://127.0.0.1:8000/storage/${e.ca.img8}`
  ]
  return (
    <div className='SlideImage'>
       <div className='grid'>
       <div className='cha ch1'>
       <div   className='child child1 move'> <Link to={`/show/${e.ca.Pr1}`}><img src={`http://127.0.0.1:8000/storage/${e.ca.img1}`}/></Link></div> 
       <div   className='child child1 move'><Link to={`/show/${e.ca.Pr2}`}><img src={`http://127.0.0.1:8000/storage/${e.ca.img2}`}/></Link> </div>
         </div> 
         <div className='ch ch2'>
         <div className='child child2 move'><Link to={`/show/${e.ca.Pr3}`}><Swipe Images={cataImages}/></Link></div>
          <div className='child child2 move'><Link to={`/show/${e.ca.Pr4}`}><img src={`http://127.0.0.1:8000/storage/${e.ca.img4}`}/></Link></div>
         </div>
         <div className='cha ch3'>
          <div className='child child3 move'><Link to={`/show/${e.ca.Pr5}`}><img src={`http://127.0.0.1:8000/storage/${e.ca.img5}`}/></Link></div>
         <div className='child child3 move'><Link to={`/show/${e.ca.Pr6}`}><img src={`http://127.0.0.1:8000/storage/${e.ca.img6}`}/></Link></div>
         </div>
        </div> 
        
    
    </div>
  )
}

export default SlideImage