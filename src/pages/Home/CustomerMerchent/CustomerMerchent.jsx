import React from "react";
import location_merchant from "../../../assets/location-merchant.png";
import merchant from "../../../assets/be-a-merchant-bg.png";
const CustomerMerchent = () => {
  return (
    <div>
      <div className="card card-side relative bg-secondary text-white shadow-sm p-12 max-w-5xl mx-auto rounded-4xl">
        <div className="card-body">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="card-title text-3xl font-bold">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p>
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
          </div>
          {/* img */}
          <div className="absolute top-0">
            <img src={merchant} alt="" />
          </div>
          {/* button */}
          <div className="flex gap-8 font-bold pt-4">
            <div className="card-actions  justify-items-start rounded-2xl ">
              <button className="p-3 rounded-2xl cursor-pointer border bg-primary border-primary text-black hover:bg-white transition-all duration-200 hover:scale-105">
                Become a Merchant
              </button>
            </div>
            <div className="card-actions  justify-items-start rounded-2xl border border-primary">
              <button className="text-primary cursor-pointer hover:text-white transition-all duration-200 hover:scale-105 p-3">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
        </div>
        <figure className="w-full h-full">
          <img src={location_merchant} />
        </figure>
      </div>
    </div>
  );
};

export default CustomerMerchent;
