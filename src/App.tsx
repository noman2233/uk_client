import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ResetPassword from "./pages/auth/ResetPassword";
import ProductDeatil from "./pages/ProductDetail/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
 import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/About/About";
import TermsAndConditions from "./pages/LegalPges/TermsAndConditions";
import PrivacyPolicy from "./pages/LegalPges/PrivacyPolicy";
import ShippingPolicy from "./pages/LegalPges/ShippingPolicy";
import Returnpolicy from "./pages/LegalPges/Returnpolicy";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFound from "./pages/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/>
      {/* <AnnouncementBar /> */}
      <Navbar />
      {/* <BottomNav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shiping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<Returnpolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
