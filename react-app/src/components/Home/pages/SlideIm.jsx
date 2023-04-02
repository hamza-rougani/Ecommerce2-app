import React from 'react'
import {Swipe} from './swiper'

function SlideImage() {
  const cataImages=[
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]
  return (
    <div className='SlideImage'>
         
       <div className='grid'>
       <div className='ch ch1'>
         <div   className='child child1 move'><img src='https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></div>
         <div   className='child child1 move'><img src='https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
         </div> 
         <div className='ch ch2'>
         <div className='child child2 move'><Swipe Images={cataImages}/></div>
         <div className='child child2 move'><img src='https://pets.allandabout.com/wp-content/uploads/2021/04/balanced-diet-organic-healthy-food-clean-eating-selection-including-certain-protein-prevents-cancer-931193062-799da546cdb9457e91a0e88fa8a31eac.jpg'/></div>
         </div>
         <div className='ch ch3'>
         <div className='child child3 move'><img src='https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
         <div className='child child3 move'><img src='https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
         </div>
        </div> 
        
    
    </div>
  )
}

export default SlideImage