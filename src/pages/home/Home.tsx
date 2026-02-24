import styles from "./Home.module.css";
import Contact from "../Contact/Contact";
import FAQPage from "../FAQPage/FAQPage";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import CTASection from "../../components/CTASection/CTASection";
import ReviewsSlider from "../../components/ReviewsSlider/ReviewsSlider";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
 const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <Hero /> */}
        <HeroSection />
      </div>
      <CategoryGrid/>
      <AboutSection />
      <ReviewsSlider />
      <FAQPage />
      <Contact />
      <CTASection />
    </div>
  );
};

export default Home;
