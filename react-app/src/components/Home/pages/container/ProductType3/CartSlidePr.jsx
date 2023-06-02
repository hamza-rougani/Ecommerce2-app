import React from 'react'

function CartSlidePr(r) {
let e = r.pr
  return (
    <div className='CartSlidePr'>
        <div className='image'>
            <div className='im'>
            <img src={`http://127.0.0.1:8000/storage/${e.ImgB}`}alt="" />
            </div>
        </div>
        <div className='contentText'>
            {/* <div className='shadow'></div> */}
            {/* <div className='title'></div> */}
            <div className='info'>
                <div className='title'>{e.title}</div>
                <div className='price'>{e.price} dh</div>
            </div>
            <div className='span'>{e.sumi_description} </div>
            
            <div className='btn'>
                <button>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default CartSlidePr