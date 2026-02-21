import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ResetPassword from "./pages/auth/ResetPasswordPage/ResetPassword";
 
 
const App: React.FC = () => {
  return (
    <Router>
      {/* <AnnouncementBar /> */}
      <Navbar />
      {/* <BottomNav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
