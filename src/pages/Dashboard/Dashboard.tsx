import React, { useState } from "react"; 
import styles from "./Dashbaord.module.css";
import AccountDetails from "./AccountDetails/AccountDetails";
import AddressSection from "./AddressCard/AddressCard";
import OrdersCard from "./OrdersCard/OrdersCard";
import UserInfo from "./UserInfo/UserInfo";
import Downloads from "./Downloads/Downloads";
import Wishlist from "./Wishlist/Wishlist";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import {
  MdDashboard,
  MdShoppingBag,
  MdDownload,
  MdLocationOn,
  MdPayment,
  MdPerson,
  MdFavorite,
  MdLogout,
} from "react-icons/md";
import { dark_logo } from "../../utils/data";
const sidebarLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    active: false,
    compnent: <UserInfo />,
  },
  {
    name: "Orders",
    icon: <MdShoppingBag />,
    active: false,
    compnent: <OrdersCard />,
  },
  {
    name: "Downloads",
    icon: <MdDownload />,
    active: false,
    compnent: <Downloads />,
  },
  {
    name: "Addresses",
    icon: <MdLocationOn />,
    active: false,
    compnent: <AddressSection />,
  },
  {
    name: "Payment Method",
    icon: <MdPayment />,
    active: false,
    compnent: <PaymentMethod />,
  },
  {
    name: "Account Details",
    icon: <MdPerson />,
    active: true,
    compnent: <AccountDetails />,
  },
  {
    name: "Wishlist",
    icon: <MdFavorite />,
    active: false,
    compnent: <Wishlist />,
  },
  { name: "LogOut", icon: <MdLogout />, active: false, compnent: <UserInfo /> },
];
 


const Dashboard: React.FC = () => {
  // 1. Initialize state with the index of the "Account Details" (index 5)
  // or whatever you want as the default view.
  const [activeIndex, setActiveIndex] = useState(5);

  const handleNavClick = (index: number) => {
    // If it's the Logout button, you'd handle JWT removal here
    if (sidebarLinks[index].name === "LogOut") {
      console.log("Removing JWT and logging out...");
      // localStorage.removeItem('token');
      return;
    }
    setActiveIndex(index);
  };

  // 2. Identify the component to render based on state
  const ActiveComponent = sidebarLinks[activeIndex].compnent;

  return (
    <div className={styles.pageWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.logoSection}>
          <img src={dark_logo} alt="NI DRIP CENTRAL" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          {sidebarLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(index)}
              className={`${styles.navItem} ${
                activeIndex === index ? styles.activeNav : ""
              }`}
            >
              <span className={styles.icon}>{link.icon}</span>
              {link.name}
            </button>
          ))}
        </nav>
      </aside>

        {ActiveComponent}
    </div>
  );
};

export default Dashboard;
