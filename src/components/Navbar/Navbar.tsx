import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi"; // Install react-icons
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          {/* <h1 className={styles.logoText}>NI DRIP CENTRAL</h1>
          <span className={styles.logoSubtext}>FURNITURE</span> */}
          <img
            src="https://img.freepik.com/free-vector/minimalist-furniture-logo-design_23-2148461951.jpg"
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
            {isMenuOpen ? <FiMenu /> : <FiMenu />}
          </button>
          {isMenuOpen && <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
