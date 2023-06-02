import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {
    const {t} = useTranslation()
  return (
    <div className='About'>
        <ul>
            <li>
                <img src="Images/delivery-truck.png" alt="" />
                <div className='delivery'>
                <span>{t("abouthome.Fastdelivery")}</span>
                <span>{t("abouthome.d1")}</span>
                </div>
            </li>
            <li>
                <img src="Images/share.png" alt="" />
                <div className='delivery'>
                <span>{t("abouthome.cash")}</span>
                <span>{t("abouthome.d2")}</span>
                </div>
                 

            </li>
            <li>
                <img src="Images/shield.png" alt="" />
                <div className='delivery'>
                <span>{t("abouthome.Security")}</span>
                <span>{t("abouthome.d3")}</span>
                </div>
            </li>
            <li>
                <img src="Images/operator.png" alt="" />
                <div className='delivery'>
                <span>{t("footer.Contactus")}</span>
                <span>0767287673</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default About