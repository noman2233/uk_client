 import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Order? Need a<br /> Furniture today?
          </h2>
          <p className={styles.subtitle}>
            Give us a quick call or shop online, and we'll confirm your order and arrange 
            fast delivery at a time that suits you.
          </p>
          <button className={styles.orderButton} onClick={() => console.log('Redirecting to shop...')}>
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;