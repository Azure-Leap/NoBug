import Navbar from "@/components/navbar";
import PopularCat from "@/components/popularCat";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ width: { xs: "95%", xl: "75%" }, margin: "auto" }}>
      <PopularCat />
    </Box>
  );
};

export default Home;
