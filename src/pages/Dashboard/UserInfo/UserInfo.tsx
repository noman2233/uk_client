 import styles from './UserInfo.module.css';

const UserInfo = ({ userName = "John" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        
        {/* Welcome Message */}
        <div className={styles.welcomeBox}>
          <h2 className={styles.welcomeTitle}>Hello {userName}!</h2>
          <p className={styles.welcomeText}>
            From your account dashboard you can view your <strong>recent orders</strong>, 
            manage your <strong>shipping</strong> and <strong>account details</strong>
          </p>
        </div>

        {/* Stats Section */}
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.totalOrders}`}>
            <span className={styles.statValue}>24</span>
            <span className={styles.statLabel}>Total Orders</span>
          </div>

          <div className={`${styles.statCard} ${styles.pendingOrders}`}>
            <span className={styles.statValue}>3</span>
            <span className={styles.statLabel}>Pending Orders</span>
          </div>

          <div className={`${styles.statCard} ${styles.wishlist}`}>
            <span className={styles.statValue}>8</span>
            <span className={styles.statLabel}>Wishlist Items</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserInfo;