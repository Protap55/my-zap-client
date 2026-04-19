import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <div className="flex items-end ">
      <img src={logo} alt="logo" />
      <NavLink to="/">
        <h2 className="-mx-2 font-bold text-3xl">ZapShift</h2>
      </NavLink>
    </div>
  );
};

export default Logo;
