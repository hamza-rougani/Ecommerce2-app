import React from 'react'
import {useTranslation} from "react-i18next"
function HeaderProfile() {
  const {t}= useTranslation()
  return (
    <div className='HeaderProfile'>
        <div className='TitleBig'>{t('MyInfo.space')}</div>
        <div className='form'>
            <input type="text" placeholder={t('search')}/>
            <button><i class='bx bx-search-alt-2'></i></button>
        </div>
    </div>
  )
}

export default HeaderProfile