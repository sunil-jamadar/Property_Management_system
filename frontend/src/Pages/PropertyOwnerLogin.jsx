import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PropertyOwnerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/property-owners/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Property Owner Login successful!");
      navigate("/property-owner/dashboard");     // Your owner dashboard route
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center" style={{ padding: "28px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-5">
            <div className="auth-card card shadow-lg border-0">
              <div className="auth-card-header p-4 text-center">
                <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                  <div className="rounded-circle gradient-bg d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                    <span className="text-white fw-bold">PO</span>
                  </div>
                </div>
                <h3 className="fw-bold text-gradient">Property Owner Login</h3>
                <p className="text-muted">Access your owner dashboard</p>
              </div>

              <div className="card-body p-4">
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" disabled={loading} className="btn btn-success btn-lg">
                      {loading ? "Logging in..." : "Login as Property Owner"}
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer p-3 text-center">
                Don't have an account?{" "}
                <button type="button" className="btn btn-link p-0" onClick={() => navigate("/property-owner/register")}>
                  Register as Owner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOwnerLogin;