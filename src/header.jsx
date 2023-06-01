import React, { useEffect, Fragment, useState } from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import image from "./data/image.png";
import "./header.css";
import inkendin from "./data/In-Blue-34.png";
import stackoverflow from "./data/stackoverflow-3819627975.png";
import github from "./data/github_PNG40-3901690518.png";
import gmail from "./data/gmail-logo-circle-2-2047502769.png";
import NavBar from "./Navbar";

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
        <NavBar
          themeMode={themeMode}
          handleThemeChange={handleThemeChange}
        />
        <header className="header-container" id="header">
          <Container>
            <Row className="header-container">
              
            </Row>
          </Container>
        </header>
      </ThemeProvider>
    </Fragment>
  );
};

export default Header;
