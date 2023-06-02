import React from 'react'
import { useTranslation } from 'react-i18next';
import SwiperSlide from './container/ProductList/SwiperSlide';
function Introduction() {
  const { t } = useTranslation();
  return (
    <div className='test'>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
     
        <div className='mul'>
          <div className='ulIntro'>
            <SwiperSlide/>
            <div className='welcome'>
              <div className='wel'>
              <img src='Images/Fudcon_symbol.png' width="50px"/>
            <p id="we">{t('welcome')}</p>
            <p>{t('welcomeSumi')}</p>
            </div>
            </div>
          </div>
          <div className='welcome1'>
            <div className='wee'>
              <img src='Images/Fudcon_symbol.png' width="80px"/>
              <p id="we">مرحبا بكم</p>
            </div>
            <p>في متجر RoxTech للتجارة</p>
            </div>
        </div>
        
    </div>
       
       
       
  )
}

export default Introduction