import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
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
    <footer className="footer footer-horizontal text-white footer-center bg-black rounded-3xl p-10">
      <aside className="flex flex-col gap-4 text-[16px] max-w-3xl mx-auto">
        <Logo></Logo>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </aside>

      {/* middle nav */}

      <div className="navbar bg-black text-white shadow-sm">
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaFacebook color="blue" size={40} />
          </a>
          <a>
            <FaLinkedin size={40} color="skyblue" />
          </a>
          <a>
            <FaYoutube color="red" size={40} />
          </a>
          <a>
            <FaSquareXTwitter size={40} color="white" />
          </a>
        </div>
        <p className="pt-5">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
