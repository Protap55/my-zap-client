import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import profileImg from "../../../assets/profile.jpg";
const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-4 rounded-2xl shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* buttons */}
      <div className="navbar-end flex items-center  gap-6">
        {user ? (
          // profile nav
          <div className="dropdown dropdown-hover">
            <Link>
              {user ? (
                <img
                  className="w-12 h-12 border border-amber-300 shadow-amber-500  rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <img
                  className="w-12 h-12 border border-amber-300 shadow-amber-500  rounded-full"
                  src={profileImg}
                  alt=""
                />
              )}
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-2xl z-50 w-64 p-4 shadow-lg border border-gray-200"
            >
              <div className="flex flex-col items-center text-center gap-2 mb-3">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {user ? (
                    <img className="rounded-full" src={user.photoURL} alt="" />
                  ) : (
                    <img className="rounded-full" src={profileImg} alt="" />
                  )}
                </div>

                {/* Name */}
                <h4 className="font-semibold text-lg">
                  {user?.displayName || "User"}
                </h4>

                {/* Email */}
                <p className="text-sm text-gray-500 break-all">{user?.email}</p>
              </div>

              <div className="divider my-1"></div>

              {/* Logout button */}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:bg-red-100 rounded-lg"
                >
                  🚪 Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn ">
            Sign In
          </Link>
        )}
        <div className="flex items-center">
          <Link to="/rider" className="btn bg-primary">
            Be a Rider
          </Link>
          <div className="h-8 w-8 cursor-pointer rounded-full bg-black flex items-center justify-center">
            <GoArrowUpRight size={26} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
