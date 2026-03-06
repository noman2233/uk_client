import { dark_logo } from "../../../utils/data";
import styles from "./Sidebar.module.css";
 import { 
  MdDashboard, MdShoppingBag, MdDownload, 
  MdLocationOn, MdPayment, MdPerson, 
  MdFavorite, MdLogout 
} from "react-icons/md";
const sidebarLinks = [
  { name: "Dashboard", icon: <MdDashboard />, active: false },
  { name: "Orders", icon: <MdShoppingBag />, active: false },
  { name: "Downloads", icon: <MdDownload />, active: false },
  { name: "Addresses", icon: <MdLocationOn />, active: false },
  { name: "Payment Method", icon: <MdPayment />, active: false },
  { name: "Account Details", icon: <MdPerson />, active: true },
  { name: "Wishlist", icon: <MdFavorite />, active: false },
  { name: "LogOut", icon: <MdLogout />, active: false },
];
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img src={dark_logo} alt="NI DRIP CENTRAL" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        {sidebarLinks.map((link) => (
          <button
            key={link.name}
            className={`${styles.navItem} ${
              link.active ? styles.activeNav : ""
            }`}
          >
            <span className={styles.icon}>{link.icon}</span>
            {link.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
