// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// eslint-disable-next-line react/prop-types
export default function CollectionSwiper({ children }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      loop
      slidesPerView={5}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 425px
        425: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
