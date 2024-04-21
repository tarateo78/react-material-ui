import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AvTimerIcon from "@mui/icons-material/AvTimer";

import TemporaryDrawer from "../components/MenuDrawer";

// const pagine = { home: "Home", about: "About", login: "Login" };

const Nav = (prop) => {
  const pages = prop.pages;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <AvTimerIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
