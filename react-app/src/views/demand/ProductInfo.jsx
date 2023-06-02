import React from 'react'

function ProductInfo(e) {
  return (
    <div className='ProductInfo'>
      <div className='ImgIn'>
                    <img src={`http://127.0.0.1:8000/storage/${e.InPr ? e.InPr.ImgB:e.FirstPr.ImgB}`} width="100%"></img>
                    </div>
                    <div className='inf'>
                        <div className='h4'>Product Information</div>
                        <div className='title'>Title : {e.InPr ? e.InPr.title:e.FirstPr.title}</div>
                        <div className='title'>Price : {e.InPr ? e.InPr.price:e.FirstPr.price}</div>
                        <div className='title'>Shipping (1 Item) : {e.InPr ? e.InPr.Shipping:e.FirstPr.Shipping}</div>
                        <div className='title'>Total : {e.InPr ? e.InPr.total:e.FirstPr.total}</div>
                    </div>
    </div>
  )
}

export default ProductInfo