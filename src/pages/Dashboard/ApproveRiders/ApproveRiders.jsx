import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
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

  return (
    <div>
      <h1>riders:{riders.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
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
                  <button className="btn btn-outline btn-secondary}`">
                    <div
                      className={`${rider.status === "approved" ? "text-green-500 " : rider.status === "pending" ? "text-yellow-500" : "text-red-500"}`}
                    >
                      {rider.status}
                    </div>
                  </button>
                </td>
                <td>{rider.district}</td>
                <td>
                  <div className="grid grid-cols-3 gap-0.5">
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
                      <button className="btn btn-error">
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
