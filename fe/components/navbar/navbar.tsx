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
import Image from "next/image";
const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ height: "70px", backgroundColor: "white" }}>
      <React.Fragment>
        <AppBar sx={{ background: "#1A202A" }}>
          <Toolbar>
            <Image src="/logo2.png" alt="" width={200} height={50} />
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
                  sx={{ marginLeft: "auto" }}
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
