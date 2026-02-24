 import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          CELEBRATING OVER 15 YEARS IN BUSINESS
          {/* CELEBRATING OVER <span className={styles.underline}>15 YEARS IN BUSINESS</span> */}
        </h2>
        
        <p className={styles.paragraph}>
          At NI Drip Central Electronics & Appliances, we’re proud to serve homes, 
          landlords, and property managers across Belfast with reliable, affordable 
          household appliances. Founded by Shawn Atkinson in 2025, the business 
          was built around one simple idea: to make it easy for people to get quality 
          appliances without the high retail markups or long delivery times.
        </p>

        <p className={styles.paragraph}>
          We supply new and professionally refurbished appliances from well-known brands, 
          all tested for performance and backed by friendly, local service you can count on. 
          Whether you need a fridge, cooker, or washing machine, we’ll get it delivered 
          to your door quickly and ready to use.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;