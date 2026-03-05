import React from 'react';
import styles from './WhyChooseUs.module.css';
import { BsTruck } from 'react-icons/bs';
import { LuPoundSterling } from 'react-icons/lu';
import { FaHandshake } from 'react-icons/fa';
import { BiMapPin } from 'react-icons/bi';
 
interface ChoiceCard {
  icon: React.ReactNode;
  title: string;
}

const WhyChooseUs: React.FC = () => {
  const choices: ChoiceCard[] = [
    {
      icon: <BsTruck className={styles.icon} />,
      title: "Fast Local Delivery",
    },
    {
      icon: <LuPoundSterling className={styles.icon} />,
      title: "Affordable Prices on Big Brands",
    },
    {
      icon: <FaHandshake className={styles.icon} />,
      title: "Friendly, Reliable Service",
    },
    {
      icon: <BiMapPin className={styles.icon} />,
      title: "Belfast-Based & Trusted by Locals",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Background Overlay Section */}
      <div className={styles.heroBackground}>
        <div className={styles.overlay}>
          <h2 className={styles.mainTitle}>
            Why Choose NI DRIP CENTRAL ELECTRONICS & APPLIANCES
          </h2>
          <p className={styles.subtitle}>
            Founded by Shawn Atkinson in 2025, we've grown into Belfast's trusted 
            local source for affordable, reliable appliances, both new and refurbished.
          </p>
        </div>
      </div>

      {/* Overlapping Cards Section */}
      <div className={styles.cardWrapper}>
        <div className={styles.cardGrid}>
          {choices.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;