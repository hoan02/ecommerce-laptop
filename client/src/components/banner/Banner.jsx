import "./Banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/images/banner/slide-1.jpg";
import slide2 from "../../assets/images/banner/slide-2.jpg";
import slide3 from "../../assets/images/banner/slide-3.jpg";
import slide4 from "../../assets/images/banner/slide-4.jpg";
import slide5 from "../../assets/images/banner/slide-5.jpg";
import slide6 from "../../assets/images/banner/slide-6.jpg";
import slide7 from "../../assets/images/banner/slide-7.jpg";
import slide8 from "../../assets/images/banner/slide-8.jpg";
import bannerright1 from "../../assets/images/banner/right-banner-1.jpg";
import bannerright2 from "../../assets/images/banner/right-banner-2.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        className="sliders"
        slidesPerView={1}
        pagination={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="right-banner">
        <img src={bannerright1} alt="" />
        <img src={bannerright2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
