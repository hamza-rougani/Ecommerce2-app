import React, { useRef ,useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../axios-client'
function Menu(ev) {
  const DisableMenu = useRef()
  const MenuRef = useRef()
  const {setToken,setUser,user,token,countOrder,countCart,setcountOrder,setcountCart}=useStateContext()
  function displaymenu(){
    let menu = document.querySelector(".Menu")
     menu.classList.remove("displayMenu")
     
  }
  // useEffect(()=>{
    
  //   if(DisableMenu.current.className == 'Menu displayMenu'){
  //     console.log("sdfsdf")
  //   }
  // },[])

  
  useEffect(()=>{
    window.addEventListener('click',HandleMenu)
  },[])
  const [activeMenu,setActiveMenu] = useState(false)
function HandleMenu(e){
  if(DisableMenu.current.contains(e.target) || e.target.className=="bx bx-menu"){
  }else{
    let menu = document.querySelector(".Menu")
    menu.classList.remove("displayMenu")
    console.log(e.target.className)
  }
}

function DisplayLan(){
    let menu = document.querySelector(".men")
    menu.classList.toggle("DisplayLan")

}
function DisplayCat(){
    let menu = document.querySelector(".men1")
    menu.classList.toggle("DisplayLan")


}
const onLogout = (E)=>{
  E.preventDefault()
  axiosClient.post('/logout')
      .then(()=>{
       setUser({})
       setToken(null)
       setcountOrder(0)
       setcountCart(0)
      })
      .catch(err=>{
        console.log(err)
      })
    }
const {t,i18n}=useTranslation()
function Change(){
  document.body.style.direction='ltr'
  document.body.classList.remove('ArabicActive')
  }
function ChangeAre(){
    document.body.style.direction='rtl'
    document.body.classList.add('ArabicActive')
}
// const shoppingCartCount = localStorage.getItem('shoppingCartCount')
// const countOrder = localStorage.getItem('countOrder')
  return (
    <div className='Menu' ref={DisableMenu}>
       <div className="list">
           <ul>
               <li id="menusup" className='li'>
                  <div className="title">
                     <img className='rimag' src="Images/Fudcon_symbol.png" alt="" />
                     <div className="text">
                     <Link style={{color:"#fff",textDecoration:"none"}} to='/Home'> <p style={{fontSize:"20px"}}>RoxTech</p></Link>
                         <span >menu </span>
                     </div>
                  </div>
                  {/* <i onClick={displaymenu} class='bx bx-arrow-back'></i> */}
                  <i onClick={displaymenu} class='bx bx-right-arrow-alt'></i>
               <i onClick={displaymenu} class='bx bx-left-arrow-alt'></i>
               </li>
               <li className='search li'>
               <i class='bx bx-search-alt-2' ></i>
                   <input type="text"  placeholder={t('search')}/>
               </li>
               <Link id='LinkDark' to='/Home'><li className='li a'><i class='bx bx-home' ></i> {t('home')}</li></Link>
               {!token ? <>
        <Link id="LinkDark" to='Login'>
            <li className='li a'>
            <i class='bx bx-log-in-circle'></i>
                <span>{t("PofileMenu.login")}</span>
            </li>
        </Link>
        <Link id="LinkDark" to='SignUp'>
            <li className='li a'>
            <i class='bx bx-user-plus'></i>
                <span>{t("PofileMenu.register")}</span>
            </li>
        </Link>
        </>:""}
              
               
               <Link id='LinkDark' to='/MyInfo'><li className='li a'><i class='bx bx-user' ></i> {t("PofileMenu.profile")}</li></Link>
               <Link id='LinkDark' to='/MyOrders'><li className='li a'><i class='bx bx-basket'></i> {t("PofileMenu.order")} <span className='countOrder'>{countOrder}</span></li></Link>
               <Link id='LinkDark' to='/shoppingCart'><li className='li a'><i class='bx bx-shopping-bag'></i>{t('carta')} <span className='countOrder'>{countCart}</span></li></Link>
               <hr/>
               <li className='a li' onClick={DisplayLan}><i class='bx bx-book-bookmark'></i> {t('language')} <i class='bx bx-chevron-down'></i></li>
               <li className='m li men'>
                <ul>
                <li className='li' onClick={()=>{
                changeLanguage('ar')
                ChangeAre()

                }}>
                <div className='squar'></div>
                <span>{t('languages.ar')} </span>
            </li>
            <li className='li' onClick={()=>{
                changeLanguage('en')
                document.body.style.direction='ltr'
                Change()
         }}>
                <div className='squar'></div>
                <span>{t('languages.en')} </span>
            </li>
            <li className='li'  onClick={()=>{
                changeLanguage('fr')
                document.body.style.direction='ltr'
                Change()
                }}>
                <div className='squar'></div>
                <span>{t('languages.fr')} </span>
            </li>
               </ul>
               </li>
               <li className='li a' onClick={DisplayCat}><i class='bx bx-shopping-bag'></i> {t('category')} <i class='bx bx-chevron-down'></i></li>
               <li className='m li men1'>
                <ul>
               <li className='li'>GQSD</li>
               <li className='li'>ENGLISH</li>
               <li className='li'>FRENCH</li>
               </ul>
               </li>
               {/* <li><i ref={MenuRef} class='bx bx-menu'></i></li> */}
           </ul>
           {token ? 
           <ul className='LOG'>
            <li className='li' onClick={onLogout}><i class='bx bx-log-out-circle' ></i> {t("PofileMenu.logout")}</li>
           </ul>
           : ""}
          
       </div>
     </div>
  )
}

export default Menu