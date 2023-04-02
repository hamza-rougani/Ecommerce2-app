import React, { useEffect } from 'react'

function swiper(e) {
        
  return (
    <div className="slider">
      {console.log(e)}
	<div className="slides">
		<input type="radio" name="inpu" id="radio1"/>
		<input type="radio" name="inpu" id="radio2"/>
		<input type="radio" name="inpu" id="radio3"/>
		<input type="radio" name="inpu" id="radio4"/>
        {/* <!-- slid image start--> */}
		<div className="pictur first">
			<img src={`http://127.0.0.1:8000/storage/${e.Images[0]}`} />
		</div>
		<div className="pictur">
		<img src={`http://127.0.0.1:8000/storage/${e.Images[1]}`} />
		</div>
		<div className="pictur">
		<img src={`http://127.0.0.1:8000/storage/${e.Images[2]}`} />
		</div>
		<div className="pictur">		
		<img src={`http://127.0.0.1:8000/storage/${e.Images[3]}`} />
		</div>
    <div class="navigation-auto">
 	<div class="auto-bt1"></div>
 	<div class="auto-bt2"></div>
 	<div class="auto-bt3"></div>
 	<div class="auto-bt4"></div>
 </div>
		</div>
    
	</div>
  )
}

export default swiper