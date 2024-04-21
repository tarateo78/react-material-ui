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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                aria-label="back"
                sx={{ color: "white" }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
