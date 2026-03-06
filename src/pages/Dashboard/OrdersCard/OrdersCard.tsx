 

import styles from "./OrdersCard.module.css";

const dummyOrders = [
  {
    id: "#ORD-7721",
    date: "March 01, 2026",
    status: "completed",
    total: "$1,200.00",
  },
  {
    id: "#ORD-8832",
    date: "Feb 24, 2026",
    status: "processing",
    total: "$450.00",
  },
  {
    id: "#ORD-9910",
    date: "Jan 15, 2026",
    status: "cancelled",
    total: "$89.00",
  },
];

const OrdersCard = () => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Orders</h1>
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>Your orders will appear here.</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.map((order) => (
                <tr key={order.id}>
                  <td style={{ fontWeight: "600" }}>{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.total}</td>
                  <td>
                    <button className={styles.viewBtn}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OrdersCard;
