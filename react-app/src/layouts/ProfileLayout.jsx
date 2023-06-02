import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Header from '../views/header'
import SidebarAc from '../views/Profile/SidebarAc'
import HeaderProfile from '../views/Profile/HeaderProfile';
function ProfileLayout() {
  const {token,notification} =  useStateContext()

  if(!token){
    return <Navigate to="/Login"/>
      
  }
 
  return (
    <>
    {/* <Header/> */}
    <div className='ContainerAc'>
    <SidebarAc/>
    <div className='Side'></div>
    <div className='conatinerP'>
    <HeaderProfile/>
    <Header/>
    <div className='HeaderPr'></div>
    <Outlet/>
    </div>
    {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
   
    </div>
    </>
  )
}

export default ProfileLayout
