
import React,{ useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider';
function sidebar() {
  const {user} = useStateContext();
  const getUser = localStorage.getItem('user')
  const traUser = JSON.parse(getUser)
  return (
    <div className='sidebar'>
       
    <div className="list">
        <ul>
            <li >
               <div className="title">
                  <img className='rimag' src="Images/Fudcon_symbol.png" alt="" />
                  <div className="text">
                  <Link style={{color:"#fff",textDecoration:"none"}} to='/Home'> <p style={{fontSize:"20px"}}>RoxTech</p></Link>
                      <span >menu of administrator</span>
                  </div>
               </div>
            </li>
            <li className='search'>
            <i class='bx bx-search-alt-2' ></i>
                <input type="text"  placeholder="search"/>
            </li>
  
            
            <Link id="Li" to='/ManagProducts'><li className='a'><i class='bx bxl-quora'></i>Products management</li></Link>
            <Link id="Li" to='/Processed'><li className='a'><i class='bx bxl-quora'></i>Orders management</li></Link>
            

           
     
            {traUser.SuperAdmin ?
            <Link id="Li" to='/ManagUsers'><li className='a'><i class='bx bxs-videos'></i>Users management</li></Link>
            :
            ""
             }
          <Link id="Li" to='/Catalog'><li className='a'><i class='bx bxl-quora'></i> Catalog management</li></Link>
            <div className='line'></div>
            <li className='a'><i class='bx bx-log-out'></i>logout</li>
           
        </ul>
    </div>
  </div>
  )
}

export default sidebar
