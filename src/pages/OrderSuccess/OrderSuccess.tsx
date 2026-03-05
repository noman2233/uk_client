import React from "react";
import { motion } from "framer-motion";
import styles from "./OrderSuccess.module.css";
 
/**
 * Interface for the background squiggles (threads)
 * seen in image 9.
 */
interface Thread {
  id: number;
  d: string; // The SVG path data
  width: string; // Used for positioning on large screens
  height: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotation?: number;
}

const threadVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.6, // Slight opacity for a clean look
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
  },
};

const OrderSuccess: React.FC = () => {
  // SVG path data mapped to match the squiggles in image 9
  const successThreads: Thread[] = [
    // Top Right Long Squiggle
    {
      id: 1,
      d: "M10,80 Q50,10 90,80 T170,80",
      width: "180px",
      height: "100px",
      top: "10%",
      right: "15%",
      rotation: -15,
    },
    // Middle Right Small squiggle
    {
      id: 2,
      d: "M0,30 Q15,-10 30,30 T60,30",
      width: "70px",
      height: "40px",
      top: "45%",
      right: "8%",
      rotation: 40,
    },
    // Bottom Right Long squiggle
    {
      id: 3,
      d: "M10,80 Q50,10 90,80 T170,80",
      width: "180px",
      height: "100px",
      bottom: "10%",
      right: "12%",
      rotation: -20,
    },
    // Top Left Small squiggle
    {
      id: 4,
      d: "M0,30 Q15,-10 30,30 T60,30",
      width: "70px",
      height: "40px",
      top: "12%",
      left: "20%",
      rotation: -30,
    },
    // Middle Left Large squiggle (The one that looks like a cursive 'l')
    {
      id: 5,
      d: "M20,100 Q60,10 100,100 T180,100",
      width: "200px",
      height: "120px",
      top: "35%",
      left: "5%",
      rotation: 25,
    },
    // Bottom Left Small squiggle
    {
      id: 6,
      d: "M0,30 Q15,-10 30,30 T60,30",
      width: "70px",
      height: "40px",
      bottom: "15%",
      left: "15%",
      rotation: 10,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Background Animated Threads */}
      {successThreads.map((thread) => (
        <svg
          key={thread.id}
          className={styles.threadSvg}
          viewBox={`0 0 ${thread.width.replace(
            "px",
            ""
          )} ${thread.height.replace("px", "")}`}
          style={{
            width: thread.width,
            height: thread.height,
            top: thread.top,
            left: thread.left,
            right: thread.right,
            bottom: thread.bottom,
            transform: `rotate(${thread.rotation}deg)`,
          }}
        >
          <motion.path
            d={thread.d}
            className={styles.threadPath}
            variants={threadVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      ))}

      {/* Background Dot Decorations */}
      <ThreadDots />

      <div className={styles.contentCard}>
        <div className={styles.badgeWrapper}>
          <img src="https://i.ibb.co/k2wxx5gn/markup-1000048949.png" alt=""
           width={350}
           height={350}
          />
        </div>

        {/* Text and Button Group */}
        <motion.div
          className={styles.textGroup}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className={styles.title}>THANK! YOUR ORDER IS ON THE WAY.</h1>
          <button className={styles.trackButton}>TRACK YOUR ORDER</button>
        </motion.div>
      </div>
    </div>
  );
};

// Component for the blue decorative dots
const ThreadDots = () => {
  const dots = [
    { top: "15%", left: "30%" },
    { top: "25%", right: "25%" },
    { top: "65%", left: "10%" },
    { bottom: "15%", right: "40%" },
  ];

  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={styles.dot}
          style={dot}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
        />
      ))}
    </>
  );
};

export default OrderSuccess;
