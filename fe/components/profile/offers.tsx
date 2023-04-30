import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OfferCard from "../offerCard";

const Offers = () => {
  return (
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
          Offers
        </Typography>
        <OfferCard />
      </Box>
    </Box>
  );
};

export default Offers;
