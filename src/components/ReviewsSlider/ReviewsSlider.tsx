import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import styles from "./ReviewsSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatarColor: string;
  initials: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Mags",
    date: "21/02/2025",
    rating: 5,
    text: "I got a really nice mattress for my daughter's bed. Great value for money and absolutely delighted with it.",
    avatarColor: "#a31d58",
    initials: "M",
  },
  {
    id: 2,
    name: "Ted",
    date: "25/01/2025",
    rating: 5,
    text: "Bought a spinal max deluxe mattress off Peter in furniture designs in the old bawn road, I would highly recommend.",
    avatarColor: "#8e44ad",
    initials: "B",
  },
  {
    id: 3,
    name: "Irene McKim",
    date: "15/01/2025",
    rating: 5,
    text: "Best place to buy furniture!! The quality speaks for itself!! And the guys in the shop are so helpful!!",
    avatarColor: "#2c3e50",
    initials: "I",
  },
  {
    id: 4,
    name: "Michelle Smartt",
    date: "11/12/2024",
    rating: 5,
    text: "Customer service was great. Great choice of suites with different options size, colour, types of legs.",
    avatarColor: "#7f8c8d",
    initials: "M",
  },
  {
    id: 5,
    name: "New User",
    date: "05/02/2026",
    rating: 5,
    text: "Amazing experience! The furniture is top notch and the delivery was seamless.",
    avatarColor: "#27ae60",
    initials: "N",
  },
];

const Testimonials: React.FC = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "Image",
    }));
  };

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
          <Slider {...settings}>
              {testimonialsData.map((item) => (
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
