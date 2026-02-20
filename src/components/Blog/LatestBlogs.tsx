import React from "react";
import styles from "./LatestBlogs.module.css";
import { blogData } from "../../utils/dummyData";
import Heading from "../Heading/Heading";

interface BlogItem {
  id: number;
  day: string;
  month: string;
  author: string;
  title: string;
  image: string;
}
const LatestBlogs: React.FC = () => {
  return (
    <section className={styles.section}>
      <Heading title="Latest Blog Post" />

      <div className={styles.blogGrid}>
        {blogData.map((blog: BlogItem) => (
          <div key={blog.id} className={styles.blogCard}>
            <div className={styles.imageContainer}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImg}
              />
            </div>

            <div className={styles.content}>
              <div className={styles.dateBox}>
                <span className={styles.day}>{blog.day}</span>
                <span className={styles.month}>{blog.month}</span>
              </div>

              <div className={styles.info}>
                <p className={styles.author}>{blog.author}</p>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
