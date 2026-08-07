import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h3>👋 Hello, I'm</h3>

        <h1>Roshini</h1>

        <h2>Full Stack Developer</h2>

        <p className="skills">
          Java | React | Node.js | Express | MongoDB
        </p>

        <p>
          I build responsive and user-friendly web applications
          using modern technologies.
        </p>

        <a href="/resume.pdf" download>
          <button className="resume-btn">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;