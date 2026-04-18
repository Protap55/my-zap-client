import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import customer from "../../../assets/customer-top.png";
const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <div>
          <img src={customer} alt="customer" />
        </div>
        <div className="max-w-4xl flex items-center gap-4 flex-col">
          <h1 className="text-3xl font-bold text-secondary">
            What our customers are sayings
          </h1>
          <p className="text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
          scale: ".5",
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
