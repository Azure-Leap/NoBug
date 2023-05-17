import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import UploadProfileImage from "./uploadProfileImage";
import ClearIcon from "@mui/icons-material/Clear";

const ProfileImageModal = ({ profileData, isModal, toggleModal }: any) => {
  const [isFull, setIsFull] = useState<boolean>(false);

  const fullScreenToggle = () => {
    setIsFull(!isFull);
  };

  return (
    <Box
      sx={{
        display: isModal ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        zIndex: "1100",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        onClick={() => {
          toggleModal("ProfileImage");
        }}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          width: isFull ? "100%" : "60%",
          height: isFull ? "100%" : "90%",
          backgroundColor: "black",
          objectFit: "contain",
          zIndex: "1111",
        }}
      >
        <Image
          width={2000}
          height={1000}
          alt="image"
          className="h-full w-auto m-auto"
          src={profileData?.freelancer.avatar}
        />
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
          }}
        >
          <ClearIcon
            sx={{
              ":hover": { cursor: "pointer" },
            }}
            onClick={() => {
              toggleModal("ProfileImage");
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            position: "absolute",
            right: "20px",
            top: "20px",
            color: "white",
          }}
        >
          {isFull ? (
            <FullscreenExitIcon
              sx={{
                ":hover": { cursor: "pointer" },
              }}
              onClick={fullScreenToggle}
            />
          ) : (
            <FullscreenIcon
              sx={{
                ":hover": { cursor: "pointer" },
              }}
              onClick={fullScreenToggle}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileImageModal;
