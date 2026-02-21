import React from "react";
import { FiHome, FiShoppingBag, FiSearch } from "react-icons/fi";
import { MdOutlineStorefront } from "react-icons/md";
import styles from "./BottomNav.module.css";

// Define the shape of our navigation items
interface NavItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  badgeCount: number;
  path: string;
}

interface BottomNavProps {
  openCheckout: boolean;
  setOpenCheckout: (open: boolean) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({setOpenCheckout}) => {
  const navData: NavItem[] = [
    { id: 1, label: "Home", icon: <FiHome />, badgeCount: 0, path: "/" },
    {
      id: 2,
      label: "Shop",
      icon: <MdOutlineStorefront />,
      badgeCount: 0,
      path: "/shop",
    },
    // {
    //   id: 3,
    //   label: "Wishlist",
    //   icon: <FiHeart />,
    //   badgeCount: 0,
    //   path: "/wishlist",
    // },    
    {
      id: 3,
      label: "Search",
      icon: <FiSearch />,
      badgeCount: 0,
      path: "/wishlist",
    },
    {
      id: 4,
      label: "Cart",
      icon: <FiShoppingBag />,
      badgeCount: 1,
      path: "/cart",
    },
  ];

  return (
    <nav className={styles.bottomNav}>
      {navData.map((item) => (
        <div key={item.id} className={styles.navItem}>
          <div className={styles.iconWrapper}
          
          onClick={() => {
            if (item.label === "Cart") {
              setOpenCheckout(true);
            }
          }}>
            <span className={styles.icon}>{item.icon}</span>
            {/* Only show the badge if the count is 0 or more (per your image) */}
            {item?.badgeCount > 0 && (
              <span className={styles.badge}>{item.badgeCount}</span>
            )}
          </div>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;


