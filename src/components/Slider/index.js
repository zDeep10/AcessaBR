import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import "swiper/css/bundle";
import api from "../../Config/api";

SwiperCore.use([Pagination]);

const Slider = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await api.get("/places");

      if (result.status === 200) {
        setPlaces(result.data);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {places.map((item) => (
        <SwiperSlide>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
