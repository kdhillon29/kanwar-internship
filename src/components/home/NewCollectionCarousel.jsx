// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// eslint-disable-next-line react/prop-types
export default function NewCollectionSwiper({ children }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation
      loop
      slidesPerView={5}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 425px
        425: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
