import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import styles from "./ReviewsSlider.module.css";
import { TestimonialsData } from "../../utils/data";

const Testimonials: React.FC = () => {
  const slides = TestimonialsData;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: false,
  });
  console.log("Total slides:", slides.length);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);
  console.log("Data:", TestimonialsData);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>WHAT OUR CUSTOMERS SAY</h2>

      <div className={styles.sliderContainer}>
        <button onClick={scrollPrev} className={styles.navBtn}>
          <IoIosArrowBack />
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.track}>
            {slides.map((item, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.avatarWrapper}>
                    <div
                      className={styles.avatar}
                      style={{ backgroundColor: item.avatarColor }}
                    >
                      {item.initials}
                    </div>
                    <div className={styles.googleIcon}>G</div>
                  </div>

                  <h3 className={styles.name}>{item.name}</h3>
                  <p className={styles.date}>{item.date}</p>

                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        color={i < item.rating ? "#fbbd05" : "#dcdde1"}
                      />
                    ))}
                  </div>

                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={scrollNext} className={styles.navBtn}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
