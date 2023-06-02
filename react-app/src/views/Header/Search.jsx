import React,{useEffect, useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axiosClient from '../../axios-client'
function Search() {
const [searchList,setPr] = useState([])
const search = useRef()
const Navigate = useNavigate()
useEffect(()=>{
  axiosClient.get('/products')
  .then(({data})=>{
    setPr(data.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])
  const Clicksearch = ()=>{

    Navigate(`/Products?title=${searchValue}`)

    
  }
 
  const [searchValue,setsearchValue] = useState()
  const [searchI,setsearch] = useState([])
    function handelsearch(e){
      setsearchValue(e.target.value)
     let searchWord = e.target.value
      let filterSearch = searchList.filter((value)=>{
        return value.title.toLowerCase().includes(searchWord.toLowerCase())
          
     })
    //  let filterDescription = searchList.filter((value)=>{
    //   return value.description.toLowerCase().includes(searchWord.toLowerCase())
    //  })
     if(searchWord !== ""){
      const filteredData = filterSearch.filter((item, index, self) =>
  index === self.findIndex((t) => t.title === item.title))
     setsearch(filteredData)
    //  console.log(filterDescription)

   
     }else{
      setsearch([])
     }
    
     
    }
  return (
    <div className='Search Searchaaa' ref={search}>
      <div className='sea'>
      <input id='input' type='' placeholder='search...'  onChange={handelsearch}/>
      <div id='go' onClick={Clicksearch}>
        <i class='bx bx-search-alt-2'></i>
      </div>
      </div>
      <ul id='ul'>
       {searchI.length>0 ?
       <>{
         searchI.map((e)=>{
          return(
            <Link style={{textDecoration:"none",color:"black"}} to={`/Products?title=${e.title}`}>
              <li>
              <div> {e.title}</div>
              {/* <span  id='SP'>{e.coure}</span> */}
              </li>
              </Link>
         )
         }) 
        }</>
        :
        <li id='se' disabled>No result</li>
       }
      </ul>
      
    </div>
  )
}

export default Search