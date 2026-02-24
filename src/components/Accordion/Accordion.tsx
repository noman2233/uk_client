import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi"; // ✅ using react-icons
import styles from "./Accordion.module.css";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button onClick={() => toggle(index)} className={styles.header}>
            <span className={styles.sub_header}>{item.title}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openIndex === index ? (
                <FiMinus className={styles.icon} />
              ) : (
                <FiPlus className={styles.icon} />
              )}
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={styles.contentWrapper}
              >
                <div className={styles.content}>{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
