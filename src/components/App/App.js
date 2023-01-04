import "./App.css";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
