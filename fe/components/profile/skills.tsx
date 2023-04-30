import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Skills = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
        overflow: "hidden",
        backgroundColor: "white",
        pl: 10,
        pr: 5,
        pt: 5,
        pb: 8,
      }}
    >
      <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
        Skills
      </Typography>
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {arr.map((i, index: any) => (
          <Button
            key={index}
            sx={{
              color: "black",
              textTransform: "capitalize",
              border: "1.5px solid #e8e8e8",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "rgba(43,92,243)!important",
                color: "white",
                border: "1.5px solid white",
              },
            }}
          >
            Product Design
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
