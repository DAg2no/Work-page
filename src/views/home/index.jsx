import React from "react";
import HeaderSection from "../../components/header";
import SkillSection from "../../components/skill"
import Project from "../../components/project-section"
import "./index.css"
import Container from '@mui/material/Container'

const Home = () => {
  return (
    <>
      <HeaderSection />
      <Container maxWidth="lg">
        <SkillSection /> 
      <Project/>
      </Container>
      
    </>
  );
};

export default Home;
