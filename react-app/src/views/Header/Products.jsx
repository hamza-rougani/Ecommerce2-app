import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axiosClient from '../../axios-client';
import PrCard from '../../components/Home/pages/container/ProductList/PrCard';
import Loading from '../loadings/Loading';

function Products() {
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const title = searchParams.get("title");
const category = searchParams.get("category");
if(location){
useEffect(()=>{
    setload(false)
  getFilterPr() 
},[title,category])
}
const [pr,setpr]=useState()
const [load,setload]=useState(false)
const getFilterPr = ()=>{
if(title){
  console.log("title")
    axiosClient.get(`/Products?title=${title}`)
    .then(({data})=>{
    setpr(data.data)
     setload(true)
    })
    .catch(err=>{
     console.log(err)
    })
  }
if(category){
  console.log("category")
  axiosClient.get(`/Products?category=${category}`)
  .then(({data})=>{
  setpr(data.data)
   setload(true)
  })
  .catch(err=>{
   console.log(err)
  })
}
}

  return (
    <div className='ProductsSearch'>
      {/* <div className='conConfig'> */}
    <div className='searchInfo'>
    {/* <h1>Products</h1>
    <p>resultat: {title}</p> */}
    <div className='conAaaa'>
    <div className='sideMenu'>
        <div className='M'>
        <span id='chevron-left'><i class='bx bx-chevron-left'></i></span>
        <span>Search Bar</span>
        </div>
        <div className='button'>
            <button>Search Menu</button>
            <button>Category</button>
        </div>
        <div className='categoryMen'>
          <ul>
            <li>Clothes <span id="new">new</span></li>
            <li>Swwets</li>
            <li>Salts</li>
            <li>Woman</li>
            <li>Man</li>
            <li>Electricity</li>
            <li>Food</li>
          </ul>
        </div>
        <div className='payA'>
            <div className='from'>Min <input type="text" value='0'/></div>
            <div className='to'> Max<input type="text" value='200'/></div>
        </div>
    </div>
    </div>
    </div>
    <div className='containerSearch'>

    {load ? <>
      {pr.length>0 ? <>
    <div className='ListSearch'>
      
        {pr.map(se=><PrCard product={se}/>)}
      
        
    </div>
    </>
    :
    <div className='no-results'>
      <div className='results-con'>
        <div className='image'>
        <img src="/Images/2399470.png" alt="" />
        </div>
        <div className='text'>
          <span id='Sorry'>Sorry , No results found</span>
          <span id='try'>Try another word</span>
        </div>
      </div>
    </div>
    }
    </>
    :<Loading/>}
    </div>
    </div>
  )
}

export default Products