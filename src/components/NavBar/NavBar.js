import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav justify-content-end gap-3 me-5">
      <NavLink className="text-decoration-none nav-link active" to="/">
        About
      </NavLink>
      <NavLink className="text-decoration-none nav-link" to="projects">
        Projects
      </NavLink>
      <NavLink className="text-decoration-none nav-link" to="work">
        Work
      </NavLink>
      <NavLink className="text-decoration-none nav-link" to="contact">
        Contact
      </NavLink>
      <a className="text-decoration-none nav-link" href="#">
        Resume
      </a>
    </nav>
  );
}
