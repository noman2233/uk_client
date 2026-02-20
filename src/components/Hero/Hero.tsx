import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        {/* Left Large Card */}
        <div className={styles.mainCard}>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-7-1_2048x.jpg?v=1703212093"
            alt="New Products"
            className={styles.heroImage}
          />
          <div className={styles.labelGroup}>
            <h2>New Products</h2>
            <Link to="/products" className={styles.shopBtn}>
              SHOP NOW <span></span>
            </Link>
          </div>
        </div>

        {/* Right Column (Stacked) */}
        <div className={styles.sideColumn}>
          {/* Top Side Card */}
          <div className={styles.sideCard}>
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-7-3_1080x.jpg?v=1703212093"
              alt="Laundry Basket"
              className={styles.heroImage}
            />
            <div className={styles.labelGroup}>
              <h3>Side Table</h3>
              <Link to="/products" className={styles.shopBtn}>
                SHOP NOW <span></span>
              </Link>
            </div>
          </div>

          {/* Bottom Side Card */}
          <div className={styles.sideCard}>
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-7-2_1080x.jpg?v=1703212093"
              alt="Side Table"
              className={styles.heroImage}
            />
            <div className={styles.labelGroup}>
              <h3>Laundry Basket</h3>
              <Link to="/products" className={styles.shopBtn}>
                SHOP NOW <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
