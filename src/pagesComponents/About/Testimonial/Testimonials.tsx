import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
 import styles from './Testimonials.module.css';
import { BsQuote } from 'react-icons/bs';
import { SiTarget } from 'react-icons/si';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Review {
  id: number;
  text: string;
  name: string;
  image: string;
  isDark?: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Purchased this lovely fridge freezer. The guys were very helpful and went over and above to help with timely delivery for my new house and helped me source hinges to swap the doors to other side.",
    name: "Donna Collins",
    image: "https://i.pravatar.cc/150?u=donna",
    isDark: true,
  },
  {
    id: 2,
    text: "Great guy, bought some electrical items from NI DRIP and he went out of his way and delivered to me within an hour, great service! Would highly recommend. Will be back to buy some more!",
    name: "Ciaran Henderson",
    image: "https://i.pravatar.cc/150?u=ciaran",
  },
  {
    id: 3,
    text: "Best prices I've found for authentic gear. I was skeptical at first because the deals were so good, but the serial numbers checked out and the warranty is legit.",
    name: "Christopher James Moore",
    image: "https://i.pravatar.cc/150?u=chris",
  },
  {
    id: 4,
    text: "Great guy, bought some electrical items from NI DRIP and he went out of his way and delivered to me within an hour, great service! Would highly recommend.",
    name: "Ciaran Henderson",
    image: "https://i.pravatar.cc/150?u=ciaran2",
  }
];

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>What Our Customers Say</h2>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {reviews.map((review) => (
            <div className={styles.emblaSlide} key={review.id}>
              {/* <div className={`${styles.card} ${review.isDark ? styles.darkCard : styles.lightCard}`}> */}
              <div className={`${styles.card}`}>
                <BsQuote className={styles.quoteIcon} />
                <p className={styles.reviewText}>{review.text}</p>
                
                <div className={styles.footer}>
                  <div className={styles.userInfo}>
                    <img src={review.image} alt={review.name} className={styles.avatar} />
                    <span className={styles.userName}>{review.name}</span>
                  </div>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <SiTarget key={i} size={16} fill="#FFB400" color="#FFB400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation */}
      <div className={styles.navigation}>
        <button className={styles.navBtn} onClick={scrollPrev}>
          <BiChevronLeft size={20} />
        </button>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
        <button className={`${styles.navBtn} ${styles.navBtnBlue}`} onClick={scrollNext}>
          <BiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;