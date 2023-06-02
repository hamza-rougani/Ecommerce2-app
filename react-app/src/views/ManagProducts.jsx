import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'
function ManagUsers() {
const [products,setProducts] = useState()
const [loading,setLoading] = useState(false)
const {setNotification}=useStateContext()
useEffect(()=>{

    getProducts();
},[])
const getProducts = ()=>{
    axiosClient.get('/products')
    .then(({data})=>{
       setProducts(data.data)
       setLoading(true)
    }).catch(err=>{
       console.log(err)
       setLoading(false)
    })
}
const onDelete = (e)=>{
    if(!window.confirm("Are you sure you want to delete this product ?")){
      return
    }
    axiosClient.delete(`/products/${e.id}`)
    .then(()=>{
      //show notification
    setNotification("Product was successfuly deleted")
    getProducts()
    
    })
    }
  return (
    <>
    {loading ? 
        <>
    <div className='ManagUsers'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

        <div className='UserM'>
        <span>Products Management</span>
        <div className='addEx'>
            <button><i class='bx bxs-file-blank'></i> Export to Excel</button>
            <Link to='/CreateProduct'><button><i class='bx bx-message-square-add'></i> Add New Product</button></Link>
        </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Created</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Creator</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                 {
                    products.map((pr)=>{
                        return(
                            <tr>
                
                            <th>{pr.id}</th>
                            <th>{pr.title} </th>
                            <th>{pr.sumi_description}</th>
                            <th>{pr.created_at}</th>
                            <th>{pr.price}</th>
                            <th >{pr.quantity}</th>
                            <th >{pr.user_id}</th>
                            <th>
                            <div className='Action'>
                            <Link to={`/CreateProduct/${pr.id}`}><i class='bx bx-cog'></i></Link>
                            <button onClick={ev => onDelete(pr)}  className='btn-delete' style={{background:"none",border:"none",fontSize:"20px"}}><i class='bx bx-x-circle'></i></button>
                            </div>
                            </th>
                        </tr>
                        )
                    })
                }
                
               
                
                
            </tbody>
        </table>
    </div>
    </>
                :
                <div className='loading'>
    <div class="loader"></div>
    Loading...
    </div>
                }
    </>
  )
  
}

export default ManagUsers