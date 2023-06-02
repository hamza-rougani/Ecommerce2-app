import React from 'react'

function ProductIntro(e) {
    const products = e.products
    const t = e.t
    const Qt= e.Qt
    const setQt = e.setQt
    const Shipi = e.Shipi
    const AddToCart = ()=>{
        const payload = {
        quantityCart:Qt,
         product_id:id,
         id:1,
        }
      axiosClient.post('/carts',payload)
      .then(({data})=>{
        console.log(data)
        setNotification("Product added successfully")
        setAlert(true)
        
      })
      .catch(err=>{
        console.log("hh")
        if(err.message=="Request failed with status code 500"){
            setNotification("already exist in cart")
        }
        
      })
      }
      const BuyPr =()=>{
        const payload =[{...products,quantityCart:Qt,product_id:products.id}]
        const ProductBuy = JSON.stringify(payload);
       localStorage.setItem('Products',ProductBuy)
       console.log(localStorage.getItem('Products'))
         navigate('/BuyProduct')
      }
  return (
    <div className='BuyInfo'>
    <p id="titleP">{products.title}</p>
    {products.quantity>0?
    <button id="inStock">{t('buyProduct.status')}</button>:
    <button id="soldout">{t('buyProduct.status2')}</button>
    }
    <div className='des'>{t('buyProduct.description')}</div>
    <div class="priceAA">
     {products.price} dh
 
    </div>
    <hr/>
    
   
    <div className='orders'><span>RoxShop </span> {t('buyProduct.livInfo')}<a href='#'> {t('buyProduct.more')} ...  </a></div>
   <div className='size'>
     <h3>{t('buyProduct.size')}</h3>
     <div className='sizes'>
         <div className='a'>XXL</div>
         <div className='a'>XL</div>
         <div className='a'>ML</div>
         <div className='a'>L</div>
     </div>
   </div>

   
    <div className='Quantity'>
     <div className='AA'>
     <h3>{t('buyProduct.quantity')}: </h3>
     <div className='squar'>
         
         <button onClick={e=>Qt>1&&setQt(Qt-1)}>-</button>
         <button>{Qt}</button>
         <button onClick={e=>Qt<10&&setQt(Qt+1)}>+</button>
     </div>
     </div>
     
    </div>
    <div className='Livraison'>
    <span id="span1"> {t('buyProduct.deliveryto')}<i class='bx bx-location-plus'></i><a style={{textDecoration:"none",color:"blue"}} href=""> Morocco</a></span>
    <span id="span2"> {t('cart.shipping')} {Shipi} DH </span>
    <span id="span3">{t('buyProduct.fromLoc')}</span>
    {t('buyProduct.timeD')}
    </div>
    <div className='ADDTOCART'>
         <button className='btn ' onClick={AddToCart}><i class='bx bx-cart'></i>{t('buyProduct.addtocart')}</button>
        <button className='btn ' onClick={BuyPr}><i class='bx bx-cart'></i>{t('cart.buynow')}</button>
         <button id='btn3'><i class='bx bx-heart'></i>18</button>
     </div>
 </div>
  )
}

export default ProductIntro