import React from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'
import { useTranslation } from 'react-i18next';
function UserList() {
    const {token,user,setToken,setUser,setcountCart} = useStateContext();
    const onLogout = (E)=>{
        E.preventDefault()
        axiosClient.post('/logout')
            .then(()=>{
             setUser({})
             setToken(null)
             setcountCart(0)
            })
            .catch(err=>{
              console.log(err)
            })
          }
          const {t} = useTranslation()
  return (
    
    <div className='UserList'>
        <ul className='ULlIST'>
        {!token ? <>
        <Link id="LinkDark" to='Login'>
            <li>
                <div className='squar'></div>
                <span>{t("PofileMenu.login")}</span>
            </li>
        </Link>
        <Link id="LinkDark" to='SignUp'>
            <li>
                <div className='squar'></div>
                <span>{t("PofileMenu.register")}</span>
            </li>
        </Link>
        </>:<>
        <Link id="LinkDark" to='MyInfo'>
            <li>
                <div className='squar'></div>
                <span>{t("PofileMenu.profile")}</span>
            </li>
        </Link>
        <Link id="LinkDark" to='MyOrders'>
            <li>
                <div className='squar'></div>
                <span>{t("PofileMenu.order")}</span>
            </li>
        </Link>
        {user.Role ?
        <Link id="LinkDark" to='ManagProducts'>
            <li>
                <div className='squar'></div>
                <span>{t("PofileMenu.admin")}</span>
            </li>
        </Link>
        :""
    }
            <li onClick={onLogout}>
                <div  className='squar LOGOUT'></div>
                <span>{t("PofileMenu.logout")}</span>
            </li>
            </>}
        </ul>
    </div>
  )
}

export default UserList