import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../axios-client'
import ProductInfo from './ProductInfo'
import TableDetailes from './TableDetailes'
import { useStateContext } from '../../context/ContextProvider'
import LoadingA from '../loadings/Loading'
function DetailsOrders(e) {
    const {id} = useParams()
    const [Info,setInfo]=useState([])
    const [InfoUser,setInfoUser]=useState([])
    const [InPr,setInPr]=useState()
    const [Loading,setLoading] = useState(false)
    const [Type , setType]=useState(e.type)
    const order = useRef()
    const [checkedItems,setCheckedItems] = useState([])
    const intList = checkedItems.map((str) => parseInt(str));
    const ProductChecked=Info.filter(f=>intList.includes(f.id_demand))
    const {setNotification} = useStateContext()
    let Total = 0
    let count = 0
    ProductChecked.map(t=>{
          Total+=t.total
          count ++})
    console.log(ProductChecked)
    useEffect(()=>{
        getOrders()
    },[])
    const getOrders = ()=>{
        axiosClient.get(`/DetailsOrders/${id}`)
        .then(({data})=>{
            console.log(data.data.filter(f=>f.Status==e.filter))
            setInfo(data.data.filter(f=>f.Status==e.filter))
            setInfoUser(data.data)
            setLoading(true)
        }).catch(err=>{
            console.log(err)
        })
    }
    const checkAll = ()=>{
      console.log(Info.length+1)
    }
    const Confirmed = ()=>{
        ProductChecked.map(h=>{
            var payload = {Status:e.updateto,isConfirmed:true}
            axiosClient.put(`/orders/${h.id_demand}`,payload)
            .then(({data})=>{
              console.log(data)
              setNotification("Orders was successfuly confirmed")
            })
            .catch(err=>{
              console.log(err)
            })
        })
      
    }
    
  return (
    <div style={{width:"100%"}}>
    {Loading ? <>
    <div className='DetailsOrders'>
        
        {console.log(checkedItems)}
        <div className='Details'>
            <div className='Orders ManagUsers'>
            <table>
            <thead>
                <tr>
                    <th><input onChange={checkAll} style={{border:"1px solid #118af3"}} type='checkbox'></input></th>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>TotalShipping</th>
                    <th>Total</th>
                    <th>Show</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {Info.map((t)=><TableDetailes setInPr={setInPr} orders={t} setCheckedItems={setCheckedItems} checkedItems={checkedItems}/>)}
            </tbody>
            </table>
            </div>
            <div className='information'>
                <ProductInfo InPr={InPr} FirstPr={InfoUser[0]}/>
                <hr/>
                <div className='UserInfo'>
                <div className='inf'>
                        <div className='h4'>User Information</div>
                        <div className='title'>Name : {InfoUser[0].name}</div>
                        <div className='title'>Address : {InfoUser[0].address}</div>
                        <div className='title'>Email : {InfoUser[0].email}</div>
                        <div className='title'>Phone : {InfoUser[0].numberphone}</div>
                    </div>
                    <div className='inf'>
                        <div className='h4'>Total : {Total} DH</div>
                    </div>
                <div className='confirme'>
                    {count!==0 ? 
                    <button onClick={Confirmed} className='btn btnC'>{Type}({count})</button>
                    :
                    <button disabled className='btn btnC'>Confirme(0)</button>
                    }
                </div>
                </div>
            </div>
        </div>
       
        
    </div>
     </>
     :
     <>
    <LoadingA/>
    </>
}
    </div>
  )
}

export default DetailsOrders