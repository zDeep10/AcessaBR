import React, { useState, useEffect, useContext } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import "swiper/css/bundle";
import api from "../../Config/api";

import {FilterContext} from '../../contexts/FilterContext';

SwiperCore.use([Pagination]);

const Slider = () => {
  const {filteredPlace} = useContext(FilterContext)
  const [places, setPlaces] = useState([]);

  console.log(filteredPlace)

  useEffect(() => {
    const fetchPlaces = async () => {
      const caterogyPlaces = await api.get(`/places?category=${filteredPlace}`);
      
      const allplaces = await api.get(`/places`);

      if (filteredPlace === ''){
        setPlaces(allplaces.data)
      }else {
        setPlaces(caterogyPlaces.data)
      }
    };

    fetchPlaces();
  }, [filteredPlace]);

  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        560: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {places.map((item) => (
        <SwiperSlide key={item.key}>
          <Card key={item.key} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
