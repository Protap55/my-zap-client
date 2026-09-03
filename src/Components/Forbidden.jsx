import { Lottie } from "lottie-react";
import React from "react";
import { Link } from "react-router";
import animation from "../../../animations/error.json";

const Forbidden = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
        {/* Background Decorative Ambient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
          {/* Animated Shield Icon Concept */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute w-32 h-32 rounded-full border border-sky-400/20 animate-ping opacity-25" />
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-rose-500/40 animate-spin-slow" />

            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-rose-500/20 to-slate-900 border border-rose-500/30 flex items-center justify-center shadow-2xl shadow-rose-900/30 backdrop-blur-md">
              <svg
                className="w-12 h-12 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          {/* Backdrop 403 Text */}
          <span className="text-8xl sm:text-9xl font-extrabold tracking-widest text-slate-800/40 select-none absolute -top-6 z-0">
            403
          </span>

          {/* Text Content */}
          <div className="relative z-10 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Access Forbidden
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
              You don't have permission to access this page. Please check your
              credentials or contact your system administrator.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full justify-center relative z-10">
            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all duration-200 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-slate-700"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Return Home
            </Link>
            <div>
              <Lottie className="px-12" src={animation} autoplay loop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
