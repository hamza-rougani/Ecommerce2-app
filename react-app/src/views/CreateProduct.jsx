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
const [products,setProducts]=useState({id:null,title:"",description:"",quantity:"",category:"",price:"",Shipping:"",Type:"",sumi_description:""})
  const [Image,setImage] = useState();
  const [Images,setImages] = useState({ImgB:"",Img1:"",Img2:"",Img3:"",Img4:"",Img5:"",Img6:""});
  const [Product2,setProduct2] = useState({id_Pr2:null,Img1:"",Img2:"",Pr:0,Pr1:"",Pr2:""});
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
  formData.append('Type', products.Type);
  formData.append('sumi_description', products.sumi_description);
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
 
     if(products.Type == "collectcard"){
      const formD = new FormData()
      formD.append('ImgPr1',Product2.Img1);
      formD.append('ImgPr2',Product2.Img2);
      formD.append('Pr',Product2.Pr);
      formD.append('Pr1',Product2.Pr1);
      formD.append('Pr2',Product2.Pr2);
      axiosClient.post('/product2',formD)
    .then(({data})=>{
     setNotification("Product2 was successfuly added")
     navigate('/ManagProducts')
     
    })
    .catch(err=>{
     if(err.response.status==422){
       setErrors(err.response.data.errors)
     }
    })
    }
     
    })
    .catch(err=>{
     if(err.response.status==422){
       setErrors(err.response.data.errors)
     }
    })
  }
   
     
  }
