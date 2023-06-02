import React,{useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client'
import Category from './Header/Category';
import UserList from './Header/UserList';
import Languages from './Header/Languages';
import { useTranslation } from 'react-i18next';
import { getCartInfo } from './GetInfo/Info';
import Search from './Header/Search';
function Header() {
    const [cat , catVal] =useState(false);
    const [displayUser , setdisplayUser ] =useState(false);
    const [displayCategory , setdisplayCategory] =useState(false);
    const [displayLanguage , setdisplayLanguage] =useState(false);
    const DisUser = useRef()
    const DisCategory = useRef()
    const DisLanguage = useRef()
    const search = useRef()

    const {countCart,setcountCart,setcountOrder} = useStateContext()
    useEffect(()=>{
      window.addEventListener('click',handleClickout)
      axiosClient.get('/carts')
      .then(({data})=>{
        setcountCart(data.data.length)
      })
      axiosClient.get('/orders')
      .then(({data})=>{
        setcountOrder(data.data.length)
      })
    },[])
    const handleClickout =(ev)=>{
       if(DisUser.current.contains(ev.target)){
        console.log("i clicked outsideAA")
       }else{
        setdisplayUser(false)
       }
       // DisCategory
       if(DisCategory.current.contains(ev.target)){
        console.log(ev.target)
       }else{
        setdisplayCategory(false)
       }
       //
       if(DisLanguage.current.contains(ev.target)){
        console.log(ev.target)
       }else{
        setdisplayLanguage(false)
       }

       if(search.current.contains(ev.target) || ev.target.className=='bx bx-search-alt-2'){
        console.log("I clicked inside")
        console.log(ev.target)
      }else{
        let search = document.querySelector('.searchHeader')
        search.classList.remove('activeS')
      }

    }
    function categoryDis(){
        catVal(true)
    }
    const {token,user,setToken,setUser} = useStateContext();
  
    useEffect(()=>{
      axiosClient.get('/user')
      .then(({data})=>{
          setUser(data)
          const use = JSON.stringify(data);
          localStorage.setItem('user',use)
          console.log(data)
           })
   },[])
   const onUser =()=>{
    setdisplayUser(true)
   }
   const onCategory =()=>{
    setdisplayCategory(true)
   }
   const onLanguage =()=>{
    setdisplayLanguage(true)
   }
   const { t, i18n } = useTranslation();
   function displaymenu(){
    let menu = document.querySelector(".Menu")
     menu.classList.add("displayMenu")
  }
  // const shoppingCartCount = localStorage.getItem('shoppingCartCount')
 
  const ClickDisp = ()=>{
    let sh = document.querySelector('.searchHeader')
    sh.classList.toggle('activeS') 

  }
  return (
    <div className='headerContainer'>
      <header>
        <div className='headerC'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"/>
      <ul className='ulA'>
        <div className='sepa'>
      
       <li style={{direction:'ltr'}}><Link  id='Linklight' to='/Home'><div id='ROXTECH'><img src="Images/Fudcon_symbol.png" width='40px' alt="" />ESTEVANICO</div></Link></li>
       
      <li id="res" onClick={onCategory} ref={DisCategory} value={displayCategory}> {t('category')} {displayCategory? <Category/>:""}</li>
      <li id="res" onClick={onLanguage} ref={DisLanguage} value={displayLanguage}>{t('language')} {displayLanguage? <Languages/>:""}</li>
      <li className='input' onClick={ClickDisp}><span ><i class='bx bx-search-alt-2'></i></span></li>
      {/* <li className='input'><Search/></li> */}
      </div>
      
      <li onClick={displaymenu} id="bx-menu" ><i class='bx bx-menu'></i></li>
       {/* <input type='text' placeholder={t('search')}></input> */}
     </ul>
     
     <ul  className='second'>
      
       <li><Link id="Linklight" to='/shoppingCart'><div className='logo'>
       <i class='bx bxs-cart-alt'></i> 
        <span className='numberC'>{countCart}</span></div> </Link>
        </li>
      <li onClick={onUser} ref={DisUser} value={displayUser}><div className='Pr imageL'><i class='bx bxs-user'></i></div>{displayUser ?<UserList/>:""} </li>
      <li  onClick={displaymenu} id="menu" ><i class='bx bx-menu'></i></li>
 
     </ul>
     </div>
     <div className='searchHeader' ref={search}>
     <Search/>
     </div>
    </header>
    </div>

  )
}

export default Header