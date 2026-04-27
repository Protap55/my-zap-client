import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || "/"); // ✅ fixed
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 shadow-amber-300 border border-amber-300 rounded-2xl w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-xl ">Login with ZapShift</p>

          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* password */}
              <label className="label mt-2">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="input input-bordered w-full"
                placeholder="Password"
              />

              {/* forgot password */}
              <div className="mt-2 text-right">
                <Link to="/forgot-password" className="text-sm underline">
                  Forgot Password?
                </Link>
              </div>

              <button className="btn mb-2 hover:transition-all duration-200 hover:scale-105 hover:bg-amber-300 bg-primary rounded-2xl mt-4 w-full">Login</button>

              <p className="text-[16px]">
                Don’t have any account?{" "}
                <span className="text-secondary cursor-pointer  hover:transition-all duration-200 hover:scale-105 font-bold  hover:text-[20px]">
                  <NavLink
                    state={location.pathname}
                    to="/register"
                    className="text-secondary font-bold"
                  >
                    Register
                  </NavLink>
                </span>
              </p>

              <p className="text-center py-3">Or</p>
            </fieldset>
          </form>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
