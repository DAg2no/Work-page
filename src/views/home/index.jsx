import React from "react";
import HeaderSection from "../../components/header";
import SkillSection from "../../components/skill"
import "./index.css"
import Container from '@mui/material/Container'
import ProjectCard from "../../components/project-section";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <Container maxWidth="lg">
        <SkillSection /> 
      <ProjectCard/>
      </Container>
      
    </>
  );
};

export default Home;
