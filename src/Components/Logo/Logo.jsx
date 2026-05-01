import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-end">
      <img src={logo} alt="logo" />
      <h2 className="-mx-2 font-bold text-3xl">ZapShift</h2>
    </NavLink>
  );
};

export default Logo;
