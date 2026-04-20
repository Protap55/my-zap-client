import React from "react";
import Banner from "../Banner/Banner";
import Bands from "../Bands/Bands";
import Works from "../Works/Works";
import Reviews from "../Reviews/Reviews";
import FaqSection from "../FaqSection/FaqSection";
import OurService from "../ourService/ourService";
import Percel from "../Percel/Percel";
import CustomerMerchent from "../CustomerMerchent/CustomerMerchent";

const reviewPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="space-y-6">
      <Banner></Banner>
      <div className="space-y-6">
        <Works></Works>
        <OurService></OurService>
        <Bands></Bands>
        <Percel></Percel>
        <CustomerMerchent></CustomerMerchent>
        <Reviews reviewPromise={reviewPromise}></Reviews>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;
