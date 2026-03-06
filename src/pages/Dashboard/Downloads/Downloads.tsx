import styles from "./Downloads.module.css";

const Downloads = () => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Downloads</h1>

        <div className={styles.emptyState}>
          <p className={styles.emptyText}>Your downloads will appear here.</p>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
