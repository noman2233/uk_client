import React from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  FaXTwitter,
  FaInstagram,
  FaLocationPin,
  FaMailchimp,
  FaPhone,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.logoLink}>
              <div className={styles.logo}>
                {/* <div className={styles.logoIcon}>//</div> */}

                <img
                  src="https://nidripcentralelectronics.co.uk/wp-content/uploads/2025/08/887693ED-AB70-4CCC-9BA4-EC73CEA3F8C6-1-2048x686.png"
                  className={styles.logo}
                />
                {/* <span className={styles.logoText}>Graphy</span> */}
              </div>
            </Link>
            {/* Social links usually remain <a> because they go to external sites */}
            <div className={styles.socialLinks}>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter className={styles.iconFooter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className={styles.iconFooter} />
              </a>
            </div>
            <p className={styles.companyInfo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sapiente, voluptas corrupti voluptates quasi expedita! Soluta id
              assumenda nihil dicta.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <ul>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/integrations">Integrations</Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Help</Link>
                </li>
                <li>
                  <Link to="/contact">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/contact">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Contact us</h4>
              <ul>
                <div className={styles.footerContact}>
                  <FaLocationPin className={styles.iconFooter} />
                  <p>Office 1405 92 Castle Street, Ireland</p>
                </div>
                <div className={styles.footerContact}>
                  <FaMailchimp className={styles.iconFooter} />
                  <p>contact@career.co.uk</p>
                </div>
                <div className={styles.footerContact}>
                  <FaPhone className={styles.iconFooter} />
                  <p>+9203246773140</p>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© 2026 Graphy. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
