import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        {/* Left Side: Text Content */}
        <div className={styles.textColumn}>
          <h1 className={styles.mainTitle}>
            Affordable Home Furniture, <br />
            <span className={styles.highlight}>Delivered Fast Across Belfast</span>
          </h1>
          
          <p className={styles.subText}>
            NI DRIP CENTRAL Furniture offers budget-friendly <br />
            Furniture across Belfast. Shop fridges, washers, cookers, and more— <br />
            new or refurbished. Same or next day delivery available
          </p>

          <button className={styles.shopBtn}>Shop Now</button>

          <div className={styles.ratingContainer}>
            <span className={styles.ratingNumber}>5.0</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.starBox}>
                  <FaStar size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image with Architectural Mask */}
        <div className={styles.imageColumn}>
          <div className={styles.imageMask}>
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
              alt="Modern Home Interior" 
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;