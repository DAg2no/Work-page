import { useEffect } from "react";
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
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "15rem" }}
          >
            <Grid item xs={10} md={7}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: isSmallScreen ? "3rem" : { xs: "3rem", sm: "4rem", md: "6rem" },
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
                    }}
                  />
                </span>
              </div>
              <div>
                <Btn />
              </div>
            </Grid>
            <Hidden lgDown>
              <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
                <img src={landing} style={{ maxWidth: "100%" }} alt="Landing" />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </header>
    </>
  );
};

export default Header;
