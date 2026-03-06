import styles from "./PaymentMethod.module.css";

const PaymentMethod = () => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Payment Method Here</h1>

        <div className={styles.emptyState}>
          <p className={styles.emptyText}>
            Your Payment Method will appear here.
          </p>
        </div>
      <button type="submit" className={styles.saveBtn}>
        Add Payment Method
      </button>
      </section>
    </div>
  );
};

export default PaymentMethod;
