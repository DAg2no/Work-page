import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import NavBar from "../../components/navbar";
import Container from "@mui/material/Container";
import Typed from "react-typed";
import "../../views/home/index.css";
import Btn from "../btn"

const Header = () => {
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
              <Btn/>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  );
};

export default Header;
