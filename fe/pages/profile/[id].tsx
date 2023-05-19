import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "@/variables";

// mui
import { Box } from "@mui/system";
import ProfileCard from "@/components/profile/profileCard/profileCard";
import Skills from "@/components/profile/skills";
import SideBar from "@/components/profile/sideBar";
import Portfolio from "@/components/profile/portfolio/portfolio";
import Offers from "@/components/profile/offers";
import axios from "axios";
import Modal from "@/components/modal/modal";
import { ProfileContext } from "@/context/profileContext";
import { ModalContext } from "@/context/modalContext";

const Profile = ({ data }: any) => {
  const { profileData, setProfileData } = useContext(ProfileContext);
  const { isModal, toggleModal, insideModal } = useContext(ModalContext);

  useEffect(() => {
    setProfileData(data.user);
  }, [data.user]);

  return (
    <Box
      // onClick={() => toggleModal("")}
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
        <ProfileCard profileData={profileData} toggleModal={toggleModal} />
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
        <Skills profileData={profileData} />
        <Portfolio profileData={profileData} />
        <Offers />
      </Box>

      <Modal
        isModal={isModal}
        toggleModal={toggleModal}
        insideModal={insideModal}
      />
    </Box>
  );
};

export default Profile;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;
  const { data } = await axios.get(`${BASE_URL}/users/${id}`);

  return {
    props: {
      data,
    },
  };
}
