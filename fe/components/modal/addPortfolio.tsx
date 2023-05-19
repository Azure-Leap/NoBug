import React, { useContext, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { ProfileContext } from "@/context/profileContext";
import { ModalContext } from "@/context/modalContext";

const AddPortfolio = ({}: any) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { portfolioData, setPortfolioData } = useContext(ProfileContext);
  const { toggleModal } = useContext(ModalContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        p: 5,
        pb: 3,
        backgroundColor: "white",
        zIndex: "1",
        borderRadius: "10px",
        "*": {
          transition: "all 0.2s",
        },
      }}
    >
      {selectedImage === null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "280px",
            height: "160px",
            borderRadius: "10px",
            border: "2px dashed rgba(200,200,200)",
            ":hover": {
              border: "2px dashed rgba(36,38,150)",
              ".cloudIcon": {
                color: " rgba(36,38,150)",
              },
            },
          }}
          component="label"
        >
          <CloudUploadIcon
            className="cloudIcon"
            sx={{ fontSize: "50px", color: "rgba(150,150,150)" }}
          />
          <Box>
            <Typography sx={{ fontSize: "13px" }}>
              Choose file to upload
            </Typography>
          </Box>
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              setSelectedImage(e.target.files?.[0]);
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "280px",
            height: "160px",
            backgroundColor: "black",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            width={2000}
            height={1000}
            src={URL.createObjectURL(selectedImage)}
            alt="selected"
            className="h-full w-full"
          />
        </Box>
      )}
      <Box
        sx={{ display: "flex", gap: "20px", fontSize: "20px", color: "white" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "rgba(36,38,150)",
            backgroundColor: "white",
            border: "1px solid rgba(36,38,150)",
            ":hover": {
              color: "white",
              backgroundColor: "rgba(36,38,150)",
            },
          }}
          onClick={() => {
            setPortfolioData([
              ...portfolioData,
              URL.createObjectURL(selectedImage),
            ]);
            setSelectedImage(null);
            toggleModal();
          }}
        >
          <KeyboardBackspaceIcon sx={{ rotate: "90deg" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "rgba(36,38,150)",
            backgroundColor: "white",
            border: "1px solid rgba(36,38,150)",
            ":hover": {
              color: "white",
              backgroundColor: "rgba(36,38,150)",
            },
          }}
          onClick={() => {
            setSelectedImage(null);
          }}
        >
          <DeleteIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default AddPortfolio;
