import React from "react";
import Banner from "../Banner/Banner";
import Bands from "../Bands/Bands";
import Works from "../Works/Works";
import Reviews from "../Reviews/Reviews";

const reviewPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Bands></Bands>
      <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  );
};

export default Home;
