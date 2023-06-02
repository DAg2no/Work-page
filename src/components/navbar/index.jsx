import React from "react";
import { Navbar, Button } from "react-bootstrap";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavBar = ({ themeMode, handleThemeChange }) => {
  return (
    <Navbar expand="md" variant="light" className="fixed-top">
      <Navbar.Brand>
        <span
          className="NameBar text-light p-3"
          style={{ fontWeight: "normal", fontSize: "large" }}
        >
          Daniel Uribe
        </span>
      </Navbar.Brand>
      <Button onClick={handleThemeChange}>
        {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </Button>
    </Navbar>
  );
};

export default NavBar;
