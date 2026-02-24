// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi"; // Install react-icons
// import { Link } from "react-router-dom";
// import SideMenu from "../SideMenu/SideMenu";
// import { app_logo } from "../../utils/data";
// import CheckoutSidebar from "../CheckoutSidebar/CheckoutSidebar";
// import BottomNav from "../BottomNav/BottomNav";
// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "Products", path: "/products" },
//   { name: "Shop", path: "/collections" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
//   { name: "Log in", path: "/login" },
//   { name: "Sign Up", path: "/signup" },
// ];
// const Navbar: React.FC = () => {
// const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
// const [openCheckout, setOpenCheckout] = useState<boolean>(false);
//   return (
//     <>
//       <nav className={styles.navbar}>
//         <div className={styles.navContainer}>
//           <div className={styles.logoContainer}>
//             <Link to="/">
//               <img src={app_logo} alt="" className={styles.logo} />
//             </Link>
//           </div>

//           <ul className={`${styles.navLinks}`}>
//             {navItems.map((item, index) => (
//               <li key={index} className={styles.navItem}>
//                 <Link to={item.path} className={styles.link}>
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Right Side Actions */}
//           <div className={styles.actions}>
//             {/* <button className={styles.signInBtn}>Sign In</button> */}

//             <div className={styles.iconGroup}>
//               <button className={styles.iconBtn} aria-label="Search">
//                 <FiSearch />
//               </button>
//               <button
//                 className={styles.iconBtn}
//                 aria-label="Cart"
//                 onClick={() => setOpenCheckout(true)}
//               >
//                 <FiShoppingCart />
//                 <span className={styles.cartBadge}>1</span>
//               </button>
//             </div>

//             {/* Hamburger Menu */}
//             <button
//               className={styles.hamburger}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <FiMenu className={styles.hamburgerIcon} />
//               ) : (
//                 <FiMenu className={styles.hamburgerIcon} />
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>
// <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
// <BottomNav
//   openCheckout={openCheckout}
//   setOpenCheckout={setOpenCheckout}
// />
// {openCheckout && (
//   <CheckoutSidebar
//     openCheckout={openCheckout}
//     setOpenCheckout={setOpenCheckout}
//   />
// )}
//     </>
//   );
// };

// export default Navbar;

import { useState } from "react";
import styles from "./Navbar.module.css";
import { IoBriefcaseOutline, IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { app_logo } from "../../utils/data";
import SideMenu from "../SideMenu/SideMenu";
import BottomNav from "../BottomNav/BottomNav";
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

            <button className={styles.iconBtn}>
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
