import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'
function AddUser() {
  const {notification,setNotification} = useStateContext()
  const [Errors,setErrors] = useState()
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)
const {id} = useParams()
const [user,setUser] = useState({id:null,name:"",email:"",password:"",password_confirmation:"",Role:"",Image:""})
if(id){
  useEffect(()=>{
      axiosClient.get(`/users/${id}`)
      .then((data)=>{
          setLoading(true)
          //  debugger;
         setUser(data.data)
         console.log(data)
      }).catch(()=>{
          setLoading(false)
      })
  },[])
}

const onSubmit = (event)=>{
  event.preventDefault();
  if(user.id){
    axiosClient.put(`/users/${user.id}`,user)
    .then(()=>{
        //to do show notification
         setNotification("User was successfuly updated")
      navigate('/ManagUsers')
    })
    .catch(err=>{
        const response = err.response;
        console.log(response)
        // 422 validation error
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      })
}else{
    axiosClient.post("/users",user)
    .then(()=>{
        //to do show notification
         setNotification("User was successfuly added")
      navigate('/ManagUsers')
    })
    .catch(err=>{
      console.log("error"+err)
        const response = err.response;
        
        // 422 validation error
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      }) 
}
}
return (
    <div className='create'>
      {console.log(loading)}
    {loading ? 
      <div className='Register createUser'>
        <div className='ReContainer'>
        <div className='Logo'>
          
        </div>
        <div className='signUp'>
            <h2>Create User</h2>
            <form onSubmit={onSubmit}>
                <input value={user.name} onChange={ev => setUser({...user,name:ev.target.value})} type="text" placeholder='Full Name'/>
                <input value={user.email} onChange={ev=> setUser({...user,email:ev.target.value})} type="email" placeholder='Email Address'/>
                <input  onChange={ev=>setUser({...user,password:ev.target.value})} type="password" placeholder='password'/>
                <input  onChange={ev=>setUser({...user,password_confirmation:ev.target.value})} type="password" placeholder='password confirmation'/>
                <label style={{fontSize:"15px" ,opacity:"0.6"}}>Role : {
                <>{user.Role?"Admin":"User"}
                </>
                }</label>
                <select value={user.Role} onChange={ev=>setUser({...user,Role:ev.target.value})}>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  
                  <option value="SuperAdmin">SuperAdmin</option>
                </select>
                <div className='btnAdmin'>
                  
                  <button>{user.id ?"Update" :"Add"}</button>
                 
                
                <button>Add Image</button>
                </div>
  
            </form>
            
               {Errors && 
               <p className='Errors'>
               {Object.keys(Errors).map(key=>(
                <p  key={key}>{Errors[key][0]}</p>
               )
              )
               }
               </p>
              
              } 
            
        </div>
        </div>
    </div>
    :"loading..."}
    </div>
  )
}

export default AddUser