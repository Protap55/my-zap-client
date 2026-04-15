import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/banner1.png";
import img2 from "../../../assets/banner/banner2.png";
import img3 from "../../../assets/banner/banner3.png";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
        <div className="relative flex items-center">
          <img src={img1} />

          <div className="absolute mt-100 mx-4 flex items-center">
            <div className="flex items-center pr-4 ">
              <button className="btn btn-secondary bg-primary text-black rounded-3xl text-xl hover:bg-gray-200">
                Track Your Parcel
              </button>
              <div className="h-10 w-10 cursor-pointer rounded-full bg-black flex items-center justify-center">
                <GoArrowUpRight size={30} className="text-primary" />
              </div>
            </div>
            <div>
              <button className="btn btn-outline text-xl rounded-xl border-gray-400 text-black">
                Be A Rider
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
