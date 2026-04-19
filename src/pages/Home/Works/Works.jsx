import React from "react";
import vehicle from "../../../assets/bookingIcon.png";
const Works = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-bold text-3xl py-4 text-secondary">How it Works</h1>
      <div className="flex items-center justify-center gap-4">
        <div className="card bg-base-100   shadow-sm">
          <img src={vehicle} alt="vehicle" className="size-16 mx-6 mt-4" />

          <div className="card-body">
            <h2 className="card-title text-secondary text-xl font-semi-bold">
              Booking Pick & Drop
            </h2>
            <p className="text-primary-content">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <img src={vehicle} alt="vehicle" className="size-16 mx-6 mt-4" />
          <div className="card-body">
            <h2 className="card-title text-secondary text-xl font-semi-bold">
              Cash On Delivery
            </h2>
            <p className="text-primary-content">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <img src={vehicle} alt="vehicle" className="size-16 mx-6 mt-4" />
          <div className="card-body">
            <h2 className="card-title text-secondary text-xl font-semi-bold">
              Delivery Hub
            </h2>
            <p className="text-primary-content">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <img src={vehicle} alt="vehicle" className="size-16 mx-6 mt-4" />
          <div className="card-body">
            <h2 className="card-title text-secondary  text-xl font-semi-bold">
              Booking SME & Corporate
            </h2>
            <p className="text-primary-content">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
