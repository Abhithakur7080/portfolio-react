import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";
import bgImage from "../assets/bgImage.jpeg"

const drawerWidth = 240;
const navItems = ["Home", "Projects", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          my: 2,
          fontFamily: "Anton SC, cursive",
          background: "#fff",
        }}
      >
        Port
        <Typography
          variant="span"
          sx={{ color: "yellow", fontFamily: "Anton SC, cursive" }}
        >
          Folio.
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item !== "Home" ? item.toLowerCase() : ""}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            {({ isActive }) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive ? "yellow" : "#fff",
                    fontFamily: "Merriweather, cursive",
                    "&:focus": { backgroundColor: "yellow" },
                    "&:active": { backgroundColor: "yellow" },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "block" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "start" },
                fontFamily: "Anton SC, cursive",
              }}
            >
              Port
              <Typography
                variant="span"
                sx={{ color: "yellow", fontFamily: "Anton SC, cursive" }}
              >
                Folio.
              </Typography>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item !== "Home" ? item.toLowerCase() : ""}`}
                >
                  {({ isActive }) => (
                    <Button
                      key={item}
                      sx={{
                        color: isActive ? "yellow" : "#fff",
                        fontFamily: "Merriweather, cursive",
                        "&:hover": { color: "yellow" },
                        "&:focus": { color: "yellow" },
                      }}
                    >
                      {item}
                    </Button>
                  )}
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Box
        sx={{
          marginTop: { xs: "54px", sm: "64px" },
          background:
            `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
