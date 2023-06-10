import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "../switch";
import { Padding } from "@mui/icons-material";

const NavBar = () => {
  return (
    <>
      <nav>
        <Navbar
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
          <div style={{ marginLeft: "auto", marginRight: "1rem" }}>
            <Switch />
          </div>
        </Navbar>
      </nav>
    </>
  );
};

export default NavBar;
