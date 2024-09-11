'use client';

import directionsWorkUa from '@/db-local/directions_work-ua.json';
import Image from 'next/image';
import { useRouter } from '@/i18n/routing';
import css from './DirectionsWorkList.module.css';
import './DirectionsWorkSwiper.css';

import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

export default function DirectionsWorkList() {
  const router = useRouter();

  const redirectionUser = (id: string) => {
    router.push(`/lignes-of-work/${id}`);
  };

  return (
    <>
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
              <SwiperSlide
                className={css.slideItem}
                key={id}
                onClick={() => redirectionUser(id)}
              >
                <Image
                  className={css.slideImg}
                  src={image}
                  alt={title}
                  width={400}
                  height={460}
                />
                <div className={css.slideWrap}>
                  <h3 className={css.slideTitle}>{title}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={css.swiperButtonWrap}>
        <button className={`${css.swiperButton} swiper-button-prev`}>
          <LuArrowLeft size={36} />
        </button>
        <button className={`${css.swiperButton} swiper-button-next`}>
          <LuArrowRight size={36} />
        </button>
      </div>
    </>
  );
}
