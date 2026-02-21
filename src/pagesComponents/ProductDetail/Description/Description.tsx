import React from "react";
import styles from "./Description.module.css";

const ProductDescription: React.FC = () => {
  return (
    <section className={styles.desc_container}>
      {/* TOP SECTION: FEATURE HIGHLIGHT */}
      <div className={styles.feature_flex}>
        <div className={styles.feature_text}>
          <h2 className={styles.section_title}>Outstanding Features</h2>
          <p className={styles.main_para}>
            The Sopha Nest collection represents a harmonious intersection of
            organic textures and structural precision. Each piece is
            meticulously engineered to transcend fleeting trends, utilizing
            sustainably sourced hardwoods that are hand-finished with natural
            oils to preserve the wood’s unique character and tactile warmth.
          </p>
          <p className={styles.feature_list}>
            Transform your living environment with the Sopha Nest, a masterpiece
            of mid-century modern design. This lamp isn't just a light source;
            it’s a sculptural focal point that brings warmth and sophisticated
            texture to any room. Whether perched on a Scandinavian-inspired
            sideboard or a minimalist bedside table, its clean lines and natural
            materials create an inviting atmosphere. utilizing sustainably
            sourced hardwoods that are hand-finished with natural oils to
            preserve the wood’s unique character and tactile warmth.
          </p>
        </div>
        <div className={styles.feature_image_wrapper}>
          <img
            src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
            alt="Product in use"
            className={styles.hero_image}
          />
        </div>
      </div>

      {/* MIDDLE SECTION: QUALITY HEADER */}
      <div className={styles.quality_header}>
        <h2 className={styles.section_title}>Product Supreme Quality</h2>
        <p className={styles.sub_para}>
          Labore omnis sint totam maxime. Reprehenderit eaque consectetur
          consequuntur ullam consequuntur voluptatum. Eius voluptatem molestias
          rerum repellat quam.
        </p>
      </div>

      {/* BOTTOM SECTION: INFO GRID */}
      <div className={styles.quality_grid}>
        <div className={styles.quality_card}>
          <img
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
            alt="Info"
          />
          <h3>Information Product</h3>
          <p>
            IFlexibile consilium: Design res ad usus multos et spatia apta,
            flexibilitatem et commodum usoribus afferens.
          </p>
        </div>

        <div className={styles.quality_card}>
          <img
            src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
            alt="Material"
          />
          <h3>Fabricae Material</h3>
          <p>
            SAlta durabilitas: alta qualitas materiae et processus fabricandi
            provectae utens productum habet longam restem.
          </p>
        </div>

        <div className={styles.quality_card}>
          <img
            src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
            alt="Instructions"
          />
          <h3>Instructiones</h3>
          <p>
            Facilis utendum est: User-amica interface et experientia consilium,
            simplex et facile ad intelligendum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
