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
      slidesPerView={5}
      breakpoints={{
        // when window width is >= 320px
        250: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
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
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      {children}
    </Swiper>
  );
}
