import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end ">
      <img src={logo} alt="logo" />
      <h2 className="-mx-4">ZapShift</h2>
    </div>
  );
};

export default Logo;
