import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Chip,
  Box,
  Grid,
} from "@mui/material";
import projects from "../../../public/projects.svg"

const Project = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item sx={6} md display="flex">
            <Box>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                </CardContent>
                <div style={{ marginTop: 50 }}>
                  <Chip label="js" sx={{ marginLeft: 1, marginRight: 1 }} />
                  <Chip label="html" />
                  <Chip label="css" sx={{ marginLeft: 1 }} />
                </div>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                </CardContent>
                <div style={{ marginTop: 50 }}>
                  <Chip label="js" sx={{ marginLeft: 1, marginRight: 1 }} />
                  <Chip label="html" />
                  <Chip label="css" sx={{ marginLeft: 1 }} />
                </div>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">password-generator</Typography>
                </CardContent>
                <div style={{ marginTop: 50 }}>
                  <Chip label="js" sx={{ marginLeft: 1, marginRight: 1 }}/>
                  <Chip label="html" />
                  <Chip label="css" sx={{ marginLeft: 1 }} />
                </div>
              </CardActionArea>
            </Card>
          </Box>
          </Grid>
          <Grid item xs={6}>
              <Box sx={{
                maxWidth: 1000,
                maxHeight: 1000,
                marginLeft: 20
              }}>
                <Typography variant="h1" fontSize={100} marginRight={20}>Projects</Typography>
                    <img src={projects} style={{width: 500, height: 500}} />
              </Box>
          </Grid>
          
        </Grid>
      </Container>
    </section>
  );
};

export default Project;
