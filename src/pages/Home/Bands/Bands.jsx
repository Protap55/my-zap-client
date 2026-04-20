import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Bands.css";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";

// import bands logo
import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const Bands = () => {
  const bands = [
    casio,
    amazon,
    amazon_vector,
    moonstar,
    randstad,
    star,
    start_people,
  ];

  return (
    <div className="p-16 max-w-5xl mx-auto    flex items-center justify-center gap-20">
      <div>
        <h1 className="text-4xl font-bold text-secondary">
          We've helped thousands of sales teams
        </h1>
      </div>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
        >
          {bands.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bands;
