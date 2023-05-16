import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FreelancerInterface } from "@/interfaces/interfaces";

// mui
import { Box } from "@mui/system";
import ProfileCard from "@/components/profile/profileCard/profileCard";
import Skills from "@/components/profile/skills";
import SideBar from "@/components/profile/sideBar";
import Portfolio from "@/components/profile/portfolio/portfolio";
import Offers from "@/components/profile/offers";
import axios from "axios";
import ProfileImageModal from "@/components/profile/profileImageModal/profileImageModal";
import { truncate } from "fs/promises";
import EditProfileModal from "@/components/profile/profileCard/editProfileModal";

const Profile = () => {
  const router = useRouter();
  const [isPModal, setIsPModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [profileData, setProfileData] = useState<FreelancerInterface>();
  const { id } = router.query;

  const toggleModal = (e: any) => {
    if (e === "ProfileImage") {
      setIsPModal(!isPModal);
    } else if (e === "EditProfile") {
      setIsEditModal(!isEditModal);
    }
  };

  const getFreelancerData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/freelancer/${id}`
      );
      setProfileData(data.freelancer[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFreelancerData();
  }, [id]);

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
      <ProfileImageModal
        profileData={profileData}
        isModal={isPModal}
        setIsModal={setIsPModal}
        toggleModal={toggleModal}
      />
      <EditProfileModal
        isModal={isEditModal}
        setIsModal={setIsEditModal}
        toggleModal={toggleModal}
      />
    </Box>
  );
};

export default Profile;
