import React, { useEffect, Fragment, useState } from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import image from "./data/image.png";
import "./header.css";
import inkendin from "./data/In-Blue-34.png";
import stackoverflow from "./data/stackoverflow-3819627975.png";
import github from "./data/github_PNG40-3901690518.png";
import gmail from "./data/gmail-logo-circle-2-2047502769.png";

const Header = () => {
  const [themeMode, setThemeMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const header = document.getElementById("header");
    header.style.animation = "slide-in 1s ease-in-out";

    const title = document.getElementById("title");
    title.style.animation = "bounce 2s ease-in-out infinite";
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navbar expand="md" variant="light" className="fixed-top">
          <Navbar.Brand>
            <span
              className="NameBar text-light p-3"
              style={{ fontWeight: "normal", fontSize: "large" }}
            >
              Daniel Uribe
            </span>
          </Navbar.Brand>
          <IconButton onClick={handleThemeChange}>
            {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Navbar>
        <header className="header-container" id="header">
          <Container>
            <Row className="header-container">
              <Col xs={12} lg={7} className="order-2 order-lg-1">
                <div className="title-container p-4">
                  <div className="slide-in">
                    <h1 className="title" id="title">
                      Hi, I'm Daniel
                    </h1>
                    <span className="fs-1 text-warning span-typed fw-light">
                      <Typed
                        strings={[
                          "Beginner in development",
                          "Working hard to improve",
                          "I'm a developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={20}
                        loop
                      />
                    </span>
                  </div>
                </div>
                {/* botones */}
                <div class="d-flex align-items-center">
                  <a
                    href="https://www.linkedin.com/in/daniel-uribe-pulgar-93905a273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button type="button" className="btn btn-light">
                      <img
                        src={inkendin}
                        alt="LinkedIn"
                        height="40"
                        width="40"
                      />
                    </button>
                  </a>

                  <a
                    href="https://stackoverflow.com/users/21894223/daniel-uribe?tab=profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button type="button" className="btn btn-light">
                      <img
                        src={stackoverflow}
                        alt="Stack Overflow"
                        height="40"
                        width="40"
                      />
                    </button>
                  </a>

                  <a
                    href="https://github.com/DAg2no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button className="btn btn-light" type="button">
                      <img src={github} alt="GitHub" height="40" width="40" />
                    </button>
                  </a>

                  <a
                    href="mailto:danielscrip.zsh@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button className="btn btn-light" type="button">
                      <img src={gmail} alt="gmail" height="40" width="40" />
                    </button>
                  </a>
                </div>
              </Col>

              <Col xs={12} lg={5} className="order-1 order-lg-2">
                {/* imagen */}
                <img src={image} alt="header" className="img-fluid enlarged" />
                
              </Col>
            </Row>
          </Container>
        </header>
      </ThemeProvider>
    </Fragment>
  );
};

export default Header;