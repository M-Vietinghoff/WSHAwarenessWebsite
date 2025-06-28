import { NavLink } from "react-router-dom";
import "./Header.css";                       // ← see CSS below

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <NavLink to="/">Harassment&nbsp;Map</NavLink>
      </h1>

      <nav>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact&nbsp;Us</NavLink>
        <NavLink to="/events">Upcoming&nbsp;Events</NavLink>
      </nav>
    </header>
  );
}
