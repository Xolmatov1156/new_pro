import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const likeCount = useSelector((state) => state.likeList.saveLikeList.length);
  const saveCount = useSelector((state) => state.saveProduct.savedList.length);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
              LOGO
            </NavLink>
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <div className="flex space-x-5">
            <Badge color="secondary" badgeContent={likeCount} showZero>
              <NavLink to="/like" style={{ color: "inherit", textDecoration: "none" }}>
                <strong>Like</strong>
              </NavLink>
            </Badge>
            <Badge color="secondary" badgeContent={saveCount} showZero>
              <NavLink to="/save" style={{ color: "inherit", textDecoration: "none" }}>
                <strong>Save</strong>
              </NavLink>
            </Badge>
            <Badge color="secondary" badgeContent={0} showZero>
              <NavLink to="/save" style={{ color: "inherit", textDecoration: "none" }}>
                <strong>Order</strong>
              </NavLink>
            </Badge>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
