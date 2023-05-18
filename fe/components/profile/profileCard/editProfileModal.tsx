import { Box } from "@mui/system";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import axios from "axios";
import { LoadingContext } from "@/context/loadingContext";
import { UserContext } from "@/context/userContext";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

const EditProfileModal = ({ isModal, toggleModal, profileData }: any) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [editData, setEditData] = useState(profileData);
  const { editUser }: any = useContext(UserContext);
  const [profileImg, setProfileImg] = useState(null);

  // for Avatar start
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    // setPreview(null);
  };
  const onCrop = (view: any) => {
    setPreview(view);
  };
  // for Avatar end

  const changeProfile = async () => {
    setProfileImg(preview);
    try {
      const res = await axios.post("http://localhost:8000/upload", {
        files: preview,
      });
      setEditData({
        ...editData,
        freelancer: {
          ...editData.freelancer,
          avatar: res.data.imgUrl.secure_url,
        },
      });
      console.log(editData);

      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setEditData(profileData);
  }, [profileData]);

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
        onClick={() => toggleModal("EditProfile")}
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
          width: "500px",
          height: "80%",
          zIndex: "1",
          backgroundColor: "white",
          p: 2,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {profileImg != null ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                onClick={() => console.log(editData)}
                sx={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              >
                <Image alt="asd" src={preview || ""} width={200} height={200} />
              </Box>
              <Button
                onClick={() => {
                  setProfileImg(null);
                }}
              >
                Choose Image
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box sx={{ width: "400px", height: "250px", objectFit: "cover" }}>
                <Avatar
                  width={400}
                  height={250}
                  imageWidth={400}
                  onCrop={onCrop}
                  onClose={onClose}
                  src={src || ""}
                />
              </Box>
              <Button
                onClick={() => {
                  setIsLoading(true);
                  changeProfile();
                }}
              >
                Upload
              </Button>
            </Box>
          )}
        </Box>
        <Button
          onClick={() => {
            editUser({ editData });
            console.log(editData);
            // console.log(profileData);
          }}
          sx={{ position: "absolute", bottom: "20px", right: "20px" }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfileModal;
