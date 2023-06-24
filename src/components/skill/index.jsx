import React from "react";
/* img-css */
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import react from "../../../public/react.svg";
import bootstrap from "../../../public/bootstrap.svg";
import Mui from "../../../public/mui.svg";
import skill from "../../../public/skill.png";
/* import '../../views/home/index.css' */
/* img-css */

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { blue, deepPurple, grey, lime, orange } from "@mui/material/colors";
import Container from "@mui/material/Container";
import { Grid, Box, Typography } from "@mui/material";


const SkillSection = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} sm={6} md={4} textAlign="end" className="grid-component">
                <img src={skill} alt="skill" width={400} />
              </Grid>
              <Grid item xs={12} sm={6} md={8} className="grid-component">
                <Box>
                  <Typography variant="h2">Language know</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    marginTop={2}
                    marginBottom={4}
                  >
                    <Avatar
                      sx={{ bgcolor: lime[50], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={js} alt="JS" width="36rem" />
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: orange[500], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={html} alt="HTML" width="36rem" />
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: blue[500], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={css} alt="CSS" width="36rem" />
                    </Avatar>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h2">Frontend</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    marginTop={2}
                    marginBottom={4}
                  >
                    <Avatar
                      sx={{ bgcolor: lime[50], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={Mui} alt="Mui" width="36rem" />
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: grey[800], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={react} alt="react" width="36rem" />
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: deepPurple[400], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={bootstrap} alt="bootstrap" width="36rem" />
                    </Avatar>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h2">Language know</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    marginTop={2}
                    marginBottom={4}
                  >
                    <Avatar
                      sx={{ bgcolor: lime[50], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={js} alt="JS" width="36rem" />
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: orange[500], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={html} alt="HTML" width="36rem" />
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: blue[500], width: 50, height: 52 }}
                      variant="rounded"
                    >
                      <img src={css} alt="CSS" width="36rem" />
                    </Avatar>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SkillSection;
