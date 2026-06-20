import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      console.log("first", parcels);
      return res.data;
    },
  });
  return (
    <div>
      <h1>
        my parcels : {parcels.length}
        {/* parcel */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Parcel Name</th>
                <th>Receiver Name</th>
                <th>Type</th>
                <th>Parcel Weight (KG)</th>
                <th>Receiver Division</th>
                <th>Receiver District</th>
                <th>Receiver Address</th>
                <th>Receiver Email</th>
                <th>Receiver Ph. No.</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.receiverName}</td>
                  <td>{parcel.parcelType}</td>
                  <td>{parcel.parcelWeight}</td>
                  <td>{parcel.receiverRegion}</td>
                  <td>{parcel.receiverDistrict}</td>
                  <td>{parcel.receiverAddress}</td>
                  <td>{parcel.receiverEmail}</td>
                  <td>{parcel.receiverPhoneNumber}</td>
                  <td>{parcel.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h1>
    </div>
  );
};

export default MyParcels;
