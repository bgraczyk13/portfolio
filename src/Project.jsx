import React from "react";
import "./Project.css";

const Project = ({ projectName, projectImg, projectUrl }) => {
  return (
    <a href={projectUrl} target="_blank">
      <div className="project">
        <div className="project__top">
          <span>{projectName}</span>
        </div>

        <div className="project__bottom">
          <img src={projectImg} alt="" />
        </div>
      </div>
    </a>
  );
};

export default Project;
