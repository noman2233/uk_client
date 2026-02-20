import React from "react";
import styles from "./ProductGrid.module.css";
import { FiShoppingCart } from "react-icons/fi";
import Heading from "../Heading/Heading";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  primaryImage: string;
  hoverImage: string;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Penaititus parturient",
    category: "Toys",
    price: 444.0,
    primaryImage:
      "https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-accessories-1.jpg",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 2,
    name: "Cined Cnes Lamp",
    category: "Furniture",
    price: 479.0,
    primaryImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/5a_540x.jpg?v=1694678021",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 3,
    name: "Small Lames Glass",
    category: "Decor",
    price: 489.0,
    primaryImage:
      "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-19-3.jpg",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 4,
    name: "Pmather Awesoms",
    category: "Bedding",
    price: 639.0,
    primaryImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/8a_900x.jpg?v=1694678072",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 2,
    name: "Cined Cnes Lamp",
    category: "Furniture",
    price: 479.0,
    primaryImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/5a_540x.jpg?v=1694678021",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 2,
    name: "Cined Cnes Lamp",
    category: "Furniture",
    price: 479.0,
    primaryImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 2,
    name: "Cined Cnes Lamp",
    category: "Furniture",
    price: 479.0,
    primaryImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/40a_540x.jpg?v=1694677930",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
  {
    id: 2,
    name: "Cined Cnes Lamp",
    category: "Furniture",
    price: 479.0,
    primaryImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/4a_540x.jpg?v=1694678030",
    hoverImage:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/7a_540x.jpg?v=1694678092",
  },
];

const ProductGrid: React.FC = () => {
  return (
    <>
      <Heading title="Featured Products" />
      <div className={styles.container}>
        <div className={styles.grid}>
          {dummyProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {/* Image Section with Hover Logic */}
              <div className={styles.imageContainer}>
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className={styles.primaryImg}
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} hover`}
                  className={styles.hoverImg}
                />

                {/* Add to Cart Button (Animated) */}
                <button className={styles.addToCartBtn}>
                  <FiShoppingCart /> ADD TO CART
                </button>
              </div>

              {/* Info Section */}
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
