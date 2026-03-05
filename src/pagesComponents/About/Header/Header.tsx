import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome to NI Drip Central Electronics & Appliances!
          </h1>
          <div className={styles.description}>
            <p>
              At NI DRIP CENTRAL ELECTRONICS & APPLIANCES, you get affordable,
              reliable electronics and appliances in Belfast. We provide honest
              service and fast local delivery. Our goal is simple: We help you
              find what you need without stress.
            </p>
            <p>
              You find clear information about every product. You receive
              dependable support at every stage. We focus on giving real value.
              You shop with confidence every time.
            </p>
          </div>
        </div>

        <div className={styles.visualArea}>
          <div className={styles.blueCard}>
                <img
                  src="https://i.ibb.co/p6D3szYv/Whats-App-Image-2026-03-05-at-10-30-08-AM.jpg"
                  alt=""
                  width="100%"
                  height="100%"
                  // style="border-radius: 8px;"
                  className={styles.cardImage}
                  
                />
            <div className={styles.iconGrid}>
              {/* {[...Array(1)].map((_, i) => (
                <div key={i} className={styles.iconPlaceholder}>
                </div>
              ))} */}
            </div>
            {/* Overlapping Image */}
            <div className={styles.overlayImageContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnsbIPkszakcPwU_XkiECb9syBlsj5Rjuzw&s"
                alt="Bedroom Interior"
                className={styles.overlayImage}
              />
            </div>
          </div>
          {/* Background decorative square */}
          <div className={styles.bgDecoration}></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
