import { useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import NavBar from "../../components/navbar";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typed from "react-typed";
import "../../views/home/index.css";

const HeaderSection = () => {
  useEffect(() => {}, []);

  return (
    <>
      <header className="header-container" id="header">
        <NavBar />
        <Container maxWidth="sm">
          <Grid
            container
            justifyContent="center"
            style={{ marginTop: "23rem" }}
          >
            <Grid item>
              <Typography variant="h1">hi, i'm daniel</Typography>

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
                />
              </span>
              <div>
                <Button
                  href="#"
                  variant="contained"
                  startIcon={<GitHubIcon />}
                ></Button>
                <Button
                  href="#"
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                ></Button>
                <Button href="#" variant="contained">
                  <img src="#" />
                </Button>
                <Button href="#" variant="contained">
                  <img src="#" />
                </Button>
                
              </div>
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  );
};

export default HeaderSection;
