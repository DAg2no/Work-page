import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Hidden,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import projects from "../../../public/projects.svg";
import "../../views/home/index.css";

const ProjectCard = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        xs={10}
      >
        <Hidden lgDown>
          <Grid item lg={6} xs={12} align="center">
            <Typography variant="h2" className="text-project">
              Project
            </Typography>
            <Box>
              <img src={projects} width={500} style={{marginLeft: "10rem"}} alt="Projects" />
            </Box>
          </Grid>
        </Hidden>

        <Grid
          container
          xs={12}
          lg={6}
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          {[1, 2].map((index) => (
            <>
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                  <CardActionArea
                    href="https://github.com/DAg2no/password-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    area-disabled="false"
                  >
                    <CardContent>
                      <Typography variant="h5">password-generator</Typography>
                      <Stack direction="row" spacing={1} marginTop={6}>
                        <Chip label="HTML" />
                        <Chip label="JS" />
                        <Chip label="CSS" />
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5">hola</Typography>
                      <Stack direction="row" spacing={1} marginTop={6}>
                        <Chip label="HTML" />
                        <Chip label="JS" />
                        <Chip label="CSS" />
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProjectCard;
