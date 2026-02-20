import styles from "./checkoutSidebar.module.css"; // Ensure you renamed your .css to .module.css
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoCloseOutline, IoPulse } from "react-icons/io5";
import { Link } from "react-router-dom";

interface CheckoutSidebarProps {
  openCheckout: boolean;
  setOpenCheckout: (open: boolean) => void;
  userName?: string;
}

const CheckoutSidebar: React.FC<CheckoutSidebarProps> = ({
  setOpenCheckout,
  openCheckout,
}) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{
        x: openCheckout ? "0%" : "100%",
        opacity: openCheckout ? 1 : 0,
      }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.checkout_sidebar}
    >
      <h2 className={styles.checkout_heading}>Checkout Details</h2>

      <div className={styles.cart_item}>
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
          alt="Vegan Protein"
          className={styles.checkout_sidebar_image}
        />
        <div className={styles.cart_item_details}>
          <p>Natural Vegan Protein</p>
          <p>€17,95</p>
        </div>
        <div className={styles.cart_item_controls}>
          <button>
            <FaPlus />
          </button>
          <span className={styles.cart_num}>1</span>
          <button>
            <FaMinus />
          </button>
        </div>
      </div>

      <div className={styles.cart_item}>
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
          alt="Vegan Shake"
        />
        <div className={styles.cart_item_details}>
          <p>Natural Maaltijdshake</p>
          <p>€14,35</p>
        </div>
        <div className={styles.cart_item_controls}>
          <button>
            <FaPlus />
          </button>
          <span className={styles.cart_num}>1</span>
          <button>
            <FaMinus />
          </button>
        </div>
      </div>

      <div className={styles.summary}>
        <div>
          <span className={styles.summary_total}>Subtotaal</span>
          <span className={styles.summary_price}>€32,30</span>
        </div>
        <div>
          <span className={styles.summary_total}>Shipping Fee</span>
          <span className={styles.summary_price}>€4,95</span>
        </div>
        <div>
          <strong className={styles.summary_total}>Totaal</strong>
          <strong className={styles.summary_price}>€37,25</strong>
        </div>
      </div>

      <button
        className={styles.clossCartIcon}
        onClick={() => setOpenCheckout(false)}
      >
        <IoCloseOutline className={styles.crossIcon} />
      </button>

      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <button className={styles.checkout_btn}>Checkout Now</button>
      </Link>
    </motion.div>
  );
};

export default CheckoutSidebar;
