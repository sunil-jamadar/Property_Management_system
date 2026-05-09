import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`pt-5 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ 
        background: theme === "dark" 
          ? "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)"
          : "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)"
      }}
    >
      <div className="container">
        <div className="row g-4">

          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 animate-fade-in-left">
            <div className="d-flex align-items-center mb-3">
              <span className="me-2 fs-4 animate-float">🏢</span>
              <h4 className="fw-bold mb-0 text-gradient">PropertyHub</h4>
            </div>
            <p className="mt-3 opacity-75">
              PropertyHub helps property owners manage properties, tenants,
              rent payments, and maintenance requests efficiently in one
              digital platform.
            </p>

            {/* Social Icons */}
            <div className="mt-4">
              <span className="d-inline-block me-3">
                <a href="#" className="social-icon text-decoration-none fs-4 hover-scale">📘</a>
              </span>
              <span className="d-inline-block me-3">
                <a href="#" className="social-icon text-decoration-none fs-4 hover-scale">🐦</a>
              </span>
              <span className="d-inline-block me-3">
                <a href="#" className="social-icon text-decoration-none fs-4 hover-scale">📸</a>
              </span>
              <span className="d-inline-block">
                <a href="#" className="social-icon text-decoration-none fs-4 hover-scale">💼</a>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6 animate-fade-in delay-100">
            <h5 className="fw-bold mb-4">
              <span className="border-bottom border-3 border-primary pb-2">Quick Links</span>
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="text-decoration-none hover-lift d-inline-block" to="/">
                  <span className="me-2">🏠</span>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none hover-lift d-inline-block" to="/properties">
                  <span className="me-2">🏢</span>Properties
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none hover-lift d-inline-block" to="/about">
                  <span className="me-2">📋</span>About
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none hover-lift d-inline-block" to="/contact">
                  <span className="me-2">📞</span>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-3 col-6 animate-fade-in delay-200">
            <h5 className="fw-bold mb-4">
              <span className="border-bottom border-3 border-success pb-2">Services</span>
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2 hover-lift d-inline-block">📋 Property Listing</li>
              <li className="mb-2 hover-lift d-inline-block">👨‍💼 Tenant Management</li>
              <li className="mb-2 hover-lift d-inline-block">💰 Rent Collection</li>
              <li className="mb-2 hover-lift d-inline-block">🔧 Maintenance Tracking</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 animate-fade-in-right delay-300">
            <h5 className="fw-bold mb-4">
              <span className="border-bottom border-3 border-warning pb-2">Contact Us</span>
            </h5>
            <div className="mb-3">
              <span className="me-2">📍</span>
              <span>Maharashtra, India</span>
            </div>
            <div className="mb-3">
              <span className="me-2">📧</span>
              <a href="mailto:support@propertyhub.com" className="text-decoration-none hover-lift">
                support@propertyhub.com
              </a>
            </div>
            <div className="mb-3">
              <span className="me-2">📞</span>
              <a href="tel:+919876543210" className="text-decoration-none hover-lift">
                +91 98765 43210
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h6 className="fw-bold mb-2">Subscribe Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className={`form-control ${theme === "dark" ? "bg-dark border-secondary" : ""}`}
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary" type="button">
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`text-center mt-5 py-4 ${
          theme === "dark" ? "bg-black text-light" : "bg-primary text-white"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start mb-3 mb-md-0">
              <span className="opacity-75">
                © {currentYear} PropertyHub. All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-decoration-none me-3 hover-lift">Privacy Policy</a>
              <a href="#" className="text-decoration-none me-3 hover-lift">Terms of Service</a>
              <a href="#" className="text-decoration-none hover-lift">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
