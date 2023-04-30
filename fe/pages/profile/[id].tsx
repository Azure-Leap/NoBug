import React from "react";
import { useRouter } from "next/router";

// mui
import { Box } from "@mui/system";
import ProfileCard from "@/components/profile/profileCard";
import Skills from "@/components/profile/skills";
import SideBar from "@/components/profile/sideBar";
import Portfolio from "@/components/profile/portfolio/portfolio";
import Offers from "@/components/profile/offers";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box
      sx={{
        display: "flex",
        p: 4,
        gap: "40px",
        backgroundColor: "rgba(249,250,251)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          gap: "20px",
          width: "70%",
        }}
      >
        <ProfileCard />
        <Skills />
        <Portfolio />
        <Offers />
      </Box>
      <Box sx={{ width: "25%", height: "40vh" }}>
        <SideBar />
      </Box>
    </Box>
  );
};

export default Profile;
