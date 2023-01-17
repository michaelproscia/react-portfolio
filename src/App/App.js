import "./App.css";
import NavBar from "../components/NavBar/NavBar";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Projects from "../components/Projects/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
