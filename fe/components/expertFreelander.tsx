import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ExpertFreelancer({ data }: any) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.map((e: any) => (
          <SwiperSlide>
            <Box key={e.title} sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: "220px",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={e.src}
                  alt={e.src}
                  className="h-full w-full brightness-75 "
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  position: "absolute",
                  top: "1px",
                  p: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#D0D0D0", fontSize: "12px" }}
                >
                  Engage your community
                </Typography>
                <Typography variant="h6" sx={{ color: "#f5f5f5" }}>
                  {e.title}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
