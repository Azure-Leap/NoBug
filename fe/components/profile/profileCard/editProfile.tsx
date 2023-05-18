import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";

const EditProfile = ({ isEditProfile, toggleModal }: any) => {
  return (
    <Box
      onClick={() => {
        toggleModal("EditProfile");
      }}
      sx={{
        display: isEditProfile ? "flex" : "none",
        flexDirection: "column",
        gap: "10px",
        p: 1,
        boxShadow: "0px 0px 20px 2px rgba(145,145,145,0.3)",
        // border: "0.5px solid rgba(20,20,20,0.5)",
        borderRadius: "10px",
      }}
    >
      <Button sx={{ border: "1px solid black", width: "max-content" }}>
        Edit Profile
      </Button>
    </Box>
  );
};

export default EditProfile;
