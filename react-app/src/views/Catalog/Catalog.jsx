import React, { useEffect,useState } from 'react'
import axiosClient from '../../axios-client'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

function Catalog() {
const [catalogs,setcatalogs] = useState([])
const [loading,setLoading] = useState(false)
const {setNotification} = useStateContext()

useEffect(()=>{

    getCat();
},[])
const getCat = ()=>{
    axiosClient.get('/catalogs')
    .then(({data})=>{
        setcatalogs(data.data)
       setLoading(true)
    }).catch(err=>{
       console.log(err)
       setLoading(false)
    })
}
const onDelete = (e)=>{
    if(!window.confirm("Are you sure you want to delete this catalog ?")){
      return
    }
    axiosClient.delete(`/catalogs/${e.catalog_id}`)
    .then(()=>{
      //show notification
    setNotification("Catalog was successfuly deleted")
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
        <span>Catalogs Management</span>
        <div className='addEx'>
            <button><i class='bx bxs-file-blank'></i> Export to Excel</button>
            <Link to='/ProductsCatalog'><button><i class='bx bx-message-square-add'></i> Add New Catalog</button></Link>
        </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product 1</th>
                    <th>Product 2</th>
                    <th>Product 3</th>
                    <th>Product 4</th>
                    <th>Product 5</th>
                    <th>Product 6</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                 {
                    catalogs.map((pr)=>{
                        return(
                            <tr>
                
                            <th>{pr.catalog_id}</th>
                            <th>{pr.Pr1} </th>
                            <th>{pr.Pr2}</th>
                            <th>{pr.Pr3}</th>
                            <th>{pr.Pr4}</th>
                            <th >{pr.Pr5}</th>
                            <th >{pr.Pr6}</th>
                            <th>
                            <div className='Action'>
                            <Link to={`/ProductsCatalog/${pr.catalog_id}`}><i class='bx bx-cog'></i></Link>
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

export default Catalog