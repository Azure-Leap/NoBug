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
        sx={{
          backgroundColor: "#4A4E69",
          marginTop: "63px",
          alignItems: "center",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid xs={12} sm={6}>
          <Box sx={{ paddingLeft: "60px" }}>
            <Typography variant="h2" sx={{ color: "#1A202A" }}>
              Make bright ideas happen
            </Typography>
            <Typography variant="h4" sx={{ color: "#1A202A" }}>
              Access global talent on the freelancer website trusted by over 1
              million businesses worldwide.
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <Container maxWidth="md" sx={{ mt: 10, marginLeft: "-20px" }}>
                <TextField
                  id="search"
                  type="search"
                  value={searchTerm}
                  onChange={handleChange}
                  sx={{
                    width: 600,
                    backgroundColor: "#9EA4B4",
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
              </Container>
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
