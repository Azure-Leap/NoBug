import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, EffectCards } from "swiper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ExpertFreelancer({ data }: any) {
  const [ml, setMl] = useState(Number);
  const [spw, setSpw] = useState(4);
  const [width, setWidth] = useState("85%");

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
      if (innerWidth >= 1270) {
        setSpw(4);
        setMl(0);
      } else if (innerWidth >= 977) {
        setSpw(3);
        setMl(0);
      } else if (innerWidth >= 650) {
        setSpw(2);
        setMl(0);
        setWidth("80%");
      } else if (innerWidth >= 450) {
        setSpw(1);
        setWidth("350px");
        setMl(5);
      }
    });
  }, []);

  // const data = [
  //   {
  //     src: "https://images.unsplash.com/photo-1589820675999-b1fc94f318a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Content writing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1661678263122-e443e90f320c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "SEO",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Website Development",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1608377205656-a5a7ac5777d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Logo Design",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1638389747564-c7cc1c9f7a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  //     title: "Voice Over",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //     title: "Illustration & drawing",
  //     slogan: "",
  //   },
  // ];
  return (
    <Box
      sx={{
        position: "absolute",
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            slidesPerView={spw}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // breakpoints={{
            //   "0.00": {
            //     slidesPerView: 1,
            //     spaceBetween: 10,
            //   },
            //   "@0.75": {
            //     slidesPerView: 2,
            //     // spaceBetween: 20,
            //   },
            //   "@0.9": {
            //     slidesPerView: 2,
            //     // spaceBetween: 20,
            //   },
            //   "@1.00": {
            //     slidesPerView: 4,
            //     // spaceBetween: 40,
            //   },
            //   "@1.50": {
            //     slidesPerView: 4,
            //     // spaceBetween: 30,
            //   },
            // }}
            // centeredSlides={true}
            // modules={[EffectCards, Autoplay]}
            modules={[Pagination]}
            className="mySwiper "
          >
            {data.map((e: any, index: any) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    maxWidth: width,
                    aspectRatio: "3/5",
                    // backgroundColor: "grey",
                    borderRadius: "10px",
                    overflow: "hidden",
                    mx: "auto",
                    // p: 5,
                  }}
                >
                  <Box
                    sx={{
                      height: "70%",
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
                        <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"></img>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          color: "#7d7d7d",
                        }}
                      >
                        Hero SEO
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
                          <img
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
                      height: "30%",
                      width: "100%",
                      backgroundColor: "white",
                      p: 3,
                    }}
                  >
                    <Box sx={{}}>
                      <Typography> ad design</Typography>
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
