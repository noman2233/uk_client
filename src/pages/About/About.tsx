import React, { type JSX } from "react";
import styles from "./About.module.css";
import { FiLayers, FiShield, FiSmile, FiTruck } from "react-icons/fi"; // Using feather icons for the factor icons

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Factor {
  title: string;
  desc?: string;
  icon: JSX.Element;
  img?:string
}

const TEAM: TeamMember[] = [
  {
    name: "Devin Johnson",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Cody Harvey",
    role: "President / Chief Strategy Officer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const FACTORS: Factor[] = [
  {
    title: "Eco-Friendly Materials",
    desc: "We prioritize sustainability by using high-quality, ethically sourced hardwoods and natural fabrics for a healthier home.",
    icon: <FiLayers />,
    img:"https://img.icons8.com/?size=128&id=77166&format=png"
  },
  {
    title: "2-Year Warranty",
    desc: "Our commitment to quality is backed by a comprehensive 24-month protection plan on all structural furniture components.",
    icon: <FiShield />,
    img:"https://img.icons8.com/?size=160&id=Nh0FdkapxUe6&format=png"
  },
  {
    title: "Fast Global Shipping",
    desc: "Enjoy reliable, tracked delivery worldwide, with free shipping on all premium orders exceeding 100USD.",
    icon: <FiTruck />,
    img:"https://img.icons8.com/?size=100&id=11942&format=png"
  },
  {
    title: "Expert Support",
    desc: "Our dedicated interior specialists are available 24/7 to help you curate the perfect atmosphere for your living space.",
    icon: <FiSmile />,
    img:"https://img.icons8.com/?size=100&id=58861&format=png"
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heading}>About us</h1>
          <p>
            Discover designer furniture and striking décor solutions crafted to
            make every room feel more spacious, inviting, and effortlessly
            beautiful.
          </p>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className={styles.aboutCompany}>
        <div className={styles.contentGrid}>
          <div className={styles.textSide}>
            <h2 className={styles.heading}>About Company</h2>
            <p>
              At Fanor, we believe that your home should be a reflection of your
              unique journey and refined taste. Our collection of handcrafted
              furniture and modern home décor is meticulously curated to bridge
              the gap between architectural precision and organic warmth.
            </p>
            <p>
              By utilizing sustainably sourced materials and time-honored
              techniques, we ensure that every piece—from our iconic Sopha Nest
              to our minimalist accents—offers unrivaled durability and timeless
              style. We aren't just selling furniture; we are providing the
              foundation for a lifetime of memories in spaces designed for
              comfort and interior design excellence.
            </p>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.blueShape}></div>
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Meeting"
            />
          </div>
        </div>
      </section>

      {/* UNIQUE FACTORS */}
      <section className={styles.factorsSection}>
        <h2 className={styles.heading}>Company Unique Factor</h2>
        <div className={styles.factorGrid}>
          {FACTORS.map((factor, index) => (
            <div
              key={index}
              className={`${styles.factorCard} ${
                index === 4 ? styles.activeCard : ""
              }`}
            >
              <div className={styles.iconCircle}>
                <img src={factor?.img} />
              </div>
              <span>{factor.title}</span>
              <p className={styles.desc}>{factor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className={styles.teamSection}>
        <h2 className={styles.heading}>Meet Our Team</h2>
        <p className={styles.teamSub}>
          Our team is a collective of visionary designers and industry experts
          dedicated to redefining the standards of modern living through
          architectural precision. Together, we work tirelessly to ensure that
          every Fanor piece reflects our commitment to quality, elegance, and
          the art of sophisticated home décor.
        </p>

        <div className={styles.teamGrid}>
          {TEAM.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.imgWrapper}>
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              {/* <div className={styles.socialIcon}>in</div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
