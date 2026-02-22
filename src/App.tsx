import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ResetPassword from "./pages/auth/ResetPasswordPage/ResetPassword";
import ProductDeatil from "./pages/ProductDetail/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/About/About";
import TermsAndConditions from "./pages/LegalPges/TermsAndConditions";
import PrivacyPolicy from "./pages/LegalPges/PrivacyPolicy";
import ShippingPolicy from "./pages/LegalPges/ShippingPolicy";

const App: React.FC = () => {
  return (
    <Router>
      <AnnouncementBar />
      <Navbar />
      {/* <BottomNav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shiping-policy" element={<ShippingPolicy />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
