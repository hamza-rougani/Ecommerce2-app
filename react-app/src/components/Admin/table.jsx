import React from 'react'
import {Link} from 'react-router-dom'
function table(e) {
  return (
    <div className='ManagUsers'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

        <div className='UserM OrderBtn'>
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
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th>product_id</th>
                    <th>user_id</th>
                    <th>Action</th>
                    <th>Show</th>
                </tr>
            </thead>
            <tbody>
                
                 {
                    e.Orders.map((pr)=>{
                        return(
                            <tr>
                
                            <th>{pr.id_demand}</th>
                            <th>{pr.Quantity_Order}</th>
                            <th>{pr.total} </th>
                            <th>{pr.Status}</th>
                            <th>{pr.created_at}</th>
                            <th>{pr.product_id}</th>
                            <th >{pr.user_id}</th>
                            <th>
                            <div className='Action'>
                            <Link to={`/CreateProduct/${pr.id}`}><i class='bx bx-cog'></i></Link>
                            <button onClick={ev => onDelete(pr)}  className='btn-delete' style={{background:"none",border:"none",fontSize:"20px"}}><i class='bx bx-x-circle'></i></button>
                            </div>
                            </th>
                            <th ><Link to={`/${e.Details}/${pr.user_id}`}><button>Details</button></Link></th>
                        </tr>
                        )
                    })
                }
                
               
                
                
            </tbody>
        </table>
    </div>
  )
}

export default table