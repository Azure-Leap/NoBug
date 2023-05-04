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
import HoverDropdown from "../category";
import { useRouter } from "next/router";
const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  return (
    <>
      <Box sx={{ height: "70px", backgroundColor: "white" }}>
        <React.Fragment>
          <AppBar
            sx={{
              background: "#B9CDDA",
              paddingLeft: "30px",
              borderBottom: "1px solid #555555",
            }}
          >
            <Toolbar>
              <Image
                onClick={() => router.push("/")}
                src="/logo2.png"
                alt=""
                width={200}
                height={50}
              />
              {isMatch ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      paddingLeft: "10%",
                      color: "#212A3E",
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
                        color: "#212A3E",
                        ":hover": { color: "white" },
                      }}
                      label="POST MOMENT"
                    />
                    <Tab
                      sx={{
                        color: "#212A3E",
                        ":hover": { color: "white" },
                      }}
                      label="HOW IT WORK"
                    />
                    <Tab
                      onClick={() => router.push("/auth/login")}
                      sx={{ color: "#212A3E", ":hover": { color: "white" } }}
                      label="LOG IN"
                    />
                    <Tab
                      onClick={() => router.push("/auth/signup")}
                      sx={{ color: "#212A3E", ":hover": { color: "white" } }}
                      label="SIGN UP"
                    />
                  </Tabs>
                </>
              )}
            </Toolbar>
          </AppBar>
        </React.Fragment>
      </Box>
      <HoverDropdown />
    </>
  );
};

export default NavBar;
