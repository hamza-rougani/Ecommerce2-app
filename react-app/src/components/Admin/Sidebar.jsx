
import React,{ useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider';
function sidebar() {
  const {user} = useStateContext();
 
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
  
            
            <Link id="Li" to='/ManagProducts'><li className='a'><i class='bx bxl-quora'></i>Manage Products</li></Link>
            <Link id="Li" to='/Processed'><li className='a'><i class='bx bxl-quora'></i>The Orders</li></Link>
            

           
     
            {user.SuperAdmin ?
            <Link id="Li" to='/ManagUsers'><li className='a'><i class='bx bxs-videos'></i>Manage Users</li></Link>
            :
            ""
             }
          <Link id="Li" to='/ProductsCatalog'><li className='a'><i class='bx bxl-quora'></i>Products Catalog</li></Link>
            <div className='line'></div>
            <li className='a'><i class='bx bx-log-out'></i>logout</li>
           
        </ul>
    </div>
  </div>
  )
}

export default sidebar
