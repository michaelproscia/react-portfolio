import "./App.css";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </>
  );
}

export default App;
