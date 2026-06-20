import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const DashboardLogo = () => {
  return (
    <div>
      <NavLink to="/" className="flex items-end">
        <img src={logo} alt="logo" />
        <h2 className="-mx-2 font-bold text-3xl">ZapShift Dashboard</h2>
      </NavLink>
    </div>
  );
};

export default DashboardLogo;
