import React from "react";

import authImage from "../assets/authImage.png";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-white flex min-h-screen">
      {/* Left side */}
      <div className="flex-1 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <Logo />
        </div>

        {/* Form Center */}
        <Outlet></Outlet>
      </div>

      {/* Right side */}
      <div className="flex-1 bg-success flex items-center justify-center">
        <img
          src={authImage}
          alt="auth"
          className="h-[480px] w-[640px] object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
