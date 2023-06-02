import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Category() {

  return (
    <div className='Category'>
        <ul className='ULlIST'>
        <Link id="LinkDark" to='/Products?category=sweets'>
            <li>
                <div className='squar'></div>
                <span>sweets</span>
            </li>
        </Link>
        <Link id="LinkDark" to='/Products?category=cacks'>
            <li>
                <div className='squar'></div>
                <span>cacks</span>
            </li>
        </Link>
        <Link id="LinkDark" to='/Products?category=Salts'>
            <li>
                <div className='squar'></div>
                <span>Salts</span>
            </li>
        </Link>
           
        </ul>
    </div>
  )
}

export default Category