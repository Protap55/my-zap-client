import React from "react";
import serviceImg from "../../../assets/service.png";
const OurService = () => {
  return (
    <div className="bg-secondary p-15 rounded-4xl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center text-white flex flex-col gap-4 ">
          <h1 className="text-3xl  font-bold ">Our Services</h1>
          <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="card bg-base-100 hover:bg-primary hover:scale-105  transition-all duration-200 flex flex-col items-center justify-center p-4   shadow-sm rounded-2xl border-amber-300 border-2">
            <div className="w-24 h-24 pt-4 rounded-full bg-[#f0f0fc] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-12 h-12 items-center">
                <figure>
                  <img src={serviceImg} />
                </figure>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">
                Express & Standard Delivery
              </h2>
              <p>
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 hover:bg-primary flex flex-col items-center justify-center p-4 hover:scale-105  transition-all duration-200  shadow-sm rounded-2xl border-amber-300 border-2">
            <div className="w-24 h-24 pt-4 rounded-full bg-[#f0f0fc] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-12 h-12 items-center">
                <figure>
                  <img src={serviceImg} />
                </figure>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Nationwide Delivery</h2>
              <p>
                We deliver parcels nationwide with home delivery in every
                district, ensuring your products reach customers within 48–72
                hours.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 hover:bg-primary flex flex-col items-center justify-center p-4  hover:scale-105  transition-all duration-200 shadow-sm rounded-2xl border-amber-300 border-2">
            <div className="w-24 h-24 pt-4 rounded-full bg-[#f0f0fc] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-12 h-12 items-center">
                <figure>
                  <img src={serviceImg} />
                </figure>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Fulfillment Solution</h2>
              <p>
                We also offer customized service with inventory management
                support, online order processing, packaging, and after sales
                support.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 hover:bg-primary flex flex-col items-center justify-center p-4 hover:scale-105  transition-all duration-200  shadow-sm rounded-2xl border-amber-300 border-2">
            <div className="w-24 h-24 pt-4 rounded-full bg-[#f0f0fc] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-12 h-12 items-center">
                <figure>
                  <img src={serviceImg} />
                </figure>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Cash on Home Delivery</h2>
              <p>
                100% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 hover:bg-primary flex flex-col items-center justify-center p-4 hover:scale-105  transition-all duration-200  shadow-sm rounded-2xl border-amber-300 border-2">
            <div className="w-24 h-24 pt-4 rounded-full bg-[#f0f0fc] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-12 h-12 items-center">
                <figure>
                  <img src={serviceImg} />
                </figure>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">
                Corporate Service / Contract In Logistics
              </h2>
              <p>
                Customized corporate services which includes warehouse and
                inventory management support.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 hover:bg-primary   flex flex-col items-center justify-center p-4 hover:scale-105  transition-all duration-200  shadow-sm rounded-2xl border-amber-300 border-2">
            <div className="w-24 h-24 pt-4 rounded-full bg-[#f0f0fc] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-12 h-12 items-center">
                <figure>
                  <img src={serviceImg} />
                </figure>
              </div>
            </div>

            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Parcel Return</h2>
              <p>
                Through our reverse logistics facility we allow end customers to
                return or exchange their products with online business
                merchants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
