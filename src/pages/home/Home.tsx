import Hero from "../../components/Hero/Hero";
import FeaturedShowcase from "../../components/FeaturedShowcase/FeaturedShowcase";
import styles from "./Home.module.css";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Gallary from "../../components/Gallery/Gallery";
import LatestBlogs from "../../components/Blog/LatestBlogs";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Hero />
      </div>
      <FeaturedShowcase />
      <ProductGrid />
      <Gallary />
      <LatestBlogs />
    </div>
  );
};

export default Home;
