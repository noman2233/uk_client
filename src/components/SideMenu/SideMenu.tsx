import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
  FiX,
  FiPhone,
  FiInfo,
} from "react-icons/fi";
import styles from "./SideMenu.module.css";
import { AiFillProduct } from "react-icons/ai";

interface SideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  userName?: string;
}
const SideMenu: React.FC<SideMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  userName = "Adiwara Bestari",
}) => {
  const menuItems = [
    { icon: <FiHome />, label: "Home", path: "/" },
    { icon: <FiUser />, label: "Shop", path: "/profile" },
    { icon: <AiFillProduct />, label: "Products", path: "/history" },
    { icon: <FiInfo />, label: "About", path: "/author" },
    { icon: <FiPhone />, label: "Contact", path: "/notifications" },
    { icon: <FiHelpCircle />, label: "Help", path: "/help" },
    { icon: <FiSettings />, label: "Setting", path: "/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatarWrapper}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                alt="User Avatar"
                className={styles.avatar}
              />
            </div>
            <div className={styles.userText}>
              <span className={styles.greeting}>Hello,</span>
              <h3 className={styles.name}>{userName}</h3>
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
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer / Logout */}
        <div className={styles.footer}>
          <button
            className={styles.logoutBtn}
            onClick={() => console.log("Logout and clear JWT")}
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
