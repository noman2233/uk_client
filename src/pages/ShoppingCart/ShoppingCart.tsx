import React, { useState } from "react";
import styles from "./ShoppingCart.module.css";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
 import { MdDiscount } from "react-icons/md";
// types.ts
interface CartProduct {
  id: string;
  name: string;
  category: "Furniture" | "Appliance" | "Lighting";
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity: number;
  inStock: boolean;
  tag?: string;
}

interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
}

const FEATURES_DATA: ServiceFeature[] = [
  {
    id: 1,
    title: 'Free Delivery',
    description: 'On orders over $1,200',
    iconUrl: 'https://img.icons8.com/?size=160&id=JLdAnWscYCuC&format=png', // Replace with your image paths
  },
  {
    id: 2,
    title: '30-Day Returns',
    description: 'No questions asked',
    iconUrl: 'https://img.icons8.com/?size=160&id=z9amKpCOuyQW&format=png',
  },
  {
    id: 3,
    title: '2-Year Warranty',
    description: 'On all products',
    iconUrl: 'https://img.icons8.com/?size=100&id=a50V7BSbqsBH&format=png',
  },
];

const CART_DATA: CartProduct[] = [
  {
    id: "1",
    name: "Elara Velvet Sofa",
    category: "Furniture",
    description: "3-Seater · Slate Grey · Linen Weave",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKmXzlfnrIUddbpA52NN5aYIdu5CqOMpMFA&s", // Replace with your assets
    price: 1299,
    originalPrice: 1799,
    quantity: 1,
    inStock: true,
    tag: "Bestseller",
  },
 
  {
    id: "1",
    name: "Elara Velvet Sofa",
    category: "Appliance",
    description: "3-Seater · Slate Grey · Linen Weave",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKmXzlfnrIUddbpA52NN5aYIdu5CqOMpMFA&s", // Replace with your assets
    price: 1299,
    originalPrice: 1799,
    quantity: 1,
    inStock: true,
    tag: "Bestseller",
  },
  {
    id: "1",
    name: "Elara Velvet Sofa",
    category: "Furniture",
    description: "3-Seater · Slate Grey · Linen Weave",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKmXzlfnrIUddbpA52NN5aYIdu5CqOMpMFA&s", // Replace with your assets
    price: 1299,
    originalPrice: 1799,
    quantity: 1,
    inStock: true,
    tag: "Bestseller",
  },
  // ... Add other items from the image here
];
const ShoppingCart: React.FC = () => {
  const [items, setItems] = useState<CartProduct[]>(CART_DATA);
  const [activeFilter, setActiveFilter] = useState("All Items");

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>5 Items Selected</h1>
        {/* <button className={styles.clearAll}>Clear all</button> */}
      </header>

      <nav className={styles.filterBar}>
        <div className={styles.filterTabs}>
          {["All Items", "Furniture", "Appliance", "Lighting"].map((cat) => (
            <button
              key={cat}
              className={`${styles.filterTab} ${
                activeFilter === cat ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              <span className={styles.count}>
                {cat === "All Items"
                  ? items.length
                  : items.filter((i) => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <button className={styles.clearAll}>Clear all</button>
      </nav>

      <div className={styles.cartList}>
        {items.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.imageSection}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImg}
              />
              <span className={styles.categoryBadge}>
                {item.category.toUpperCase()}
              </span>
              {/* {item.tag && (
                <span className={styles.statusBadge}>{item.tag}</span>
              )} */}
            </div>

            <div className={styles.detailsSection}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                  <p className={styles.stockStatus}>● In Stock</p>
                </div>
                <button className={styles.deleteBtn}>
                  <FiTrash2 className={styles.deleteIcon} />
                </button>
              </div>

              <div className={styles.itemFooter}>
                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <FiMinus className={styles.incrementBtn} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <FiPlus className={styles.incrementBtn} />
                  </button>
                </div>

                <div className={styles.priceInfo}>
                  <div className={styles.currentPrice}>
                    ${item.price.toLocaleString()}
                    <span className={styles.oldPrice}>
                      ${item.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.savings}>
                    You save ${item.originalPrice - item.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.promoSection}>
        <div className={styles.promoHeaderGroup}>
          <MdDiscount className={styles.discounticon}/>
          <div className={styles.promoHeader}>
            <span>Have a promo code?</span>
            <p>Discounts apply to eligible items only</p>
          </div>
        </div>
        <div className={styles.promoInputGroup}>
          <input
            type="text"
            placeholder="Promo code — try MAISON20"
            className={styles.promoInput}
          />
          <button className={styles.applyBtn}>Apply</button>
        </div>
      </div>
        {/* Features Grid Section */}
      <div className={styles.featuresGrid}>
        {FEATURES_DATA.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <img 
              src={feature.iconUrl} 
              alt={feature.title} 
              className={styles.featureIcon} 
            />
            <h5 className={styles.featureTitle}>{feature.title}</h5>
            <p className={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
