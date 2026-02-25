import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

// Using arrays for the map method as requested
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Shipping Policy", path: "/shipping" },
  { name: "Refund Policy", path: "/refund" },
  { name: "Company Details", path: "/details" },
  { name: "Affiliate Program", path: "/affiliate" },
];

const latestForSale = [
  { name: "Sofa", path: "/category/sofa" },
  { name: "Bed", path: "/category/bed" },
  { name: "Furniture", path: "/category/furniture" },
  { name: "Chair", path: "/category/chair" },
  { name: "Dining", path: "/category/dining" },
];
import {
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaEbay,
} from "react-icons/fa6"; // Use fa6 for the latest X logo
import { FiGlobe, FiMail } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const socialIcons = [
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@nidripfurniture",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/nidripfurniture",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    url: "https://twitter.com/nidripfurniture",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/nidripfurniture",
  },
  {
    name: "eBay",
    icon: <FaEbay />,
    url: "https://www.ebay.co.uk/usr/nidripfurniture",
  },
];

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {/* Logo Section */}
            <div className={styles.logoSection}>
              <img
                src="https://i.ibb.co/qYkhbhq7/Whats-App-Image-2026-02-24-at-1-52-46-PM-removebg-preview.png"
                alt="NI Drip Central Furniture"
                className={styles.logo}
              />
            </div>

            {/* Quick Links */}
            <div className={styles.column}>
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className={styles.link}>
                      <span>
                        <BsArrowRight className={styles.arrowForward} />
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest for Sale */}
            <div className={styles.column}>
              <h3>Latest for Sale</h3>
              <ul>
                {latestForSale.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <span>
                        <BsArrowRight className={styles.arrowForward} />
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className={styles.column}>
              <h3>Contact</h3>
              <address className={styles.address}>
                <div className={styles.addressIcon}>
                  <FiGlobe className={styles.iconContact} />
                  <p>
                    Office 1405 92 Castle Street, Belfast BT1 1HE Northern
                    Ireland
                  </p>
                </div>
                <div className={styles.addressIcon}>
                  <FiMail className={styles.iconMail} />
                  <p className={styles.email}>contact@nidripfurniture.co.uk</p>
                </div>
              </address>

              <div className={styles.socialGrid}>
                {/* You can replace these placeholders with actual FontAwesome or SVG icons */}
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialBox}
                    aria-label={social.name}
                  >
                    {/* Rendering the icon component directly from data */}
                    <span className={styles.iconFooter}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.bottomSection}>
        <p>
          Copyright @ {date} <span>NI DRIP CENTRAL FURNITURE</span> | All Rights
          Reserved.
        </p>
        {/* <div className={styles.legalLinks}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
