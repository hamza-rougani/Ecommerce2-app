import React, { useEffect,useState } from 'react'

import CardOfcart from './CardOfcart'

function AllCards(e) {
  
  return (
    <div className='AllCards'>
      {e.data.map(ev=><CardOfcart data={ev} setCheckedItems={e.setCheckedItems} checkedItems={e.checkedItems}/>)}
    </div>
  )
}

export default AllCards