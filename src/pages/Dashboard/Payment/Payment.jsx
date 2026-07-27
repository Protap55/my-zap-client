import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel = [] } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelName: parcel.parcelName,
      senderEmail: parcel.senderEmail,
      parcelId: parcel._id,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log("handlepayment", res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
        <span className="loading loading-infinity loading-xl"></span>
        <span className="loading loading-infinity loading-xl"></span>
        <span className="loading loading-infinity loading-xl"></span>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h1>
        Please pay ${parcel.cost} for: {parcel.parcelName}
      </h1>
      <button
        onClick={handlePayment}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
      >
        Payment now
      </button>
    </div>
  );
};

export default Payment;
