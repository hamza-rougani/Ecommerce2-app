import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'
function ManagUsers() {
    const {notification,setNotification} = useStateContext()
    const [users ,setUsers] = useState();
    const [loading ,setLoading] = useState(false);
    useEffect(()=>{
        getUsers();
    },[])
    const onDelete = (e)=>{
        if(!window.confirm("Are you sure you want to delete this user ?")){
          return
        }
        axiosClient.delete(`/users/${e.id}`)
        .then(()=>{
          //show notification
        setNotification("User was successfuly deleted")
          getUsers()
        
        })
        }
    const getUsers = ()=>{
        axiosClient.get('/users')
        .then(({data})=>{
            console.log(data.data)
            setLoading(true)
            setUsers(data)
           
        }).catch(err=>{
            console.log(err);
            setLoading(false);
        })

    }
   
  return (
    <>
    {loading ? 
        <>
    <div className='ManagUsers'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        
        <div className='UserM'>
        <span>User Management</span>
        <div className='addEx'>
            <button><i class='bx bxs-file-blank'></i> Export to Excel</button>
            <Link to="/AddUser/new"><button><i class='bx bx-message-square-add'></i> Add New User</button></Link>
        </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th>phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               
                {
                    users.data.map((e)=>{
                        return(
                            <tr>
                
                            <th>{e.id}</th>
                            <th class='name'>
                                <img src='Images/profile.png'/>
                                {e.name}
                            </th>
                            <th>{e.email}</th>
                            <th>{e.created_at}</th>
                            <th>{e.Role ? "Admin":"Publish"}</th>
                            <th >{e.address}</th>
                            <th >{e.numberphone}</th>
                            <th>
                            <div className='Action'>
                            <Link to={`/AddUser/${e.id}`}><i class='bx bx-cog'></i></Link>
                            
                            <button onClick={ev => onDelete(e)}  className='btn-delete' style={{background:"none",border:"none",fontSize:"20px"}}><i class='bx bx-x-circle'></i></button>

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