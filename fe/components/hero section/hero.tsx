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
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  //   const [value2, setValue2] = useState();
  const [res, setRes] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment>
      <Grid
        sx={{ backgroundColor: "#C5C5C5", marginTop: "63px" }}
        container
        rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid xs={12} sm={6}>
          <Box>
            <Typography variant="h2" sx={{ color: "red" }}>
              Make bright ideas happen
            </Typography>
            <Typography variant="h4" sx={{ color: "" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "7px" }}
                id="standard-name"
                label=""
                value=""
                InputProps={{
                  endAdornment: (
                    <Button sx={{}}>
                      <SearchIcon />
                    </Button>
                  ),
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={6}>
          <Box>
            <ImgSlider />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Hero;
