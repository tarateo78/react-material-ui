import * as React from "react";
import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AvTimerIcon from "@mui/icons-material/AvTimer";

import TemporaryDrawer from "./MenuDrawer";

// const pagine = { home: "Home", about: "About", login: "Login" };

const Nav = (prop) => {
  const pages = prop.pages;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <TemporaryDrawer pages={pages} />
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <AvTimerIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Biagiometro App
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.pageURL}
                style={{ textDecoration: "none", color: "white" }}
              >
                <MenuItem>{page.name}</MenuItem>
              </Link>
            ))}
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
