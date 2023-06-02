import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Header from '../views/header'
import Footer from '../components/Home/pages/footer/Footer';
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
   <Footer/>
    </div>
  )
}

export default DefaultLayout