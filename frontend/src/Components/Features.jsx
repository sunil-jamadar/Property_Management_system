// import React from "react";
// import { useTheme } from "../Context/ThemeContext";

// function Features() {
//   const { theme } = useTheme();

//   const features = [
//     {
//       icon: "🏢",
//       title: "Property Management",
//       desc: "Add, update and manage multiple properties easily from a single dashboard."
//     },
//     {
//       icon: "👨‍💼",
//       title: "Tenant Management",
//       desc: "Store tenant details, agreements and track their rental history."
//     },
//     {
//       icon: "💳",
//       title: "Rent Payments",
//       desc: "Track rent payments, generate invoices and manage financial records."
//     },
//     {
//       icon: "🛠",
//       title: "Maintenance Requests",
//       desc: "Tenants can raise maintenance requests and owners can track repairs."
//     },
//     {
//       icon: "📊",
//       title: "Reports & Analytics",
//       desc: "View reports of rent collection, occupancy rate and property performance."
//     },
//     {
//       icon: "🔐",
//       title: "Secure System",
//       desc: "User authentication and secure data storage for property information."
//     }
//   ];

//   return (
//     <div className={`py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light"}`}>
//       <div className="container">

//         {/* Title */}
//         <div className="text-center mb-5">
//           <h2 className="fw-bold">System Features</h2>
//           <p className="text-muted">
//             Powerful tools to simplify property management
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="row g-4">

//           {features.map((feature, index) => (
//             <div className="col-md-4" key={index}>
//               <div
//                 className={`card h-100 shadow-sm border-0 ${
//                   theme === "dark" ? "bg-secondary text-light" : ""
//                 }`}
//               >
//                 <div className="card-body text-center p-4">

//                   <div style={{ fontSize: "40px" }}>
//                     {feature.icon}
//                   </div>

//                   <h5 className="mt-3 fw-bold">
//                     {feature.title}
//                   </h5>

//                   <p className="text-muted">
//                     {feature.desc}
//                   </p>

//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Features;



import React from "react";
import { useTheme } from "../Context/ThemeContext";

function Features() {
  const { theme } = useTheme();

  const features = [
    {
      icon: "🏢",
      title: "Property Management",
      desc: "Add, update and manage multiple properties easily from a single dashboard.",
      color: "primary"
    },
    {
      icon: "👨‍💼",
      title: "Tenant Management",
      desc: "Store tenant details, agreements and track their rental history.",
      color: "success"
    },
    {
      icon: "💳",
      title: "Rent Payments",
      desc: "Track rent payments, generate invoices and manage financial records.",
      color: "warning"
    },
    {
      icon: "🛠",
      title: "Maintenance Requests",
      desc: "Tenants can raise maintenance requests and owners can track repairs.",
      color: "info"
    },
    {
      icon: "📊",
      title: "Reports & Analytics",
      desc: "View reports of rent collection, occupancy rate and property performance.",
      color: "danger"
    },
    {
      icon: "🔐",
      title: "Secure System",
      desc: "User authentication and secure data storage for property information.",
      color: "secondary"
    }
  ];

  return (
    <section className={`py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill mb-3 animate-fade-in">
            ✨ Features
          </span>
          <h2 className="fw-bold display-6 animate-fade-in-down">System Features</h2>
          <p className="text-muted lead animate-fade-in delay-200">
            Powerful tools to simplify property management
          </p>
          <div className="mx-auto" style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #4f46e5, #10b981)', borderRadius: '2px' }}></div>
        </div>

        {/* Feature Grid */}
        <div className="row g-4">

          {features.map((feature, index) => (
            <div 
              className="col-lg-4 col-md-6" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`p-4 rounded-4 shadow-sm h-100 feature-card ${
                  theme === "dark" ? "bg-dark border border-secondary" : "bg-white"
                }`}
                style={{ 
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >

                {/* Icon */}
                <div 
                  className="feature-icon mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, var(--bs-${feature.color}) 0%, var(--bs-${feature.color})-subtle 100%)`,
                    fontSize: '35px'
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h5 className="fw-bold mb-2 mt-3">
                  {feature.title}
                </h5>

                {/* Description */}
                <p className="text-muted mb-0">
                  {feature.desc}
                </p>

                {/* Learn More Link */}
                <div className="mt-3">
                  <a href="#" className={`text-${feature.color} text-decoration-none fw-semibold hover-lift d-inline-flex align-items-center`}>
                    Learn more <span className="ms-1">→</span>
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-4">
          <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg hover-scale animate-pulse">
            Explore All Features 🚀
          </button>
        </div>

      </div>
    </section>
  );
}

export default Features;
