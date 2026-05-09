import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="auth-page d-flex align-items-center justify-content-center"
      style={{ padding: "28px 0" }}
    >
      <div className="container">
        {/* Background overlay for auth pages */}
        <div className="auth-bg-overlay" aria-hidden="true" />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-5">
            <div className="auth-card card shadow-lg border-0">
              <div className="auth-card-header p-4">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle gradient-bg d-flex align-items-center justify-content-center"
                    style={{ width: 46, height: 46 }}
                  >
                    <span className="text-white fw-bold">PH</span>
                  </div>
                  <div>
                    <div className="h4 mb-0 fw-bold text-gradient">PropertyHub</div>
                    <div className="text-muted small">Create your account</div>
                  </div>
                </div>
              </div>

              <div className="card-body p-4">
                {error && (
                  <div className="alert alert-danger py-2" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="regName" className="form-label">
                      Full name
                    </label>
                    <input
                      id="regName"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                      autoComplete="name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="regEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      id="regEmail"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="regPhone" className="form-label">
                      Phone (optional)
                    </label>
                    <input
                      id="regPhone"
                      type="tel"
                      name="phone"
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="regPassword" className="form-label">
                      Password
                    </label>
                    <input
                      id="regPassword"
                      type="password"
                      name="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="form-control"
                      autoComplete="new-password"
                    />
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg"
                    >
                      {loading ? "Creating Account..." : "Register"}
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <span className="text-muted">Already have an account?</span>{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0 text-primary fw-semibold"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center mt-3 text-muted small">
              Secure sign-in powered by your backend authentication.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

