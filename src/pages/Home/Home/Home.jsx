import React from "react";
import Banner from "../Banner/Banner";
import Bands from "../Bands/Bands";
import Works from "../Works/Works";
import Reviews from "../Reviews/Reviews";
import FaqSection from "../FaqSection/FaqSection";

const reviewPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-12">
        <Works></Works>
        <Bands></Bands>
        <Reviews reviewPromise={reviewPromise}></Reviews>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;
