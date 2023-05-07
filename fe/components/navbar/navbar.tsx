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
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";
import DrawerComp from "./drawer";
import Image from "next/image";
import HoverDropdown from "../category";
import { useRouter } from "next/router";
const settings = [
  { title: "Profile", logo: <AccountBoxIcon /> },
  { title: "Post offer", logo: <AccessTimeIcon /> },
  { title: "Payment", logo: <PaymentIcon /> },
  { title: "Log out", logo: <LogoutIcon /> },
];
const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

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
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem
                          sx={{ p: 2 }}
                          key={setting.title}
                          onClick={handleCloseUserMenu}
                        >
                          {setting.logo}
                          <Typography textAlign="center">
                            {setting.title}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
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
