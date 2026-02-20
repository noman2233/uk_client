import React from "react";
import styles from "./Heading.module.css";

// Define the shape of the props
interface HeadingProps {
  title?: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Heading;
