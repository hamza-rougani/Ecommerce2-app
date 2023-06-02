import React from 'react'
import { Link } from 'react-router-dom'
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
function Languages() {
    function Change(){
      document.body.style.direction='ltr'
      document.body.classList.remove('ArabicActive')
      }
    function ChangeAre(){
        document.body.style.direction='rtl'
        document.body.classList.add('ArabicActive')
    }
    const {t,i18n}=useTranslation()

  return (
        <div className='Languages'>
        <ul className='ULlIST'>
            <li onClick={()=>{
                changeLanguage('ar')
                ChangeAre()
                }}>
                <div className='squar'></div>
                <span>{t('languages.ar')} (AR)</span>
            </li>
            <li onClick={()=>{
                changeLanguage('en')
                Change()
         }}>
                <div className='squar'></div>
                <span>{t('languages.en')} (EN)</span>
            </li>
            <li onClick={()=>{
                changeLanguage('fr')
                Change()
                }}>
                <div className='squar'></div>
                <span>{t('languages.fr')} (FR)</span>
            </li>
           
        </ul>
    </div>

  )
}

export default Languages