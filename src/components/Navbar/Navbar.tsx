import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi"; // Install react-icons
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          {/* <h1 className={styles.logoText}>NI DRIP CENTRAL</h1>
          <span className={styles.logoSubtext}>FURNITURE</span> */}
          <img
            src="https://nidripcentralelectronics.co.uk/wp-content/uploads/2025/08/887693ED-AB70-4CCC-9BA4-EC73CEA3F8C6-1-2048x686.png"
            alt=""
            className={styles.logo}
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
          </li>

          {/* Mobile Only Actions */}
          <li className={styles.mobileOnly}>
            <button className={styles.signInBtnMobile}>Sign In</button>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className={styles.actions}>
          <button className={styles.signInBtn}>Sign In</button>

          <div className={styles.iconGroup}>
            <button className={styles.iconBtn} aria-label="Search">
              <FiSearch />
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              <FiShoppingCart />
              <span className={styles.cartBadge}>1</span>
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
