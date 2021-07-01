import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <img className="background__image" src="./hero-img.jpeg" alt="" />
      <div className="body__about">
        <img
          src="https://t4.ftcdn.net/jpg/02/57/21/85/240_F_257218529_1YcEGvXfjoDjIrDWbsPXC6g5bDLYLtFD.jpg"
          alt=""
        />

        <div className="body__info">
          <h1>I am Robert Graczyk</h1>
          <p>Full-Stack Web Developer</p>
        </div>
      </div>

      <div className="body__portfolio">
        <Link to="/portfolio">
          <button>View Portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
