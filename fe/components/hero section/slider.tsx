import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectCreative,
} from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function ImgSlider() {
  //   const slimg= [
  //     {img:}
  // ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        cssMode={true}
        // effect={"creative"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZWxhbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <img
            className="object-cover h-100 w-100"
            src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZWxhbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-100 w-100"
            src="https://media.istockphoto.com/id/1466961863/photo/asian-soho-designer.jpg?b=1&s=170667a&w=0&k=20&c=6Tc4OZaVNr8hLRQIhyV4SH-vd7ETm5s2xAuuiuE2HOI="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-100 w-100"
            src="https://media.istockphoto.com/id/1153675389/photo/working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=wKnVLAL_0s80ip8yAhYv5193cZLdk_Jqs-KIoNhD9go="
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
