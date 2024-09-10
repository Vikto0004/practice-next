'use client';

import directionsWorkUa from '@/db-local/directions_work-ua.json';
import Image from 'next/image';
import css from './DirectionsWorkList.module.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function DirectionsWorkList() {
  return (
    <div className={css.wrap}>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        initialSlide={2}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {directionsWorkUa.map(({ id, title, image }) => {
          return (
            <SwiperSlide className={css.slideItem} key={id}>
              <Image src={image} alt={title} width={400} height={460} />
              <h3>{title}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={css.swiperButtonWrap}>
        <div className={`${css.swiperButton} swiper-button-next`}>Next</div>
        <div className={`${css.swiperButton} swiper-button-prev`}>Prev</div>
      </div>
    </div>
  );
}
