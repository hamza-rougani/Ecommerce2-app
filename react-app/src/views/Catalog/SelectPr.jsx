import React from 'react'

function SelectPr(e) {
    
    const onCh=(rv)=>{
        let Prt =e.Pr
        e.setPr((t)=>{
            
            return {...t,Prt:rv.target.value}
          })
    }
  return (
    <div>
        <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
            <div id='select'>
              <select name="" id="" onChange={onCh}>
                <option value='1'>choose product</option>
                <option value='2'>bergure</option>
                <option value='3'>anans</option>
                <option value='4'>banana</option>
              </select>
            </div>
            
    </div>
  )
}

export default SelectPr