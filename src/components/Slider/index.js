import React from "react";
import SwiperCore, { Pagination } from "swiper";
// import Swipertest from 'swiper/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import 'swiper/css/bundle'

SwiperCore.use(Pagination);

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// slidesPerView={4} breakpoints={{767:{slidesPerView:2},1024: {slidesPerView:4}}}

const Slider = () => {
  return (
    <Swiper  
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        767:{
          slidesPerView:3
        },
        1024:{
          slidesPerView:4
        }
      }}
    
    >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card />
        </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
