import React, { useState } from "react";
import ImgSlider from "./slider";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const Hero = () => {
  //   const [value2, setValue2] = useState();
  const [res, setRes] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src="/back.jpg"
            alt="Mountains with snow"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Typography variant="h3">
          Монголын анхны Фрийлансерийн цогц платформ
        </Typography>
        <Grid
          sx={{ maxWidth: "75vw", marginTop: "2rem", marginBottom: "2rem" }}
        >
          <Typography variant="h4">
            Access global talent on the freelancer website trusted by over 1
            million businesses world.
          </Typography>
        </Grid>
        <Grid xs={3}>
          <TextField
            id="search"
            type="search"
            value={searchTerm}
            onChange={handleChange}
            sx={{
              maxWidth: "400px",
              minWidth: "400px",
              backgroundColor: "#ECF2FF",
              borderRadius: "7px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Hero;
