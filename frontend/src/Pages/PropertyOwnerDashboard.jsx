import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PropertyOwnerDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    baths: "",
    description: "",
    images: [""],
    amenities: [""],
    status: "Available"
  });

  // Fetch Properties
  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/properties", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProperties(res.data);
    } catch (err) {
      setError("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/property-owner/login");
  };

  // Add Property
  const handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/properties", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Property added successfully!");
      setShowAddModal(false);
      fetchProperties();
      // Reset form
      setFormData({
        title: "", location: "", price: "", beds: "", baths: "",
        description: "", images: [""], amenities: [""], status: "Available"
      });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add property");
    }
  };

  const deleteProperty = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;
    
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/properties/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProperties();
    } catch (err) {
      alert("Failed to delete property");
    }
  };

  if (loading) return <div className="text-center mt-5"><h4>Loading properties...</h4></div>;

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">My Properties</h2>
        <div>
          <button className="btn btn-success me-3" onClick={() => setShowAddModal(true)}>
            + Add New Property
          </button>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {properties.length === 0 ? (
          <div className="col-12 text-center py-5">
            <h4>No properties found</h4>
            <p>Add your first property to get started</p>
          </div>
        ) : (
          properties.map((property) => (
            <div className="col-md-6 col-lg-4 mb-4" key={property._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={property.images?.[0] || "https://via.placeholder.com/400x250"}
                  className="card-img-top"
                  alt={property.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="text-muted mb-1">{property.location}</p>
                  <h5 className="text-success">₹ {property.price.toLocaleString('en-IN')}</h5>
                  
                  <div className="d-flex gap-3 my-2">
                    <span><strong>{property.beds}</strong> Beds</span>
                    <span><strong>{property.baths}</strong> Baths</span>
                  </div>

                  <p className="card-text text-truncate" style={{ maxHeight: "60px" }}>
                    {property.description}
                  </p>

                  <div className="badge bg-info mb-2">{property.status}</div>
                </div>

                <div className="card-footer bg-white d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm flex-grow-1">
                    Edit
                  </button>
                  <button 
                    className="btn btn-outline-danger btn-sm flex-grow-1"
                    onClick={() => deleteProperty(property._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Property</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddProperty}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Title</label>
                      <input type="text" className="form-control" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Location</label>
                      <input type="text" className="form-control" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label>Price (₹)</label>
                      <input type="number" className="form-control" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Beds</label>
                      <input type="number" className="form-control" value={formData.beds} onChange={(e) => setFormData({...formData, beds: e.target.value})} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Baths</label>
                      <input type="number" className="form-control" value={formData.baths} onChange={(e) => setFormData({...formData, baths: e.target.value})} required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control" rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
                  </div>

                  <div className="mb-3">
                    <label>Image URL (Main)</label>
                    <input type="text" className="form-control" value={formData.images[0]} onChange={(e) => setFormData({...formData, images: [e.target.value]})} />
                  </div>

                  <div className="mb-3">
                    <label>Status</label>
                    <select className="form-select" value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                      <option value="Available">Available</option>
                      <option value="Rented">Rented</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Add Property</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyOwnerDashboard;