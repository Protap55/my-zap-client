import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosecure = useAxiosSecure();
  console.log("first", user);
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosecure.get(`payments?email=${user.email}`);
      console.log("f", res);
      return res.data;
    },
  });

  return (
    <div>
      <h1>history {payments.length}</h1>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>

              <th>Parcel Name</th>
              <th>Amount</th>
              <th>TrackingId</th>
              <th>TransactionId</th>
              <th>Paid Time</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}</td>
                <td>{payment.trackingId}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.paidAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
