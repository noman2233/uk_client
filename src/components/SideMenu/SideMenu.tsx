import React from "react"; // Add this line
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import styles from "./newsidemenu.module.css";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { colored_logo } from "../../utils/data";

interface SideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  userName?: string;
}
const SideMenu: React.FC<SideMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  // const menuItems = [

  const menuItemsNew = [
    { icon: <IoIosArrowForward />, label: "Home", path: "/" },
    { icon: <IoIosArrowForward />, label: "Shop", path: "/" },
    { icon: <IoIosArrowForward />, label: "Products", path: "/" },
    { icon: <IoIosArrowForward />, label: "Contact", path: "/" },
    { icon: <IoIosArrowForward />, label: "FAQ's", path: "/" },
    { icon: <IoIosArrowForward />, label: "About", path: "/" },
    { icon: <IoIosArrowForward />, label: "Login", path: "/" },
    { icon: <IoIosArrowForward />, label: "SignUp", path: "/" },
  ];

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
              <img src={colored_logo} alt="User Avatar" className={styles.avatar} />
            </div>
            {/* <div className={styles.userText}>
              <span className={styles.greeting}>Hello,</span>
              <h3 className={styles.name}>{userName}</h3>
            </div> */}
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
          {menuItemsNew.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className={styles.menuBox}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.icon}>{item.icon}</span>
              </div>
            </Link>
          ))}
          <div className={styles.footer}>
            <Link to="/login">
              <button
                className={styles.logoutBtn}
                onClick={() => console.log("Logout and clear JWT")}
              >
                <span>Login</span>
                <CgLogIn />
              </button>
            </Link>
          </div>
        </nav>

        {/* <div className={styles.footer}>
          <button
            className={styles.logoutBtn}
            onClick={() => console.log("Logout and clear JWT")}
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div> */}
      </motion.div>
    </>
  );
};

export default SideMenu;
