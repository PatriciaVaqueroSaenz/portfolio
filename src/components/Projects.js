import React from "react";
import ProjectList from './ProjectList';
import projects from "../services/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">&#60;projects&#62;</h2>
      <ProjectList data={projects} />
    </section>
    
  );
  
};

export default Projects;
