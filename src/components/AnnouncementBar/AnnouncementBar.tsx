import React from 'react';
import styles from './AnnouncementBar.module.css';
import { FiZap, FiMapPin } from 'react-icons/fi';

const AnnouncementBar: React.FC = () => {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.container}>
        {/* Left Side: Offers & Location */}
        <div className={styles.leftSection}>
          <div className={styles.item}>
            <FiZap className={styles.icon} />
            <span>First Five Order on 30% Discount</span>
          </div>
          <div className={styles.divider}>|</div>
          <div className={styles.item}>
            <FiMapPin className={styles.icon} />
            <span>Our Store Location</span>
          </div>
        </div>

        {/* Center: Main Sale Promo */}
        <div className={styles.promoSection}>
          Mid-season Sale up to <span className={styles.highlight}>70% Off.</span> 
          <a href="/shop" className={styles.shopLink}>Shop Now !</a>
        </div>

        {/* Right Side: Utility Links */}
        <div className={styles.rightSection}>
          <a href="/deals">Today's Deal</a>
          <div className={styles.divider}>|</div>
          <a href="/faq">FAQ</a>
          <div className={styles.divider}>|</div>
          <a href="/certification">Get Certification</a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;