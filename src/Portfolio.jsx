import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./Portfolio.css";
import Project from "./Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("projects").onSnapshot((snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          projectName: doc.data().projectName,
          projectUrl: doc.data().projectUrl,
          projectImg: doc.data().projectImg,
        }))
      );
    });
  }, []);

  return (
    <div className="portfolio">
      <img className="portfolio__background" src="./background.jpg" />

      <div className="portfolio__icons">
        <a target="_blank" href="https://github.com/bgraczyk13">
          <img src="https://img.icons8.com/nolan/2x/github.png" alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/robert-graczyk-623b9b208/"
        >
          <img src="https://img.icons8.com/dusk/2x/linkedin.png" alt="" />
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1iHkMLAh7hjgkFbpvrhsmAyhLXfQuq_QjVP2MVKCxKXk/edit?usp=sharing"
        >
          <img src="https://img.icons8.com/nolan/2x/resume.png" alt="" />
        </a>
      </div>

      <div className="portfolio__projects">
        {projects.map((project) => (
          <div className="portfolio__project">
            <Project
              projectName={project.projectName}
              projectImg={project.projectImg}
              projectUrl={project.projectUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
