// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         formData
//       );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data));

//       alert("Login successful!");
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="auth-page d-flex align-items-center justify-content-center"
//       style={{ padding: "28px 0" }}
//     >
//       <div className="container">
//         {/* Background overlay for auth pages */}
//         <div className="auth-bg-overlay" aria-hidden="true" />
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-10 col-lg-5">
//             <div className="auth-card card shadow-lg border-0">
//               <div className="auth-card-header p-4">
//                 <div className="d-flex align-items-center gap-3">
//                   <div
//                     className="rounded-circle gradient-bg d-flex align-items-center justify-content-center"
//                     style={{ width: 46, height: 46 }}
//                   >
//                     <span className="text-white fw-bold">PH</span>
//                   </div>
//                   <div>
//                     <div className="h4 mb-0 fw-bold text-gradient">PropertyHub</div>
//                     <div className="text-muted small">Welcome back</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card-body p-4">
//                 {error && (
//                   <div className="alert alert-danger py-2" role="alert">
//                     {error}
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="loginEmail" className="form-label">
//                       Email address
//                     </label>
//                     <input
//                       id="loginEmail"
//                       type="email"
//                       name="email"
//                       placeholder="you@example.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="form-control"
//                       autoComplete="email"
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="loginPassword" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       id="loginPassword"
//                       type="password"
//                       name="password"
//                       placeholder="Your password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                       className="form-control"
//                       autoComplete="current-password"
//                     />
//                   </div>

//                   <div className="d-grid">
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="btn btn-primary btn-lg"
//                     >
//                       {loading ? "Logging in..." : "Login"}
//                     </button>
//                   </div>

//                   <div className="text-center mt-3">
//                     <span className="text-muted">Don’t have an account?</span>{" "}
//                     <button
//                       type="button"
//                       className="btn btn-link p-0 text-primary fw-semibold"
//                       onClick={() => navigate("/register")}
//                     >
//                       Register
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="text-center mt-3 text-muted small">
//               By continuing, you agree to our Terms & Privacy.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  // Email Validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      // Set default axios header for future requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

      alert("Login successful!");
      navigate("/");
    } catch (err) {
      setApiError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
      style={{ padding: "20px 0" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card shadow-lg border-0">
              {/* Header */}
              <div className="card-header bg-white py-4 border-0 text-center">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    }}
                  >
                    <span className="text-white fw-bold fs-4">PH</span>
                  </div>
                  <div>
                    <h3 className="mb-0 fw-bold text-primary">PropertyHub</h3>
                    <p className="text-muted mb-0 small">Welcome back</p>
                  </div>
                </div>
              </div>

              <div className="card-body p-4 p-md-5">
                {apiError && (
                  <div className="alert alert-danger" role="alert">
                    {apiError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        ✉️
                      </span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={loading}
                        autoComplete="email"
                      />
                    </div>
                    {touched.email && errors.email && (
                      <div className="invalid-feedback d-block">{errors.email}</div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-medium">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        🔒
                      </span>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={loading}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={loading}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    {touched.password && errors.password && (
                      <div className="invalid-feedback d-block">{errors.password}</div>
                    )}
                  </div>

                  {/* Forgot Password */}
                  <div className="d-flex justify-content-end mb-3">
                    <button
                      type="button"
                      className="btn btn-link text-primary p-0"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg fw-semibold"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Signing In...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>

                  {/* Register Link */}
                  <div className="text-center">
                    <span className="text-muted">Don't have an account? </span>
                    <button
                      type="button"
                      className="btn btn-link p-0 fw-semibold text-primary"
                      onClick={() => navigate("/register")}
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer bg-white border-0 text-center py-3">
                <small className="text-muted">
                  By continuing, you agree to our Terms & Privacy Policy
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;