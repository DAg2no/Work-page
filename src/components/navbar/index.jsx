import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "../switch"


const NavBar = () => {
  return (
    <Navbar
      expand="md"
      variant="light"
      className="fixed-top bg-dark border-top-0 border-danger"
    >
      <Navbar.Brand>
        <span
          style={{ fontWeight: "normal", fontSize: "large" }}
          className="text-light p-2"
        >
          Daniel Uribe
        </span>
      </Navbar.Brand>
      <Switch/>
    </Navbar>
  );
};

export default NavBar;
