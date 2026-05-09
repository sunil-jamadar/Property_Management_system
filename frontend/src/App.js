
// import Navbar from './Components/Navbar';

// function App() {
//   return (
//    <Navbar />
//   );
// }

// export default App;






import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Properties from "./Pages/Properties"
import Home from "./Pages/Home";
import PropertyDetails from "./Pages/PropertyDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./Components/Layout";

import PropertyOwnerRegister from "./Pages/PropertyOwnerRegister"
import PropertyOwnerLogin from "./Pages/PropertyOwnerLogin"
import PropertyOwnerDashboard from "./Pages/PropertyOwnerDashboard"



function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/propertyOwnerRegister" element={<PropertyOwnerRegister />} />

          <Route path="/property-owner/login" element={<PropertyOwnerLogin />} />
          <Route path="/property-owner/dashboard" element={<PropertyOwnerDashboard />} />
        </Routes>
      </Layout>
    </Router>

  )
}

export default App