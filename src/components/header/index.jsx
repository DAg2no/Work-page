import React, { useEffect } from "react";
import { Grid, Typography, Hidden, useTheme, useMediaQuery } from "@mui/material";
import NavBar from "../../components/navbar";
import Container from "@mui/material/Container";
import Typed from "react-typed";
import "../../views/home/index.css";
import Btn from "../btn";
import landing from "../../../public/landing.png";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {}, []);

  return (
    <>
      <header className="header-container" id="header">
        <NavBar />
        <Container fixed>
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: "15rem" }}>
            <Grid item xs={11} md={8} lg={6} xl={6}>
              <Typography
                variant="h1"
                p={"1rem"}
                sx={{
                  fontSize: isSmallScreen ? "60px" : { xs: "50px", sm: "4rem", md: "6rem" },
                  overflowWrap: "break-word", // Evita que el título se salga de su línea
                }}
              >
                hi, i'm daniel
              </Typography>
              <div>
                <span className="animated-typing">
                  <Typed
                    strings={[
                      "beginner development",
                      "frontend developer",
                      "student in frontend",
                    ]}
                    typeSpeed={50}
                    backSpeed={20}
                    loop
                    className="text-typing"
                    style={{
                      fontSize: isSmallScreen ? "20px" : "2rem",
                      padding: "1rem",
                    }}
                  />
                </span>
              </div>
              
                <Btn
                
                 />
              
            </Grid>
            <Hidden lgDown>
              <Grid item xs={10} md={6} lg={5} xl={6} style={{ textAlign: "center" }}>
                <img src={landing} style={{ maxWidth: "100%", height: "auto" }} alt="Landing" />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </header>
    </>
  );
};

export default Header;
