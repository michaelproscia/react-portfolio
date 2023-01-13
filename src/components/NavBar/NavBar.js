import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav justify-content-end gap-3 me-5">
      <NavLink className="nav-link" to="/">
        About
      </NavLink>
      <NavLink className="nav-link" to="projects">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="work">
        Work
      </NavLink>
      <NavLink className="nav-link" to="contact">
        Contact
      </NavLink>
      <a className="nav-link" href="#">
        Resume
      </a>
    </nav>
  );
}
