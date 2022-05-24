import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountTree from "@mui/icons-material/AccountTree";
import { Link, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Navbar = () => {
  const NavLink = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    "> a": {
      color: "#ffffff",
      padding: "8px",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "600",
    },
  }));

  const isLoggedIn = false;

  return (
    <>
      <AppBar position="static" style={{ background: "#4D4C7D" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink>
              <AccountTree
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <NavLink>
                <Link to="/">Direct Shifts</Link>
              </NavLink>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink>
                <Link to="/login">Login</Link>
              </NavLink>
              <NavLink>
                <Link to="/signup">Sign Up</Link>
              </NavLink>
              {isLoggedIn && (
                <NavLink>
                  <Link to="/refer-friend">Refer A Friend</Link>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Navbar;
