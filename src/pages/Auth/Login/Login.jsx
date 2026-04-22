import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sign in user

  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    console.log("after login", data);

    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex-1  flex justify-center items-center">
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
                {errors.email?.type === "required" && (
                  <p className="text-red-500 font-semibold">
                    Email is required
                  </p>
                )}
                {/* password */}
                <label className="label mt-2">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,

                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  })}
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-semibold">
                    Password must be at least 6 characters, include uppercase,
                    lowercase, number & special character.
                  </p>
                )}

                <div className="mt-2">
                  <a className="link link-hover text-sm underline">
                    Forgot password?
                  </a>
                </div>

                <button className="btn mb-2 hover:transition-all duration-200 hover:scale-105 hover:bg-amber-300 bg-primary rounded-2xl mt-4 w-full">
                  Login
                </button>
                <p className="text-[16px]">
                  Don’t have any account?{" "}
                  <span className="text-secondary cursor-pointer  hover:transition-all duration-200 hover:scale-105 font-bold  hover:text-[20px]">
                    <NavLink to="/register"> Register</NavLink>
                  </span>
                </p>
                <p className="text-[16px] py-3 text-center">Or</p>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
