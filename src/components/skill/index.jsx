import React from "react";
import Container from "@mui/material/Container";
import { Grid, Box, Typography } from "@mui/material";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import react from "../../../public/react.svg";
import bootstrap from "../../../public/bootstrap.svg";
import Mui from "../../../public/mui.svg";

const SkillSection = () => {
  return (
    <>
      <section>
        <Container>
          <Grid container spacing={2} flexDirection="column">
            <Grid item xs={6} sm={3} textAlign="end" className="grid-component">
              <Typography variant="h2">Languaje know</Typography>
              <Box display="flex" alignItems="flex-end">

                <div>
                  <Box>
                  <i>
                    <img src={html} alt="html" width={"60rem"} />
                  </i>
                </Box>
                </div>
                
              <div>
                <Box>
                  <i>
                    <img src={css} alt="css" width={"60rem"} />
                  </i>
                </Box>
              </div>
                
              <div>
                <Box>
                  <i>
                    <img src={js} alt="js" width={"60rem"} />
                  </i>
                </Box>
              </div>
                
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} className="grid-component">
              <Typography variant="h2">Frontend</Typography>
              <Box display="flex" alignItems="flex-end">
                <div style={{padding: "1rem"}}>
                  <Box sx={{ backgroundColor: "blue", padding: "1rem" }}>
                  <i>
                    <img src={react} alt="react" width={"60rem"} />
                  </i>
                </Box>
                </div>
                
                <div style={{padding: "1rem"}}>
                  <Box sx={{ backgroundColor: "#A40ACD", padding: "1rem" }}>
                  <i>
                    <img src={bootstrap} alt="bootstrap" width={"60rem"} />
                  </i>
                </Box>
                </div>
                
              <div style={{padding: "1rem"}}>
                <Box sx={{ backgroundColor: "#133CE6", padding: "1rem" }}>
                  <i>
                    <img src={Mui} alt="mui" width={"60rem"} />
                  </i>
                </Box>
              </div>
                
              <div style={{padding: "1rem"}}>
                <Box sx={{ backgroundColor: "blue", padding: "1rem" }}>
                  <i>
                    <img src={html} alt="html" width={"60rem"} />
                  </i>
                </Box>
              </div>
                
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} textAlign="end" className="grid-component">
              <Typography variant="h2">Languaje know</Typography>
              <Box display="flex" alignItems="flex-end">
                <div style={{padding: "1rem"}}>
                  <Box sx={{ backgroundColor: "blue", padding: "1rem" }}>
                  <i>
                    <img src={html} alt="html" width={"60rem"} />
                  </i>
                </Box>
                </div>

                <div style={{padding: "1rem"}}>
                  <Box sx={{ backgroundColor: "blue", padding: "1rem" }}>
                  <i>
                    <img src={html} alt="html" width={"60rem"} />
                  </i>
                </Box>
                </div>
                <div style={{padding: "1rem"}}>
                  <Box sx={{ backgroundColor: "blue", padding: "1rem" }}>
                  <i>
                    <img src={html} alt="html" width={"60rem"} />
                  </i>
                </Box>
                </div>
                <div style={{padding: "1rem"}}>
                  <Box sx={{ backgroundColor: "blue", padding: "1rem" }}>
                  <i>
                    <img src={html} alt="html" width={"60rem"} />
                  </i>
                </Box>
                </div>
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default SkillSection;
