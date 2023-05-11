import { UploadContext } from "@/context/uploadContext";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";

const UploadProfileImage = () => {
  const { uploadImage }: any = useContext(UploadContext);
  const test = (e: any) => {
    console.log(e);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "150px",
      }}
    >
      <Button
        // onClick={uploadImage}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(15,120,200,)",
          p: 1,
          borderRadius: "5px",
          ":hover": {
            cursor: "pointer",
          },
        }}
        variant="contained"
        component="label"
        onChange={test}
      >
        Upload Photo
        <input type="file" hidden />
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(200,10,50,0.3)",
          p: 1,
          borderRadius: "5px",
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography
          sx={{
            color: "red",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          Delete Profile
        </Typography>
      </Box>
    </Box>
  );
};

export default UploadProfileImage;
