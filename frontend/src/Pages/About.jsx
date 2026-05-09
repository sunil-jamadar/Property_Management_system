import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill mb-3">
          ℹ️ About Us
        </span>
        <h1 className="fw-bold display-4">Property Management System</h1>
        <p className="lead text-muted">
          A smart solution for managing properties, tenants, and payments efficiently.
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
            alt="Property Management"
            className="img-fluid rounded-4 shadow-lg"
            style={{ transition: "transform 0.3s ease" }}
          />
        </div>

        <div className="col-lg-6">
          <h3 className="fw-bold mb-4">Our Mission</h3>
          <p className="text-muted">
            The Property Management System is designed to simplify property
            administration by providing a centralized platform for managing
            property listings, tenant information, rent payments, and
            maintenance requests.
          </p>

          <p className="text-muted">
            Our goal is to help property owners and managers efficiently
            organize their properties while improving communication with
            tenants.
          </p>

          <div className="d-flex gap-3 mt-4">
            <Link to="/register" className="btn btn-primary rounded-pill px-4">
              Get Started
            </Link>
            <Link to="/contact" className="btn btn-outline-primary rounded-pill px-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-center fw-bold mb-4">Key Features</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 h-100" style={{ borderRadius: "20px" }}>
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                  <span className="fs-2">🏠</span>
                </div>
                <h5 className="card-title fw-bold">Property Listings</h5>
                <p className="card-text text-muted">
                  Manage and track all properties in one place with detailed
                  information and availability status.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100" style={{ borderRadius: "20px" }}>
              <div className="card-body text-center p-4">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                  <span className="fs-2">👨‍💼</span>
                </div>
                <h5 className="card-title fw-bold">Tenant Management</h5>
                <p className="card-text text-muted">
                  Maintain tenant records including personal details, rental
                  agreements, and communication history.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100" style={{ borderRadius: "20px" }}>
              <div className="card-body text-center p-4">
                <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                  <span className="fs-2">💳</span>
                </div>
                <h5 className="card-title fw-bold">Online Payments</h5>
                <p className="card-text text-muted">
                  Track rent payments, generate invoices, and maintain
                  financial records easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="fw-bold mb-4">Our Team</h2>
        <p className="text-muted mb-5">
          We are a dedicated team of professionals committed to making property management easy.
        </p>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card shadow border-0" style={{ borderRadius: "20px" }}>
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-opacity-10 p-4 rounded-circle d-inline-flex mb-3">
                  <span className="fs-1">👨‍💻</span>
                </div>
                <h5 className="card-title fw-bold">Project Manager</h5>
                <p className="text-muted">Responsible for planning and managing the project.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0" style={{ borderRadius: "20px" }}>
              <div className="card-body text-center p-4">
                <div className="bg-success bg-opacity-10 p-4 rounded-circle d-inline-flex mb-3">
                  <span className="fs-1">👩‍💻</span>
                </div>
                <h5 className="card-title fw-bold">Frontend Developer</h5>
                <p className="text-muted">Designs user interface using React and Bootstrap.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0" style={{ borderRadius: "20px" }}>
              <div className="card-body text-center p-4">
                <div className="bg-warning bg-opacity-10 p-4 rounded-circle d-inline-flex mb-3">
                  <span className="fs-1">👨‍💼</span>
                </div>
                <h5 className="card-title fw-bold">Backend Developer</h5>
                <p className="text-muted">Handles server, database, and API integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
