import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="work">Work</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <a href="#">Resume</a>
    </nav>
  );
}
