import { NavLink } from "react-router-dom";
import "./Header.css";    
import { useState } from "react"; 
import Logo from '../assets/CandleNoBGpng.png';

export default function Header() {
  const [open, setOpen] = useState(false); 
     
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo/Brand */}
        <div className="brand-section">
          <NavLink to="/" className="brand-link">
            <div className="brand-icon">
            <img
              src={Logo}
              alt="Candle Logo"
              style={{ width: "48px", height: "48px" }}
            />
          </div>
            <span className="brand-text">Candlelight</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink 
            to="/map" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
            Map
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Resources
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            Blog
          </NavLink>
          <NavLink 
            to="/UpcomingEvents" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Events
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact
          </NavLink>
        </nav>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <svg className={`hamburger-icon ${open ? 'open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {open && (
        <>
          <div className="mobile-overlay" onClick={() => setOpen(false)} />
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <div className="mobile-nav-header">
                <span className="mobile-nav-title">Navigation</span>
                <button 
                  onClick={() => setOpen(false)}
                  className="mobile-close-button"
                  aria-label="Close menu"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <div className="mobile-nav-links">
                <NavLink 
                  to="/map" 
                  onClick={() => setOpen(false)}
                  className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  Interactive Map
                </NavLink>
                <NavLink 
                  to="/resources" 
                  onClick={() => setOpen(false)}
                  className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  Support Resources
                </NavLink>
                <NavLink 
                  to="/blog" 
                  onClick={() => setOpen(false)}
                  className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                  </svg>
                  Blog & Articles
                </NavLink>
                <NavLink 
                  to="/UpcomingEvents" 
                  onClick={() => setOpen(false)}
                  className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Upcoming Events
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={() => setOpen(false)}
                  className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Contact Us
                </NavLink>
              </div>


            </div>
          </div>
        </>
      )}
    </header>
  );
}