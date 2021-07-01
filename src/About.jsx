import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img className="about__background" src="./darker.jpeg" alt="" />
      <div className="about__aboutMe">
        <img src="./profile-1.jpg" alt="" />

        <div className="about__info">
          <h1>About Me</h1>
          <p>
            Certified in the MERN stack with a passion for Frontend Development.
            Well-versed in various technologies including HTML, CSS, JavaScript,
            Node.js, Express.js, React.js, MongoDB and SQL. Looking for an
            opportunity to showcase my skills and create something meaningful.
          </p>
          <br />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
