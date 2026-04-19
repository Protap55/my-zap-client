import React from "react";
import Banner from "../Banner/Banner";
import Bands from "../Bands/Bands";
import Works from "../Works/Works";
import Reviews from "../Reviews/Reviews";
import FaqSection from "../FaqSection/FaqSection";
import OurService from "../ourService/ourService";

const reviewPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-12">
        <Works></Works>
        <OurService></OurService>
        <Bands></Bands>
        <Reviews reviewPromise={reviewPromise}></Reviews>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;
