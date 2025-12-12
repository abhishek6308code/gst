// import { useState } from 'react';
// // import { AuthProvider } from './contexts/AuthContext';
// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import { Home } from './pages/Home';
// import { Services } from './pages/Services';
// import { Pricing } from './pages/Pricing';
// import { About } from './pages/About';
// import { Contact } from './pages/Contact';
// import { Course } from './pages/Course' ;
// import { AdminDashboard } from './pages/AdminDashboard' ;
// import { AdminLogin } from './pages/AdminLogin' ;
// import { AdminSignup } from './pages/AdminSignup' ;
// import CourseEnquiry from './pages/CourseEnquiry' ;


// type Page = 'home' | 'services' | 'pricing' | 'course' | 'about' | 'contact' |'CourseEnquiry' | 'admindashboard' | 'login' | 'signup';

// function App() {
//   const [currentPage, setCurrentPage] = useState<Page>('home');

//   const handleNavigate = (page: string) => {
//     setCurrentPage(page as Page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home onNavigate={handleNavigate} />;
//       case 'services':
//         return <Services onNavigate={handleNavigate} />;
//       case 'course':
//         return <Course onNavigate={handleNavigate} />;
//       case 'pricing':
//         return <Pricing onNavigate={handleNavigate} />;
//       case 'about':
//         return <About onNavigate={handleNavigate} />;
//       case 'contact':
//         return <Contact onNavigate={handleNavigate} />;
//       case 'CourseEnquiry':
//         return <CourseEnquiry onNavigate={handleNavigate} />;
//       case 'admindashboard':
//         return <AdminDashboard onNavigate={handleNavigate} />;
//       case 'login':
//         return <AdminLogin onNavigate={handleNavigate}/>;
//       case 'signup':
//         return <AdminSignup />;
    
//       default:
//         return <Home onNavigate={handleNavigate} />;
//     }
//   };

//   const showHeaderFooter = !['login', 'signup'].includes(currentPage);

//   return (
//     // <AuthProvider>
//       <div className="min-h-screen bg-white flex flex-col">
//         {showHeaderFooter && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
//         <main className="flex-grow">{renderPage()}</main>
//         {showHeaderFooter && <Footer onNavigate={handleNavigate} />}
//       </div>
//     // </AuthProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Course } from "./pages/Course";
import CourseEnquiry from "./pages/CourseEnquiry";

import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminSignup } from "./pages/AdminSignup";


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
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/services" element={<Services onNavigate={handleNavigate} />} />
          <Route path="/pricing" element={<Pricing onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact onNavigate={handleNavigate} />} />
          <Route path="/course" element={<Course onNavigate={handleNavigate} />} />
          <Route path="/CourseEnquiry" element={<CourseEnquiry onNavigate={handleNavigate} />} />

          <Route path="/admindashboard" element={<AdminDashboard onNavigate={handleNavigate} />} />
          <Route path="/login" element={<AdminLogin onNavigate={handleNavigate} />} />
          <Route path="/signup" element={<AdminSignup />} />
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
