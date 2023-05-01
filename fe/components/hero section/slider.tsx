import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css/effect-creative";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { EffectCreative } from "swiper";

export default function ImgSlider() {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <Swiper
        spaceBetween={1}
        // centeredSlides={true}\
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://lukaszadam.com/wordpress-girl.svg"
            alt="Picture of the author"
            width={500}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://lukaszadam.com/tv-guy-svg-illustration-free.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://lukaszadam.com/website-builder.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
