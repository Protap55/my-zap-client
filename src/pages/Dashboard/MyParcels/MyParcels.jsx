import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log("id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log("delete", res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel request has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

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
                <th>Details</th>
                <th>Cost</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}.</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.receiverName}</td>
                  <td>{parcel.parcelType}</td>
                  <td>{parcel.parcelWeight}</td>
                  <td>
                    <div className="dropdown">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 bg-primary rounded-2xl"
                      >
                        Show
                      </div>
                      <div
                        tabIndex={0}
                        className=" dropdown-content card card-sm p-4 z-1 w-max rounded-2xl bg-white  shadow-md"
                      >
                        <div className="card-body text-[16px]">
                          <li>Receiver Division: {parcel.receiverRegion}</li>
                          <li>Receiver District: {parcel.receiverDistrict}</li>
                          <li>Receiver Address: {parcel.receiverAddress}</li>
                          <li>Receiver Email: {parcel.receiverEmail}</li>
                          <li>
                            Receiver Phone Number: {parcel.receiverPhoneNumber}
                          </li>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{parcel.cost}</td>
                  <td>
                    {parcel.paymentStatus === "paid" ? (
                      <span className="bg-green-400">Paid</span>
                    ) : (
                      <span>
                        <Link
                          to={`/dashboard/payment/${parcel._id}`}
                          className="btn btn-dash btn-warning text-black"
                        >
                          Pay
                        </Link>
                      </span>
                    )}
                  </td>

                  <td>{parcel.deliveryStatus}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-soft btn-warning">
                      <FaEdit />
                    </button>
                    <button className="btn btn-soft btn-accent">
                      <PiMagnifyingGlassDuotone />
                    </button>
                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn btn-soft btn-error"
                    >
                      <IoTrashBin />
                    </button>
                  </td>
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
