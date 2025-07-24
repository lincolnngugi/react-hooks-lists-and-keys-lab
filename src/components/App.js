import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import { user, projects } from "./data/data";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
