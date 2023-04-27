import Auth from "@/components/auth/logIn";
import LogIn from "@/components/auth/logIn";
import ExpertFreelancer from "@/components/expertFreelander";
import { Box } from "@mui/material";
import React from "react";

const Home = ({ data }: any) => {
  // console.log(data.freelancer);
  return (
    <>
      <Auth />
    </>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:8000/freelancer");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Home;
