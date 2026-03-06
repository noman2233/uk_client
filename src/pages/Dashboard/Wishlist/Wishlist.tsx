import styles from "./Wishlist.module.css";

const dummyWishlist = [
  {
    id: 1,
    name: "Premium Velvet Sofa",
    price: "$899.00",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Minimalist Oak Desk",
    price: "$450.00",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Gold Finish Floor Lamp",
    price: "$125.00",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=100&q=80",
  },
];

const Wishlist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.wishlistTable}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>Products</th>
                <th>Unit Price</th>
                <th>Stock Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyWishlist.map((item) => (
                <tr key={item.id} className={styles.tableRow}>
                  <td className={styles.productCell}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.productImg}
                    />
                    <span className={styles.productName}>{item.name}</span>
                  </td>
                  <td>
                    <strong>{item.price}</strong>
                  </td>
                  <td>
                    <span className={styles.stockStatus}>{item.status}</span>
                  </td>
                  <td>
                    <button className={styles.actionBtn}>Add to Cart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
