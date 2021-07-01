import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ active }) => {
  return (
    <div className="header">
      {active === "home" && (
        <img
          className="header__image"
          src="https://img.icons8.com/ultraviolet/2x/home.png"
          alt=""
        />
      )}

      {active === "portfolio" && (
        <img
          className="header__image"
          src="https://img.icons8.com/fluent/2x/portfolio.png"
          alt=""
        />
      )}

      {active === "about" && (
        <img
          className="header__image"
          src="https://img.icons8.com/offices/2x/about.png"
          alt=""
        />
      )}

      {active === "contact" && (
        <img
          className="header__image"
          src="https://img.icons8.com/office/2x/contact-card.png"
          alt=""
        />
      )}
      <ul>
        <Link to="/">
          <li className={active === "home" && "header__home--active"}>Home</li>
        </Link>

        <Link to="/portfolio">
          <li className={active === "portfolio" && "header__portfolio--active"}>
            Portfolio
          </li>
        </Link>

        <Link to="/about">
          <li className={active === "about" && "header__about--active"}>
            About
          </li>
        </Link>

        <Link to="/contact">
          <li className={active === "contact" && "header__contact--active"}>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
