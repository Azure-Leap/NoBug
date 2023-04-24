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
        <AppBar sx={{ background: "black" }}>
          <Toolbar>
            <img src="logo.png" alt="" width={200} height={50} />
            {isMatch ? (
              <>
                <Typography
                  sx={{ fontSize: "2rem", paddingLeft: "10%", color: "black" }}
                >
                  Skill Hive
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab
                    sx={{
                      color: "#FFEA00",
                      ":hover": { color: "white" },
                    }}
                    label="POST MOMENT"
                  />

                  <Tab
                    sx={{
                      color: "#FFEA00",
                      ":hover": { color: "white" },
                    }}
                    label="HOW IT WORK"
                  />
                  <Tab
                    sx={{ color: "#FFEA00", ":hover": { color: "white" } }}
                    label="LOG IN"
                  />
                  <Tab
                    sx={{ color: "#FFEA00", ":hover": { color: "white" } }}
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
