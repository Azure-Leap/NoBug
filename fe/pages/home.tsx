import CommendPart from "@/components/commendPart";
import ExpertFreelancer from "@/components/expertFreelander";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ width: { xs: "95%", xl: "75%" }, margin: "auto" }}>
      <CommendPart />
    </Box>
  );
};

export default Home;
