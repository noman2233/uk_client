import React from "react";
import styles from "./ProductTotalRating.module.css";

const ProductTotalRating: React.FC = () => {
  return (
    <div className={styles.overall_review_box}>
      <div className={styles.overall_average_rating}>4.4</div>
      <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
      <div className={styles.overall_total_reviews}>9,693,354 reviews</div>

      {/* 5 Star Bar */}
      <div className={styles.overall_rating_bar}>
        <span>5</span>
        <div className={styles.overall_progress_bar}>
          <div className={styles.overall_progress} style={{ width: "80%" }}></div>
        </div>
      </div>

      {/* 4 Star Bar */}
      <div className={styles.overall_rating_bar}>
        <span>4</span>
        <div className={styles.overall_progress_bar}>
          <div className={styles.overall_progress} style={{ width: "60%" }}></div>
        </div>
      </div>

      {/* 3 Star Bar */}
      <div className={styles.overall_rating_bar}>
        <span>3</span>
        <div className={styles.overall_progress_bar}>
          <div className={styles.overall_progress} style={{ width: "55%" }}></div>
        </div>
      </div>

      {/* 2 Star Bar */}
      <div className={styles.overall_rating_bar}>
        <span>2</span>
        <div className={styles.overall_progress_bar}>
          <div className={styles.overall_progress} style={{ width: "45%" }}></div>
        </div>
      </div>

      {/* 1 Star Bar */}
      <div className={styles.overall_rating_bar}>
        <span>1</span>
        <div className={styles.overall_progress_bar}>
          <div className={styles.overall_progress} style={{ width: "35%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductTotalRating;