import React from "react";

function Contact() {
  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill mb-3">
          📞 Contact Us
        </span>
        <h1 className="fw-bold display-4">Get In Touch</h1>
        <p className="lead text-muted">
          We'd love to hear from you. Get in touch with us for any queries or support.
        </p>
      </div>

      <div className="row g-5">
        <div className="col-md-5">
          <div className="card shadow border-0 h-100" style={{ borderRadius: "20px" }}>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                  <span className="fs-4">📍</span>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Address</h6>
                  <p className="text-muted mb-0">123 Main Street, City, Maharashtra, India</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                  <span className="fs-4">📞</span>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Phone</h6>
                  <p className="text-muted mb-0">+91 98765 43210</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                  <span className="fs-4">✉️</span>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="text-muted mb-0">support@propertymanagement.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
                  <span className="fs-4">🕒</span>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Working Hours</h6>
                  <p className="text-muted mb-0">Mon - Fri : 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card shadow border-0" style={{ borderRadius: "20px" }}>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Send a Message</h4>

              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      required
                      style={{ borderRadius: "12px" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      required
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                    style={{ borderRadius: "12px" }}
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    style={{ borderRadius: "12px" }}
                  ></textarea>
                </div>

                <button className="btn btn-primary btn-lg w-100 rounded-pill shadow-lg">
                  Send Message <span className="ms-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-bold text-center mb-4">Our Location</h4>

        <div className="card shadow border-0" style={{ borderRadius: "20px", overflow: "hidden" }}>
          <div className="ratio ratio-21x9">
            <iframe
              src="https://www.google.com/maps?q=maharashtra&output=embed"
              title="map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
