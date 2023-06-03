import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "../switch";
import '../switch/index.css'

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
          className="text-light p-4"
        >
          Daniel Uribe
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Switch />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
