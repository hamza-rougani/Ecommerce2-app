import React from 'react'

function ProductCard() {
  return (
    <div className='ProductCard move'>
        <div className='Pr'>
        <div className='before'>
        <div className='image'>
          <img src='Images/apple.png'/>
         </div>
           <div className='photos'>
            <div className='ulIm'>
              <button><img src='Images/apple.png'/></button>
              <button><img src='Images/apple.png'/></button>
              <button><img src='Images/apple.png'/></button>
              <button><img src='Images/apple.png'/></button>
            </div>
           </div>
           </div>
           <div className='after'>
            <h2>التفاح الاخضر</h2>
            <div className='prix'>
            <span>فقط ب</span>
            <span id='S'>DH</span>
              <h1 id='S'>15.99 </h1>
              
              
            </div>
            <ul className='desc'>
              <li>يتوف العديد من الاشكال</li>
              <li>يتوف الشحن مجاني في اكادير</li>
              <li>الثمن المعروض للكيلوا الواحد</li>
              <li>يمكنكم التواصل معنا الاستفسار</li>
              
            </ul>
            <div className='BuyNow'>
              <button>اطلب الان</button>
            </div>
           </div>
        </div>
       
    </div>
  )
}

export default ProductCard