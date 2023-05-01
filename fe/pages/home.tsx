import ExpertFreelancer from "@/components/expertFreelander";
import { Box } from "@mui/material";
import React from "react";

const Home = ({ data }: any) => {
  console.log(data.freelancer);
  return (
    // <Box sx={{ width: { xs: "95%", xl: "75%" }, margin: "auto" }}>
    <ExpertFreelancer data={data.freelancer} />
    // </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/freelancer");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Home;
