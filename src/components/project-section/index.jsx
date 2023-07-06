import React from "react";
import projects from "../../../public/projects.svg";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography, Hidden } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import '../../views/home/index.css'

const card = () => {};

const Project = () => {
  return (
    <>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        xs={12}
        lg={6}
      >
                {/* img Projects */}
                
        <Hidden lgDown>
          <Grid item lg={6} alignContent="center" justifyContent="center">
            <Typography variant="h2" className="text-project" textAlign="center">
              Project
            </Typography>
            <img src={projects} width={500} />
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
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                  <Stack direction="row" spacing={1} marginTop={12}>
                    <Chip label="HTML" />
                    <Chip label="JS" />
                    <Chip label="CSS" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                  <Stack direction="row" spacing={1} marginTop={12}>
                    <Chip label="HTML" />
                    <Chip label="JS" />
                    <Chip label="CSS" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                  <Stack direction="row" spacing={1} marginTop={12}>
                    <Chip label="HTML" />
                    <Chip label="JS" />
                    <Chip label="CSS" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                  <Stack direction="row" spacing={1} marginTop={12}>
                    <Chip label="HTML" />
                    <Chip label="JS" />
                    <Chip label="CSS" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
