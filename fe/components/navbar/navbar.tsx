import React, { useState } from "react";
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
import DrawerComp from "./drawer";
const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <Box>
      <React.Fragment>
        <AppBar sx={{ background: "#1A202A", paddingLeft: "30px" }}>
          <Toolbar>
            <img src="logo2.png" alt="" width={200} height={50} />
            {isMatch ? (
              <>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    paddingLeft: "10%",
                    color: "#9EA4B4",
                  }}
                ></Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto", marginRight: "40px" }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab
                    sx={{
                      color: "#9EA4B4",
                      ":hover": { color: "white" },
                    }}
                    label="POST MOMENT"
                  />

                  <Tab
                    sx={{
                      color: "#9EA4B4",
                      ":hover": { color: "white" },
                    }}
                    label="HOW IT WORK"
                  />
                  <Tab
                    sx={{ color: "#9EA4B4", ":hover": { color: "white" } }}
                    label="LOG IN"
                  />
                  <Tab
                    sx={{ color: "#9EA4B4", ":hover": { color: "white" } }}
                    label="SIGN UP"
                  />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </Box>
  );
};

export default NavBar;