const NextPage = ()=>{
  let y= document.querySelector('.createPr')
  y.classList.add('act')
}
const PrevPage = ()=>{
  let y= document.querySelector('.createPr')
  y.classList.remove('act')
}
useEffect(()=>{
  if(products.description.length>150 || products.description.length<93){
    document.querySelector('.x1').classList.add('error')
    }else{
      document.querySelector('.x1').classList.remove('error')
    }
    if(products.sumi_description.length>45 || products.sumi_description.length<35){
    document.querySelector('.x2').classList.add('erro')
    }else{
      document.querySelector('.x2').classList.remove('erro')
    }
},[products.description,products.sumi_description])

  return (
    <div className='createPr'>
      {console.log(Images)}
      {!loading?
      <>
    <h1 className='CREATE-PRODUCT'>CREATE PRODUCT</h1>
    <div className='CreateProduct'>
      <div className='formAdd'>
        
           <form encType='multipart/form-data' onSubmit={onSubmit}>
            {/* {products.Type} */}
            <div className='prevPgae'>
           <div className='typeOfProduct'>
           <select name="" id="" onChange={e=>setProducts({...products,Type:e.target.value})}>
            <option value="">Type</option>
            <option value="simplecart">simple cart</option>
            <option value="collectcard">collect card</option>
            <option value="slidecard">slide card</option>
           </select>
           </div>
           
           <input value={products.title}  onChange={e=>setProducts({...products,title:e.target.value})} type="" placeholder='Title'/>
          <label className='labelmax x1'>
           <input value={products.description} onChange={e=>setProducts({...products,description:e.target.value})} type="" placeholder='Description (93-150)'/>
           <span id="max">({products.description.length}-150)</span>
           </label>
           <label className='labelmax x2'>
           <input value={products.sumi_description} onChange={e=>setProducts({...products,sumi_description:e.target.value})} type="" placeholder='Sumi_Description (35-45)'/>
           <span id="max">({products.sumi_description.length}-45)</span>
           </label>
           <button id="AddPrBtn" type='button' onClick={NextPage}>Next</button>
           </div>
          <div className='nextpage'>
           <input value={products.quantity}  onChange={e=>setProducts({...products,quantity:e.target.value})} type="number" placeholder='Quantity'/>
           <input value={products.price} onChange={e=>setProducts({...products,price:e.target.value})} type="number" placeholder='Price'/>
           <input value={products.Shipping} onChange={e=>setProducts({...products,Shipping:e.target.value})} type="number" placeholder='Shipping'/>
           
           {products.category?<span style={{fontSize:"17px"}}>category :{products.category}</span>:""}
           <select onChange={e=>setProducts({...products,category:e.target.value})}>
             <option value='sweets'>sweets</option>
             <option value='cacks'>cacks</option>
             <option value='Salts'>Salts</option>
             <option value='Clothes'>Clothes</option>
           </select>
          
           <input name='ImgB' type="file" onChange={e=>setImages({...Images,ImgB:e.target.files[0]})} style={{display:"none"}}   id="ImgB"/>
           <input name='Img1' type="file" onChange={e=>setImages({...Images,Img1:e.target.files[0]})} style={{display:"none"}}   id="Img1"/>
           <input name='Img2' type="file" onChange={e=>setImages({...Images,Img2:e.target.files[0]})} style={{display:"none"}} id="Img2"/>
           <input name='Img3' type="file" onChange={e=>setImages({...Images,Img3:e.target.files[0]})}  style={{display:"none"}} id="Img3"/>
           <input name='Img4' type="file" onChange={e=>setImages({...Images,Img4:e.target.files[0]})}  style={{display:"none"}} id="Img4"/> 
           <input name='Img5' type="file" onChange={e=>setProduct2({...Product2,Img1:e.target.files[0]})}  style={{display:"none"}} id="Img5"/> 
           <input name='Img6' type="file" onChange={e=>setProduct2({...Product2,Img2:e.target.files[0]})}  style={{display:"none"}} id="Img6"/> 
            <select onChange={e=>setImage(e.target.value)}>
             <option value='ImgB'>Image Backgound</option>
             <option value='Img1'>Image 1</option>
             <option value='Img2'>Image 2</option>
             <option value='Img3'>Image 3</option>
             <option value='Img4'>Image 4</option>
             <option value='Img5'>Image 5 {products.Type != "collectcard" ?"(Optional)":""}</option>
             <option value='Img6'>Image 6 {products.Type != "collectcard" ?"(Optional)":""}</option>
           </select> 
           <div className='btns'>
           <label htmlFor={Image} ><span id='addImage'>
             <img  src='Images/gallery.png'/>
             Add Image
             </span></label>
           <button type='submit' id="AddPrBtn">Add</button>
           
           </div>
           <button id="AddPrBtn" type='button' onClick={PrevPage}>Previous</button>
           </div>
         </form>
        
     
      </div>

       
       <div className='PrCardPro'>
    <div className='card'>
      <div className='image'>
       <div className='conBtn'>
         <button>VIEW DETAILS</button>
       </div>
       <label htmlFor="ImgB" >
       <img width='100%'  height='100%' src={products.ImgB ? `http://127.0.0.1:8000/storage/${products.ImgB}`:"Images/ImgB.jpg"} />
       </label>
      </div>
      <div className='text'>
       <div className='bu1'>
        <div className='price'>
         <h2 id='price'>{products.price} dh</h2>
        </div>
        </div>
        <div className='photos'>
        <div className='bu3'>
         <div><label htmlFor="Img1" ><img width='100%'  height='100%' src={products.Img1 ? `http://127.0.0.1:8000/storage/${products.Img1}`:"Images/gallery.png"} /></label></div>
         <div><label htmlFor="Img2" ><img width='100%'  height='100%' src={products.Img2 ? `http://127.0.0.1:8000/storage/${products.Img2}`:"Images/gallery.png"} /></label></div>
         <div><label htmlFor="Img3" ><img width='100%'  height='100%' src={products.Img3 ? `http://127.0.0.1:8000/storage/${products.Img3}`:"Images/gallery.png"} /></label></div>
         <div><label htmlFor="Img4" ><img width='100%'  height='100%' src={products.Img4 ? `http://127.0.0.1:8000/storage/${products.Img4}`:"Images/gallery.png"} /></label></div>
         



        </div>
        </div>
        <div className='bu2'>
        <h3 id='SHAPES'>{products.description ? products.sumi_description:"Description"}</h3>
        
        </div>
      </div>
    </div>
    {products.Type == "collectcard" ?
    <div className='cat2'>
    <div className='r'>
      <input type='number' id='Pr2iD' placeholder='id' onChange={e=>setProduct2({...Product2,Pr1:e.target.value})}/>
      <label htmlFor="Img5" ><img width='100%'  height='100%' src={products.Img5 ? `http://127.0.0.1:8000/storage/${products.Img5}`:"Images/gallery.png"} /></label></div>
    <div className='r'>
    <input type='number' id='Pr2iD' placeholder='id' onChange={e=>setProduct2({...Product2,Pr2:e.target.value})}/>
      <label htmlFor="Img6" ><img width='100%'  height='100%' src={products.Img6 ? `http://127.0.0.1:8000/storage/${products.Img6}`:"Images/gallery.png"} /></label></div>
    </div>
   :""}
    
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