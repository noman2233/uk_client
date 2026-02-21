import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMinus,
  FiPlus,
} from "react-icons/fi";
import styles from "./productDetail.module.css";
import Description from "../../pagesComponents/ProductDetail/Description/Description";
import ProductReviews from "../../pagesComponents/ProductDetail/ProductReviews/ProductReviews";

const images = [
  "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg", // Main Lamp
  "https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg",
  "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
];

const ProductDeatil: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });
  const [toggleTabs, setToggleTabs] = useState<number>(1);

  // Magnifier Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y, show: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.productGrid}>
        {/* LEFT: IMAGE GALLERY */}
        <div className={styles.gallerySection}>
          <div
            className={styles.mainImageContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomPos({ ...zoomPos, show: false })}
            onClick={() => setShowModal(true)}
          >
            <img
              src={images[selectedImg]}
              alt="Product"
              className={styles.mainImg}
            />

            {/* Magnifier Glass overlay */}
            {zoomPos.show && (
              <div
                className={styles.magnifier}
                style={{
                  backgroundImage: `url(${images[selectedImg]})`,
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  left: `${zoomPos.x}%`,
                  top: `${zoomPos.y}%`,
                }}
              />
            )}
          </div>

          <div className={styles.thumbnails}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.thumb} ${
                  selectedImg === idx ? styles.activeThumb : ""
                }`}
                onClick={() => setSelectedImg(idx)}
              >
                <img src={img} alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className={styles.infoSection}>
          <span className={styles.brand}>SOPHA NEST</span>
          <h1 className={styles.title}>Wood Tripod Table Lamp</h1>
          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>$40.00</span>
            <span className={styles.oldPrice}>$58.00</span>
            <span className={styles.saleTag}>SAVE 30%</span>
          </div>

          <p className={styles.description}>
            Clean on your favorite side with this eye-popping style. Crafted
            from 100% premium wood and breathable fabric. Clean on your favorite
            side with this eye-popping style. Crafted from 100% premium wood and
            breathable fabric. Clean on your favorite side with this eye-popping
            style. Crafted from 100% premium wood and breathable fabric. Clean
            on your favorite side with this eye-popping style. Crafted from 100%
            premium wood and breathable fabric. Clean on your favorite side with
            this eye-popping style. Crafted from 100% premium wood and
            breathable fabric.
          </p>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button>
                <FiMinus />
              </button>
              <span>1</span>
              <button>
                <FiPlus />
              </button>
            </div>
            <button className={styles.addToCart}>ADD TO CART</button>
          </div>
          <button className={styles.buyNow}>BUY IT NOW</button>
          <button className={styles.whishList}>Add TO WISHLIST</button>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
          >
            <button
              className={styles.closeModal}
              onClick={() => setShowModal(false)}
            >
              <FiX />
            </button>
            <div className={styles.modalContent}>
              <button
                className={styles.navBtn}
                onClick={() =>
                  setSelectedImg((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                <FiChevronLeft />
              </button>
              <img
                src={images[selectedImg]}
                className={styles.modalImg}
                alt="Zoomed"
              />
              <button
                className={styles.navBtn}
                onClick={() =>
                  setSelectedImg((prev) => (prev + 1) % images.length)
                }
              >
                <FiChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.buttonBox}>
        <button
          onClick={() => setToggleTabs(1)}
          className={
            toggleTabs === 1
              ? styles.product_topBar_active
              : styles.product_topBar_non_active
          }
        >
          Decription
        </button>
        <button
          onClick={() => setToggleTabs(2)}
          className={
            toggleTabs === 2
              ? styles.product_topBar_active
              : styles.product_topBar_non_active
          }
        >
          Product Reviews
        </button>
        <button
          onClick={() => setToggleTabs(3)}
          className={
            toggleTabs === 3
              ? styles.product_topBar_active
              : styles.product_topBar_non_active
          }
        >
          Return Policy
        </button>
      </div>

      {toggleTabs == 1 ? <Description /> : <div></div>}

      {toggleTabs == 2 ? (
        <ProductReviews   />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProductDeatil;
