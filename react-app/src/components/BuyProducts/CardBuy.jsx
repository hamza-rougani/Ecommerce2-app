import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function CardBuy(e) {
console.log(e.pr)
const [Qte,setQte] = useState(e.pr.quantityCart)
  return (
    <div className='CardBuy'>
      <div className='ShoppingCart BuyCart'>
      
      <div className='conPr'>
     
      <Link to={`/show/${e.pr.id}`}>
        <div className='image'>
        <img width="100%" src={`http://127.0.0.1:8000/storage/${e.pr.Img1}`}/>
        </div>
        </Link>
        <div className='titlePrice'>
          <div className='textCon'>
        <div>
        <button id="inStock">In Stock</button><span style={{padding:"0px 5px",opacity:"0.8"}}>
        {e.pr.description}.</span>
         </div>

       </div>
       <div className='pCount'>
        <div className='price'>
          <span id='price'>{e.pr.price} DH</span><br/>
          <span id='Livraison'>+Livraison :{e.pr.Shipping} DH</span>
        </div>
       <div className='squar'>
                
            {/* <button onClick={ev=>Qte>1&&setQte(Qte-1)}>-</button>
                <button>{Qte}</button>
                <button onClick={ev=>Qte<10&&setQte(Qte+1)}>+</button> */}
                <button>{Qte}</button>
            </div>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default CardBuy