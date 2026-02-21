import React from "react";
import styles from "./ReturnPolicyCard.module.css";

const ReturnPolicyCard: React.FC = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.content_box}>
        <p className={styles.policy_text}>
          For all orders exceeding a value of 100USD shipping is offered for free.
        </p>
        <p className={styles.policy_text}>
          Returns will be accepted for up to 10 days of Customer’s receipt or
          tracking number on unworn items. You, as a Customer, are obliged to
          inform us via email before you return the item.
        </p>
        <p className={styles.policy_text}>
          Otherwise, standard shipping charges apply. Check out our delivery
          <a href="/terms" className={styles.link}>
            Terms & Conditions
          </a>
          for more details.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyCard;