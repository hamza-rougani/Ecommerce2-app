import React from 'react'
import { changeLanguage } from 'i18next'
function ChangeLanguage() {
    function Change(){
        changeLanguage('en')
        document.body.style.direction='ltr'
        document.querySelector(".Menu").style.left='0'
        document.querySelector(".bx-left-arrow-alt").style.display='block'
        document.querySelector(".bx-right-arrow-alt").style.display='none'
        document.querySelector("hr").style.transform='translateX(-35px)'
       var t =  document.querySelectorAll("li")
        for(var i=0 ;i<t.length ;i++){
          t[i].style.transform='translateX(-40px)'
        }
      }
  return (
    e.setStatus("hello")
  )
}

export default ChangeLanguage