import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function SwiSlide() {
    const [slidesPerView, setSlidesPerView] = useState(4);

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
            setSlidesPerView(4);
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
  
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='child child3'>
              <div className='info'>
              <p>Apple Vie</p>
              <span>Lorem happy</span>
              </div>
              <div className='Jojo'>
                 <div className='circle'>
                 <i class='bx bx-right-arrow'></i>
                 </div>
              </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='child child2'>
              <div className='info'>
              <p>Apple Vie</p>
              <span>Lorem happy</span>
              </div>
              <div className='Jojo'>
                 <div className='circle'>
                 <i class='bx bx-right-arrow'></i>
                 </div>
              </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='child child3'>
            <div className='info'>
              <p>Apple Vie</p>
              <span>Lorem happy</span>
              </div>
              <div className='Jojo'>
                 <div className='circle'>
                 <i class='bx bx-right-arrow'></i>
                 </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='child child4'>
            <div className='info'>
              <p>Apple Vie</p>
              <span>Lorem happy</span>
              </div>
              <div className='Jojo'>
                 <div className='circle'>
                 <i class='bx bx-right-arrow'></i>
                 </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='child child2'>
            <div className='info'>
              <p>Apple Vie</p>
              <span>Lorem happy</span>
              </div>
              <div className='Jojo'>
                 <div className='circle'>
                 <i class='bx bx-right-arrow'></i>
                 </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='child child1'>
            <div className='info'>
              <p>Apple Vie</p>
              <span>Lorem happy</span>
              </div>
              <div className='Jojo'>
                 <div className='circle'>
                 <i class='bx bx-right-arrow'></i>
                 </div>
              </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
