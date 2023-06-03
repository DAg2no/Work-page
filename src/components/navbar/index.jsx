import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const NavBar = () => {
  const btnSwitch = document.querySelector('#switch');
  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light')
  })

  return (
    <Navbar expand="md" variant="light" className="fixed-top bg-dark border-top-0 border-danger">
      <Navbar.Brand>
        <span style={{ fontWeight: "normal", fontSize: "large" }} className="text-light p-2">
          Daniel Uribe
        </span>
      </Navbar.Brand>
      
        <button className="switch" id="switch">
          <span>
            <Brightness4Icon/>
          </span>
          <span>
            <Brightness7Icon/>
          </span>
        </button>
        
    </Navbar>
  );
};

export default NavBar;
