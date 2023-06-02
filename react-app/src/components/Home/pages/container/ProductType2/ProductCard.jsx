import React from 'react'

function ProductCard(e) {
  return (
    <div className='ProductCard'>
        <div className='Pr'>
        <div className='before'>
        <div className='image'>
        <button><img  src={`http://127.0.0.1:8000/storage/${e.PrT.Img1}`}/></button>
         </div>
           <div className='photos'>
            <div className='ulIm'>
              <button><img  src={`http://127.0.0.1:8000/storage/${e.PrT.Img1}`}/></button>
              <button><img  src={`http://127.0.0.1:8000/storage/${e.PrT.Img2}`}/></button>
              <button><img  src={`http://127.0.0.1:8000/storage/${e.PrT.Img3}`}/></button>
              <button><img  src={`http://127.0.0.1:8000/storage/${e.PrT.Img4}`}/></button>

            </div>
           </div>
           </div>
           <div className='after'>
            <h2>{e.PrT.title}</h2>
            <div className='prix'>
            <span>Buy now</span>
            
              <h3 id='S'>{e.PrT.price} DH</h3>
              {/* <span id='S'></span> */}
              
              
            </div>
            <ul className='desc'>
              <li>{e.PrT.description}</li>
              
              
            </ul>
            <div className='BuyNow'>
              <button>Buy now</button>
            </div>
           </div>
        </div>
       
    </div>
  )
}

export default ProductCard