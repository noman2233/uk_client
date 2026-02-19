import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import your components

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          {/* 404 Page */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
