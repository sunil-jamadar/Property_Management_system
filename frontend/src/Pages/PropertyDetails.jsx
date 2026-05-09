import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function PropertyDetails() {
  const { theme } = useTheme();
  const { id } = useParams();

  const properties = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Mumbai",
      price: 12000000,
      beds: 4,
      baths: 3,
      description:
        "Beautiful luxury villa with sea view, private garden and modern architecture.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",

      owner: {
        name: "Rahul Sharma",
        phone: "+91 9876543210",
        email: "rahul@example.com"
      }
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Pune",
      price: 4500000,
      beds: 3,
      baths: 2,
      description:
        "Modern apartment in the city center with parking and gym access.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",

      owner: {
        name: "Priya Patel",
        phone: "+91 8765432109",
        email: "priya@example.com"
      }
    }
  ];

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h2 className="text-center mt-5">Property Not Found</h2>;
  }

  return (
    <div className={`py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      <div className="container">

        {/* Property Image */}
        <div className="mb-4">
          <img
            src={property.image}
            className="img-fluid rounded shadow"
            alt={property.title}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="row">

          {/* Property Info */}
          <div className="col-lg-8">
            <h2 className="fw-bold">{property.title}</h2>
            <p className="text-muted">📍 {property.location}</p>

            <h4 className="text-success">
              ₹{property.price.toLocaleString()}
            </h4>

            <div className="d-flex gap-4 my-3">
              <span>🛏 {property.beds} Bedrooms</span>
              <span>🛁 {property.baths} Bathrooms</span>
            </div>

            <h5 className="mt-4">Property Description</h5>
            <p>{property.description}</p>
          </div>

          {/* Owner Card */}
          <div className="col-lg-4">
            <div className={`card shadow ${theme === "dark" ? "bg-secondary text-light" : ""}`}>
              <div className="card-body">

                <h5 className="fw-bold mb-3">Owner Details</h5>

                <p><strong>Name:</strong> {property.owner.name}</p>
                <p><strong>Phone:</strong> {property.owner.phone}</p>
                <p><strong>Email:</strong> {property.owner.email}</p>

                <button className="btn btn-primary w-100 mt-3">
                  Contact Owner
                </button>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;


