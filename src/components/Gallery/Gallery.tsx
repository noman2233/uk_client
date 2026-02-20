// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Gallery.module.css";
// import { Gallry_DummyData } from "../../utils/dummyData";
// import Heading from "../Heading/Heading";

// // Wrapped in forwardRef to fix the 'ref' bug
// const Gallary = React.forwardRef<HTMLDivElement, any>((props, ref) => {
//   const [defaultImage, setDefaultImage] = useState<any>({});

//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 760,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//     ],
//   };

//   const handleErrorImage = (data: any) => {
//     setDefaultImage((prev: any) => ({
//       ...prev,
//       [data.target.alt]: data.target.alt,
//       linkDefault:
//         "https://vinova-furstore.myshopify.com/cdn/shop/files/img-5-10_580x.png?v=1698461309",
//     }));
//   };

//   return (
//     <div className={styles.wrapper} ref={ref}>
//             <Heading title="Explore Our Gallery" />

//       <Slider {...settings}>
//         {Gallry_DummyData.map((item, index) => (
//           // Added key prop to prevent rendering bugs
//           <div key={index} className={styles.container}>
//             <div className={styles.image_box}>
//               <img
//                 src={
//                   defaultImage[item?.title]
//                     ? defaultImage.linkDefault
//                     : item.img
//                 }
//                 alt={"title"}
//                 onError={handleErrorImage}
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// });

// export default Gallary;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.css";
import { Gallry_DummyData } from "../../utils/dummyData";
import Heading from "../Heading/Heading";

// 1. Define the interface to fix the "property does not exist" error
interface GalleryItem {
  id: number;
  img: string;
  title?: string; // Adding optional title
}

// 2. Use _props to tell TypeScript it's intentionally unused
const Gallary = React.forwardRef<HTMLDivElement, any>((_props, ref) => {
  const [defaultImage, setDefaultImage] = useState<any>({});

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  const handleErrorImage = (data: any) => {
    setDefaultImage((prev: any) => ({
      ...prev,
      [data.target.alt]: true, // Changed logic to a simple boolean check
      linkDefault:
        "https://vinova-furstore.myshopify.com/cdn/shop/files/img-5-10_580x.png?v=1698461309",
    }));
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <Heading title="Explore Our Gallery" />

      <Slider {...settings}>
        {(Gallry_DummyData as GalleryItem[]).map((item, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.image_box}>
              <img
                src={
                  // Use item.id as a fallback key if title is missing
                  defaultImage[item.title || index]
                    ? defaultImage.linkDefault
                    : item.img
                }
                alt={item.title || `gallery-img-${index}`}
                onError={handleErrorImage}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

Gallary.displayName = "Gallary"; // Good practice for forwardRef

export default Gallary;
