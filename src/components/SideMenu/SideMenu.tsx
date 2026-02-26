import React from "react"; // Add this line
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import styles from "./newsidemenu.module.css";
import { motion } from "framer-motion";
import { CgLogIn } from "react-icons/cg";
import { dark_logo, MENU_ITEMS } from "../../utils/data";
import { scrollToSection } from "../../scroll";

interface SideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  userName?: string;
}
const SideMenu: React.FC<SideMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <motion.div
        className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatarWrapper}>
              <img
                src={dark_logo}
                alt="User Avatar"
                className={styles.avatar}
              />
            </div>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX className={styles.icon} />
          </button>
        </div>

        {/* Navigation */}
        <nav className={styles.navLinks}>
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={styles.navItem}
              // onClick={() => setIsMenuOpen(false)}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
            >
              <div className={styles.menuBox}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.icon}>{<item.icon />}</span>
              </div>
            </Link>
          ))}
          <div className={styles.footer}>
            <Link to="/login">
              <button
                className={styles.logoutBtn}
                onClick={() => console.log("Logout and clear JWT")}
              >
                Login
                <CgLogIn />
              </button>
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default SideMenu;
