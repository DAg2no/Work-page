import React from "react";
import Container from "@mui/material/Container";
import {  Grid } from "@mui/material"
import { FaCss3 } from "react-icons/fa";

const SkillSection = () => {
  return (
    <>
    <section>
      <Container>
      <Grid>
       <Grid item>
        <h2>Languaje know</h2>
         <i> <FaCss3/> </i> 
       </Grid>
      </Grid>
      </Container>
    </section>
    </>
    
  );
};
export default SkillSection;