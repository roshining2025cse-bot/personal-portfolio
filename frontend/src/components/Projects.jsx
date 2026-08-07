import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Personal Portfolio</h3>
        <p>A responsive portfolio website built using React.</p>
      </div>

      <div className="project-card">
        <h3>Student Management System</h3>
        <p>A Java application for managing student records.</p>
      </div>

      <div className="project-card">
        <h3>Weather App</h3>
        <p>A React app that displays live weather information.</p>
      </div>
    </section>
  );
}

export default Projects;