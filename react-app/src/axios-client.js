import axios from "axios"

const axiosClient = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
})
//inreception request execute before send request
axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
  return config  
})
//inreception response execute after response is received
axiosClient.interceptors.response.use((response)=>{
  return response;
},(error)=>{
  try{
    const {response} = error;
    console.log(response)
    //401 user unauthorized 
    if(response.status ==401){
        localStorage.removeItem('ACCESS_TOKEN')
    }
  }catch(e){
    console.error(e)
  }


throw error;
})
export default axiosClient