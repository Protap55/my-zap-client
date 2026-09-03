import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { FaTrashArrowUp } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["rider", "pending"],
    queryFn: async () => {
      const res = await axiosSecure("/riders");
      console.log("retun", riders);
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = {
      status: status,
      email: rider.email,
    };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider has been ${status}.`,
          showConfirmButton: false,
          timer: 3500,
        });
      }
      refetch();
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/rider/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
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
      <h1>riders:{riders.length}</h1>
      <div className="overflow-x-auto">
        <table className="table  table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                  <button className="btn btn-outline btn-secondary">
                    <div
                      className={`${rider.status === "approved" ? "text-green-500 " : rider.status === "pending" ? "text-yellow-500" : "text-red-500"}`}
                    >
                      {rider.status}
                    </div>
                  </button>
                </td>
                <td>{rider.district}</td>
                <td>
                  <div className="grid grid-cols-4 gap-0.5">
                    <div>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById(`my_modal_${rider._id}`).showModal()
                        }
                      >
                        <FaEye />
                      </button>
                      <dialog id={`my_modal_${rider._id}`} className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold bg-amber-100 text-lg">
                            Rider Details
                          </h3>
                          <p className="py-1">Name: {rider.name}</p>
                          <p className="py-1">
                            Driving License: {rider.drivingLicense}
                          </p>
                          <p className="py-1">Division: {rider.riderRegion}</p>
                          <p className="py-1">District: {rider.district}</p>
                          <p className="py-1">NID: {rider.nid}</p>
                          <p className="py-1">Phone: {rider.phone}</p>
                          <p className="py-1">Bike Model: {rider.bikeModel}</p>
                          <p className="py-1">
                            Bike Registration: {rider.bikeRegistration}
                          </p>
                          <p className="py-1">
                            About Yourself: {rider.aboutYourself}
                          </p>
                        </div>
                      </dialog>
                      {/*  */}
                    </div>
                    <div>
                      <button
                        onClick={() => handleApproval(rider)}
                        className="btn btn-secondary"
                      >
                        <FaUserCheck />
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRejection(rider)}
                        className="btn btn-warning"
                      >
                        <IoPersonRemove />
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDelete(rider._id)}
                        className="btn btn-error"
                      >
                        <FaTrashArrowUp />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
