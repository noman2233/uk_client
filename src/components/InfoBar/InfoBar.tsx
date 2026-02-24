import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GiShamrock } from "react-icons/gi";
import { IoCalendarOutline, IoCardOutline } from "react-icons/io5";
import styles from "./InfoBar.module.css";

const infoItems = [
  {
    icon: <TbTruckDelivery />,
    line1: "Nationwide",
    line2: "Delivery Service",
    // img: "https://i.ibb.co/hFs6pw6z/icons8-delivery-100.png",
    img: "https://i.ibb.co/NgrdysRF/Chat-GPT-Image-Feb-25-2026-12-02-51-AM.png",
  },
  {
    icon: <GiShamrock />,
    line1: "Est:",
    line2: "1979",
    img: "https://i.ibb.co/vCkdTK9v/removed-bg.png",
  },
  {
    icon: <IoCalendarOutline />,
    line1: "Open 7",
    line2: "Days",
    img: "https://i.ibb.co/SX4KZkn8/Chat-GPT-Image-Feb-24-2026-11-55-32-PM.png",
  },
  {
    icon: <IoCardOutline />,
    line1: "Open Online",
    line2: "24/7",
    img: "https://i.ibb.co/8ntfg6ZG/Gift-card-icon-with-bow.png",
  },
];

const InfoBar: React.FC = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        {infoItems.map((item, index) => (
          <div key={index} className={styles.item}>
            {/* <span className={styles.icon}>{item.icon}</span> */}
            <img src={item.img} alt="" className={styles.icon} />

            <div className={styles.text}>
              <p>
                {item.line1} {item.line2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBar;
