import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const PopularCat = (): any => {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1589820675999-b1fc94f318a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Content writing",
      slogan: "",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661678263122-e443e90f320c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "SEO",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Website Development",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1608377205656-a5a7ac5777d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Logo Design",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1638389747564-c7cc1c9f7a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      title: "Voice Over",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // width: "100vw",
        gap: "10px",
        // backgroundColor: "black",
      }}
    >
      <Box sx={{ backgroundColor: "white" }}>
        <Typography
          sx={{
            fontSize: {
              xs: "1.8rem",
              sm: "calc(1.7456vw + .8rem)",
              lg: "1.8rem",
            },
          }}
        >
          Most popular categories
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          width: "100%",
          overflowX: "scroll",
        }}
      >
        {data.map((e) => (
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
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "150px",
          borderRadius: "5px",
          padding: "5px",
          "&:hover": {
            backgroundColor: "rgba(100,100,100,0.15)",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#1bc49c",
          }}
        >
          ALL CATEGORIES &rarr;
        </Typography>
      </Box>
    </Box>
  );
};

export default PopularCat;
