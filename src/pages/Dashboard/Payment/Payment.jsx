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
      <h1>plz pay: {parcel.parcelName} </h1>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        Responsive
      </button>
    </div>
  );
};

export default Payment;
