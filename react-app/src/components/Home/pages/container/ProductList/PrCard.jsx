import React from 'react'
import { Link } from 'react-router-dom'

function PrCard(e) {
  return (
    <div className='PrCardPro'>
    <div className='card'>
      <div className='image'>
       <div className='conBtn'>
         <button>VIEW DETAILS</button>
       </div>
        <Link to={`/show/${e.product.id}`}>
        <img  src={`http://127.0.0.1:8000/storage/${e.product.ImgB}`}></img>
        </Link>
      </div>
      <div className='text'>
       <div className='bu1'>
         {/* <div >
        <h2>{e.product.title}</h2>
        <p>{e.product.description}</p>
        </div> */}
        <div className='price'>
         <h2 id='price'>{e.product.price} dh</h2>
        </div>
        </div>
        {/* <div className='bu2'>
        <h3>CATEGORY</h3>
        <p style={{transform:"translateY(-3px)"}}>{e.product.category}</p>
        </div> */}
        <div className='photos'>
        <div className='bu3'>
         <div><img width='100%'  height='100%' src={`http://127.0.0.1:8000/storage/${e.product.Img1}`} /></div>
         <div><img width='100%' height='100%' src={`http://127.0.0.1:8000/storage/${e.product.Img2}`} /></div>
         <div><img width='100%' height='100%' src={`http://127.0.0.1:8000/storage/${e.product.Img3}`} /></div>
         <div><img width='100%' height='100%' src={`http://127.0.0.1:8000/storage/${e.product.Img4}`} /></div>
        </div>
        </div>
        <div className='bu2'>
        <h3 id='SHAPES'>{e.product.sumi_description}</h3>
        
        </div>
      </div>
    </div>
  </div>

  )
}

export default PrCard