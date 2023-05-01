import React, { useState } from "react";
import NestedList from "./nestedlist";
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
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["HOW IT WORKS", "LOG IN", "SIGN UP"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <NestedList />
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText sx={{}}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Button
          sx={{ mt: 65, color: "#9EA4B4" }}
          variant="contained"
          color="success"
        >
          POST PROJECT
        </Button>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      ds
    </React.Fragment>
  );
};

export default DrawerComp;
