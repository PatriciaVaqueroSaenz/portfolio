import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Main = () => {
  return (
    <main>
      <Nav />
      <Home id='home'/>
      <About id='about'/>
      <Projects id='projects'/>
    </main>
  );
};

export default Main;
