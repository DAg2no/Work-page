import React from "react";
import projects from "../../../public/projects.svg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";


const card = () => {};

const Project = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xs={12} lg={6}>
          <Typography variant="h2" alignItems="center">
            Project
          </Typography>
          <Box sx={{ width: 22, height: 22 }} className="projectImg">
            <img src={projects} />
          </Box>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
