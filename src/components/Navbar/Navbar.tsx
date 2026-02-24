import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi"; // Install react-icons
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import { app_logo } from "../../utils/data";
import CheckoutSidebar from "../CheckoutSidebar/CheckoutSidebar";
import BottomNav from "../BottomNav/BottomNav";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Collections", path: "/collections" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img src={app_logo} alt="" className={styles.logo} />
            </Link>
          </div>

          <ul className={`${styles.navLinks}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={styles.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className={styles.actions}>
            <button className={styles.signInBtn}>Sign In</button>

            <div className={styles.iconGroup}>
              <button className={styles.iconBtn} aria-label="Search">
                <FiSearch />
              </button>
              <button
                className={styles.iconBtn}
                aria-label="Cart"
                onClick={() => setOpenCheckout(true)}
              >
                <FiShoppingCart />
                <span className={styles.cartBadge}>1</span>
              </button>
            </div>

            {/* Hamburger Menu */}
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiMenu className={styles.hamburgerIcon} />
              ) : (
                <FiMenu className={styles.hamburgerIcon} />
              )}
            </button>
          </div>
        </div>
      </nav>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <BottomNav
        openCheckout={openCheckout}
        setOpenCheckout={setOpenCheckout}
      />
      {openCheckout && (
        <CheckoutSidebar
          openCheckout={openCheckout}
          setOpenCheckout={setOpenCheckout}
        />
      )}
    </>
  );
};

export default Navbar;
