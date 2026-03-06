import React from "react";
import styles from "./AddressCard.module.css";

interface AddressCardProps {
  type: "Billing" | "Shipping";
  onAdd: (type: "Billing" | "Shipping") => void;
}

const AddressCard: React.FC<AddressCardProps> = ({ type, onAdd }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{type} Address</h3>
      <button
        className={styles.addButton}
        onClick={() => onAdd(type)}
        aria-label={`Add ${type.toLowerCase()} address`}
      >
        Add {type} address
      </button>
      <p className={styles.cardStatus}>
        You have not set up this type of address yet.
      </p>
    </div>
  );
};

const AddressSection: React.FC = () => {
  const handleAddAddress = (type: "Billing" | "Shipping") => {
    // Integrate logic to show a form modal or navigate to address edit page
    console.log(`Open add form for: ${type}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.infoText}>
          The following addresses will be used on the checkout page by default.
        </p>
        <div className={styles.cardGrid}>
          <AddressCard type="Billing" onAdd={handleAddAddress} />
          <AddressCard type="Shipping" onAdd={handleAddAddress} />
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
