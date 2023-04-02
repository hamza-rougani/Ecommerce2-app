import React from 'react'
import CardBuy from './CardBuy'

function AllCardsBuy(e) {
  return (
    <div className='AllCardsBuy'>
       {e.Product.map(p=><CardBuy pr={p}/>)}
    </div>
  )
}

export default AllCardsBuy