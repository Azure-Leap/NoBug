import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const OfferCard = () => {
  const skills = ["Brochure", "Booklet", "Booklet Design", "Design"];
  return (
    <Box
      sx={{
        width: { xs: "270px", sm: "280px" },
        height: "400px",
        border: "0.1px solid black",
        borderRadius: "10px",
        ":hover": {
          ".title": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <Box
        sx={{ width: "100%", height: "50%", borderBottom: "0.1px solid black" }}
      >
        <Image
          width={250}
          height={200}
          src="https://maqe-com-4-media-uploads.s3.ap-southeast-1.amazonaws.com/content/uploads/2020/04/07172748/IN_DEsignthinking_Cover-1.png"
          alt="zurag"
          className="h-full w-full object-cover"
        />
      </Box>
      <Box sx={{ width: "100%", py: 1, px: 2 }}>
        <Typography
          sx={{
            width: "100%",
            height: "40%",
            fontSize: "18px",
            fontWeight: "500",
          }}
          className="title"
        >
          Design your company`s documents / report / brochure / booklet
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              overflow: "scroll",
            }}
          >
            {skills.map((el: any, index: any) => (
              <Typography
                key={index}
                sx={{
                  padding: "4px",
                  paddingX: "12px",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                  border: "0.9px solid grey",
                  color: "rgb(153,153,153)",
                  flex: "none",
                  ":hover": {
                    backgroundColor: "rgba(51, 162,191)",
                    color: "white",
                    boxShadow: "0px 0px 100px -36px rgba(51, 162,191)",
                  },
                }}
              >
                {el}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "70%",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "0.1px solid black",
                  overflow: "hidden",
                }}
              >
                <Image
                  width={250}
                  height={200}
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                  alt="zurag"
                  className="h-full w-full object-cover"
                />
              </Box>
              <Typography
                sx={{ fontSize: "0.8rem", color: "rgb(153,153,153)" }}
              >
                Amanda Smith
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                width: "30%",
              }}
            >
              <Typography>$155</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferCard;
