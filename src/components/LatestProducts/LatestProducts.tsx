import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
 import styles from "./LatestProducts.module.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

// Dummy Data
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Fontana Chair",
    oldPrice: "€133.00",
    price: "€89.00",
    image:
      "https://img.freepik.com/premium-vector/illustration-wooden-dining-table-isolated_756535-8226.jpg?semt=ais_hybrid&w=740&q=80",
    sale: true,
  },
  {
    id: 2,
    name: "Conway Chair",
    oldPrice: "€135.00",
    price: "€89.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwe1Q7gjrqFOxn2imP1Owlv3K-bQQ6Gs1ww&s",
    sale: true,
  },
  {
    id: 3,
    name: "Sealy Elevate Ultra Franklin",
    price: "Call for Price",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGEKYpJWDrE0nz54_UdeZrK831IuVWNFung&s",
    sale: false,
  },
  {
    id: 4,
    name: "Boston Extending Table",
    oldPrice: "€795.00",
    price: "From €599.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUW8aPq-25MG9FZa84EICv0pCHneW1wYFOA&s",
    sale: true,
  },
  {
    id: 5,
    name: "Modern Sofa",
    oldPrice: "€1200",
    price: "€999",
    image:
      "https://image.made-in-china.com/202f0j00mfeoAtWBfgrs/New-Style-Contemporary-Sofas-Set-Modern-Furniture-Living-Room-Couch.webp",
    sale: true,
  },
];

const LatestProducts: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className={styles.container} id="shop">
      {/* Header with Title and Navs */}
      <div className={styles.header}>
        <button
          className={styles.navBtn}
          onClick={scrollPrev}
          aria-label="Previous"
        >
          <IoArrowBack />
        </button>

        <div className={styles.titleGroup}>
          <h2 className={styles.title}>LATEST PRODUCTS</h2>
          <p className={styles.subtitle}>
            Shop All <span className={styles.accent}>Products</span>
          </p>
        </div>

        <button
          className={styles.navBtn}
          onClick={scrollNext}
          aria-label="Next"
        >
          <IoArrowForward />
        </button>
      </div>

      {/* Slider */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {PRODUCTS_DATA.map((product) => (
            <div className={styles.slide} key={product.id}>
              <div className={styles.card}>
                {product.sale && (
                  <span className={styles.saleBadge}>Sale!</span>
                )}

                <div className={styles.imageWrapper}>
                  <img src={product.image} alt={product.name} />
                </div>

                <div className={styles.info}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.priceContainer}>
                    {product.oldPrice && (
                      <span className={styles.oldPrice}>
                        {product.oldPrice}
                      </span>
                    )}
                    <span
                      className={
                        product.price === "Call for Price"
                          ? styles.callPrice
                          : styles.currentPrice
                      }
                    >
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
