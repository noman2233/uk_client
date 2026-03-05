import React from "react";
import styles from "./OrderSummary.module.css";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { LuLockOpen } from "react-icons/lu";
interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

 
const orderItems: OrderItem[] = [
  {
    id: "1",
    name: "Elara Velvet Sofa",
    quantity: 1,
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: "2",
    name: "Ember Oak Dining Table",
    quantity: 1,
    price: 849,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: "3",
    name: "Frost Pro Refrigerator",
    quantity: 1,
    price: 1549,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: "4",
    name: "AquaClean Dishwasher",
    quantity: 1,
    price: 599,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: "5",
    name: "Lumino Arc Floor Lamp",
    quantity: 2,
    price: 378,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
];

const OrderSummary: React.FC = () => {
  return (
    <div className={styles.summaryCardConainer}>
      <div className={styles.summaryCard}>
        <header className={styles.header}>
          <span className={styles.upperTitle}>SUMMARY</span>
          <h2 className={styles.mainTitle}>Order Details</h2>
        </header>

        <div className={styles.itemList}>
          {orderItems.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              <div className={styles.itemLeft}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.productThumb}
                />
                <div className={styles.itemMeta}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemQty}>×{item.quantity}</span>
                </div>
              </div>
              <span className={styles.itemPrice}>
                ${item.price.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.shippingProgress}>
          <div className={styles.progressHeader}>
            <span>🚀 Free shipping unlocked!</span>
            <span>100%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.fill}></div>
          </div>
        </div>

        <div className={styles.breakdown}>
          <div className={styles.calcRow}>
            <span>Subtotal</span>
            <span>$4,674</span>
          </div>
          <div className={styles.calcRow}>
            <span>Item Savings</span>
            <span className={styles.savings}>-$1,231</span>
          </div>
          <div className={styles.calcRow}>
            <span>Shipping</span>
            <span className={styles.freeText}>Free</span>
          </div>
        </div>

        <div className={styles.totalBox}>
          <div className={styles.totalLeft}>
            <span className={styles.totalLabel}>TOTAL</span>
            <span className={styles.taxLabel}>Tax included</span>
          </div>
          <div className={styles.totalRight}>
            <span className={styles.totalAmount}>$4,674</span>
            <span className={styles.totalSaved}>Total saved: $1,231</span>
          </div>
        </div>

        <button className={styles.checkoutBtn}>
          <PiShoppingCartSimpleLight size={20} /> Proceed to Checkout
        </button>

        <button className={styles.continueBtn}>← Continue Shopping</button>
        <div className={styles.securityInfo}>
          <LuLockOpen className={styles.lockIcon} />
          <span className={styles.secureText}>Secure Checkout</span>
          <p className={styles.cardBrand}>Visa</p>
          <p className={styles.cardBrand}>MC</p>
          <p className={styles.cardBrand}>AMC</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
