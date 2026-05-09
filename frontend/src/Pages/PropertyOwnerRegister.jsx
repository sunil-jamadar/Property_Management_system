import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login successful!");
      navigate("/dashboard");        // Change according to your route
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
                <h3 className="fw-bold">User Login</h3>
                <p className="text-muted">Login to your account</p>
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
                    <button type="submit" disabled={loading} className="btn btn-primary btn-lg">
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer p-3 text-center">
                Don't have an account?{" "}
                <button type="button" className="btn btn-link p-0" onClick={() => navigate("/register")}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;