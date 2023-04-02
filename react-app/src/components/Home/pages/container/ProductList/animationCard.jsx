import React, { useRef } from 'react'


function AnimationCard() {
   
  return (
    <div className='animationCard move'>
         <div className='ContentA'>
            <div className='content'>
            <div className='HeaderCard'>
             <ul>
                <li><img width= "40px" src='https://thumbs.dreamstime.com/b/food-icon-isolated-black-background-simple-vector-logo-food-icon-isolated-black-background-164144307.jpg'></img></li>
                <li id='Bino'>BinoFood</li>
             </ul>
             <ul className='ul2'>
                <li><i class='bx bxl-facebook'></i></li>
                <li><i class='bx bxl-youtube' ></i></li>
                <li><i class='bx bxl-twitter' ></i></li>
             </ul>
         </div>
         <div className='owenPr'>
         <div className='imageA'>
          <img src='Images/pngfood.png' width='60%'/>
          </div>
            <div className='textA'>
          <h1>Get<br/> your product<br/> quickly</h1>
          </div>
         </div>

            </div>
            <video className='VideoBur' src='Videos/food.mp4' autoPlay muted loop>

            </video>
         </div> 
           
         {/* </div>
         </div>
         
        </div> */}
    </div>
  )
}

export default AnimationCard