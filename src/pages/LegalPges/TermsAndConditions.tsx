import React from 'react';
import styles from './TermsAndConditions.module.css';
import { TERMS_DATA } from '../../utils/data';

 

const TermsAndConditions: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.contentWrapper}>
        {TERMS_DATA.map((item) => (
          <section key={item.id} className={styles.section}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.desc}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TermsAndConditions;