import React from "react";
import styles from "./productReviews.module.css";

const ReviewCard: React.FC = () => {
  return (
    <div className={styles.product_review_card}>
      <div className={styles.product_review_person}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Image"
          className={styles.product_profile_img}
        />
        <div className={styles.product_review_rating}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/18094/18094455.png"
            alt="star"
            className={styles.product_review_star}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/18094/18094455.png"
            alt="star"
            className={styles.product_review_star}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/18094/18094455.png"
            alt="star"
            className={styles.product_review_star}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/18094/18094455.png"
            alt="star"
            className={styles.product_review_star}
          />
        </div>
      </div>
      <div className={styles.product_review_name}>John Doe</div>
      <p className={styles.product_review_description}>
        I have used Fastrac Blox in tamper resistant bait stations around the
        farm buildings and grain bins for the past 4+ years to prevent rats. The
        bait has done an excellent job and is long lasting in the bait stations,
        whether they are placed in the farm buildings or outside by the walls. I
        have placed some of these around my mother’s house (in a city) where
        roof rats have been found and they seem to be gone as well. The key
        reason I chose and continue to use these blocks is the active ingredient
        Bromethalin. Based on my research, this is the fastest acting agent,
        much faster than the anticoagulant baits. I can also use less of it per
        bait station, since the rats die sooner and do not come back to feed as
        often. I have found dead mice that never made it out of the bait
        station. In fact, I notice that I never run out of bait, before it is
        time to change the blocks out (every 6 months or year, depending on
        whether the bait station is indoors or out).
      </p>
    </div>
  );
};

export default ReviewCard;