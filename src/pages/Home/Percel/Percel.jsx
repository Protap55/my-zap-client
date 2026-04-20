import React from "react";
import live_tracking from "../../../assets/live-tracking.png";
import safe_delivery from "../../../assets/safe-delivery.png";
const Percel = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
      <div className="border-b-2 border-dotted w-full mt-8 mb-8"></div>
      <div className="card card-side bg-base-100 p-8 rounded-2xl border-2 border-amber-300 shadow-amber-200 shadow-sm">
        <figure className="w-[400px] object-cover">
          <img src={live_tracking} />
        </figure>
        <div className="border-r-2 border-dotted px-8"></div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-secondary">
            Live Parcel Tracking
          </h2>
          <p className="text-xl">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 p-8 rounded-2xl border-2 border-amber-300 shadow-amber-200 shadow-sm">
        <figure className="w-[400px] object-cover">
          <img src={safe_delivery} />
        </figure>
        <div className="border-r-2 border-dotted px-8"></div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-secondary">
            100% Safe Delivery
          </h2>
          <p className="text-xl">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 p-8 rounded-2xl border-2 border-amber-300 shadow-amber-200 shadow-sm">
        <figure className="w-[330px] object-cover">
          <img src={safe_delivery} />
        </figure>
        <div className="border-r-2 border-dotted px-8"></div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-secondary">
            24/7 Call Center Support
          </h2>
          <p className="text-xl">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
      <div className="border-b-2 border-dotted w-full mt-8 mb-8"></div>
    </div>
  );
};

export default Percel;
