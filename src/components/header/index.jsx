import React, { useEffect } from "react";
import { Grid, Typography, useTheme, useMediaQuery, Hidden } from "@mui/material";
import NavBar from "../../components/navbar";
import Container from "@mui/material/Container";
import Typed from "react-typed";
import Btn from "../btn";
import landing from "../../../public/landing.png";

const HeaderSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {}, []);

  return (
    <header>
      <NavBar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: isSmallScreen ? "40rem" : "60rem",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            <Typography
              variant="h1"
              sx={{
                fontSize: isSmallScreen ? "60px" : { xs: "50px", sm: "4rem", md: "6rem" },
                overflowWrap: "break-word",
                marginBottom: "2rem"
              }}
            >
              Hi, I'm Daniel
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
                    marginBottom: "3rem",
                  }}
                />
              </span>
            </div>
            <Btn />
          </Grid>
          <Hidden lgDown>
            <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "-7rem" }}>
              <img
                src={landing}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Landing"
                width={2000}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </header>
  );
};

export default HeaderSection;
