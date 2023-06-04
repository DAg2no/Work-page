import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "../switch";


const NavBar = () => {
  return (
    <nav>
      <Navbar
        expand="md"
        variant="light"
        className="fixed-top border-top-0 border-danger"
      >
        <Navbar.Brand>
          <span>
            <h2
              style={{ fontWeight: "normal", fontSize: "large" }}
              className="ps-3"
            >
              Daniel Uribe
            </h2>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="pe-4">
              <Switch />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
