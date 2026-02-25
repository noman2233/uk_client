import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import styles from "./ReviewsSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsData } from "../../utils/data";
import {  useState } from "react";

const Testimonials: React.FC = () => {
  const [sliderKey, setSliderKey] = useState<number>(0);
  console.log("Rendering Testimonials with sliderKey:", setSliderKey);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1164,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //   ],
  // };
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  const handleErrorImage = (data: React.SyntheticEvent<HTMLDivElement>) => {
    console.log(data);
  };

  // Force the slider to reinitialize on mount or window resize

 
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>WHAT OUR CUSTOMERS SAY</h2>

      <div className={styles.sliderContainer}>
        {/* Left Arrow — outside viewport so it's never clipped */}
        <button
          //   onClick={prevSlide}
          className={`${styles.navBtn} ${styles.left}`}
          aria-label="Previous slide"
        >
          <IoIosArrowBack />
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            onError={handleErrorImage}
            // style={{ transform: `translateX(-${translateX}%)` }}
          >
            <Slider key={sliderKey} {...settings}>
              {TestimonialsData.map((item) => (
                <div
                  key={item.id}
                  className={styles.cardWrapper}
                  //   style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
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
                    <button className={styles.readMore}>Read more</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          //   onClick={nextSlide}
          className={`${styles.navBtn} ${styles.right}`}
          aria-label="Next slide"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
