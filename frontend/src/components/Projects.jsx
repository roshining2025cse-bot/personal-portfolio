import { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://personal-portfolio-ddxo.onrender.com/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Projects;