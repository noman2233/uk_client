import React, { useState } from "react";
import styles from "./productReviews.module.css";
 import WriteReview from "../../../pages/writeReview/WriteReview";
import ReviewCard from "./ReviewCard";
import ProductTotalRating from "../ProductTotalRating/ProductTotalRating";

// interface ProductReviewsProps {
//   toggleState: number;
// }

// const ProductReviews: React.FC<ProductReviewsProps> = ({ toggleState }) => {
const ProductReviews: React.FC  = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  return (
    <div
      className={
        // toggleState === 3
        // ? styles.product_review_main
        // :
        // styles.product_top_container_inActive
        styles.product_review_main
      }
    >
      <ProductTotalRating />
      <button className={styles.add_review} onClick={openModal}>
        Write a review
      </button>
      <WriteReview modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      {/* Manually rendering as requested previously */}
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default ProductReviews;
