import React from 'react';
import styles from './FeaturedShowcase.module.css';

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  theme: 'light' | 'dark';
}

const bannerData: BannerItem[] = [
  {
    id: 1,
    title: 'NEW PLANTS',
    subtitle: 'Get up to 40% off',
    image: 'https://i.ibb.co/8gC2SJCs/img-5-1-1080x-removebg-preview.png',
    theme: 'light',
  },
  {
    id: 2,
    title: 'CHAIN LAMP',
    subtitle: 'Get up to 60% off',
    image: 'https://i.ibb.co/n8mmB24j/img-5-2-1080x-removebg-preview-2.png',
    theme: 'dark',
  },
  {
    id: 3,
    title: 'NEW CHAIR',
    subtitle: 'Get up to 40% off',
    image: 'https://vinova-furstore.myshopify.com/cdn/shop/files/img-5-3_1080x.png?v=1698460592',
    theme: 'light',
  },
];

const FeaturedShowcase: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.flexContainer}>
        {bannerData.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.card} ${styles[item.theme]}`}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.subtitle}>{item.subtitle}</p>
              <button className={styles.shopBtn}>SHOP NOW</button>
            </div>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.productImg} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedShowcase;