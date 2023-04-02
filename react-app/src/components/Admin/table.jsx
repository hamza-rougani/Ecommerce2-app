import React from 'react'
import {Link} from 'react-router-dom'
function table() {
  return (
    <div className='ManagUsers'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

        <div className='UserM'>
        <span>Orders Management</span>
        <div className='addEx'>
            
            <Link to='/Processed'><button><i class='bx bx-message-square-add'></i>Processed Orders</button></Link>
            <Link to='/Confirmed'><button><i class='bx bx-message-square-add'></i>Confirmed Orders</button></Link>
            <Link to='/Shipped'><button><i class='bx bx-message-square-add'></i> Shipped Orders</button></Link>
            <Link to='/Delivered'><button><i class='bx bx-message-square-add'></i> Delivered Orders</button></Link>
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
                
                 {/* {
                    products.map((pr)=>{
                        return(
                            <tr>
                
                            <th>{pr.id}</th>
                            <th>{pr.title} </th>
                            <th>{pr.description}</th>
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
                } */}
                
               
                
                
            </tbody>
        </table>
    </div>
  )
}

export default table