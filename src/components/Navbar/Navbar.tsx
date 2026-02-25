 
import { useState } from "react";
import styles from "./Navbar.module.css";
import { IoBriefcaseOutline, IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { app_logo } from "../../utils/data";
import SideMenu from "../SideMenu/SideMenu";
 import CheckoutSidebar from "../CheckoutSidebar/CheckoutSidebar";

const menuItems = [
  "Home",
  "Products",
  "Shop",
  "About Us",
  "Contact Us",
  "FAQs",
  "Log In",
  "Signup",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo Image */}
          <div className={styles.logo}>
            <img src={app_logo} alt="Furniture Logo" />
          </div>

          {/* <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}> */}
          <nav className={`${styles.nav}`}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`${styles.link} ${
                  item === "Home" ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className={styles.right}>
            <button className={styles.iconBtn}>
              <IoSearchOutline className={styles.navbarIcon} />
            </button>

            <button
              className={styles.iconBtn}
              onClick={() => setOpenCheckout(true)}
            >
              <IoBriefcaseOutline className={styles.navbarIcon} />
              <span className={styles.badge}>1</span>
            </button>

            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className={styles.mobileMenuIcon} />
              ) : (
                <HiMenu className={styles.mobileMenuIcon} />
              )}
            </button>
          </div>
        </div>
      </header>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <BottomNav
        openCheckout={openCheckout}
        setOpenCheckout={setOpenCheckout}
      /> */}

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
