import React, { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./index.css";

const Header = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    header.style.animation = "slide-in 1s ease-in-out";

    const title = document.getElementById("title");
    title.style.animation = "bounce 2s ease-in-out infinite";
  }, []);

  return (
    <Fragment>
      <header className="header-container" id="header">
        <Container>
          <Row className="header-container">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">Daniel Uribe</Typography>
              </Toolbar>
            </AppBar>
          </Row>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
