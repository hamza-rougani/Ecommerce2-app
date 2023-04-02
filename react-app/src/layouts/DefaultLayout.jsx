import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Header from '../views/header'
function DefaultLayout() {
  const {token,notification} =  useStateContext()

  if(!token){
    return <Navigate to="/Login"/>
      
  }
 
  return (
    <div>
  
   
         
    <Header/>
    <Outlet/>
    {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
   
    </div>
  )
}

export default DefaultLayout