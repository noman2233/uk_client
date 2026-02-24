import styles from "./FAQ.module.css";
import { FAQ_DATA } from "../../utils/data";
import Accordion from "../../components/Accordion/Accordion";

const FAQPage = () => {
  return (
    <section className={styles.faqWrapper}>
      <div className={styles.faqGrid}>
        {FAQ_DATA.map((section, idx) => (
          <div key={idx} className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle}>{section.category}</h2>
            <Accordion items={section.items} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
