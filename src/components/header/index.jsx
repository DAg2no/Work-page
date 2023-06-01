import React, { Fragment, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import NavBar from "../navbar";
import "./header.css";

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
