import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}              // ✅ key must be project.id
            name={project.name}
            about={project.about}
            technologies={project.technologies || []}  // safe fallback
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
