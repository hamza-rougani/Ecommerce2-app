import React, { useEffect, useState } from 'react'
import SelectPr from './Catalog/SelectPr'
import axiosClient from '../axios-client'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
function ProductsCatalog() {
  const [listPr,setPr] = useState({catalog_id:null,Pr1:"",Pr2:"",Pr3:"",Pr4:"",Pr5:"",Pr6:"",img1:"",img2:"",img3:"",img4:"",img5:"",img6:"",img7:"",img8:""})
  // const [ListImages,setImages]= useState({img1:"",img2:"",img3:"",img4:"",img5:"",img6:""})
  const [Errors,setErrors]=useState()
  const [Load,setLoad]=useState(true)
  const {id} =useParams()
  const {setNotification} = useStateContext()
  const Navigate = useNavigate()
  if(id){
  useEffect(()=>{
    axiosClient.get(`/catalogs/${id}`)
    .then(({data})=>{
      setPr(data.data)
      setLoad(true)
      console.log("dsfsdgfsdfdrfed")
      console.log(Pr)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
}
  const Save =(ev)=>{
    ev.preventDefault()
    const formData = new FormData();
    formData.append('img1', listPr.img1);
    formData.append('img2', listPr.img2);
    formData.append('img3', listPr.img3);
    formData.append('img4', listPr.img4);
    formData.append('img5', listPr.img5);
    formData.append('img6', listPr.img6);
    formData.append('img7', listPr.img7);
    formData.append('img8', listPr.img8);
    formData.append('Pr1', listPr.Pr1);
    formData.append('Pr2', listPr.Pr2);
    formData.append('Pr3', listPr.Pr3);
    formData.append('Pr4', listPr.Pr4);
    formData.append('Pr5', listPr.Pr5);
    formData.append('Pr6', listPr.Pr6);
  if(id){
    axiosClient.put(`/catalogs/${id}`,formData)
    .then(({data})=>{
      console.log(data)
      setNotification("Catalog has been updated successfully")
      Navigate("/Catalog")
    })
    .catch(err=>{
      console.log(err)
    })
  }else{
    
    axiosClient.post('/catalogs',formData)
    .then(({data})=>{
      console.log(data)
      setNotification("Catalog has been created successfully")
      Navigate("/Catalog")
    })
    .catch(err=>{
      console.log(err)
      if(err.response.status==422){
        setErrors(err.response.data.errors)
      }
    })
  }
  }
  return (
    <div className='ProductsCatalog'>
      {Load ? 
      <form action=""  onSubmit={Save} encType='multipart/form-data' >
      <div className='Catalog'>
        <div className='left LE'>
          <div className="left1 V t">
            {console.log(listPr)}
            
          <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
           <input type="number" placeholder='ID' value={listPr.Pr1} id='select' onChange={t=>setPr({...listPr,Pr1:t.target.value})}/>
            <label  htmlFor="img1">
              
            <div id='label'>{listPr.img1 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img1}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</div>
            </label>
          </div>
          <div className="left2 V t">
          <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
           <input type="number" placeholder='ID' value={listPr.Pr2} id='select' onChange={t=>setPr({...listPr,Pr2:t.target.value})}/>
            <label  htmlFor="img2">
            
            <div id='label'>{listPr.img2 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img2}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</div>
            </label>
          </div>
        </div>
        <div className='center'>
        <div className='center1 V t'>
        <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
          <input type="number" placeholder='ID' value={listPr.Pr3} id='select' onChange={t=>setPr({...listPr,Pr3:t.target.value})}/>
            <label  htmlFor="img3">
            
            <div id='label'>{listPr.img3 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img3}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</div>
            </label>
            <div className='im78'>
            <label  htmlFor="img7">
            {listPr.img7 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img7}`} width="100%"/>
              :<i class='bx bx-plus'></i>}
              </label>
            <label  htmlFor="img8">{listPr.img8 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img8}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</label>
            </div>
            
        </div>
        <div className='center2 V t'>
        <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
           <input type="number" placeholder='ID' value={listPr.Pr4} id='select' onChange={t=>setPr({...listPr,Pr4:t.target.value})}/>
            <label  htmlFor="img4">
            
            <div id='label'>{listPr.img4 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img4}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</div>
            </label>
        </div>
        <div className='saveA'>
          <div className='save'>
          <button className='btn' type='submit'>save</button>
          <button className='btn'>check id</button>
          </div>
        </div>
        </div>
        <div className='right LE'>
        <div className='right1 V t'>
        <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
           <input type="number" placeholder='ID' value={listPr.Pr5} id='select' onChange={t=>setPr({...listPr,Pr5:t.target.value})}/>
            <label  htmlFor="img5">
            
            <div id='label'>{listPr.img5 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img5}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</div>
            </label>
        </div>
        <div className='right2 V t'>
        <span id='Pr'><i class='bx bxl-product-hunt' ></i></span>
           <input type="number" placeholder='ID' value={listPr.Pr6} id='select' onChange={t=>setPr({...listPr,Pr6:t.target.value})}/>
            <label  htmlFor="img6">
            
            <div id='label'>{listPr.img6 ?
              <img src={`http://127.0.0.1:8000/storage/${listPr.img6}`} width="100%"/>
              :<i class='bx bx-plus'></i>}</div>
            </label>
        </div>
        </div>
      </div>
      <div className='form' encType='multipart/form-data'>
        <input type="file" id='img1' name='img1' onChange={t=>setPr({...listPr,img1:t.target.files[0]})}/>
        <input type="file" id='img2' name='img2' onChange={t=>setPr({...listPr,img2:t.target.files[0]})}/>
        <input type="file" id='img3' name='img3' onChange={t=>setPr({...listPr,img3:t.target.files[0]})}/>
        <input type="file" id='img4' name='img4' onChange={t=>setPr({...listPr,img4:t.target.files[0]})}/>
        <input type="file" id='img5' name='img5' onChange={t=>setPr({...listPr,img5:t.target.files[0]})}/>
        <input type="file" id='img6' name='img6' onChange={t=>setPr({...listPr,img6:t.target.files[0]})}/>
        <input type="file" id='img7' name='img7' onChange={t=>setPr({...listPr,img7:t.target.files[0]})}/>
        <input type="file" id='img8' name='img8' onChange={t=>setPr({...listPr,img8:t.target.files[0]})}/>
      </div>
      
      </form>
      :"loading"}
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
  )
}

export default ProductsCatalog