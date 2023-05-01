import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  colors,
  Button,
} from "@mui/material";
import NestedList from "./nestedlist";

import MenuIcon from "@mui/icons-material/Menu";
const pages = ["HOW IT WORKS", "LOG IN", "SIGN UP", "FREELANCER?"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <div></div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ padding: "12px" }}>
          <NestedList />
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              sx={{ borderBottom: "1px solid black" }}
            >
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <Button
            sx={{ padding: "12px", color: "black" }}
            className="mt-10 ml-5"
            variant="contained"
            color="warning"
          >
            POST PROJECT
          </Button>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
