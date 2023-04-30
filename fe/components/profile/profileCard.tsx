import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

// mui
import { Box, Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

const ProfileCard = () => {
  const [toggle, setToggle] = useState(false);

  const like = () => {
    setToggle(!toggle);
  };

  const router = useRouter();

  const handleCopyUrl = () => {
    const textField = document.createElement("textarea");

    textField.innerText = window.location.href;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        height: { xs: "500px", sm: "500px" },
        borderRadius: "15px",
        boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "40%", md: "45%" },
          background: "linear-gradient(90deg, #2ce59c  0%, #64b3f4 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            left: { xs: "50%", sm: "80px" },
            transform: { xs: "translate(-50%, 0)", sm: "translate(0, 0)" },
            bottom: "-90px",
            width: "180px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            backgroundColor: "white",
            overflow: "hidden",
            p: 1,
          }}
        >
          <Box
            sx={{
              width: "180px",
              aspectRatio: "1/1",
              borderRadius: "50%",
              backgroundColor: "white",
              overflow: "hidden",
              zIndex: "1",
            }}
          >
            <Image
              width={400}
              height={400}
              alt="zurag"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              className="h-full w-full object-cover"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "55%",
          position: "relative",
          paddingY: "100px",
          px: { xs: 2, sm: 10 },
        }}
      >
        <MoreVertIcon
          sx={{
            position: "absolute",
            right: "40px",
            top: "30px",
            scale: "1.2",
            ":hover": {
              cursor: "pointer",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              Amanda Smith
            </Typography>
            {toggle ? (
              <FavoriteIcon
                onClick={() => {
                  like();
                }}
                sx={{
                  color: "red",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => {
                  like();
                }}
                sx={{
                  ":hover": {
                    color: "red",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              width={20}
              height={10}
              alt="asd"
              src="https://flagcdn.com/us.svg"
              className="w-[30px] h-[17px] rounded"
            />
            <Typography sx={{ color: "grey" }}>
              Los Angeles, United States
            </Typography>
            <Typography sx={{ color: "grey" }}>
              <CircleIcon
                sx={{
                  fontSize: "8px",
                  color: "#d3d3d3",
                  marginRight: "10px",
                }}
              />
              Graphic Designer
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "white!important",
                color: "black",
                fontSize: "15px",
                border: "1.5px solid #d3d3d3",
                borderRadius: "10px",
                px: 2,
              }}
            >
              Message
            </Button>
            <Button
              onClick={handleCopyUrl}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(43,92,243)!important",
                color: "white",
                fontSize: "15px",
                borderRadius: "10px",
                px: 2,
              }}
            >
              Share Profile
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
