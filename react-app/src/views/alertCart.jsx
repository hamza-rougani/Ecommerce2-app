import React from 'react'
import { Link } from 'react-router-dom'

function alertCart(e) {
  return (
    <div className='alertCart'>
        <div className='cartMessage'>
       <button id="i" onClick={()=>e.setAl(false)}> <i class='bx bx-x' ></i></button>
            <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='buttonCart'>
           <Link to='/Home'> <button id='btn1'>continue to home</button></Link>
           <Link to='/ShoppingCart'> <button id='btn2'>shopping cart</button></Link>
           
           </div>
           </>
        </div>
    </div>
  )
}

export default alertCart