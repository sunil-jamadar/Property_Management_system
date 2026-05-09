import React from 'react'
import Carousel from '../Components/Carousel'
import Features from '../Components/Features';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <Carousel />
      <Features />
      
      {/* CTA Section */}
      <section className="py-5 bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-white mb-3">Ready to Manage Your Properties?</h2>
              <p className="text-white-50 mb-0">Join thousands of property owners who trust PropertyHub for their management needs.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/register" className="btn btn-light btn-lg rounded-pill px-5 shadow-lg">
                Get Started <span className="ms-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-lg-3">
              <div className="p-4">
                <h1 className="display-4 fw-bold text-primary">500+</h1>
                <p className="text-muted mb-0">Properties</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="p-4">
                <h1 className="display-4 fw-bold text-success">1000+</h1>
                <p className="text-muted mb-0">Tenants</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="p-4">
                <h1 className="display-4 fw-bold text-warning">$2M+</h1>
                <p className="text-muted mb-0">Revenue</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="p-4">
                <h1 className="display-4 fw-bold text-info">98%</h1>
                <p className="text-muted mb-0">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
