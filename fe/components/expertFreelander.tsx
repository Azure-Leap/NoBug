import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
import { Button, Typography } from "@mui/material";

export default function ExpertFreelancer({ data }: any) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/profile/2`);
  };

  return (
    <Box
      sx={{
        mt: 4,
        left: "0px",
        width: "100vw",
        py: 5,
        backgroundColor: "#F6F7FA",
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
              fontWeight: "bold",
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
              },
              900: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
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
                    borderRadius: "10px",
                    overflow: "hidden",
                    mx: "auto",
                    border: "1px solid #E5E5E5",
                    backgroundColor: "white",
                    px: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      height: "45%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        aspectRatio: "1/1",
                        borderRadius: "50%",
                        backgroundColor: "rgba(51, 162,191)",
                        padding: "2.5px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100px",
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
                          className="w-full h-full object-cover "
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: "20px" }}>
                        {e.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "15px", color: "rgb(130,130,130)" }}
                      >
                        {e.job_title}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ height: "55%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "20%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "13px", color: "rgb(130,130,130)" }}
                        >
                          Projects
                        </Typography>
                        <Typography>140</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "13px", color: "rgb(130,130,130)" }}
                        >
                          Rating
                        </Typography>
                        <Typography>{e.rating}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "13px", color: "rgb(130,130,130)" }}
                        >
                          Per Hour
                        </Typography>
                        <Typography>24$</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        height: "80%",
                        pt: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: "0.7rem",
                            color: "rgb(130,130,130)",
                          }}
                        >
                          {`Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, veniam unde autem ea ipsum illo
                          beatae`.substring(0, 120) + "..."}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "210px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            overflow: "scroll",
                          }}
                        >
                          {e.skills.map((el: any, index: any) => (
                            <Typography
                              key={index}
                              sx={{
                                padding: "4px",
                                paddingX: "12px",
                                borderRadius: "20px",
                                textAlign: "center",
                                fontSize: "0.8rem",
                                color: "rgb(153,153,153)",
                                border: "0.9px solid grey",
                                ":hover": {
                                  backgroundColor: "rgba(51, 162,191)",
                                  color: "white",
                                  boxShadow:
                                    "0px 0px 100px -36px rgba(51, 162,191)",
                                },
                              }}
                            >
                              {el}
                            </Typography>
                          ))}
                        </Box>
                        <Button
                          onClick={handleClick}
                          sx={{
                            width: "200px",
                            textTransform: "capitalize",
                            borderRadius: "40px",
                            color: {
                              xs: "white",
                              md: "rgb(153,153,153)",
                            },
                            backgroundColor: {
                              xs: "rgba(51, 162,191)!important",
                              md: "white!important",
                            },
                            boxShadow: {
                              xs: "0px 0px 35px 0px rgba(51,162,191,0.5)",
                              md: "none",
                            },
                            border: "0.9px solid rgb(153,153,153)",
                            ":hover": {
                              color: "white",
                              backgroundColor: "rgba(51, 162,191)!important",
                              boxShadow:
                                "0px 0px 35px 0px rgba(51,162,191,0.5)",
                            },
                          }}
                        >
                          View Profile
                        </Button>
                      </Box>
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
