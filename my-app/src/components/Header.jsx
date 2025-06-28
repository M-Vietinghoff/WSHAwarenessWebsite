import { NavLink } from "react-router-dom";
import "./Header.css";                       // ← see CSS below

export default function Header() {
  return (

    <header className="bg-gray-900 text-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-16">
        {/* Site title / logo */}
        <h1 className="text-xl font-semibold mr-6">
          <NavLink to="/">Harassment Map</NavLink>
        </h1>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-1">
          <NavLink to="/map"       className={({isActive})=>`${linkStyle} ${isActive && active}`}>Map</NavLink>
          <NavLink to="/resources" className={({isActive})=>`${linkStyle} ${isActive && active}`}>Resources</NavLink>
          <NavLink to="/blog"      className={({isActive})=>`${linkStyle} ${isActive && active}`}>Blog</NavLink>
          <NavLink to="/UpcomingEvents"      className={({isActive})=>`${linkStyle} ${isActive && active}`}>UpcomingEvents</NavLink>
          <NavLink to="/contact"   className={({isActive})=>`${linkStyle} ${isActive && active}`}>Contact Us</NavLink>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none"
        >
          {/* 2-line burger; replace with an icon if you like */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile dropdown  */}
      {open && (
        <div className="md:hidden bg-gray-800 px-2 pb-3">
          <NavLink onClick={()=>setOpen(false)} to="/map"       className={({isActive})=>`${linkStyle} ${isActive && active}`}>Map</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/resources" className={({isActive})=>`${linkStyle} ${isActive && active}`}>Resources</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/blog"      className={({isActive})=>`${linkStyle} ${isActive && active}`}>Blog</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/UpcomingEvents"       className={({isActive})=>`${linkStyle} ${isActive && active}`}>Upcoming Events</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/contact"   className={({isActive})=>`${linkStyle} ${isActive && active}`}>Contact Us</NavLink>
        </div>
      )}
    </header>
  );
}
