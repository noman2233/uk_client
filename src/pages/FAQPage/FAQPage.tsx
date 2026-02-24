import styles from "./FAQ.module.css";
import { FAQ_DATA } from "../../utils/data";
import Accordion from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";

const FAQPage = () => {
  return (
    <section className={styles.faqWrapper}>
      <Header title="FAQ's" description="" />
      {/* <Header */}
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
