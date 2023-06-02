import React, { useEffect,useState } from 'react'
import {Link, Navigate} from  'react-router-dom'
import Swiper from './swiper'
import axiosClient from '../axios-client'
import { useNavigate,useParams } from 'react-router-dom'
import AlertCart from './alertCart'
import { useStateContext } from '../context/ContextProvider'
import Shipping from './demand/Shipping'
import {useTranslation} from "react-i18next"
function show() {
    const {id} = useParams()
    const [loading,setLoading] = useState(false)
    const [products,setProducts]=useState({id:null,title:"",description:"",quantity:"",category:"",price:""})
    const [Qt,setQt] = useState(1)
    const [displayAlert,setAlert] = useState(false)
    const {notification,setNotification} = useStateContext()
    const [Shipi,setShipi] = useState()
    const navigate = useNavigate()

if(id){
    useEffect(()=>{
    setLoading(true)
    setLoading(true)
    axiosClient.get(`/getProduct/${id}`)
    .then((data)=>{
        setLoading(false)
        //  debugger;
        setProducts(data.data)
        
        }).catch(()=>{
                setLoading(false)
        })
        },[])
       }
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
  const {t} = useTranslation()
  return (
    <div className='PresentProduct'>
        <Shipping t={{quantityCart:Qt,Shipping:products.Shipping}} setShipi={setShipi}/>
        {console.log("SHIPI")}
        {console.log(Shipi)}

        {displayAlert?<AlertCart setAl={setAlert}/>:""}
        
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

    {!loading?
    <>
    <div className='containerPres'>

        <div className='conAns'>
        <div className='ProductP'>
            
            <div className='bigImage'>
            <Swiper Images={[products.Img1,products.Img2,products.Img3,products.Img4]} />
            <div className="navigation-manual">
             </div>
                {/* <img width="100%" src='https://www.pngmart.com/files/16/Fresh-Chocolate-Cake-Transparent-Background.png'/> */}
            </div>
            <div className='prototype'>
            <label for="radio1" className='a'>
                <div className='proto1' >
                    <img width='100%' src={`http://127.0.0.1:8000/storage/${products.Img1}`}/>
                </div>
            </label>
            <label for="radio2" className='label2'>
                <div  className='proto2' >
                <img width='100%' src={`http://127.0.0.1:8000/storage/${products.Img2}`}/> 
                </div>
            </label>
            <label for="radio3">
                <div className='proto3' >
                <img width='100%' src={`http://127.0.0.1:8000/storage/${products.Img3}`}/> </div>
            </label>
            <label for="radio4">
                <div className='proto4' >
                <img width='100%' src={`http://127.0.0.1:8000/storage/${products.Img4}`}/> </div>
            </label>
            </div>
            {/* <div className='ADDTOCART'>
                <button className='btn ' onClick={AddToCart}><i class='bx bx-cart'></i>{t('buyProduct.addtocart')}</button>
               <button className='btn ' onClick={BuyPr}><i class='bx bx-cart'></i>{t('cart.buynow')}</button>
                <button id='btn3'><i class='bx bx-heart'></i>18</button>
            </div> */}
        </div>
        <div className='BuyInfo'>
           <p id="titleP">{products.title}</p>
           {products.quantity>0?
           <button id="inStock">{t('buyProduct.status')}</button>:
           <button id="soldout">{t('buyProduct.status2')}</button>
           }
           <div className='des'>{products.description}</div>
           {/* <div className='des'>{t('buyProduct.description')}</div> */}
           <div className='t'>
           <div class="priceAA">
          <div>{products.price} dh</div>  
          </div>
           
           <button id='whatsapp'><i class='bx bxl-whatsapp'></i> whatsapp</button>
        
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
                
            </div>
        </div>
    </div>
    </div>
    {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
    </>
          :
          <div className='loading'>
    <div class="loader"></div>
    Loading...
    </div>
        }
    
</div>
  )
}

export default show