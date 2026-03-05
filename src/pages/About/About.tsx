import Commitment from "../../pagesComponents/About/Commitment/Commitment";
import Header from "../../pagesComponents/About/Header/Header";
import Testimonials from "../../pagesComponents/About/Testimonial/Testimonials";
import WhyChooseUs from "../../pagesComponents/About/WhyChooseUs/WhyChooseUs";

const About = () => {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <Commitment />
      <Testimonials />
    </div>
  );
};

export default About;
