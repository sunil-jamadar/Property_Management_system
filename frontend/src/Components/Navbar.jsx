import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  }, [theme]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-white"
      } shadow-sm transition-all ${scrolled ? "py-2" : "py-3"}`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center hover-scale text-decoration-none" to="/">
          <span className="me-2 animate-float" style={{ display: 'inline-block' }}>🏢</span>
          <span className="text-gradient">PropertyHub</span>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#propertyNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="propertyNavbar">

          {/* Menu Links */}
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive 
                    ? "nav-link fw-bold position-relative" 
                    : "nav-link position-relative"
                }
                style={({ isActive }) => isActive ? { color: '#4f46e5' } : {}}
              >
                <span className="hover-lift d-inline-block">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/properties"
                className={({ isActive }) =>
                  isActive 
                    ? "nav-link fw-bold position-relative" 
                    : "nav-link position-relative"
                }
                style={({ isActive }) => isActive ? { color: '#4f46e5' } : {}}
              >
                <span className="hover-lift d-inline-block">Properties</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive 
                    ? "nav-link fw-bold position-relative" 
                    : "nav-link position-relative"
                }
                style={({ isActive }) => isActive ? { color: '#4f46e5' } : {}}
              >
                <span className="hover-lift d-inline-block">About</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive 
                    ? "nav-link fw-bold position-relative" 
                    : "nav-link position-relative"
                }
                style={({ isActive }) => isActive ? { color: '#4f46e5' } : {}}
              >
                <span className="hover-lift d-inline-block">Contact</span>
              </NavLink>
            </li>

          </ul>

{/* Right Section */}
          <ul className="navbar-nav align-items-center">

            {/* Dark Mode Toggle */}
            <li className="nav-item me-3">
              <button
                className={`btn btn-sm px-3 py-2 rounded-pill ${
                  theme === "dark"
                    ? "btn-outline-light"
                    : "btn-outline-dark"
                }`}
                onClick={toggleTheme}
                style={{ transition: "all 0.3s ease" }}
              >
                {theme === "dark" ? (
                  <span>☀️ <small>Light</small></span>
                ) : (
                  <span>🌙 <small>Dark</small></span>
                )}
              </button>
            </li>

            {/* Login Button */}
            <li className="nav-item me-2">
              <NavLink
                to="/login"
                className="btn btn-outline-primary px-4 rounded-pill shadow-sm"
                style={{ transition: "all 0.3s ease" }}
              >
                <span className="me-1">🔑</span> Login
              </NavLink>
            </li>

            {/* Register Button */}
            <li className="nav-item">
              <NavLink
                to="/register"
                className="btn btn-primary px-4 rounded-pill shadow-sm"
                style={{ transition: "all 0.3s ease" }}
              >
                <span className="me-1">📝</span> Register
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
