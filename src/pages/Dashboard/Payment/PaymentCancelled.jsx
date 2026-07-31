import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h1>Payment cancelled. Please try again</h1>
      <Link to="/dashboard/my-parcels">
        <button className="btn btn-outline btn-blue text-black">
          Try again
        </button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
