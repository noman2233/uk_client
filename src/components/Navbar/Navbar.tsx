import { useState } from "react";
import styles from "./Navbar.module.css";
import { IoBriefcaseOutline, IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { app_logo, MENU_ITEMS } from "../../utils/data";
import SideMenu from "../SideMenu/SideMenu";
import CheckoutSidebar from "../CheckoutSidebar/CheckoutSidebar";
import { scrollToSection } from "../../scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo Image */}
          <div className={styles.logo}>
            <img src={app_logo} alt="Furniture Logo" />
          </div>

          {/* <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}> */}
          {/* <nav className={`${styles.nav}`}>
            {MENU_ITEMS.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`${styles.link} ${
                  item.label === "Home" ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault(); // prevent page jump
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
               
        
          </nav> */}
          <nav className={styles.nav}>
            {MENU_ITEMS.map((item, index) => {
              // Check if the item is a separate page or a scroll section
              const isAPage = item.path !== "/";

              if (isAPage) {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${styles.link} ${
                      location.pathname === item.path ? styles.active : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className={`${styles.link} ${
                    item.label === "Home" ? styles.active : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();

                    // If the user is NOT on the home page, go home first, then scroll
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => scrollToSection(item.id), 100);
                    } else {
                      scrollToSection(item.id);
                    }

                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
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
