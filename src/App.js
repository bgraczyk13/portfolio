import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Body from "./Body";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/portfolio">
            <Header active="portfolio" />
            <Portfolio />
          </Route>

          <Route path="/about">
            <Header active="about" />
            <About />
          </Route>

          <Route path="/contact">
            <Header active="contact" />
            <Contact />
          </Route>

          <Route path="/">
            <Header active="home" />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
