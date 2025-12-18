
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { CourseHome } from "./pages/CourseHome";
import  CourseEnquiry  from "./pages/CourseEnquiry";

import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminLogin } from "./pages/AdminLogin";
// import { AdminSignup } from "./pages/AdminSignup";


function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string) => {
    navigate(`/${page === "home" ? "" : page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentPage = location.pathname.replace("/", "") || "home";
  const showHeaderFooter = !["login", "signup"].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {showHeaderFooter && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<CourseHome onNavigate={handleNavigate} />} />
          <Route path="/services" element={<Services onNavigate={handleNavigate} />} />
          <Route path="/pricing" element={<Pricing onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact onNavigate={handleNavigate} />} />
          <Route path="/courseHome" element={<CourseHome onNavigate={handleNavigate} />} />
          <Route path="/CourseEnquiry" element={<CourseEnquiry onNavigate={handleNavigate} />} />
          <Route path="/login" element={<AdminLogin onNavigate={handleNavigate} />} />
       <Route path="/admindashboard" element={<AdminDashboard onNavigate={handleNavigate} />} />
         
              {/*<Route path="/signup" element={<AdminSignup />} /> */}
        </Routes>
      </main>

      {showHeaderFooter && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default function App() {
  return (
    
      <AppWrapper />
    
  );
}
