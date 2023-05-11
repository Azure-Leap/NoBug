import { Box } from "@mui/system";
import React from "react";

const ChooseFile = () => {
  return (
    <Box
      sx={{
        display: "none",
        position: "absolute",
        width: "400px",
        height: "200px",
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    ></Box>
  );
};

export default ChooseFile;
