import React, { useEffect,useState } from 'react'
import {Link, Navigate} from  'react-router-dom'
import Swiper from './swiper'
import axiosClient from '../axios-client'
import { useNavigate,useParams } from 'react-router-dom'
import AlertCart from './alertCart'
import { useStateContext } from '../context/ContextProvider'
function show() {
    const {id} = useParams()
    const [loading,setLoading] = useState(false)
    const [products,setProducts]=useState({id:null,title:"",description:"",quantity:"",category:"",price:""})
    const [Qt,setQt] = useState(1)
    const [displayAlert,setAlert] = useState(false)
    const [notification,setNotification] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
       
            setTimeout(()=>{
                setNotification(null);
            },5000)
        
    },[])
if(id){
    useEffect(()=>{
    setLoading(true)
    setLoading(true)
    axiosClient.get(`/products/${id}`)
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
    const payload =[{...products,quantityCart:Qt}]
    const ProductBuy = JSON.stringify(payload);
   localStorage.setItem('Products',ProductBuy)
   console.log(localStorage.getItem('Products'))
     navigate('/BuyProduct')
  }
  return (
    <div className='PresentProduct'>
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
           
        </div>
        <div className='BuyInfo'>
           <h5 id='titleUpper'>TITLE</h5>
           <p id="titleP">{products.title}</p>
           {products.quantity>0?
           <button id="inStock">In Stock</button>:
           <button id="soldout">Sold Out</button>
           }
           <div class="price">
            <span>${products.price}</span>
           <span id='promo'>RRP <del>$ 44 </del><font>SAVE $10.00</font> </span>
           </div>
          
           <div className='orders'>Available for orders $40 and above <span>BinoFood </span> <a href='#'>more info</a></div>
           <h5>SIZE</h5>
           <select>
            <option>Please Select</option>
            <option>1</option>
            <option>1</option>
           </select>
       
          
           <div className='Quantity'>
            <div className='AA'>
            <h5>Quantity</h5>
            <div className='squar'>
                
                <button onClick={e=>Qt>1&&setQt(Qt-1)}>-</button>
                <button>{Qt}</button>
                <button onClick={e=>Qt<10&&setQt(Qt+1)}>+</button>
            </div>
            </div>
            
           </div>
           <div className='Livraison'>
           <span id="span1"> Livré vers <i class='bx bx-location-plus'></i><a style={{textDecoration:"none",color:"blue"}} href=""> Morocco</a></span>
           <span id="span2">Livraison Free </span>
           <span id="span3"> De Agadir via RoxTech Standard Shipping </span>
            Date de livraison estimée: 21 . 
           </div>
           <div className='ADDTOCART'>
                <button className='btn btn1' onClick={AddToCart}><i class='bx bx-cart'></i> ADD TO CART</button>
               <button className='btn btn2' onClick={BuyPr}><i class='bx bx-cart'></i> bUY NOW</button>
                <button className='btn3'><i class='bx bx-heart'></i>18</button>
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