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
        flexDirection: "column",
        p: 4,
        gap: { xs: "0px", md: "40px" },
        backgroundColor: "rgba(249,250,251)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: "40px", md: "20px" },
        }}
      >
        <ProfileCard />
        <SideBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: { xs: "100%", md: "70%" },
        }}
      >
        <Skills />
        <Portfolio />
        <Offers />
      </Box>
    </Box>
  );
};

export default Profile;
