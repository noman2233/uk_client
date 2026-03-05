import React from "react";
import styles from "./Commitment.module.css";
import { FaDollarSign } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BsHeadphones } from "react-icons/bs";
// Using Lucide icons as a placeholder for the icons in your image

/**
 * Interface for the feature items to ensure type safety
 * when mapping through the bottom cards.
 */
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Commitment: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <FaDollarSign size={32} color="white" />,
      title: "Clear Pricing",
      desc: "No hidden costs; what you see is what you pay.",
    },
    {
      icon: <FiFileText size={32} color="white" />,
      title: "Honest Descriptions",
      desc: "Transparent product data is to help you decide confidently.",
    },
    {
      icon: <BsHeadphones size={32} color="white" />,
      title: "Reliable After-Sales Support",
      desc: "We're here even after your purchase.",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Top Section: Text & Image */}
        <div className={styles.topGrid}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Our Commitment</h2>
            <p className={styles.bodyText}>
              At NI DRIP CENTRAL ELECTRONICS & APPLIANCES, our commitment goes
              beyond simply selling appliances. We're focused on building
              long-term trust with our customers by delivering products and
              services that make every day life easier. Every appliance we
              offer—whether brand new or refurbished—is carefully selected with
              performance, reliability, and value in mind. Our refurbished
              products are thoroughly checked to ensure they meet our quality
              standards, so customers can shop confidently without paying
              premium prices.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnsbIPkszakcPwU_XkiECb9syBlsj5Rjuzw&s"
              alt="Luxury bedroom furniture set"
              className={styles.image}
            />
          </div>
        </div>

        {/* Bottom Section: Feature Cards */}
        <div className={styles.featureGrid}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
