import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  description: string;
}
const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1 className={styles.heading}>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Header;
