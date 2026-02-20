import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi"; // Install react-icons
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import { app_logo } from "../../utils/data";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={app_logo} alt="" className={styles.logo} />
          </Link>
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
            <Link to="collections" className={styles.link}>
              Collections
            </Link>
          </li>{" "}
          <li>
            <Link to="/blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>{" "}
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
          {isMenuOpen && (
            <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
