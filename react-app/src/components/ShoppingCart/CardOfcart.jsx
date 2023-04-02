import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'

function CardOfcart(e) {
  const {notification,setNotification} = useStateContext()
  function onUpdateQte(ev){
    let t = ev.target.value
    if(t=='+'){
      var newQte = {
        quantityCart:e.data.quantityCart+1
      }
    }else if(t=='-'){
      var newQte = {
        quantityCart:e.data.quantityCart-1
      }
    }
  
    axiosClient.put(`/carts/${e.data.ide}`,newQte)
   .then(({data})=>{
    window.location.reload();
   }).catch(err=>{
    console.log(err.response.data.message)
    if(err.response.data.message){
      setNotification(err.response.data.message)
  }
   })
  
  }
const onDelete = ()=>{
  axiosClient.delete(`/carts/${e.data.ide}`)
  .then(()=>{
    setNotification("shopping Cart was successfuly deleted")
    window.location.reload();
    
   }).catch(err=>{
    console.log(err)

   })

}


  const handleChange = (event) => {
    const { value } = event.target;
    e.setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };
  return (
    <div className='ShoppingCart'>
      
      <div className='conPr'>
      <div className='check'>
      <input
          type="checkbox"
          value={e.data.product_id}
          
          onChange={handleChange}
        />
      </div>
      <Link to={`/show/${e.data.product_id}`}>
        <div className='image'>
        <img width="100%" src={`http://127.0.0.1:8000/storage/${e.data.Img1}`}/>
        </div>
        </Link>
        <div className='titlePrice'>
          <div className='textCon'>
        <div>
        <button id="inStock">In Stock</button><span style={{padding:"0px 5px",opacity:"0.8"}}>
         {e.data.description} .</span>
         </div>
         <div>
       <button id='a'> <i class='bx bx-heart'></i></button>
       <button id='a' onClick={onDelete}><i class='bx bx-trash'></i></button>
       </div>
       </div>
       <div className='pCount'>
        <div className='price'>
          <span id='price'> {e.data.price}.00 DH</span><br/>
          <span id='Livraison'>+Shipping : {e.data.Shipping}</span>
        </div>
       <div className='squar'>
                
                <button onClick={onUpdateQte} value='-'>-</button>
                <button>{e.data.quantityCart}</button>
                <button onClick={onUpdateQte} value='+'>+</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CardOfcart