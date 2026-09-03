import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAdmin = (user) => {
    const roleInfo = {
      role: "admin",
    };

    if (user.role !== "admin") {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: `Make ${user.displayName} an admin?`,
          icon: "warning",
          background: "#166534",
          color: "#FFFFFF",
          showCancelButton: true,
          confirmButtonText: "Yes, Make Admin",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
          customClass: {
            cancelButton: "btn btn-primary mx-2",
            confirmButton: "btn btn-primary mx-2",
          },
        })
        .then((result) => {
          if (result.isConfirmed) {
            axiosSecure
              .patch(`/users/${user._id}/role`, roleInfo)
              .then((res) => {
                if (res.data.modifiedCount) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} is now an admin.`,
                    showConfirmButton: false,
                    timer: 3500,
                  });

                  refetch();
                }
              });
          }
        });
    }
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = {
      role: "user",
    };

    if (user.role === "admin") {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: `Remove ${user.displayName} from admin?`,
          icon: "warning",
          background: "#166534",
          color: "#FFFFFF",
          showCancelButton: true,
          confirmButtonText: "Yes, Remove Admin",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axiosSecure
              .patch(`/users/${user._id}/role`, roleInfo)
              .then((res) => {
                if (res.data.modifiedCount) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} removed from admin.`,
                    showConfirmButton: false,
                    timer: 3500,
                  });

                  refetch();
                }
              });
          }
        });
    }
  };
  return (
    <div>
      <h1>userManagement: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>role</th>
              <th>Admin action</th>
              <th>other</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn  bg-red-500"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn  bg-green-500"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Action</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
