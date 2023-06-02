import React from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
function alertCart(e) {
  const {t} = useTranslation()
  return (
    <div className='notification'>
        <div className='cartMessage'>
       {/* <button id="i" onClick={()=>e.setAl(false)}> <i class='bx bx-x' ></i></button> */}

            <span>{t('Alertshow.title')}.</span>
            <div className='buttonCart'>
           <Link to='/Home'> <button id='btn1'>{t('Alertshow.gohome')}</button></Link>
           <Link to='/ShoppingCart'> <button id='btn2'>{t('Alertshow.continue')}</button></Link>
           
           </div>

        </div>
    </div>
  )
}

export default alertCart