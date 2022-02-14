import React, { useState, useEffect, useContext } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import "swiper/css/bundle";
import api from "../../Config/api";

import { FilterContext } from "../../contexts/FilterContext";

SwiperCore.use([Pagination]);

const Slider = () => {
  const { filteredPlace } = useContext(FilterContext);
  const [filterPlaces, setFilterPlaces] = useState([])
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await api.get('/');

      if (result.status === 200) {
        setPlaces(result.data.places);
        setFilterPlaces(result.data.places);
      }
    };

    fetchPlaces();
  }, []);

  useEffect(() => {
    
    const filterResult = places.filter(place => place.category === filteredPlace )

    setFilterPlaces(filterResult)

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
      {filterPlaces.map((item) => (
        <SwiperSlide key={item.key}>
          <Card key={item.key} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
