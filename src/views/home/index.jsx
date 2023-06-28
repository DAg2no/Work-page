import React from "react";
import HeaderSection from "../../components/header";
import SkillSection from "../../components/skill"
import Project from "../../components/project-section"
import "./index.css"

const Home = () => {
  return (
    <>
      <HeaderSection />
      <SkillSection /> 
      <Project/>
    </>
  );
};

export default Home;
