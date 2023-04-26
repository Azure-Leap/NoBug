import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, EffectCards } from "swiper";

// Mui
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function ExpertFreelancer({ data }: any) {
  return (
    <Box
      sx={{
        left: "0px",
        width: "100vw",
        py: 5,
        backgroundColor: "#F0F3F5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "95%", xl: "75%" },
          margin: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "calc(1.7456vw + .8rem)",
                lg: "3rem",
              },
            }}
          >
            Expert Bees
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "grey" }}>
            Search and contact bees directly with no oblication
          </Typography>
        </Box>
        <Box>
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                // spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                // spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                // spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {data.map((e: any, index: any) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    maxWidth: { xs: "300px" },
                    height: "450px",
                    // aspectRatio: "3/5",
                    borderRadius: "10px",
                    overflow: "hidden",
                    mx: "auto",
                  }}
                >
                  <Box
                    sx={{
                      height: "75%",
                      width: "100%",
                      backgroundColor: "#e7e7e7",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        height: "60%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "50%",
                          aspectRatio: "1/1",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          width={400}
                          height={400}
                          src={e.avatar}
                          alt={e.name}
                          className="w-full h-full object-cover"
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          color: "#7d7d7d",
                        }}
                      >
                        {e.name}
                      </Typography>
                    </Box>
                    <Box sx={{ height: "40%", px: 3, pb: 4 }}>
                      <Box sx={{ height: "80%" }}>
                        <Typography
                          sx={{ fontSize: "0.85rem", color: "#020d30" }}
                        >
                          Big grid but feels proportionate | Dashboard design,
                          Web design, App design
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          height: "20%",
                        }}
                      >
                        <Box
                          sx={{
                            maxWidth: "100px ",
                            aspectRatio: "1/1",
                            borderRadius: "50%",
                            backgroundColor: "green",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            width={400}
                            height={400}
                            alt="zurag"
                            className="object-cover	w-full h-full"
                            src="https://media.istockphoto.com/id/486407806/vector/union-jack.jpg?s=612x612&w=0&k=20&c=KPRndA_Czak9T0w_Eq3GnhRaNxERiEiw2cjZe5GBY-E="
                          />
                        </Box>
                        <Typography sx={{}}>United Kingdom</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "25%",
                      width: "100%",
                      backgroundColor: "white",
                      px: 3,
                      py: 2,
                    }}
                  >
                    <Box>
                      <StarIcon sx={{ scale: "0.7", color: "#CCB200" }} />
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      {e.skills.map((e: any, index: any) => (
                        <Box
                          key={index}
                          sx={{
                            paddingX: "5px",
                            backgroundColor: "#E5EBFF",
                            borderRadius: "5px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "#6C7DC5",
                            }}
                          >
                            {e}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>117 projects</Typography>
                      <Typography>$12/hr</Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
