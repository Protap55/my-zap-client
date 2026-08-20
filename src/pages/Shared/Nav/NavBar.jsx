import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { NavLink, Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue bg-primary border px-2 py-1 rounded"
              : "text-black"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue bg-primary border px-2 py-1 rounded"
              : "text-black"
          }
          to="/coverage"
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue bg-primary border px-2 py-1 rounded"
              : "text-black"
          }
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue bg-primary border px-2 py-1 rounded"
                  : "text-black"
              }
              to="/send-Parcel"
            >
              Send Parcel
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue bg-primary border px-2 py-1 rounded"
                  : "text-black"
              }
              to="/rider"
            >
              Be a Rider
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue bg-primary border px-2 py-1 rounded"
                  : "text-black"
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue bg-primary border px-2 py-1 rounded"
                  : "text-black"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue bg-primary border px-2 py-1 rounded"
                  : "text-black"
              }
              to="/dashboard/my-parcels"
            >
              My parcels
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue bg-primary border px-2 py-1 rounded"
              : "text-black"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-2 sm:px-4 md:px-6 rounded-2xl shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow left-0"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <span className="btn btn-ghost text-xl">
          <Logo />
        </span>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-3 sm:gap-6">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img
                className="w-10 cursor-pointer h-10 sm:w-12 sm:h-12 border border-amber-300 rounded-full"
                src={user?.photoURL || profileImg}
                alt=""
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-2xl z-50 w-64 p-4 shadow-lg border border-gray-200 mt-3"
            >
              <div className="flex flex-col items-center text-center gap-2 mb-3">
                <img
                  className="w-14 h-14 rounded-full"
                  src={user?.photoURL || profileImg}
                  alt=""
                />

                <h4 className="font-semibold text-lg">
                  {user?.displayName || "User"}
                </h4>

                <p className="text-sm text-gray-500 break-all">{user?.email}</p>
              </div>

              <div className="divider my-1"></div>

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
          <Link to="/login" className="btn">
            Sign In
          </Link>
        )}

        {/* Right extra buttons */}
        <div className="flex items-center gap-2">
          <Link to="/be-A-Rider" className="btn bg-primary hidden sm:flex">
            Be a Rider
          </Link>

          <div className="hidden sm:flex h-8 w-8 cursor-pointer rounded-full bg-black items-center justify-center">
            <GoArrowUpRight size={22} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
