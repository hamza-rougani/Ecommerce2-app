import React from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
function SidebarAc() {
  const {t} = useTranslation()
  return (
    <div className='SidebarAc'>
        <div className='Profile'>
          <div className='PrProfile'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'/>
          HAMZA ROUGANI
          </div>
        </div>
        <div className='Items'>
          <ul>
            <Link id='LinkDark' to='/Home'><li><i class='bx bx-home-smile'></i> {t('MyInfo.home')}</li></Link>
            <Link id='LinkDark' to='/MyInfo'><li><i class='bx bx-info-circle'></i>{t('MyInfo.inf')}</li></Link>
            <Link id='LinkDark' to='/MyOrders'><li><i class='bx bx-basket'></i>{t('MyInfo.order')}</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default SidebarAc