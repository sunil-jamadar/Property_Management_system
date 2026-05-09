import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function Carousel() {
  const { theme } = useTheme();

  return (
    <div
      id="propertyCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#propertyCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#propertyCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#propertyCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="5000">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600"
              className="d-block w-100"
              style={{ height: "600px", objectFit: "cover" }}
              alt="Luxury Property"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}></div>
          </div>

          <div className="carousel-caption d-none d-md-block animate-fade-in-up">
            <div className="mb-3">
              <span className="badge bg-primary px-3 py-2 rounded-pill">🏠 Premium Property</span>
            </div>
            <h2 className="fw-bold display-5 animate-fade-in">Manage Properties Easily</h2>
            <p className="lead mb-4">Track tenants, rent, and maintenance from one dashboard.</p>
            <Link to="/properties" className="btn btn-primary btn-lg px-4 py-2 rounded-pill shadow-lg hover-scale">
              View Properties →
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="5000">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600"
              className="d-block w-100"
              style={{ height: "600px", objectFit: "cover" }}
              alt="Modern Apartment"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}></div>
          </div>

          <div className="carousel-caption d-none d-md-block animate-fade-in-up">
            <div className="mb-3">
              <span className="badge bg-success px-3 py-2 rounded-pill">👨‍💼 Tenant Management</span>
            </div>
            <h2 className="fw-bold display-5">Smart Tenant Management</h2>
            <p className="lead mb-4">Keep records of tenants, payments, and agreements.</p>
            <Link to="/contact" className="btn btn-success btn-lg px-4 py-2 rounded-pill shadow-lg hover-scale">
              Add Tenant +
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" data-bs-interval="5000">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
              className="d-block w-100"
              style={{ height: "600px", objectFit: "cover" }}
              alt="Modern House"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}></div>
          </div>

          <div className="carousel-caption d-none d-md-block animate-fade-in-up">
            <div className="mb-3">
              <span className="badge bg-warning px-3 py-2 rounded-pill text-dark">💰 Payment Tracking</span>
            </div>
            <h2 className="fw-bold display-5">Track Rent Payments</h2>
            <p className="lead mb-4">Monitor rent collection and payment history easily.</p>
            <button className="btn btn-warning btn-lg px-4 py-2 rounded-pill shadow-lg hover-scale">
              View Reports 📊
            </button>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#propertyCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle p-3" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#propertyCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle p-3" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
