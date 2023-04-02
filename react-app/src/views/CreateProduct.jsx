import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axios-client';
import PrCard from '../components/Home/pages/container/ProductList/PrCard'
import { useStateContext } from '../context/ContextProvider';

function CreateProduct() {
  const {id} = useParams()
  const navigate = useNavigate()
  const {setNotification} = useStateContext()
 const [Errors,setErrors]=useState()
const [loading,setLoading] = useState(false)
const [products,setProducts]=useState({id:null,title:"",description:"",quantity:"",category:"",price:"",Shipping:""})
  const [Image,setImage] = useState();
  const [Images,setImages] = useState({ImgB:"",Img1:"",Img2:"",Img3:"",Img4:""});
  const [Im,setIm] = useState();
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
  
  const onSubmit =(ev)=>{
    ev.preventDefault()
  console.log(products.title)
  const formData = new FormData();
  formData.append('id', products.id);
  formData.append('title', products.title);
  formData.append('description', products.description);
  formData.append('quantity', products.quantity);
  formData.append('category', products.category);
  formData.append('price', products.price);
  formData.append('Shipping', products.Shipping);
  formData.append('ImgB', Images.ImgB);
  formData.append('Img1', Images.Img1);
  formData.append('Img2', Images.Img2);
  formData.append('Img3', Images.Img3);
  formData.append('Img4', Images.Img4);

   if(products.id){
   console.log(products)
    axiosClient.put(`/products/${products.id}`,products)
    .then(()=>{
        //to do show notification
      setNotification("Product was successfuly updated")
      navigate('/ManagProducts')
   }).catch(err=>{
    console.log(err)
   })
  }
   else{
    
    axiosClient.post('/products',formData)
    .then(({data})=>{
     setNotification("Product was successfuly added")
     navigate('/ManagProducts')
     
    })
    .catch(err=>{
     if(err.response.status==422){
       setErrors(err.response.data.errors)
     }
    })
   }
     
  }

  return (
    <div className='createPr'>
      {console.log(Images)}
      {!loading?
      <>
    <h1 className='CREATE-PRODUCT'>CREATE PRODUCT</h1>
    <div className='CreateProduct'>
      <div className='formAdd'>
        
           <form encType='multipart/form-data' onSubmit={onSubmit}>
           <input value={products.title}  onChange={e=>setProducts({...products,title:e.target.value})} type="" placeholder='Title'/>
           <input value={products.description} onChange={e=>setProducts({...products,description:e.target.value})} type="" placeholder='Description'/>
           <input value={products.quantity}  onChange={e=>setProducts({...products,quantity:e.target.value})} type="number" placeholder='Quantity'/>
           <input value={products.price} onChange={e=>setProducts({...products,price:e.target.value})} type="number" placeholder='Price'/>
           <input value={products.Shipping} onChange={e=>setProducts({...products,Shipping:e.target.value})} type="number" placeholder='Shipping'/>
           
           {products.category?<span style={{fontSize:"17px"}}>category :{products.category}</span>:""}
           <select onChange={e=>setProducts({...products,category:e.target.value})}>
             <option value='sweets'>sweets</option>
             <option value='cacks'>cacks</option>
             <option value='Salts'>Salts</option>
           </select>
          
           <input name='ImgB' type="file" onChange={e=>setImages({...Images,ImgB:e.target.files[0]})} style={{display:"none"}}   id="ImgB"/>
           <input name='Img1' type="file" onChange={e=>setImages({...Images,Img1:e.target.files[0]})} style={{display:"none"}}   id="Img1"/>
           <input name='Img2' type="file" onChange={e=>setImages({...Images,Img2:e.target.files[0]})} style={{display:"none"}} id="Img2"/>
           <input name='Img3' type="file" onChange={e=>setImages({...Images,Img3:e.target.files[0]})}  style={{display:"none"}} id="Img3"/>
           <input name='Img4' type="file" onChange={e=>setImages({...Images,Img4:e.target.files[0]})}  style={{display:"none"}} id="Img4"/> 
            <select onChange={e=>setImage(e.target.value)}>
             <option value='ImgB'>Image Backgound</option>
             <option value='Img1'>Image 1</option>
             <option value='Img2'>Image 2</option>
             <option value='Img3'>Image 3</option>
             <option value='Img4'>Image 4</option>
           </select> 
           <div className='btns'>
           <label htmlFor={Image} ><span id='addImage'>
             <img  src='Images/gallery.png'/>
             Add Image
             </span></label>
           <button id="AddPrBtn">Next</button>
           </div>
         </form>
        
     
      </div>
      <div className='cardAdd'>
      <div className='PrCardPro '>
     <div className='card'>
       <div className='image'>
        <div className='conBtn'>
          <button>VIEW DETAILS</button>
        </div>
         <img width='100%' height='200px' src={`http://127.0.0.1:8000/storage/${products.ImgB}`}></img>
       </div>
       <div className='text'>
        <div className='bu1'>
          <div >
         <h2>{products.title ? products.title:"Title"}</h2>
         <p>{products.description ? products.description:"Description"}</p>
         </div>
         <div>
          <h2 style={{color:"#31e205"}}>{products.price}$</h2>
         </div>
         </div>
         <div className='bu2'>
         <h3>CATEGORY</h3>
         <p style={{transform:"translateY(-3px)"}}>{products.category ? products.category:"category"}</p>
         </div>
         <div className='bu2'>
         <h3>SHAPES</h3>
         <div className='bu3'>
         <div><img width='100%'  height='100%' src={`http://127.0.0.1:8000/storage/${products.Img1}`} /></div>
         <div><img width='100%' height='100%' src={`http://127.0.0.1:8000/storage/${products.Img2}`} /></div>
         <div><img width='100%' height='100%' src={`http://127.0.0.1:8000/storage/${products.Img3}`} /></div>
         <div><img width='100%' height='100%' src={`http://127.0.0.1:8000/storage/${products.Img4}`} /></div>
         </div>
         </div>
       </div>
     </div>
   </div>
   </div>
    </div>
    {Errors && 
               <p className='Errors'>
               {Object.keys(Errors).map(key=>(
                <p  key={key}>{Errors[key][0]}</p>
               )
              )
               }
               </p>
              
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

export default CreateProduct