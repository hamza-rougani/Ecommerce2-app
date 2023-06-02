import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import CartSlidePr from "./CartSlidePr";
import axiosClient from "../../../../../axios-client";
import { useDispatch, useSelector } from "react-redux";
import {getProduct3} from '../../../../../ReduxJs/features/authSlice'
export default function SwiperPro() {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [SlidePr, setSlidePr] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const mediaQuery2 = window.matchMedia('(max-width: 350px)');
      const mediaQuery = window.matchMedia('(max-width: 480px)');
      const mediaQuery1 = window.matchMedia('(max-width: 980px)');
      
  
      function handleViewportChange() {
        if(mediaQuery2.matches){
            setSlidesPerView(1);
        }else if (mediaQuery.matches) {
            setSlidesPerView(2);
        }else if(mediaQuery1.matches){
          setSlidesPerView(3);
        }else{
            setSlidesPerView(3);
        }
      }
      mediaQuery2.addListener(handleViewportChange);
      mediaQuery.addListener(handleViewportChange);
      mediaQuery1.addListener(handleViewportChange);
      
  
      handleViewportChange();
  
      return () => {
        mediaQuery2.removeListener(handleViewportChange);
        mediaQuery.removeListener(handleViewportChange);
        mediaQuery1.removeListener(handleViewportChange);
        
      };
    }, []);
  useEffect(()=>{
    setLoading(false)
    axiosClient.get('/slideProducts')
    .then(({data})=>{
      
      setSlidePr(data.data)
      setLoading(true)
      console.log(data.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  const dispatch = useDispatch()
  const islogged = useSelector(state=>state.auth.Pr3)
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {console.log("hhhhhhhhhhhhhhhhhhhhhhhh")}
        {console.log(islogged)}
        {loading ?
        <>
        {SlidePr.map(t=><SwiperSlide ><CartSlidePr pr={t}/></SwiperSlide>)}
        <button onClick={()=>dispatch(getProduct3())}>click me</button>
        </>
        :"loadng"}
      </Swiper>
    </>
  );
}
