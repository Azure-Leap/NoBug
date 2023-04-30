import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import PortfolioModal from "./portfolioModal";

const Portfolio = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    "https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg",
    "https://static.vecteezy.com/system/resources/previews/011/645/680/original/architecture-portfolio-and-interior-professional-portfolio-design-template-free-vector.jpg",
    "https://i.pinimg.com/originals/28/00/81/2800813905b51c032208e97f821c9620.jpg",
    "https://i0.wp.com/themes.svn.wordpress.org/elegant-portfolio/1.0.5/screenshot.png",
    "https://elements-cover-images-0.imgix.net/7f715f96-3abe-42e7-94d4-b0618295167a?auto=compress%2Cformat&fit=max&w=900&s=8abc9bb1739ccbfd05e5e56a93f2ad89",
    "https://blog.flipsnack.com/wp-content/uploads/2021/04/Cover-graphic-design-portfolio-tips.jpg",
  ]);
  const handleClose = () => {
    setOpen(false);
  };
  // const data = [

  // ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "15px",
          boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
          backgroundColor: "white",
          overflow: "hidden",
          pl: 10,
          pr: 5,
          pt: 5,
          pb: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
            Portfolio
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {data.map((e, index: any) => (
              <Box
                key={index}
                onClick={() => {
                  setOpen(true);
                  setActive(index);
                }}
                sx={{
                  position: "relative",
                  width: "280px",
                  height: "160px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "0.9px solid black",
                  ":hover": {
                    ".viewMore": {
                      display: "block",
                    },
                    img: {
                      filter: "brightness(50%)",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "none",
                    position: "absolute",
                    fontSize: "20px",
                    color: "white",
                    left: "50%",
                    top: "50%",
                    zIndex: "10",
                    transform: "translate(-50%,-50%)",
                  }}
                  className="viewMore"
                >
                  View
                </Typography>

                <Image
                  src={e}
                  width={1400}
                  height={1000}
                  alt="zurag"
                  className="h-full w-full object-cover"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <PortfolioModal
        open={open}
        handleClose={handleClose}
        data={data}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Portfolio;
